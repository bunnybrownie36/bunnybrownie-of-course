"""Generate character poses and backgrounds in parallel."""
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from atlas import generate

W = Path(__file__).resolve().parent.parent / "work"
MASTER = str(W / "char_master2.png")

STYLE = ("Keep EXACTLY the same character design, proportions, pixel size, palette, outfit and art style as "
         "the reference sprite (super-deformed chibi, 2 heads tall, 16-bit crisp hard pixels, 1-pixel dark brown "
         "outline). Full body, centered, same scale and framing as reference. Background: one flat solid pure "
         "green (#00FF00), no shadow, no text.")

POSES = {
    "idle": "Pose: standing relaxed, both hands clasped in front, gentle closed-mouth smile, eyes open.",
    "talk": "Pose: talking cheerfully, mouth open mid-sentence, one hand raised palm-up gesturing as if explaining.",
    "point": "Pose: body turned slightly to her left (viewer's right), arm extended pointing to the viewer's right side, confident open-mouth smile.",
    "think": "Pose: thinking, index finger on chin, eyes looking up, small pouty mouth, a tiny pixel question mark floating above head.",
    "warn": "Pose: serious caring expression with slight frown, one index finger raised as if saying 'be careful!', small sweat drop pixel.",
    "cheer": "Pose: excited jump, both arms raised up, eyes closed happily (^ ^), big open smile, small pixel sparkles around.",
    "blink": "Pose: identical to the reference image but with eyes closed in a happy curved line.",
}

BGS = {
    "bg_room": ("Cozy pastel pink bedroom content-creator studio, 16-bit pixel art game background, side view interior: "
                "ring light, desk with laptop, plants, fairy lights, window with night city, bed with plushies. "
                "Crisp hard pixels, soft pastel palette (pink, lavender, peach). Leave the lower-left third and the "
                "center relatively open floor space. No people, no text, no logos.", "1536x1024"),
    "bg_office": ("Cute pastel pixel art game background: a cozy home office / bank-like setup room with a big wall "
                  "whiteboard area on the right, filing cabinets, piggy bank, coin stacks, potted plants, a laptop, "
                  "a wall calendar. 16-bit crisp hard pixels, soft mint and lavender palette. Open floor space in "
                  "the lower-left. No people, no text, no logos.", "1536x1024"),
    "bg_title": ("Dreamy pastel pixel art title-screen background: night sky with pink and purple gradient, pixel stars, "
                 "fluffy pixel clouds, a small pixel city skyline with glowing windows at the bottom, floating pixel "
                 "hearts and coins. 16-bit crisp hard pixels. No people, no text, no logos.", "1536x1024"),
    "bg_studio": ("Cute pastel pixel art game background: a small home photo studio with softbox lights, a ring light, "
                  "a tripod with camera, a seamless paper backdrop, a vanity mirror with bulbs, a clothing rack with outfits, "
                  "plants. 16-bit crisp hard pixels, soft peach and lilac palette. Open floor space lower-left. No people, "
                  "no text, no logos.", "1536x1024"),
    "bg_city": ("Cute pastel pixel art game background: a lively city street at sunset with small shops, giant phone-shaped "
                "billboards showing hearts and play icons, neon signs without readable text, string lights, a crosswalk. "
                "16-bit crisp hard pixels, pink orange and teal palette. Open sidewalk lower-left. No people, no text, no logos.", "1536x1024"),
    "bg_plan": ("Cute pastel pixel art game background: a cozy planning room with a big wall calendar grid, sticky notes, "
                "a cork board with photos and strings, a desk with two monitors showing charts, a coffee mug, a cat bed, "
                "plants and a window with daylight. 16-bit crisp hard pixels, butter yellow and sky blue palette. Open floor "
                "lower-left. No people, no text, no logos.", "1536x1024"),
    "bg_rooftop": ("Cute pastel pixel art game background: a rooftop terrace at night overlooking a glowing city, a big "
                   "megaphone speaker, balloons, fairy lights, a small stage with spotlights, fireworks in the sky. 16-bit crisp "
                   "hard pixels, magenta and navy palette. Open floor lower-left. No people, no text, no logos.", "1536x1024"),
    "bg_shop": ("Cute pastel pixel art game background: an adorable boutique shop interior with display shelves of gift "
                "boxes in three sizes, ribbons, a cash register, price tags without text, a VIP velvet rope with a heart, "
                "chandelier. 16-bit crisp hard pixels, rose and cream palette. Open floor lower-left. No people, no text, no logos.", "1536x1024"),
    "bg_safe": ("Cute pastel pixel art game background: a cozy secure study room with a big vault door with a heart lock, "
                "bookshelves with law books, a shield emblem on the wall, a laptop with a padlock icon, a desk lamp, plants, "
                "night window. 16-bit crisp hard pixels, mint and deep purple palette. Open floor lower-left. No people, "
                "no text, no logos.", "1536x1024"),
}


def job(name):
    out = W / f"{name}.png"
    if out.exists():
        return f"skip {name}"
    try:
        if name in POSES:
            generate(f"{POSES[name]} {STYLE}", str(out), refs=[MASTER])
        else:
            prompt, size = BGS[name]
            generate(prompt, str(out), size=size)
        return f"ok {name}"
    except Exception as e:
        return f"FAIL {name}: {e}"


if __name__ == "__main__":
    names = sys.argv[1:] or list(POSES) + list(BGS)
    with ThreadPoolExecutor(8) as ex:
        for r in ex.map(job, names):
            print(r, flush=True)
