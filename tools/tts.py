"""Generate voice lines with Fish Audio for every course language.

usage: python tts.py [lang ...]        (default: all languages that have course data)
       python tts.py out.mp3 "text"    (single test line, English voice)
"""
import hashlib
import json
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import requests

from keys import load_keys
from speech import speakable

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "course" / "data"
OUT = ROOT / "course" / "audio" / "voice"
MODEL = "s2.1-pro"
VOICE_EN = "a24d7d722a394e88946323caaf50943d"   # 講師的英文聲音（也用於其他外語）
VOICE_ZH = "7b0e2f51c01e4b8b8eb1f5b0b2e5f997"   # 講師的中文聲音

# code → (資料檔, JS 變數, 地區, 聲音)
LANGS = {
    "zh-Hant": (["script.js", "script_m3_8.js"], "COURSE", "tw", VOICE_ZH),
    "zh-Hans": (["course_zh-Hans.js"], 'COURSES["zh-Hans"]', "intl", VOICE_ZH),
    "en": (["script_en.js", "script_en_m3_8.js"], "COURSE_EN", "intl", VOICE_EN),
    "es": (["course_es.js"], "COURSES.es", "intl", VOICE_EN),
    "pt": (["course_pt.js"], "COURSES.pt", "intl", VOICE_EN),
    "ja": (["course_ja.js"], "COURSES.ja", "intl", VOICE_EN),
    "de": (["course_de.js"], "COURSES.de", "intl", VOICE_EN),
    "fr": (["course_fr.js"], "COURSES.fr", "intl", VOICE_EN),
}


def tts(text, out, voice_id=VOICE_EN):
    for attempt in range(6):
        try:
            return _tts(text, out, voice_id)
        except RuntimeError as e:
            if "429" not in str(e) or attempt == 5:
                raise
            time.sleep(5 * (attempt + 1))  # 超過並發上限：等一下再試


def _tts(text, out, voice_id):
    r = requests.post(
        "https://api.fish.audio/v1/tts",
        headers={"Authorization": f"Bearer {load_keys()['fish']}", "model": MODEL},
        json={"text": text, "reference_id": voice_id, "format": "mp3", "mp3_bitrate": 128,
              "temperature": 0.8, "top_p": 0.8, "prosody": {"speed": 1.05, "normalize_loudness": True}},
        timeout=180,
    )
    if r.status_code >= 400:
        raise RuntimeError(f"{r.status_code}: {r.text[:300]}")
    Path(out).write_bytes(r.content)


def duration(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0",
                          str(path)], capture_output=True, text=True).stdout
    return round(float(out.strip()), 3)


def load_script(names, var):
    evals = "".join(f"eval(require('fs').readFileSync({json.dumps((DATA / n).as_posix())},'utf8'));" for n in names)
    js = f"global.window={{}};{evals}process.stdout.write(JSON.stringify(window.{var}||null))"
    out = subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8").stdout
    return json.loads(out) if out else None


def filter_region(x, region):
    """與 player.js 的 filterRegion 相同：only 不符合的物件整個移除。"""
    if isinstance(x, list):
        return [filter_region(v, region) for v in x
                if not (isinstance(v, dict) and v.get("only") and v["only"] != region)]
    if isinstance(x, dict):
        return {k: filter_region(v, region) for k, v in x.items()}
    return x


def line_key(text, voice):
    # 英文聲音沿用舊 key（不含聲音 ID），其他加入聲音 ID
    seed = f"{MODEL}|{text}" if voice == VOICE_EN else f"{MODEL}|{voice}|{text}"
    return hashlib.sha1(seed.encode()).hexdigest()[:12]


def iter_lines(course):
    for m in course["modules"]:
        groups = []
        if m.get("intro"):
            groups.append((f"{m['no']}.intro", m["intro"]["lines"]))
        groups += [(l["id"], l["lines"]) for l in m["lessons"]]
        if m.get("outro"):
            groups.append((f"{m['no']}.outro", m["outro"]["lines"]))
        for gid, lines in groups:
            for i, line in enumerate(lines):
                yield f"{gid}-{i}", line["tts"]


def read_manifest():
    p = DATA / "voice.js"
    if p.exists():
        txt = p.read_text(encoding="utf-8")
        if txt.startswith("window.VOICE="):
            d = json.loads(txt[len("window.VOICE="):].rstrip().rstrip(";"))
            if "zh" in d and "zh-Hant" not in d:          # 舊版 key 遷移
                d["zh-Hant"] = d.pop("zh")
            return d
    return {}


def main(langs):
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = []
    for lg in langs:
        files, var, region, voice = LANGS[lg]
        course = load_script(files, var)
        if not course:
            print(f"{lg}: no course data, skipped")
            continue
        for line_id, text in iter_lines(filter_region(course, region)):
            jobs.append((lg, line_id, text, voice))
    built = {lg: {} for lg in langs}

    def run(job):
        lg, line_id, text, voice = job
        text = speakable(text, lg)  # 標點符號轉口語，避免被逐字念出
        key = line_key(text, voice)
        path = OUT / f"{key}.mp3"
        try:
            if not path.exists():
                tts(text, path, voice)
        except Exception as e:
            return f"{lg} {line_id} FAIL {e}"
        built[lg][line_id] = {"file": f"audio/voice/{key}.mp3", "dur": duration(path)}
        return f"{lg} {line_id} ok"

    with ThreadPoolExecutor(4) as ex:
        for i, r in enumerate(ex.map(run, jobs)):
            print(i + 1, "/", len(jobs), r, flush=True)
    final = read_manifest()                      # 寫入前重讀，只覆蓋本次語系
    for lg in langs:
        if built.get(lg):
            final[lg] = built[lg]
    (DATA / "voice.js").write_text("window.VOICE=" + json.dumps(final) + ";\n", encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1].endswith(".mp3"):
        tts(sys.argv[2], sys.argv[1])
        print(duration(sys.argv[1]))
    else:
        # 預設只生成中文與英文語音；其他語系播放英文語音
        main([a for a in sys.argv[1:] if a in LANGS] or ["zh-Hant", "zh-Hans", "en"])
