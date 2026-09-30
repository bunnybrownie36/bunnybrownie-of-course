"""把台詞轉成適合 TTS 朗讀的「口語文字」：處理標點與符號，避免被逐字念出。

只影響送給 Fish Audio 的文字；畫面字幕仍顯示原文。[情緒標籤] 會原樣保留。
支援：zh-Hant、zh-Hans、en、es、pt、de、fr、ja
"""
import re
import sys

TAG = re.compile(r"(\[[^\]]*\])")
NUM = r"\d+(?:[.,]\d+)?"
MONEY = r"\d[\d,.]*\d|\d"

COMMON = [
    (r"[“”\"]", ""),
    (r"[‘’]", "'"),
    (r"#️⃣|#", ""),
    (r"[*_`]", ""),
]


def zh_rules(dollar):
    return [
        (r"[「」『』]", ""),
        (rf"\$\s*({MONEY})\s*[–—\-～~]\s*\$\s*({MONEY})", rf"\1到\2{dollar}"),
        (r"(\d+)\s*[–—\-～~]\s*(\d+)", r"\1到\2"),
        (rf"NT\$\s*({MONEY})", r"新台幣\1元"),
        (rf"\$\s*({MONEY})", rf"\1{dollar}"),
        (rf"({NUM})\s*[%％]", r"百分之\1"),
        (rf"({NUM})\s*(?:×|[xX](?![A-Za-z]))", r"\1倍"),
        (rf"[×✕]\s*({NUM})", r"乘以\1"),
        (r"÷", "除以"),
        (r"[＝=]", "等於"),
        (r"(\d)\s*[:：]\s*(\d)", r"\1比\2"),
        (r"18\s*[+＋]", "十八禁"),
        (r"[＋+]", "加"),
        (r"\s*[→➜➡]\s*", "，然後"),
        (r"\s*[／/]\s*(月|天|日|週|周|年|筆|笔|份|人|次|篇|支|組|组|分鐘|分钟)", r"每\1"),
        (r"\s*[／/]\s*", "、"),
        (r"[・·‧]", "、"),
        (r"&", "和"),
        (r"\b2FA\b", "雙重驗證"),
        (r"\bOF\b(?!\s*Buddy)", "OnlyFans"),
        (r"\bW-8BEN\b", "W 8 BEN"),
        (r"\bvs\.?\b", "對比"),
        (r"[（(]", "，"), (r"[）)]", "，"),
        (r"……|…|⋯", "，"),
        (r"[—–]+", "，"),
        (r"[～~]+(?=\s*$)", "！"),
        (r"～|~", "，"),
        (r"[｜|]", "，"),
        (r"(\d),(\d{3})", r"\1\2"),
    ]


def latin_rules(w):
    return [
        (rf"\$\s*({MONEY})\s*[–—]\s*\$\s*({MONEY})", rf"\1 {w['to']} \2 {w['dollars']}"),
        (r"(\d+)\s*[–—]\s*(\d+)", rf"\1 {w['to']} \2"),
        (rf"NT\$\s*({MONEY})", rf"\1 {w['twd']}"),
        (rf"\$\s*({MONEY})", rf"\1 {w['dollars']}"),
        (rf"({NUM})\s*[%％]", rf"\1 {w['percent']}"),
        (rf"({NUM})\s*(?:×|[xX](?![A-Za-z]))", rf"\1 {w['times']}"),
        (rf"[×✕]\s*({NUM})", rf"{w['times']} \1"),
        (r"÷", f" {w['divided']} "),
        (r"\s*[＝=]\s*", f" {w['equals']} "),
        (r"(\d)\s*:\s*(\d)", rf"\1 {w['to']} \2"),
        (r"18\s*\+", w["adult"]),
        (r"\s*\+\s*", f" {w['plus']} "),
        (r"\s*[→➜➡]\s*", f", {w['then']} "),
        (r"(\d\S*(?:\s+[A-Za-zÀ-ÿ]+)?)\s*/\s*([a-zà-ÿ]+\.?)", rf"\1 {w['per']} \2"),
        (r"(\w)\s*/\s*(\w)", rf"\1 {w['or']} \2"),
        (r"[・·‧]", ", "),
        (r"\s*&\s*", f" {w['and']} "),
        (r"\b2FA\b", w["2fa"]),
        (r"\bOF\b(?!\s*Buddy)", "OnlyFans"),
        (r"\bvs\.?\b", w["vs"]),
        (r"\be\.g\.", w["eg"]),
        (r"[()]", ", "),
        (r"…|\.\.\.", ", "),
        (r"\s*[—–]\s*", ", "),
        (r"[«»„]", ""),
        (r"~", ""),
        (r"\|", ", "),
    ]


