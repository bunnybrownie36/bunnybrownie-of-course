"""把像素字型裁成「課程實際用到的字」，大幅減少網頁載入量。

完整字型在 assets/fonts-src/，輸出到 course/fonts/*.sub.woff2。
課程文字（data/*.js、index.html、player.js）有改動、出現新字時，重跑一次即可：
    python tools/subset_fonts.py
"""
import re
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "fonts-src"
OUT = ROOT / "course" / "fonts"
COURSE = ROOT / "course"

# 永遠保留：ASCII、Latin-1、常用標點與符號（介面上可能動態出現）
BASE = set(chr(c) for c in range(0x20, 0x7F)) | set(chr(c) for c in range(0xA0, 0x180)) | set("…—–‘’“”•·×÷→←↑↓★☆♡♥♪▶◀■□●○✓✔")


def text_of(*files):
    s = ""
    for f in files:
        s += f.read_text(encoding="utf-8")
    # 解開 JSON 字串裡的 \uXXXX
    s += "".join(chr(int(h, 16)) for h in re.findall(r"\\u([0-9a-fA-F]{4})", s))
    return set(s)


def build(src_name, out_name, chars):
    font = TTFont(SRC / src_name)
    cmap = font.getBestCmap()
    keep = sorted(c for c in chars if ord(c) in cmap)
    opts = subset.Options()
    opts.flavor = "woff2"
    opts.layout_features = ["*"]
    opts.name_IDs = ["*"]
    opts.notdef_outline = True
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=[ord(c) for c in keep])
    sub.subset(font)
    out = OUT / out_name
    font.flavor = "woff2"
    font.save(out)
    print(f"{out_name}: {len(keep)} glyphs, {(SRC / src_name).stat().st_size // 1024} KB -> {out.stat().st_size // 1024} KB")
    return {c for c in chars if ord(c) not in cmap}


def main():
    d = COURSE / "data"
    shared = text_of(COURSE / "index.html", COURSE / "player.js", d / "ui.js", d / "intro.js")
    zh_hant = text_of(d / "script.js", d / "script_m3_8.js")
    latin = text_of(d / "script_en.js", d / "script_en_m3_8.js", *(d / f"course_{c}.js" for c in ["es", "pt", "de", "fr"]))
    zh_hans = text_of(d / "course_zh-Hans.js")
    ja = text_of(d / "course_ja.js")

    # Cubic 11：繁中與拉丁語系的主字型，也是其他語系的備援
    missing = build("Cubic_11.woff2", "cubic11.sub.woff2", BASE | shared | zh_hant | latin)
    # Cubic 缺的符號（♡ ▶ ✓ ≈ …）用 Fusion 的像素版本補，只有幾 KB；emoji 交給系統字型
    build("fusion-zh_hans.otf.woff2", "pixel-symbols.sub.woff2", missing)
    # Fusion：只給简中、日文使用
    build("fusion-zh_hans.otf.woff2", "fusion-sc.sub.woff2", BASE | shared | zh_hans)
    build("fusion-ja.otf.woff2", "fusion-ja.sub.woff2", BASE | shared | ja)


if __name__ == "__main__":
    main()
