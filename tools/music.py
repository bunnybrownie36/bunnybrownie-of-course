"""Procedural chiptune BGM (square lead, triangle bass, pulse arps, noise drums)."""
import subprocess
import wave
from pathlib import Path

import numpy as np

SR = 44100
OUT = Path(__file__).resolve().parent.parent / "course" / "audio"

NOTE = {n: i for i, n in enumerate(["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"])}


def freq(name):
    if name in (None, "-"):
        return 0.0
    pitch, octave = name[:-1], int(name[-1])
    return 440.0 * 2 ** ((NOTE[pitch] + 12 * (octave + 1) - 69) / 12)


def env(n, a=0.005, d=0.08, s=0.6, r=0.05):
    t = np.arange(n) / SR
    e = np.full(n, s)
    ai, di, ri = int(a * SR), int(d * SR), int(r * SR)
    e[:ai] = np.linspace(0, 1, ai) if ai else e[:ai]
    e[ai:ai + di] = np.linspace(1, s, len(e[ai:ai + di]))
    if ri and n > ri:
        e[-ri:] *= np.linspace(1, 0, ri)
    return e


def square(f, n, duty=0.5, vib=0.0):
    t = np.arange(n) / SR
    ph = f * t + (vib * np.sin(2 * np.pi * 5.5 * t) * np.clip(t - 0.15, 0, None) * 2 if vib else 0)
    return np.where((ph % 1.0) < duty, 1.0, -1.0)


def triangle(f, n):
    t = np.arange(n) / SR
    return 2 * np.abs(2 * ((f * t) % 1.0) - 1) - 1


def noise(n, seed):
    rng = np.random.default_rng(seed)
    return rng.uniform(-1, 1, n)


def render(bpm, bars, chords, melody, lead_duty=0.25, swing=0.0, drums=True):
    beat = 60 / bpm
    step = beat / 4  # 16th notes
    total = int(bars * 16 * step * SR)
    mix = np.zeros(total + SR)

    def put(buf, start_step, vol):
        s = int(start_step * step * SR)
        mix[s:s + len(buf)] += buf * vol

    # melody: list of (note, length_in_16ths)
    pos = 0
    for note, ln in melody:
        n = int(ln * step * SR)
        f = freq(note)
        if f:
            put(square(f, n, lead_duty, vib=0.004) * env(n, d=0.1, s=0.55, r=0.04), pos, 0.16)
            # echo
            put(square(f, n, lead_duty) * env(n, d=0.1, s=0.4, r=0.04), pos + 3, 0.05)
        pos += ln

    for bar in range(bars):
        root, tones = chords[bar % len(chords)]
        base = bar * 16
        # triangle bass: root on 1, fifth-ish walk
        for i, b in enumerate([0, 6, 8, 12]):
            nb = [root + "2", root + "2", tones[2] + "2" if i == 2 else root + "2", tones[1] + "2"][i]
            n = int(3.5 * step * SR)
            put(triangle(freq(nb), n) * env(n, d=0.05, s=0.8, r=0.03), base + b, 0.30)
        # arpeggio pulse
        for k in range(16):
            nt = tones[k % 3] + "4"
            n = int(0.9 * step * SR)
            put(square(freq(nt), n, 0.125) * env(n, d=0.03, s=0.3, r=0.01), base + k, 0.045)
        if drums:
            for k in range(0, 16, 2):  # hats
                n = int(0.04 * SR)
                put(noise(n, bar * 16 + k) * env(n, a=0.001, d=0.03, s=0.0, r=0.0), base + k + (swing if k % 4 else 0), 0.05)
            for k in (0, 10):  # kick
                n = int(0.12 * SR)
                t = np.arange(n) / SR
                kick = np.sin(2 * np.pi * (120 * np.exp(-t * 30) + 45) * t) * np.exp(-t * 18)
                put(kick, base + k, 0.45)
            for k in (4, 12):  # snare
                n = int(0.12 * SR)
                put(noise(n, 999 + bar * 7 + k) * np.exp(-np.arange(n) / SR * 25), base + k, 0.12)
    mix = mix[:total]
    # gentle low-pass to soften harshness
    kernel = np.ones(4) / 4
    mix = np.convolve(mix, kernel, mode="same")
    mix /= max(1e-9, np.max(np.abs(mix))) / 0.8
    return mix


def save(mix, name):
    OUT.mkdir(parents=True, exist_ok=True)
    wav = OUT / f"{name}.wav"
    pcm = (mix * 32767).astype(np.int16)
    with wave.open(str(wav), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-b:a", "96k", str(OUT / f"{name}.mp3")], check=True)
    wav.unlink()


def mel(s):
    """'E5:2 G5:2 -:4' -> [(note, len)]"""
    out = []
    for tok in s.split():
        n, l = tok.split(":")
        out.append((n, int(l)))
    return out


# I–vi–IV–V in C, cozy & bouncy
CHORDS_A = [("C", ["C", "E", "G"]), ("A", ["A", "C", "E"]), ("F", ["F", "A", "C"]), ("G", ["G", "B", "D"])]
LESSON_MEL = mel(
    "E5:2 G5:2 C6:4 B5:2 G5:2 E5:4 "
    "C5:2 E5:2 A5:4 G5:2 E5:2 C5:4 "
    "A4:2 C5:2 F5:4 E5:2 D5:2 C5:4 "
    "D5:3 E5:1 D5:2 B4:2 G4:4 -:4 "
    "E5:2 G5:2 C6:4 D6:2 C6:2 B5:4 "
    "A5:2 G5:2 E5:4 C5:2 E5:2 A5:4 "
    "F5:2 A5:2 C6:4 A5:2 F5:2 E5:4 "
    "D5:2 E5:2 G5:2 B5:2 C6:8 "
)
# softer, lower-energy loop for talking over: lead played sparsely
TALK_MEL = mel(
    "G5:4 -:4 E5:4 -:4 "
    "A5:4 -:4 C5:4 -:4 "
    "F5:4 -:4 A5:4 -:4 "
    "B5:4 -:4 D5:4 -:4 " * 2
)
# Fmaj7 – Em7 – Dm7 – Cmaj7 ish for office module
CHORDS_B = [("F", ["F", "A", "E"]), ("E", ["E", "G", "D"]), ("D", ["D", "F", "C"]), ("C", ["C", "E", "B"])]

if __name__ == "__main__":
    save(render(118, 8, CHORDS_A, LESSON_MEL * 1, lead_duty=0.25), "bgm_title")
    save(render(96, 8, CHORDS_A, TALK_MEL, lead_duty=0.5), "bgm_room")
    save(render(100, 8, CHORDS_B, TALK_MEL[:0] + mel(
        "A5:4 -:4 C6:4 -:4 G5:4 -:4 B5:4 -:4 F5:4 -:4 A5:4 -:4 E5:4 -:4 G5:4 -:4 " * 2), lead_duty=0.5), "bgm_office")
    save(render(140, 4, CHORDS_A, mel("C5:2 E5:2 G5:2 C6:6 -:4 G5:2 C6:14 -:32"), lead_duty=0.25, drums=True), "jingle_done")
    print("ok")