def _w(to, twd, dollars, percent, times, divided, equals, adult, plus, then, or_, and_, tfa, vs, eg):
    per = {"to": "per", "a": "por", "bis": "pro", "à": "par"}[to]
    return {"per": per, "to": to, "twd": twd, "dollars": dollars, "percent": percent, "times": times, "divided": divided,
            "equals": equals, "adult": adult, "plus": plus, "then": then, "or": or_, "and": and_, "2fa": tfa,
            "vs": vs, "eg": eg}


WORDS = {
    "en": _w("to", "Taiwan dollars", "dollars", "percent", "times", "divided by", "equals", "eighteen plus", "plus",
             "then", "or", "and", "two-factor authentication", "versus", "for example"),
    "es": _w("a", "dólares taiwaneses", "dólares", "por ciento", "veces", "entre", "es igual a",
             "para mayores de dieciocho", "más", "luego", "o", "y", "verificación en dos pasos", "contra", "por ejemplo"),
    "pt": _w("a", "dólares taiwaneses", "dólares", "por cento", "vezes", "dividido por", "é igual a",
             "para maiores de dezoito", "mais", "depois", "ou", "e", "verificação em duas etapas", "contra", "por exemplo"),
    "de": _w("bis", "Taiwan-Dollar", "Dollar", "Prozent", "mal", "geteilt durch", "ist gleich", "ab achtzehn", "plus",
             "dann", "oder", "und", "Zwei-Faktor-Authentifizierung", "gegen", "zum Beispiel"),
    "fr": _w("à", "dollars taïwanais", "dollars", "pour cent", "fois", "divisé par", "égale",
             "réservé aux plus de dix-huit ans", "plus", "puis", "ou", "et", "double authentification", "contre",
             "par exemple"),
}

JA = [
    (r"[「」『』]", ""),
    (r"(\d+)\s*[–—〜～~\-]\s*(\d+)", r"\1から\2"),
    (rf"\$\s*({MONEY})", r"\1ドル"),
    (rf"({NUM})\s*[%％]", r"\1パーセント"),
    (rf"({NUM})\s*(?:×|[xX](?![A-Za-z]))", r"\1倍"),
    (rf"[×✕]\s*({NUM})", r"かける\1"),
    (r"÷", "わる"),
    (r"[＝=]", "イコール"),
    (r"(\d)\s*[:：]\s*(\d)", r"\1対\2"),
    (r"18\s*[+＋]", "18歳以上"),
    (r"[＋+]", "プラス"),
    (r"\s*[→➜➡]\s*", "、そして"),
    (r"\s*[／/]\s*(月|日|週|年|回|本|人|分)", r"毎\1"),
    (r"\s*[／/]\s*", "、"),
    (r"[・·‧]", "、"),
    (r"&", "と"),
    (r"\b2FA\b", "二段階認証"),
    (r"\bOF\b(?!\s*Buddy)", "OnlyFans"),
    (r"[（(]", "、"), (r"[）)]", "、"),
    (r"……|…|⋯", "、"),
    (r"[—–]+", "、"),
    (r"[～~]+(?=\s*$)", "！"),
    (r"[～~]", "、"),
    (r"[｜|]", "、"),
]

RULES = {"zh-Hant": zh_rules("美金"), "zh-Hans": zh_rules("美元"), "ja": JA}
RULES.update({k: latin_rules(v) for k, v in WORDS.items()})
RULES["zh"] = RULES["zh-Hant"]


def _clean(seg, lang):
    for pat, rep in COMMON + RULES[lang]:
        seg = re.sub(pat, rep, seg)
    if lang.startswith("zh") or lang == "ja":
        seg = re.sub(r"[，、]\s*([，。！？、；：])", r"\1", seg)
        seg = re.sub(r"([，、])\1+", r"\1", seg)
        seg = re.sub(r"^[，、\s]+", "", seg)
        if not re.search(r"[。！？]$", seg):
            seg = re.sub(r"[，、\s]+$", "", seg)
    else:
        seg = re.sub(r"\s*,\s*([,.!?;:])", r"\1", seg)
        seg = re.sub(r"(?:(?<!\d),|,(?!\d))(?:\s*,)*\s*", ", ", seg)  # 保留 1,500／0,01 的數字逗號
        seg = re.sub(r"\s{2,}", " ", seg)
        seg = re.sub(r"^[,\s]+", "", seg)
    return seg


def speakable(text, lang):
    parts = TAG.split(text)
    out = [p if TAG.fullmatch(p) else _clean(p, lang) for p in parts if p]
    return re.sub(r"\]\s*", "] ", "".join(out)).strip()


if __name__ == "__main__":
    print(speakable(" ".join(sys.argv[2:]), sys.argv[1]))
