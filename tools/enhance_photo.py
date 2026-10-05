"""照片超解析度：4x-UltraSharp（ESRGAN）放大後再縮回指定倍率，讓細節更清楚。

需用 stable-diffusion-webui 的 Python（有 torch＋basicsr，模型也在那裡）：
  D:/AI/stable-diffusion-webui/venv/Scripts/python.exe tools/enhance_photo.py <輸入> <輸出> [倍率=2]
"""
import sys

import numpy as np
import torch
from basicsr.archs.rrdbnet_arch import RRDBNet
from PIL import Image

MODEL = "D:/AI/stable-diffusion-webui/models/ESRGAN/4x-UltraSharp.pth"


def load():
    sd = torch.load(MODEL, map_location="cpu")
    new = {}
    for k, v in sd.items():  # 舊版 ESRGAN 權重名稱 → basicsr RRDBNet
        k2 = (k.replace("model.0.", "conv_first.").replace("model.1.sub.23.", "conv_body.")
              .replace("model.3.", "conv_up1.").replace("model.6.", "conv_up2.")
              .replace("model.8.", "conv_hr.").replace("model.10.", "conv_last."))
        if k2.startswith("model.1.sub."):
            parts = k2.split(".")  # model.1.sub.{i}.RDB{j}.conv{k}.0.weight
            k2 = f"body.{parts[3]}.rdb{parts[4][3:]}.{parts[5]}.{parts[7]}"
        new[k2] = v
    net = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
    net.load_state_dict(new, strict=True)
    return net.eval().half().cuda()


@torch.no_grad()
def upscale(net, img, tile=384, pad=16):
    x = torch.from_numpy(np.asarray(img, dtype=np.float32) / 255).permute(2, 0, 1)[None].half().cuda()
    _, _, h, w = x.shape
    out = torch.zeros((1, 3, h * 4, w * 4), dtype=torch.float16, device="cuda")
    for y0 in range(0, h, tile):
        for x0 in range(0, w, tile):
            ys, xs = max(0, y0 - pad), max(0, x0 - pad)
            ye, xe = min(h, y0 + tile + pad), min(w, x0 + tile + pad)
            o = net(x[:, :, ys:ye, xs:xe])
            oy, ox = (y0 - ys) * 4, (x0 - xs) * 4
            th, tw = min(tile, h - y0) * 4, min(tile, w - x0) * 4
            out[:, :, y0 * 4:y0 * 4 + th, x0 * 4:x0 * 4 + tw] = o[:, :, oy:oy + th, ox:ox + tw]
    arr = (out[0].float().clamp(0, 1).permute(1, 2, 0).cpu().numpy() * 255).round().astype(np.uint8)
    return Image.fromarray(arr)


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    scale = float(sys.argv[3]) if len(sys.argv) > 3 else 2
    img = Image.open(src).convert("RGB")
    big = upscale(load(), img)
    out = big.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    out.save(dst, quality=95)
    print(f"{img.size} -> {out.size}")
