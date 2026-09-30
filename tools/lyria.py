"""Generate background music with Google Lyria 3.5 (Gemini API)."""
import base64
import json
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import requests

from keys import load_keys

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "course" / "audio"
WORK = ROOT / "work" / "lyria"
URL = "https://generativelanguage.googleapis.com/v1beta/interactions"

BASE = ("Instrumental only, no vocals, no singing, no spoken words. Gentle background music to sit quietly under a "
        "female narrator teaching an online course: soft, low energy, unobtrusive, warm, no sudden hits or loud drops, "
        "steady volume throughout, smooth enough to loop. Cute pastel pixel-game (16-bit) flavor. About 2 minutes. ")

TRACKS = {
    "bgm_title": "Dreamy, sparkly lo-fi with soft music-box and mellow synth pads, starry night city mood, 80 BPM.",
    "bgm_room": "Cozy bedroom lo-fi hip hop, soft Rhodes piano, gentle vinyl crackle, light brushed drums, 75 BPM.",
    "bgm_office": "Calm, focused lo-fi with soft plucked kalimba and warm piano chords, light shaker, 82 BPM.",
    "bgm_upbeat": "Light, happy city-pop lo-fi, soft bass, gentle guitar licks, bright but mellow, 90 BPM.",
    "bgm_calm": "Very calm ambient piano with soft pads, reassuring and safe feeling, slow, 65 BPM.",
}


def generate(name, prompt):
    key = load_keys()["gemini"]
    r = requests.post(URL, headers={"x-goog-api-key": key, "Content-Type": "application/json"},
                      json={"model": "lyria-3.5", "input": BASE + prompt}, timeout=600)
    if r.status_code >= 400:
        raise RuntimeError(f"{name}: {r.status_code} {r.text[:400]}")
    data = r.json()
    audio = None
    for step in data.get("steps", []):
        for c in step.get("content", []) or []:
            if c.get("type") == "audio" and c.get("data"):
                audio = c["data"]
    if not audio:
        WORK.mkdir(parents=True, exist_ok=True)
        (WORK / f"{name}.json").write_text(json.dumps(data)[:5000], encoding="utf-8")
        raise RuntimeError(f"{name}: no audio in response (saved to work/lyria)")
    WORK.mkdir(parents=True, exist_ok=True)
    raw = WORK / f"{name}_raw.mp3"
    raw.write_bytes(base64.b64decode(audio))
    # 統一響度到偏小聲的 -26 LUFS，當背景音樂不搶人聲
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(raw),
                    "-af", "loudnorm=I=-26:TP=-3:LRA=7", "-ar", "44100", "-b:a", "128k", str(OUT / f"{name}.mp3")],
                   check=True)
    return name


if __name__ == "__main__":
    names = sys.argv[1:] or list(TRACKS)
    with ThreadPoolExecutor(5) as ex:
        futs = {n: ex.submit(generate, n, TRACKS[n]) for n in names}
        for n, f in futs.items():
            try:
                print("ok", f.result(), flush=True)
            except Exception as e:
                print("FAIL", e, flush=True)
