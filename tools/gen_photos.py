"""Generate realistic (SFW) photo examples for the shooting lessons."""
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from PIL import Image

from atlas import generate

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "work" / "photos"
OUT = ROOT / "course" / "img" / "photos"

MODEL = ("Photorealistic smartphone photo of an East Asian woman in her late 20s with shoulder-length wavy dark brown "
         "hair and natural makeup, wearing a cozy light gray knit sweater and blue jeans, fully clothed, tasteful, "
         "safe for work, lifestyle influencer style. No text, no watermark, no logos. ")

PHOTOS = {
    # 3.1 光線
    "light_good": "Soft window light from the side, face evenly lit with gentle shadows, visible catchlights in the eyes, "
                  "subject clearly brighter than the slightly darker cozy bedroom background, warm natural tones.",
    "light_bad": "Bad lighting example: harsh overhead ceiling light only, dark shadows under eyes and nose, flat dull "
                 "colors, background as bright as the subject, cluttered room, slightly blurry.",
    # 3.1 構圖
    "frame_good": "Good composition: rule of thirds, her eyes placed on the upper-left third intersection, looking "
                  "toward open space on the right, level horizon, clean background, three layers: blurred plant in "
                  "foreground, her in the middle, window in the background.",
    "frame_bad": "Bad composition example: tilted horizon, frame awkwardly crops her at the neck and wrists, a lamp "
                 "sticking out behind her head, messy edges and clutter in the corners.",
    # 3.1 主體大小
    "fill_good": "Close vertical crop where she fills about two-thirds of the frame from the waist up, smiling at the "
                 "camera, simple soft background, perfect as a phone thumbnail.",
    "fill_bad": "Bad thumbnail example: she is tiny in the middle of a big wide room, lots of empty floor and ceiling, "
                "hard to see her face.",
    # 3.1 敘事
    "story": "Storytelling photo: morning scene by a sunny window, she wears an oversized white shirt over her outfit, "
             "holding a coffee mug with both hands, messy bed and an open book nearby, sleepy gentle smile.",
    # 3.1 三段情緒
    "mood_calm": "Calm mood: sitting on a bed reading a book, relaxed, looking down, soft daylight.",
    "mood_play": "Playful mood: laughing and hugging a pillow on the bed, looking at the camera, candid and fun.",
    "mood_peak": "Confident, charming mood: sitting on a sofa, chin resting on her hand, confident smile at the camera, "
                 "warm golden-hour light, cinematic.",
    # 3.3 機位
    "angle_high": "High camera angle looking down at her three-quarter face, she looks up at the camera with a cute "
                  "smile, soft light, face appears small and sweet.",
    "angle_low": "Low camera angle from knee height, full body standing by a window, legs look long, confident pose, "
                 "hand on hip.",
    "angle_close": "Very close portrait, eye-level, direct eye contact with the camera, shallow depth of field, "
                   "intimate but tasteful.",
    "angle_side": "Profile shot, she looks out of the window, lots of negative space on the side she faces, moody "
                  "and mysterious.",
}


def job(name):
    raw = RAW / f"{name}.png"
    try:
        if not raw.exists():
            generate(MODEL + PHOTOS[name], str(raw), size="1024x1536", quality="medium")
        OUT.mkdir(parents=True, exist_ok=True)
        im = Image.open(raw).convert("RGB")
        im.thumbnail((600, 900))
        im.save(OUT / f"{name}.jpg", quality=84)
        return f"ok {name}"
    except Exception as e:
        return f"FAIL {name}: {e}"


if __name__ == "__main__":
    names = sys.argv[1:] or list(PHOTOS)
    with ThreadPoolExecutor(7) as ex:
        for r in ex.map(job, names):
            print(r, flush=True)
