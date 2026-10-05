"""YouTube 用素材：封面圖、英文＋中文合併影片（燒錄字幕、轉場卡、片尾卡）、CC 字幕檔。

usage: python tools/youtube.py [thumb|video|all]
輸出到 work/youtube/（不上傳 GitHub）。原始影片在 assets/intro-video/，字幕時間軸沿用 course/data/intro.js。
"""
import json
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "work" / "youtube"
FONT = OUT / "fonts" / "Cubic11.ttf"  # 由 assets/fonts-src/Cubic_11.woff2 轉出
INK, PINK, PINK_DEEP, YELLOW, LAV = (59, 35, 64), (255, 143, 184), (224, 89, 142), (255, 228, 92), (183, 156, 255)
SITE = "bunnybrownie36.github.io/bunnybrownie-of-course"


def font(size):
    return ImageFont.truetype(str(FONT), size)


def cover(im, w, h):
    k = max(w / im.width, h / im.height)
    im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    x, y = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def text(d, xy, s, size, fill, stroke=0, stroke_fill=INK, shadow=0, anchor="la"):
    f = font(size)
    if shadow:
        d.text((xy[0] + shadow, xy[1] + shadow), s, font=f, fill=INK, stroke_width=stroke, stroke_fill=INK, anchor=anchor)
    d.text(xy, s, font=f, fill=fill, stroke_width=stroke, stroke_fill=stroke_fill, anchor=anchor)


def pixel_box(d, box, fill, border=INK, w=6, shadow=8):
    x0, y0, x1, y1 = box
    d.rectangle((x0 + shadow, y0 + shadow, x1 + shadow, y1 + shadow), fill=INK)
    d.rectangle(box, fill=border)
    d.rectangle((x0 + w, y0 + w, x1 - w, y1 - w), fill=fill)


def background(w, h, dim=0.0, blur=0):
    bg = cover(Image.open(ROOT / "course" / "img" / "bg_title.webp").convert("RGB"), w, h)
    if blur:
        bg = bg.filter(ImageFilter.GaussianBlur(blur))
    if dim:
        bg = Image.blend(bg, Image.new("RGB", bg.size, (28, 15, 36)), dim)
    return bg


def chibi(name, height):
    c = Image.open(ROOT / "course" / "img" / f"char_{name}.png").convert("RGBA")
    k = height / c.height
    return c.resize((round(c.width * k), height), Image.NEAREST)


# ---------- 封面圖 1280×720 ----------
def thumbnail():
    W, H = 1280, 720
    im = background(W, H)
    # 背景裡有一枚金幣剛好落在「0.01%」的小數點旁，用旁邊的夜空蓋掉
    im.paste(im.crop((400, 200, 446, 262)), (468, 200))
    # 左側壓暗，讓字更清楚
    grad = Image.new("L", (W, H))
    gd = ImageDraw.Draw(grad)
    for x in range(W):
        gd.line((x, 0, x, H), fill=int(215 * min(1, max(0, 1.25 - x / 760))))
    im = Image.composite(Image.new("RGB", (W, H), (28, 15, 36)), im, grad)
    d = ImageDraw.Draw(im)

    # 右側：本人照片卡（中文版 10.6 秒揮手打招呼的畫面）
    frame = Image.open(OUT / "face_full.png").convert("RGB")
    photo = frame.crop((1180, 120, 2700, 2160)).resize((470, 630), Image.LANCZOS)
    card = Image.new("RGBA", (photo.width + 28, photo.height + 28), INK + (255,))
    ImageDraw.Draw(card).rectangle((8, 8, card.width - 9, card.height - 9), fill=PINK)
    card.paste(photo, (14, 14))
    card = card.rotate(-3, resample=Image.BICUBIC, expand=True)
    shadow = Image.new("RGBA", card.size, (0, 0, 0, 0))
    shadow.paste(Image.new("RGBA", card.size, INK + (200,)), mask=card.split()[3])
    im.paste(shadow, (W - card.width - 22 + 12, 34 + 12), shadow)
    im.paste(card, (W - card.width - 22, 34), card)

    # 左側文字
    text(d, (52, 70), "全球前", 60, (255, 255, 255), stroke=6, shadow=6)
    text(d, (44, 128), "TOP 0.01%", 144, YELLOW, stroke=10, shadow=10)
    text(d, (54, 290), "OnlyFans 創作者的系統", 60, (255, 255, 255), stroke=6, shadow=6)
    text(d, (54, 362), "The OnlyFans Creator System", 36, (255, 220, 236), stroke=5, shadow=5)
    # 免費課程徽章
    pixel_box(d, (54, 440, 560, 528), PINK_DEEP)
    text(d, (307, 486), "FREE 免費完整課程", 48, (255, 255, 255), stroke=4, anchor="mm")
    # Q 版角色
    c = chibi("cheer", 220)
    im.paste(c, (560, H - c.height - 6), c)
    text(d, (60, 572), "8 languages · 8 種語言", 34, (236, 226, 255), stroke=5, shadow=4)
    im.save(OUT / "thumbnail.jpg", quality=92)
    im.save(OUT / "thumbnail.png")
    print("thumbnail.jpg", im.size)


