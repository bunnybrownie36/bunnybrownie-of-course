"""分享預覽圖（IG／FB／LINE／X 貼連結時顯示）→ course/img/og.jpg（1200×630）

刻意只用像素插畫與 Q 版角色、不放照片，文字也不寫平台名稱，降低社群平台誤判。
usage: python tools/og_image.py
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from PIL import ImageDraw  # noqa: E402
from youtube import INK, PINK_DEEP, YELLOW, background, chibi, pixel_box, text  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent


def main():
    W, H = 1200, 630
    im = background(W, H, dim=0.25)
    d = ImageDraw.Draw(im)
    text(d, (W // 2 - 150, 120), "FREE CREATOR", 96, YELLOW, stroke=9, shadow=9, anchor="mm")
    text(d, (W // 2 - 150, 228), "MASTERCLASS", 96, YELLOW, stroke=9, shadow=9, anchor="mm")
    text(d, (W // 2 - 150, 330), "by bunnybrownie · global top 0.01% creator", 30, (255, 255, 255), stroke=5, shadow=4, anchor="mm")
    pixel_box(d, (130, 400, 770, 488), PINK_DEEP)
    text(d, (450, 444), "8 languages · No sign-up", 40, (255, 255, 255), stroke=4, anchor="mm")
    c = chibi("cheer", 420)
    im.paste(c, (W - c.width - 40, H - c.height - 30), c)
    out = ROOT / "course" / "img" / "og.jpg"
    im.save(out, quality=88, optimize=True, progressive=True)
    print(out.relative_to(ROOT), im.size, out.stat().st_size // 1024, "KB")


if __name__ == "__main__":
    main()
