"""Atlas Cloud image generation (gpt-image-2.5-sunburst)."""
import base64
import io
import sys
import time
from pathlib import Path

import requests
from PIL import Image, ImageOps

from keys import load_keys

API = "https://api.atlascloud.ai/api/v1/model"
MODEL = "openai/gpt-image-2.5-sunburst"


def _headers():
    return {"Authorization": f"Bearer {load_keys()['atlas']}", "Content-Type": "application/json"}


def image_to_data_uri(path, max_side=1024):
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGBA")
    im.thumbnail((max_side, max_side))
    buf = io.BytesIO()
    im.save(buf, "PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()


def generate(prompt, out, refs=None, size="1024x1024", quality="high", background="auto"):
    body = {"prompt": prompt, "size": size, "quality": quality, "background": background,
            "output_format": "png", "n": 1}
    if refs:
        body["model"] = MODEL + "/edit"
        body["images"] = [image_to_data_uri(r) for r in refs]
    else:
        body["model"] = MODEL + "/text-to-image"
    r = requests.post(f"{API}/generateImage", json=body, headers=_headers(), timeout=120)
    if r.status_code >= 400:
        raise RuntimeError(f"submit failed {r.status_code}: {r.text[:500]}")
    pid = r.json()["data"]["id"]
    for _ in range(180):
        time.sleep(3)
        d = requests.get(f"{API}/prediction/{pid}", headers=_headers(), timeout=60).json()["data"]
        if d["status"] in ("completed", "succeeded"):
            src = d["outputs"][0]
            data = (base64.b64decode(src.split(",", 1)[-1]) if not src.startswith("http")
                    else requests.get(src, timeout=120).content)
            Path(out).parent.mkdir(parents=True, exist_ok=True)
            Path(out).write_bytes(data)
            return out
        if d["status"] == "failed":
            raise RuntimeError(f"generation failed: {d.get('error')}")
    raise TimeoutError(pid)


if __name__ == "__main__":
    # usage: atlas.py out.png "prompt" [ref1 ref2 ...]
    print(generate(sys.argv[2], sys.argv[1], refs=sys.argv[3:] or None))
