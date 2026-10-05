"""產生 GitHub 介紹頁：英文 README.md ＋ docs/<lang>/README.md（7 種語言），並把錄好的片段轉成 GIF／JPG。

流程：
  1. node tools/capture_readme.js            # 錄 8 種語言的片段與截圖（work/capture/<lang>/）
  2. python tools/build_readme.py            # 轉檔到 docs/media/<lang>/、翻譯並寫出各語言 README
     python tools/build_readme.py --text     # 只重寫 README 文字（不重轉媒體）
英文原稿在 tools/readme_template.md；翻譯快取在 work/i18n/readme_<lang>.json，原稿改了才會重翻。
"""
import json
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_langs import llm, load_js  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
CAP = ROOT / "work" / "capture"
MEDIA = ROOT / "docs" / "media"
CACHE = ROOT / "work" / "i18n"
TEMPLATE = ROOT / "tools" / "readme_template.md"
PLAY = "https://bunnybrownie36.github.io/bunnybrownie-of-course/"
OF = "https://onlyfans.com/bunnybrownie"

LANGS = [  # (code, 語言列顯示名稱, 翻譯目標說明)
    ("en", "English", None),
    ("zh-Hant", "繁體中文", "Traditional Chinese as written in Taiwan (natural Taiwanese Mandarin wording)"),
    ("zh-Hans", "简体中文", "Simplified Chinese as written in mainland China"),
    ("es", "Español", "Spanish"),
    ("pt", "Português", "Brazilian Portuguese"),
    ("ja", "日本語", "Japanese"),
    ("de", "Deutsch", "German"),
    ("fr", "Français", "French"),
]
# 課程正式名稱（各語言標題畫面用的名字，不交給翻譯）
TITLES = {
    "en": "Adult Creator Economy · OnlyFans Masterclass", "zh-Hant": "大人的自媒體：OnlyFans 實戰課",
    "zh-Hans": "大人的自媒体：OnlyFans 实战课", "es": "Creadora Adulta · Curso práctico de OnlyFans",
    "pt": "Criadora Adulta · Curso prático de OnlyFans", "ja": "大人のメディア術 · OnlyFans 実践講座",
    "de": "Adult Creator · OnlyFans-Praxiskurs", "fr": "Créatrice Adulte · Formation OnlyFans",
}
MAP_HEAD = {
    "en": ("Module", "What you'll learn"), "zh-Hant": ("章節", "你會學到"), "zh-Hans": ("章节", "你会学到"),
    "es": ("Módulo", "Lo que aprenderás"), "pt": ("Módulo", "O que você vai aprender"), "ja": ("モジュール", "学べること"),
    "de": ("Modul", "Was du lernst"), "fr": ("Module", "Ce que tu vas apprendre"),
}
GIFS = ["hero", "lesson", "photos", "checklist"]
STILLS = ["title", "menu", "map", "stats", "calc", "week", "angles", "bans", "agegate"]

PROMPT = """Translate this GitHub README from English to {target}.
It is written in the first person by bunnybrownie, a friendly OnlyFans creator presenting her free course — keep her warm, confident voice.
Rules:
- Keep every {{{{PLACEHOLDER}}}} exactly as is (e.g. {{{{TITLE}}}}, {{{{M}}}}, {{{{S}}}}, {{{{ROOT}}}}, {{{{PLAY}}}}, {{{{OF}}}}, {{{{LANGBAR}}}}, {{{{COURSEMAP}}}}).{extra}
- Keep all Markdown/HTML structure, tags, attributes, URLs, badge image URLs, anchors (<a name=...>), emoji and `code` unchanged; you may translate alt="..." text.
- In the language table, keep the language names in the first column as they are (繁體中文, 简体中文, English, Español …) but translate the rest.
- Keep product names: bunnybrownie, OnlyFans, GitHub, Fish Audio, Google Lyria 3.5, GPT Image 2.5, Cubic 11, Fusion Pixel Font, SIL OFL 1.1.
Return ONLY the translated Markdown, no code fences.

"""


def run(cmd):
    subprocess.run(cmd, check=True, capture_output=True)


def gif(src_dir, out):
    meta = json.loads((src_dir / "meta.json").read_text())
    fps = round(meta["frames"] / meta["seconds"], 3)
    # 像素風畫面：640 寬、128 色、輕微抖色，控制每支約 1 MB 內
    vf = ("scale=640:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128:stats_mode=diff[p];"
          "[b][p]paletteuse=dither=bayer:bayer_scale=5:diff_mode=rectangle")
    run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", str(fps), "-i", str(src_dir / "f%04d.jpg"),
         "-vf", vf, "-loop", "0", str(out)])


