"""剪輯開場介紹影片：修掉頭尾空白、人聲清理＋音量標準化、輕微調色、輸出網頁用 mp4 與封面圖。

usage: python tools/intro_video.py            # 處理 CLIPS 裡所有找得到的原始檔
原始檔放在 assets/intro-video/（不上傳 GitHub），成品輸出到 course/video/。
"""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "intro-video"
OUT = ROOT / "course" / "video"

# name: (原始檔, 開始秒, 結束秒, 輸出寬, 輸出高)。起訖點依 silencedetect 結果，前後各留一點呼吸。
CLIPS = {
    "intro_zh": ("zh.mov", 0.30, 32.05, 1920, 1080),
    "intro_en": ("en.mov", 0.42, 36.45, 1920, 1080),
    # 直式（手機直拿）：另外拍的較長版本
    "intro_zh_portrait": ("zh_portrait.mov", 0.12, 47.65, 720, 1280),
    "intro_en_portrait": ("en_portrait.mov", 0.00, 59.30, 720, 1280),
}
TARGET_LUFS = -20  # 課程旁白約 -22 LUFS，影片人聲略高一點
VIDEO_FX = "eq=contrast=1.04:saturation=1.08:brightness=0.012"  # 輕微提亮、加一點氣色
AUDIO_CLEAN = "highpass=f=80,afftdn=nf=-28,acompressor=threshold=-22dB:ratio=2.5:attack=8:release=120:makeup=1"


def run(cmd):
    return subprocess.run(cmd, check=True, capture_output=True, text=True, encoding="utf-8", errors="replace")


def measure(src, ss, to):
    """loudnorm 第一遍：量測音量，給第二遍做線性標準化。"""
    r = run(["ffmpeg", "-hide_banner", "-ss", str(ss), "-to", str(to), "-i", str(src), "-vn",
             "-af", f"{AUDIO_CLEAN},loudnorm=I={TARGET_LUFS}:TP=-2:LRA=11:print_format=json", "-f", "null", "-"])
    return json.loads(re.findall(r"\{[^{}]*\}", r.stderr)[-1])


def build(name, src, ss, to, w, h):
    src = SRC / src
    if not src.exists():
        print(f"skip {name}: {src.name} not found")
        return
    OUT.mkdir(parents=True, exist_ok=True)
    m = measure(src, ss, to)
    dur = to - ss
    loud = (f"loudnorm=I={TARGET_LUFS}:TP=-2:LRA=11:measured_I={m['input_i']}:measured_TP={m['input_tp']}:"
            f"measured_LRA={m['input_lra']}:measured_thresh={m['input_thresh']}:offset={m['target_offset']}:linear=true")
    af = f"{AUDIO_CLEAN},{loud},afade=t=in:d=0.12,afade=t=out:st={dur - 0.45:.2f}:d=0.45"
    vf = (f"scale={w}:{h}:force_original_aspect_ratio=increase:flags=lanczos,crop={w}:{h},{VIDEO_FX},"
          f"fade=t=in:d=0.25,fade=t=out:st={dur - 0.5:.2f}:d=0.5,format=yuv420p")
    mp4 = OUT / f"{name}.mp4"
    run(["ffmpeg", "-y", "-hide_banner", "-ss", str(ss), "-to", str(to), "-i", str(src),
         "-map", "0:v:0", "-map", "0:a:0", "-vf", vf, "-af", af, "-r", "30",
         "-c:v", "libx264", "-preset", "slow", "-crf", "25", "-profile:v", "high", "-tune", "film",
         "-c:a", "aac", "-b:a", "128k", "-ar", "48000", "-ac", "2",
         "-movflags", "+faststart", "-map_metadata", "-1", str(mp4)])
    # 封面：第 2 秒的畫面（影片載入前顯示）
    run(["ffmpeg", "-y", "-hide_banner", "-ss", "2", "-i", str(mp4), "-frames:v", "1",
         "-vf", f"scale={min(w, 1280)}:-2", "-q:v", "4", str(OUT / f"{name}.jpg")])
    print(f"{name}: {dur:.1f}s, {mp4.stat().st_size / 1e6:.1f} MB, audio in {m['input_i']} LUFS -> {TARGET_LUFS}")


if __name__ == "__main__":
    for name, args in CLIPS.items():
        build(name, *args)
