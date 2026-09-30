"""把 assets/real-photos/ 裡的真實照片，裁切成課程用的 2:3 直式，替換 course/img/photos/。

usage: python tools/replace_photos.py            # 處理所有找得到的照片
       python tools/replace_photos.py --dry-run  # 只列出會替換哪些
檔名需與課程照片相同（fill_good、light_bad …），副檔名不限。
原本的 AI 照片會備份到 work/photos_ai_backup/。
"""
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "real-photos"
DST = ROOT / "course" / "img" / "photos"
BACKUP = ROOT / "work" / "photos_ai_backup"
NAMES = ["fill_good", "fill_bad", "light_good", "light_bad", "frame_good", "frame_bad", "story",
         "mood_calm", "mood_play", "mood_peak", "angle_high", "angle_low", "angle_close", "angle_side"]
EXTS = [".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif", ".JPG", ".JPEG", ".PNG", ".HEIC"]

try:  # iPhone 的 HEIC
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError:
    pass


def crop_2x3(im):
    w, h = im.size
    target = 2 / 3
    if w / h > target:            # 太寬：左右裁
        nw = int(h * target)
        x = (w - nw) // 2
        return im.crop((x, 0, x + nw, h))
    nh = int(w / target)          # 太高：上下裁（偏上，保留臉）
    y = max(0, int((h - nh) * 0.35))
    return im.crop((0, y, w, y + nh))


def main(dry):
    found, missing = [], []
    for n in NAMES:
        src = next((SRC / f"{n}{e}" for e in EXTS if (SRC / f"{n}{e}").exists()), None)
        (found if src else missing).append((n, src))
    for n, src in found:
        print(f"{'[dry] ' if dry else ''}replace {n}  <-  {src.name}")
        if dry:
            continue
        BACKUP.mkdir(parents=True, exist_ok=True)
        old = DST / f"{n}.jpg"
        if old.exists() and not (BACKUP / old.name).exists():
            shutil.copy2(old, BACKUP / old.name)
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        im = crop_2x3(im)
        im = im.resize((600, 900), Image.LANCZOS)
        im.save(old, quality=86)
    print(f"\n{len(found)} replaced, {len(missing)} still AI: {', '.join(n for n, _ in missing) or '-'}")


if __name__ == "__main__":
    main("--dry-run" in sys.argv)