def jpg(src, out, width):
    from PIL import Image
    im = Image.open(src).convert("RGB")
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(out, quality=84, optimize=True, progressive=True)


def build_media(codes):
    for code in codes:
        cap, out = CAP / code, MEDIA / code
        if not cap.exists():
            print(f"skip media {code}: not captured")
            continue
        out.mkdir(parents=True, exist_ok=True)
        for g in GIFS:
            gif(cap / "frames" / g, out / f"{g}.gif")
        for s in STILLS:
            jpg(cap / "stills" / f"{s}.jpg", out / f"{s}.jpg", 960)
        jpg(cap / "stills" / "mobile.jpg", out / "mobile.jpg", 460)
        size = sum(f.stat().st_size for f in out.iterdir()) / 1e6
        print(f"media {code}: {size:.1f} MB")
    shared = CAP / "shared" / "frames" / "languages"
    if shared.exists():
        (MEDIA / "shared").mkdir(parents=True, exist_ok=True)
        gif(shared, MEDIA / "shared" / "languages.gif")


def course_modules(code):
    if code == "zh-Hant":
        return load_js(["script.js", "script_m3_8.js"], "COURSE")["modules"]
    if code == "en":
        return load_js(["script_en.js", "script_en_m3_8.js"], "COURSE_EN")["modules"]
    return load_js([f"course_{code}.js"], f'COURSES["{code}"]')["modules"]


def course_map(code):
    h1, h2 = MAP_HEAD[code]
    rows = [f"| # | {h1} | {h2} |", "|:-:|---|---|"]
    for m in course_modules(code):
        rows.append(f"| {m['no']} | **{m['title']}** | {m['outcome']} |")
    return "\n".join(rows)


def translate(code, target, text):
    CACHE.mkdir(parents=True, exist_ok=True)
    cache = CACHE / f"readme_{code}.json"
    if cache.exists():
        c = json.loads(cache.read_text(encoding="utf-8"))
        if c["src"] == text:
            return c["out"]
    marks = [m for m in ["{{TITLE}}", "{{M}}", "{{S}}", "{{ROOT}}", "{{PLAY}}", "{{OF}}", "{{LANGBAR}}", "{{COURSEMAP}}"]]
    for attempt in range(4):
        extra = ("\n- Use full-width Chinese punctuation (，。：？！（）「」) in Chinese sentences; keep half-width only inside URLs, code and numbers."
                 if code.startswith("zh") else "")
        out = llm(PROMPT.format(target=target, extra=extra) + text).strip()
        if out.startswith("```"):
            out = out.strip("`").split("\n", 1)[1].rsplit("\n", 1)[0]
        bad = [m for m in marks if out.count(m) != text.count(m)]
        if not bad and out.count("<img") == text.count("<img") and out.count("<table>") == text.count("<table>"):
            cache.write_text(json.dumps({"src": text, "out": out}, ensure_ascii=False), encoding="utf-8")
            return out
        print(f"  retry {code}: placeholders {bad}")
    raise RuntimeError(f"translate {code} failed")


def langbar(code, root):
    parts = []
    for c, name, _ in LANGS:
        if c == code:
            parts.append(f"**{name}**")
        else:
            href = "README.md" if c == "en" else f"docs/{c}/README.md"
            parts.append(f"[{name}]({root}{href})")
    return " | ".join(parts)


def write_readmes(codes):
    tpl = TEMPLATE.read_text(encoding="utf-8")
    for code, _, target in LANGS:
        if code not in codes:
            continue
        text = tpl if code == "en" else translate(code, target, tpl)
        root = "" if code == "en" else "../../"
        fill = {
            "{{TITLE}}": TITLES[code], "{{ROOT}}": root, "{{M}}": f"{root}docs/media/{code}", "{{S}}": f"{root}docs/media/shared",
            "{{PLAY}}": PLAY, "{{OF}}": OF, "{{LANGBAR}}": langbar(code, root), "{{COURSEMAP}}": course_map(code),
        }
        for k, v in fill.items():
            text = text.replace(k, v)
        out = ROOT / "README.md" if code == "en" else ROOT / "docs" / code / "README.md"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(text.rstrip() + "\n", encoding="utf-8")
        print("wrote", out.relative_to(ROOT))


if __name__ == "__main__":
    codes = [a for a in sys.argv[1:] if not a.startswith("--")] or [c for c, _, _ in LANGS]
    if "--text" not in sys.argv:
        build_media(codes)
    write_readmes(codes)
