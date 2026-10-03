"""開場介紹影片的字幕與播放設定 → course/data/intro.js

字幕時間以「原始影片」秒數填寫（來自 work/intro_transcript.json 的逐字時間），
這裡會自動扣掉 intro_video.py 剪掉的開頭。文字是她實際說的話，只修正辨識錯字與明顯口誤。
zh-Hant 為中文影片來源；zh-Hans 用 OpenCC 轉；en 為英文影片來源，es/pt/ja/de/fr 由英文翻譯。

usage: python tools/intro_subs.py
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_langs import llm, parse_json  # noqa: E402
from intro_video import CLIPS  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / "work" / "i18n"
OUT = ROOT / "course" / "data" / "intro.js"

CUES = {
    "intro_zh": [
        [0.45, 5.40, "全球 0.01% 的創作者，跟一般人到底差在哪裡呢？"],
        [5.50, 9.95, "不是身材、不是臉蛋，更不是運氣——是系統。"],
        [10.25, 12.20, "大家好，我是 bunny brownie，"],
        [12.20, 16.80, "從零開始，做到全球 0.01% 的 OnlyFans 創作者。"],
        [17.20, 19.70, "今天我要手把手教你，"],
        [19.70, 23.20, "從你的形象定位，到作品定價，"],
        [23.30, 25.40, "以及如何引流、拍攝，"],
        [25.60, 27.80, "還有最後，如何保護你自己。"],
        [27.90, 31.90, "現在就毫不猶豫點擊開始，我們來上課吧！"],
    ],
    "intro_en": [
        [0.45, 6.85, "What separates the top 0.01% of creators from anybody else?"],
        [6.90, 12.00, "It's not your body, not your face, and it's not luck —"],
        [12.00, 13.40, "it's a system."],
        [13.50, 15.75, "Hello everyone, it's bunny brownie —"],
        [15.75, 19.00, "top 0.01% of OnlyFans creators."],
        [19.30, 23.30, "Today I'm going to teach you how to start your account,"],
        [23.30, 25.10, "how to film your videos,"],
        [25.20, 27.40, "how to set your prices,"],
        [27.40, 29.70, "and how to protect yourself."],
        [29.90, 33.30, "In this course, you'll learn everything for free."],
        [33.40, 36.40, "So let's get started and get into it!"],
    ],
    "intro_zh_portrait": [
        [0.15, 4.55, "全球 0.01% 的創作者，和一般人到底差在哪裡呢？"],
        [4.60, 8.30, "不是身材、不是臉蛋，更不是運氣——是系統。"],
        [8.40, 10.25, "大家好，我是 bunny brownie，"],
        [10.25, 14.40, "從零做到今天，0.01% 的 OnlyFans 創作者。"],
        [14.70, 17.50, "我曾經也被封過十幾個社群帳號，"],
        [17.55, 19.10, "但今天這堂課，"],
        [19.10, 21.60, "我想要毫不藏私地全部教會你："],
        [21.60, 24.45, "從如何起號、拍照片、引流，"],
        [24.50, 27.55, "商品定價，到最後如何保護你自己，"],
        [27.55, 31.20, "這些所有的重要資訊，一次教會你。"],
        [31.30, 33.50, "毫不猶豫，我們來點擊上課吧！"],
        [33.50, 36.88, "喔對了，這個課程完全免費。為什麼這麼做？"],
        [36.88, 38.64, "因為我想要回饋社會，"],
        [38.64, 41.95, "讓我身邊所有的創作者，都不要再被封號了。"],
        [41.95, 45.40, "或是你是新手小白，想學習如何起號的話——"],
        [45.80, 47.60, "開始上課吧！Let's go！"],
    ],
    "intro_en_portrait": [
        [0.00, 4.80, "What separates the top 0.01% of creators from anyone else?"],
        [4.80, 8.70, "It's not the body, it's not the face, and it's not luck, babe —"],
        [8.70, 10.12, "it's the system."],
        [10.12, 12.34, "Hello everyone, it's bunny brownie."],
        [12.34, 17.70, "I went from 0 to the top 0.01% of OnlyFans creators."],
        [18.20, 21.84, "I've been banned on like 10 social media accounts,"],
        [21.84, 26.52, "but in this course, I'm gonna teach you how I made it:"],
        [26.52, 29.56, "how I succeeded at filming videos,"],
        [29.56, 32.80, "opening an account, setting up prices,"],
        [32.80, 35.02, "and how to protect yourself, babe."],
        [35.02, 38.14, "This is the most important thing you have to do."],
        [38.14, 39.62, "And it's totally free."],
        [39.62, 41.58, "The reason I'm doing this?"],
        [41.58, 48.00, "Because I want everyone here to have a safer environment"],
        [48.00, 50.24, "to make more content."],
        [50.24, 51.92, "And if you're a beginner,"],
        [51.92, 55.04, "don't be afraid to start a new account."],
        [55.04, 57.52, "So let's hit the start button"],
        [57.52, 59.30, "and get into it. Let's go!"],
    ],
}
# 自我介紹時顯示名牌（原始影片秒數）
NAMETAG = {"intro_zh": [10.25, 16.8], "intro_en": [13.5, 19.0],
           "intro_zh_portrait": [8.4, 14.4], "intro_en_portrait": [10.12, 17.7]}

LANG_NAMES = {"es": "Spanish", "pt": "Brazilian Portuguese", "ja": "Japanese", "de": "German", "fr": "French"}
PROMPT = """Translate these spoken video subtitles from English to {lang}.
The speaker is bunny brownie, a friendly, casual OnlyFans creator talking to camera.
Keep it natural, warm and short enough to read as subtitles; keep "bunny brownie", "OnlyFans" and "0.01%" unchanged
(use the target language's normal percent/decimal style). Keep the sentence split exactly: one output string per input string.
Return ONLY a JSON object {{"lines": [...]}} with exactly {n} strings.

{lines}"""


def translate(code, key, lines):
    CACHE.mkdir(parents=True, exist_ok=True)
    cache = CACHE / f"intro_{code}_{key}.json"
    if cache.exists():
        c = json.loads(cache.read_text(encoding="utf-8"))
        if c["src"] == lines:
            return c["out"]
    for attempt in range(4):
        try:
            out = parse_json(llm(PROMPT.format(lang=LANG_NAMES[code], n=len(lines), lines=json.dumps(lines, ensure_ascii=False))))["lines"]
            if len(out) != len(lines) or not all(isinstance(x, str) and x.strip() for x in out):
                raise ValueError(f"got {len(out)} lines")
            cache.write_text(json.dumps({"src": lines, "out": out}, ensure_ascii=False), encoding="utf-8")
            return out
        except Exception as e:
            print(f"  retry {code} {key}: {e}", flush=True)
    raise RuntimeError(f"{code} {key} failed")


def shift(key, cues):
    ss = CLIPS[key][1]
    return [[round(max(0, s - ss), 2), round(e - ss, 2), t] for s, e, t in cues]


def main():
    from opencc import OpenCC
    t2s = OpenCC("tw2sp")
    videos, subs = {}, {}
    for key in CUES:
        f = ROOT / "course" / "video" / f"{key}.mp4"
        if not f.exists():
            print(f"warning: {f.name} missing")
        ss = CLIPS[key][1]
        videos[key] = {"src": f"video/{key}.mp4", "poster": f"video/{key}.jpg",
                       "nametag": [round(NAMETAG[key][0] - ss, 2), round(NAMETAG[key][1] - ss, 2)]}
        cues = shift(key, CUES[key])
        if "_zh" in key:
            subs.setdefault("zh-Hant", {})[key] = cues
            subs.setdefault("zh-Hans", {})[key] = [[s, e, t2s.convert(t).replace("帐号", "账号")] for s, e, t in cues]
        else:
            subs.setdefault("en", {})[key] = cues
            for code in LANG_NAMES:
                out = translate(code, key, [t for _, _, t in cues])
                subs.setdefault(code, {})[key] = [[s, e, t] for (s, e, _), t in zip(cues, out)]
    data = {"videos": videos, "subs": subs}
    OUT.write_text("// 由 tools/intro_subs.py 產生，請勿手動修改\nwindow.INTRO = " +
                   json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print("written", OUT.relative_to(ROOT), {k: len(v) for k, v in subs.items()})


if __name__ == "__main__":
    main()
