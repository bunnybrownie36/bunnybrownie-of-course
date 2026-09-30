"""Build extra language versions of the course.

zh-Hans: converted from zh-Hant with OpenCC (tw2sp).
es / pt / ja / de / fr: translated from English with an LLM (Atlas Cloud), module by module,
then structurally validated against the English source.
"""
import json
import re
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import requests

from keys import load_keys

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "course" / "data"
CACHE = ROOT / "work" / "i18n"
LLM = "anthropic/claude-sonnet-5"
LLM_FALLBACK = "openai/gpt-5.4"

# 這些欄位是程式用的，翻譯時不能改
KEEP = {"type", "icon", "src", "tag", "id", "pose", "only", "reveal", "bg", "no", "scoring", "color", "good", "n"}

LANG_NAMES = {
    "es": "Spanish (neutral, understood in Spain and Latin America; use informal 'tú')",
    "pt": "Brazilian Portuguese (informal 'você')",
    "ja": "Japanese (friendly, warm, casual-polite です/ます mixed with casual endings, like a popular female creator talking to fans)",
    "de": "German (informal 'du')",
    "fr": "French (informal 'tu')",
}


def load_js(files, var):
    evals = "".join(f"eval(require('fs').readFileSync({json.dumps((DATA / f).as_posix())},'utf8'));" for f in files)
    js = f"global.window={{}};{evals}process.stdout.write(JSON.stringify(window.{var}))"
    out = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8")
    if out.returncode:
        raise RuntimeError(out.stderr)
    return json.loads(out.stdout)


def write_course(code, course):
    body = json.dumps(course, ensure_ascii=False, indent=1)
    (DATA / f"course_{code}.js").write_text(
        f"// 自動產生：{code} 課程資料（請勿手動編輯，改 tools/build_langs.py 的來源後重建）\n"
        f"window.COURSES = window.COURSES || {{}};\nwindow.COURSES[{json.dumps(code)}] = {body};\n", encoding="utf-8")


# ───────────── 简体中文 ─────────────
def build_hans():
    import opencc
    cc = opencc.OpenCC("tw2sp")
    course = load_js(["script.js", "script_m3_8.js"], "COURSE")

    def conv(x, key=None):
        if isinstance(x, str):
            return x if key in KEEP else cc.convert(x).replace("「", "“").replace("」", "”")
        if isinstance(x, list):
            return [conv(v, key) for v in x]
        if isinstance(x, dict):
            return {k: conv(v, k) for k, v in x.items()}
        return x

    write_course("zh-Hans", conv(course))
    print("zh-Hans ok")


# ───────────── LLM 翻譯 ─────────────
def same_shape(a, b, path="$"):
    if isinstance(a, dict):
        if not isinstance(b, dict) or set(a) != set(b):
            return f"{path}: keys differ"
        for k in a:
            if k in KEEP and a[k] != b[k]:
                return f"{path}.{k}: protected value changed"
            e = same_shape(a[k], b[k], f"{path}.{k}")
            if e:
                return e
        return None
    if isinstance(a, list):
        if not isinstance(b, list) or len(a) != len(b):
            return f"{path}: list length differs"
        for i, (x, y) in enumerate(zip(a, b)):
            e = same_shape(x, y, f"{path}[{i}]")
            if e:
                return e
        return None
    if isinstance(a, str) and not isinstance(b, str):
        return f"{path}: type changed"
    if isinstance(a, str) and a.count("[") != b.count("["):
        return f"{path}: emotion tag count changed"
    return None


PROMPT = """You are localizing an online course for adult content creators (OnlyFans business course, taught by a top creator named bunnybrownie). Translate the JSON below from English into {lang}.

Rules:
- Return ONLY valid JSON with exactly the same structure, keys, array lengths and order. No commentary, no code fences.
- Never change values of these keys: {keep}.
- "tts" is the spoken line. Keep every [emotion tag] exactly as-is in English, in the same positions (e.g. "[excited] ..."). Translate the rest so it sounds natural when spoken aloud by a warm, playful, confident female host. Spell out things that are awkward to read aloud.
- Keep brand/product names unchanged (OnlyFans, Fansly, ManyVids, Fantia, MyVids, Paxum, Telegram, Instagram, TikTok, YouTube, OFTV, Threads, Reddit, link.me, Linktree, Bouncy, GigSocial, Binance, Coinbase, Kraken, OKX, Bybit, RedotPay, Crypto.com, StopNCII.org, Google Drive, Google Sheets, CapCut, Buffer, etc.) and keep acronyms like PPV, DM, LTV, ARPU, RR, CTR, UTM, SFS, KYC, 2FA, SEO, SFW, BTS.
- Keep numbers, currencies and emojis; you may adapt decimal separators to local convention on-screen, but keep "tts" numbers easy to speak.
- On-screen text (headings, labels, board text) must stay SHORT — similar length to the English, because it must fit small UI boxes.
- Keep the file names and folder names in "folders" boards translated naturally but short; keep "PPV_schoolgirl" style filename parts as-is.

JSON:
"""