# ---------- 合併影片：英文 → 轉場卡 → 中文 → 片尾卡 ----------
CARD_SEC, END_SEC = 2.0, 8.0
# 每段 CC 字幕的另一種語言翻譯（給 YouTube 上傳雙語 CC 用；燒錄字幕用原本說的語言）
EN_TO_ZH = ["頂尖 0.01% 的創作者，跟其他人差在哪裡？", "不是身材、不是臉蛋，也不是運氣——", "是系統。",
            "大家好，我是 bunny brownie——", "OnlyFans 前 0.01% 的創作者。", "今天我要教你怎麼開始經營帳號、",
            "怎麼拍影片、", "怎麼定價、", "還有怎麼保護自己。", "這堂課，你可以免費學到全部內容。", "那我們就開始吧！"]
ZH_TO_EN = ["What really separates the global top 0.01% of creators from everyone else?",
            "Not your body, not your face, and definitely not luck — it's a system.", "Hi everyone, I'm bunny brownie,",
            "I went from zero to the global top 0.01% of OnlyFans creators.", "Today I'll walk you through it step by step,",
            "from your personal brand to pricing your content,", "how to drive traffic and shoot,",
            "and finally, how to protect yourself.", "Don't hesitate — hit start and let's begin!"]


def intro_data():
    s = (ROOT / "course" / "data" / "intro.js").read_text(encoding="utf-8")
    return json.loads(s[s.index("{"):s.rindex("}") + 1])


