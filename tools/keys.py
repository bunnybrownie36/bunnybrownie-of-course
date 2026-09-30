"""Load API keys from API_KEY.txt without ever printing them."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def load_keys():
    text = (ROOT / "API_KEY.txt").read_text(encoding="utf-8-sig")
    keys = {}
    loose = []
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        tokens = re.findall(r"[A-Za-z0-9_\-\.]{20,}", line)
        if not tokens:
            continue
        token = tokens[-1]
        low = line.lower()
        if "fish" in low:
            keys["fish"] = token
        elif "atlas" in low:
            keys["atlas"] = token
        elif "gemini" in low or "google" in low or "lyria" in low:
            keys["gemini"] = token
        else:
            loose.append(token)
    for t in loose:
        if "fish" not in keys and re.fullmatch(r"[0-9a-f]{32}", t):
            keys["fish"] = t
        elif "atlas" not in keys and t.startswith("apikey"):
            keys["atlas"] = t
        elif "gemini" not in keys and t.startswith("AIza"):
            keys["gemini"] = t
    return keys


if __name__ == "__main__":
    k = load_keys()
    print({name: ("found" if name in k else "MISSING") for name in ("fish", "atlas", "gemini")})
