"""Chroma-key the green-screen sprites and snap them to their native pixel grid."""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
W = ROOT / "work"
OUT = ROOT / "course" / "img"

FRAMES = ["idle", "talk", "talk_c", "point", "point_c", "think", "warn", "cheer", "cheer_c", "blink", "blink_c"]


def key_green(im):
    a = np.array(im.convert("RGB")).astype(int)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    bg = (g > 140) & (g > r + 50) & (g > b + 50)
    rgba = np.dstack([a, np.where(bg, 0, 255)]).astype(np.uint8)
    # despill: clamp green on remaining edge pixels
    fg = ~bg
    spill = fg & (g > np.maximum(r, b) + 20)
    rgba[..., 1][spill] = np.maximum(r, b)[spill]
    return rgba


def grid_size(rgba):
    """Estimate the art's pixel block size from alpha/colour edge spacing."""
    gray = rgba[..., :3].astype(float).mean(axis=2)
    dx = np.abs(np.diff(gray, axis=1)).sum(axis=0)
    best, best_s = 0, 8
    for s in np.arange(6.0, 24.0, 0.25):
        idx = np.arange(len(dx))
        score = sum(dx[((idx + o) % s) < 1].mean() for o in [0]) if False else 0
        # phase-invariant: fold edge energy by period and take peak/mean ratio
        phase = (idx % s) / s
        hist, _ = np.histogram(phase, bins=16, weights=dx)
        score = hist.max() / (hist.mean() + 1e-9)
        if score > best:
            best, best_s = score, s
    return best_s


def snap(rgba, s):
    h, w = rgba.shape[:2]
    nw, nh = int(round(w / s)), int(round(h / s))
    out = np.zeros((nh, nw, 4), np.uint8)
    for y in range(nh):
        for x in range(nw):
            blk = rgba[int(y * s):int((y + 1) * s), int(x * s):int((x + 1) * s)].reshape(-1, 4)
            if len(blk) == 0:
                continue
            if (blk[:, 3] > 0).mean() < 0.5:
                continue
            c = blk[blk[:, 3] > 0][:, :3]
            # centre-weighted: take median colour of the block
            out[y, x, :3] = np.median(c, axis=0)
            out[y, x, 3] = 255
    return out


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    s = None
    for name in FRAMES:
        src = W / f"{name}.png"
        if not src.exists():
            print("missing", name)
            continue
        rgba = key_green(Image.open(src))
        if s is None:
            s = grid_size(rgba)
            print("grid size", s)
        px = snap(rgba, s)
        Image.fromarray(px, "RGBA").save(OUT / f"char_{name}.png", optimize=True)
        print("ok", name, px.shape)
    for bg in ["bg_room", "bg_office", "bg_title"]:
        Image.open(W / f"{bg}.png").convert("RGB").save(OUT / f"{bg}.jpg", quality=88)


if __name__ == "__main__":
    main()