def ass_time(t):
    h, m, sec = int(t // 3600), int(t % 3600 // 60), t % 60
    return f"{h}:{m:02d}:{sec:05.2f}"


def write_ass(path, cues, nametag, tag_sub):
    # 字幕：白字＋半透明深紫底框（同課程對話框配色）；名牌：粉紅底框
    head = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,Cubic 11,60,&H00FFFFFF,&H00FFFFFF,&H38240F1C,&H00000000,0,0,0,0,100,100,0,0,3,14,0,2,120,120,64,1
Style: Tag,Cubic 11,60,&H00FFFFFF,&H00FFFFFF,&H008E59E0,&H00402340,0,0,0,0,100,100,0,0,3,16,6,1,70,70,250,1
Style: TagSub,Cubic 11,36,&H00FFFFFF,&H00FFFFFF,&H00B88FFF,&H00402340,0,0,0,0,100,100,0,0,3,10,6,1,70,70,196,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    ev = [f"Dialogue: 0,{ass_time(s)},{ass_time(e)},Sub,,0,0,0,,{t}" for s, e, t in cues]
    a, b = nametag
    # 名牌兩行用固定座標，避免字幕防重疊把上下順序推亂
    ev.append(f"Dialogue: 1,{ass_time(a)},{ass_time(b)},Tag,,0,0,0,,{{\\an7\\pos(86,742)\\fad(250,250)}}bunnybrownie")
    ev.append(f"Dialogue: 2,{ass_time(a)},{ass_time(b)},TagSub,,0,0,0,,{{\\an7\\pos(92,834)\\fad(250,250)}}{tag_sub}")
    path.write_text(head + "\n".join(ev) + "\n", encoding="utf-8")


def card(path, lines, end=False):
    W, H = 1920, 1080
    im = background(W, H, dim=0.45 if not end else 0.35, blur=0 if end else 3)
    d = ImageDraw.Draw(im)
    if not end:
        text(d, (W // 2, 470), lines[0], 150, YELLOW, stroke=12, shadow=12, anchor="mm")
        text(d, (W // 2, 610), lines[1], 54, (255, 255, 255), stroke=6, shadow=6, anchor="mm")
        c = chibi("talk", 260)
        im.paste(c, (W // 2 - c.width // 2, 120), c)
    else:
        # 片尾：左半邊放課程資訊，右半邊留給 YouTube 結束畫面元素（訂閱鈕、推薦影片）
        x = 110
        text(d, (x, 150), "大人的自媒體 · OnlyFans 實戰課", 72, YELLOW, stroke=8, shadow=8)
        text(d, (x, 250), "Adult Creator Economy · OnlyFans Masterclass", 46, (255, 255, 255), stroke=6, shadow=6)
        pixel_box(d, (x, 350, x + 700, 450), PINK_DEEP)
        text(d, (x + 350, 400), "FREE · 8 languages · 8 種語言", 44, (255, 255, 255), stroke=4, anchor="mm")
        text(d, (x, 520), "→ 免費上課 Watch the course:", 44, (255, 255, 255), stroke=6, shadow=5)
        pixel_box(d, (x, 590, x + 900, 680), (255, 255, 255), shadow=6)
        text(d, (x + 450, 635), SITE, 36, INK, anchor="mm")
        text(d, (x, 740), "連結在說明欄 ↓ Link in the description", 40, (255, 220, 236), stroke=5, shadow=5)
        c = chibi("cheer", 300)
        im.paste(c, (x + 760, 700), c)
    im.save(path)


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode:
        raise RuntimeError(r.stderr[-2000:])
    return r


ENC = ["-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-r", "30",
       "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-ac", "2"]


def segment(key, lang, tag_sub, out):
    sys.path.insert(0, str(ROOT / "tools"))
    import intro_video as V
    src, ss, to, w, h = V.CLIPS[key]
    src = V.SRC / src
    data = intro_data()
    ass = OUT / f"{key}.ass"
    write_ass(ass, data["subs"][lang][key], data["videos"][key]["nametag"], tag_sub)
    m = V.measure(src, ss, to)
    dur = to - ss
    loud = (f"loudnorm=I=-16:TP=-1.5:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
            f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    fonts = str(OUT / "fonts").replace("\\", "/").replace(":", "\\:")
    assp = str(ass).replace("\\", "/").replace(":", "\\:")
    vf = (f"scale=1920:1080:flags=lanczos,{V.VIDEO_FX},subtitles='{assp}':fontsdir='{fonts}',"
          f"fade=t=in:d=0.25,fade=t=out:st={dur - 0.5:.2f}:d=0.5")
    af = f"{V.AUDIO_CLEAN},{loud},afade=t=in:d=0.12,afade=t=out:st={dur - 0.45:.2f}:d=0.45"
    run(["ffmpeg", "-y", "-hide_banner", "-ss", str(ss), "-to", str(to), "-i", str(src), "-map", "0:v:0", "-map", "0:a:0",
         "-vf", vf, "-af", af, *ENC, str(out)])
    return dur


def still_clip(png, sec, out, music=None):
    vf = f"fade=t=in:d=0.4,fade=t=out:st={sec - 0.5}:d=0.5"
    if music:
        a = ["-i", str(music)]
        af = ["-af", f"atrim=0:{sec},volume=1.6,afade=t=in:d=0.6,afade=t=out:st={sec - 1.2}:d=1.2"]
    else:
        a = ["-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo"]
        af = []
    run(["ffmpeg", "-y", "-hide_banner", "-loop", "1", "-t", str(sec), "-i", str(png), *a, "-t", str(sec),
         "-map", "0:v", "-map", "1:a", "-vf", vf, *af, *ENC, str(out)])


def srt(path, parts):
    def ts(t):
        return f"{int(t // 3600):02d}:{int(t % 3600 // 60):02d}:{int(t % 60):02d},{int(round(t % 1 * 1000)) % 1000:03d}"
    out, n = [], 1
    for offset, cues in parts:
        for s, e, t in cues:
            out.append(f"{n}\n{ts(s + offset)} --> {ts(e + offset)}\n{t}\n")
            n += 1
    path.write_text("\n".join(out), encoding="utf-8")


def video():
    seg = OUT / "segments"
    seg.mkdir(parents=True, exist_ok=True)
    d_en = segment("intro_en", "en", "Top 0.01% OnlyFans creator", seg / "1_en.mp4")
    card(seg / "card.png", ["中文版", "Chinese version"])
    still_clip(seg / "card.png", CARD_SEC, seg / "2_card.mp4")
    d_zh = segment("intro_zh", "zh-Hant", "全球前 0.01% OnlyFans 創作者", seg / "3_zh.mp4")
    card(seg / "end.png", None, end=True)
    still_clip(seg / "end.png", END_SEC, seg / "4_end.mp4", music=ROOT / "course" / "audio" / "bgm_title.mp3")
    lst = seg / "list.txt"
    lst.write_text("".join(f"file '{p}'\n" for p in ["1_en.mp4", "2_card.mp4", "3_zh.mp4", "4_end.mp4"]), encoding="utf-8")
    final = OUT / "bunnybrownie_intro_youtube.mp4"
    run(["ffmpeg", "-y", "-hide_banner", "-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", "-movflags", "+faststart", str(final)])
    # YouTube CC 字幕檔（雙語：英文軌、中文軌都涵蓋全片）
    data = intro_data()
    en, zh = data["subs"]["en"]["intro_en"], data["subs"]["zh-Hant"]["intro_zh"]
    zh_off = d_en + CARD_SEC
    srt(OUT / "captions_en.srt", [(0, en), (zh_off, [[s, e, t] for (s, e, _), t in zip(zh, ZH_TO_EN)])])
    srt(OUT / "captions_zh-TW.srt", [(0, [[s, e, t] for (s, e, _), t in zip(en, EN_TO_ZH)]), (zh_off, zh)])
    total = d_en + CARD_SEC + d_zh + END_SEC
    print(f"{final.name}: {total:.1f}s, {final.stat().st_size / 1e6:.1f} MB; Chinese part starts at {zh_off:.1f}s")


if __name__ == "__main__":
    what = sys.argv[1] if len(sys.argv) > 1 else "all"
    if what in ("thumb", "all"):
        thumbnail()
    if what in ("video", "all"):
        video()