def llm(prompt, model=LLM):
    key = load_keys()["atlas"]
    r = requests.post("https://api.atlascloud.ai/v1/chat/completions",
                      headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
                      json={"model": model, "messages": [{"role": "user", "content": prompt}],
                            "max_tokens": 32000, "temperature": 0.3}, timeout=900)
    if r.status_code >= 400:
        raise RuntimeError(f"{r.status_code} {r.text[:300]}")
    content = r.json()["choices"][0]["message"].get("content")
    if not content:
        raise RuntimeError("empty response")
    return content


def repair(src, out):
    """把模型動到的程式欄位還原；缺的鍵補上、多的鍵移除（陣列長度不同則無法修）。"""
    if isinstance(src, dict) and isinstance(out, dict):
        fixed = {}
        for k, v in src.items():
            fixed[k] = v if (k in KEEP or k not in out) else repair(v, out[k])
        return fixed
    if isinstance(src, list) and isinstance(out, list) and len(src) == len(out):
        return [repair(a, b) for a, b in zip(src, out)]
    if isinstance(src, (int, float, bool)) or src is None:
        return src
    return out


def parse_json(text):
    text = text.strip()
    text = re.sub(r"^```(?:json)?\s*|\s*```$", "", text)
    return json.loads(text)


def translate_unit(code, name, unit):
    CACHE.mkdir(parents=True, exist_ok=True)
    cache = CACHE / f"{code}_{name}.json"
    src_hash = str(abs(hash(json.dumps(unit, sort_keys=True))))
    if cache.exists():
        c = json.loads(cache.read_text(encoding="utf-8"))
        if c.get("src") == json.dumps(unit, sort_keys=True, ensure_ascii=False):
            return c["out"]
    prompt = PROMPT.format(lang=LANG_NAMES[code], keep=", ".join(sorted(KEEP))) + json.dumps(unit, ensure_ascii=False)
    last = None
    for attempt in range(4):
        try:
            out = repair(unit, parse_json(llm(prompt, LLM if attempt < 2 else LLM_FALLBACK)))
            err = same_shape(unit, out)
            if err:
                raise ValueError(err)
            cache.write_text(json.dumps({"src": json.dumps(unit, sort_keys=True, ensure_ascii=False), "out": out},
                                        ensure_ascii=False), encoding="utf-8")
            return out
        except Exception as e:
            last = e
            print(f"  retry {code} {name}: {e}", flush=True)
    raise RuntimeError(f"{code} {name} failed: {last}")


def build_translations(codes):
    en = load_js(["script_en.js", "script_en_m3_8.js"], "COURSE_EN")
    # 拆成小單位翻譯：課程標題、每個模組
    jobs = []
    for code in codes:
        jobs.append((code, "meta", {"title": en["title"]}))
        for m in en["modules"]:
            jobs.append((code, f"m{m['no']}", m))

    results = {}

    def run(job):
        code, name, unit = job
        try:
            results[(code, name)] = translate_unit(code, name, unit)
        except Exception:
            if name == "meta":
                raise
            # 拆小：模組標頭／開場／總結＋每一課分開翻
            head = {k: v for k, v in unit.items() if k != "lessons"}
            out = translate_unit(code, f"{name}_head", head)
            out["lessons"] = [translate_unit(code, f"{name}_l{i}", l) for i, l in enumerate(unit["lessons"])]
            results[(code, name)] = out
        return f"{code} {name} ok"

    with ThreadPoolExecutor(10) as ex:
        for r in ex.map(lambda j: _safe(run, j), jobs):
            print(r, flush=True)
    for code in codes:
        if any((code, n) not in results for n in ["meta"] + [f"m{m['no']}" for m in en["modules"]]):
            print(f"{code}: INCOMPLETE, not written")
            continue
        course = {"title": results[(code, "meta")]["title"],
                  "modules": [results[(code, f"m{m['no']}")] for m in en["modules"]]}
        write_course(code, course)
        print(f"{code}: written")


def _safe(fn, job):
    try:
        return fn(job)
    except Exception as e:
        return f"FAIL {job[0]} {job[1]}: {e}"


if __name__ == "__main__":
    args = sys.argv[1:] or ["zh-Hans", "es", "pt", "ja", "de", "fr"]
    if "zh-Hans" in args:
        build_hans()
    rest = [a for a in args if a in LANG_NAMES]
    if rest:
        build_translations(rest)
