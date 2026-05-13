"""
Generate 4 favicon variants for Tezcode landing.

Variants:
  A (v1) — Hozirgi: dark ink bg + white TC + gold accent dot
  B (v2) — Gradient bg (blue -> ink) + white TC + gold glow ring
  C (v3) — Solid gold border + dark bg + white TC (premium edge)
  D (v4) — AI generated (pollinations.ai flux) + PIL crop/recenter

After generation, choose best (default = C) and apply to:
  - src/app/icon.png (512)
  - src/app/apple-icon.png (180)
  - public/favicon.ico (multi 16/32/48)
"""
from __future__ import annotations

import os
import sys
from io import BytesIO
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(r"C:/Users/User/Desktop/tezcode-landing")
SRC_LOGO = ROOT / "public" / "tezcode-logo.png"
OUT_VARIANTS = ROOT / "public" / "favicon-variants"
OUT_APP = ROOT / "src" / "app"
OUT_PUBLIC = ROOT / "public"

INK = (10, 10, 15, 255)          # --tc-ink #0a0a0f
BLUE = (0, 64, 255, 255)         # --tc-blue #0040ff
BLUE_DEEP = (0, 24, 96, 255)     # darker blue tone for gradient mid
GOLD = (212, 160, 23, 255)       # --tc-gold #d4a017
GOLD_BRIGHT = (245, 200, 60, 255)
WHITE = (255, 255, 255, 255)

OUT_VARIANTS.mkdir(parents=True, exist_ok=True)


def load_logo_white(padding_ratio: float = 0.0) -> Image.Image:
    """Return cropped TC monogram as WHITE-on-transparent RGBA."""
    src = Image.open(SRC_LOGO).convert("RGBA")
    gray = src.convert("L")
    inverted = Image.eval(gray, lambda v: 255 - v)
    bbox = inverted.getbbox()
    cropped = src.crop(bbox) if bbox else src

    cw, ch = cropped.size
    new = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    px = cropped.load()
    out_px = new.load()
    for y in range(ch):
        for x in range(cw):
            r, g, b, a = px[x, y]
            if r > 230 and g > 230 and b > 230:
                out_px[x, y] = (0, 0, 0, 0)
            else:
                out_px[x, y] = (255, 255, 255, 255)
    return new


def fit_logo(logo: Image.Image, target: int, padding_ratio: float) -> tuple[Image.Image, int, int]:
    """Scale logo to target box with padding, return (img, x_off, y_off)."""
    pad = int(target * padding_ratio)
    inner = target - 2 * pad
    cw, ch = logo.size
    ratio = min(inner / cw, inner / ch)
    nw, nh = max(1, int(cw * ratio)), max(1, int(ch * ratio))
    scaled = logo.resize((nw, nh), Image.LANCZOS)
    x_off = (target - nw) // 2
    y_off = (target - nh) // 2
    return scaled, x_off, y_off


def rounded_mask(size: int, radius_ratio: float = 0.18) -> Image.Image:
    """Return L-mode mask with rounded corners."""
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    r = int(size * radius_ratio)
    d.rounded_rectangle([(0, 0), (size - 1, size - 1)], radius=r, fill=255)
    return mask


def variant_a(size: int = 512, padding_ratio: float = 0.16) -> Image.Image:
    """A — Hozirgi: dark ink bg + white TC + gold corner dot (sharper edges)."""
    canvas = Image.new("RGBA", (size, size), INK)

    logo = load_logo_white()
    scaled, x_off, y_off = fit_logo(logo, size, padding_ratio)
    canvas.paste(scaled, (x_off, y_off), scaled)

    # Smaller, more refined corner dot
    draw = ImageDraw.Draw(canvas)
    dot_r = max(3, size // 32)
    margin = max(8, size // 16)
    draw.ellipse(
        [(size - margin - dot_r * 2, margin),
         (size - margin, margin + dot_r * 2)],
        fill=GOLD,
    )

    # Round corners
    mask = rounded_mask(size, 0.16)
    rounded = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rounded.paste(canvas, (0, 0), mask)
    return rounded


def variant_b(size: int = 512, padding_ratio: float = 0.18) -> Image.Image:
    """B — Radial gradient (blue -> ink) + white TC + gold glow ring."""
    canvas = Image.new("RGBA", (size, size), INK)
    cx, cy = size // 2, size // 2
    max_r = int(size * 0.75)

    # Radial gradient: center brighter blue, edges ink
    px = canvas.load()
    for y in range(size):
        for x in range(size):
            dx, dy = x - cx, y - cy
            d = (dx * dx + dy * dy) ** 0.5
            t = min(1.0, d / max_r)
            # Blend BLUE_DEEP (center) -> INK (edge)
            r = int(BLUE_DEEP[0] * (1 - t) + INK[0] * t)
            g = int(BLUE_DEEP[1] * (1 - t) + INK[1] * t)
            b = int(BLUE_DEEP[2] * (1 - t) + INK[2] * t)
            px[x, y] = (r, g, b, 255)

    # Gold thin ring (subtle glow)
    ring = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    ring_width = max(2, size // 96)
    margin = int(size * 0.06)
    rd.ellipse(
        [(margin, margin), (size - margin, size - margin)],
        outline=GOLD,
        width=ring_width,
    )
    # Blur for glow
    glow = ring.filter(ImageFilter.GaussianBlur(radius=size // 64))
    canvas.alpha_composite(glow)
    canvas.alpha_composite(ring)

    # Logo
    logo = load_logo_white()
    scaled, x_off, y_off = fit_logo(logo, size, padding_ratio)
    canvas.paste(scaled, (x_off, y_off), scaled)

    # Round corners
    mask = rounded_mask(size, 0.20)
    rounded = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rounded.paste(canvas, (0, 0), mask)
    return rounded


def variant_c(size: int = 512, padding_ratio: float = 0.20) -> Image.Image:
    """C — Premium: dark bg + solid gold border + white TC (tight, sharp)."""
    canvas = Image.new("RGBA", (size, size), INK)

    # Gold border (inset, sharp)
    draw = ImageDraw.Draw(canvas)
    border_w = max(4, size // 28)
    inset = border_w // 2
    # Draw rounded border
    r = int(size * 0.20)
    draw.rounded_rectangle(
        [(inset, inset), (size - 1 - inset, size - 1 - inset)],
        radius=r,
        outline=GOLD,
        width=border_w,
    )

    # Logo (slightly larger padding so it doesn't touch the border)
    logo = load_logo_white()
    scaled, x_off, y_off = fit_logo(logo, size, padding_ratio)
    canvas.paste(scaled, (x_off, y_off), scaled)

    # Apply rounded corner mask so the outer bg is transparent
    mask = rounded_mask(size, 0.20)
    rounded = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rounded.paste(canvas, (0, 0), mask)
    return rounded


def fetch_pollinations(prompt: str, width: int = 512, height: int = 512, seed: int = 42) -> Image.Image:
    """Fetch AI image from pollinations.ai (no API key)."""
    url = (
        f"https://image.pollinations.ai/prompt/{quote(prompt)}"
        f"?width={width}&height={height}&seed={seed}&nologo=true&model=flux"
    )
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (Tezcode favicon generator)"})
    print(f"[D] Fetching pollinations: {url[:120]}...")
    with urlopen(req, timeout=120) as resp:
        data = resp.read()
    img = Image.open(BytesIO(data)).convert("RGBA")
    print(f"[D] Got {img.size}, mode {img.mode}, bytes {len(data)}")
    return img


def variant_d(size: int = 512) -> Image.Image:
    """D — AI generated via pollinations.ai, cropped/centered."""
    prompt = (
        "modern minimalist tech logo, TC monogram letters, dark navy background, "
        "white letterforms, gold accent dot, sharp geometric, premium SaaS aesthetic, "
        "centered icon design, no text outside logo, vector style, app icon"
    )
    try:
        raw = fetch_pollinations(prompt, 512, 512, seed=42)
    except Exception as e:
        print(f"[D] Pollinations fetch failed: {e}; using fallback variant_a")
        return variant_a(size)

    # Center-crop to square then resize to size
    w, h = raw.size
    s = min(w, h)
    left = (w - s) // 2
    top = (h - s) // 2
    cropped = raw.crop((left, top, left + s, top + s)).resize((size, size), Image.LANCZOS)

    # Apply rounded mask to match other variants
    mask = rounded_mask(size, 0.18)
    rounded = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rounded.paste(cropped, (0, 0), mask)
    return rounded


def save_variants() -> dict[str, Path]:
    """Generate and save 4 variants at 512px."""
    out = {}
    a = variant_a(512)
    a.save(OUT_VARIANTS / "v1-current.png", "PNG")
    out["A"] = OUT_VARIANTS / "v1-current.png"
    print(f"[A] Saved {out['A']}")

    b = variant_b(512)
    b.save(OUT_VARIANTS / "v2-gradient-glow.png", "PNG")
    out["B"] = OUT_VARIANTS / "v2-gradient-glow.png"
    print(f"[B] Saved {out['B']}")

    c = variant_c(512)
    c.save(OUT_VARIANTS / "v3-gold-border.png", "PNG")
    out["C"] = OUT_VARIANTS / "v3-gold-border.png"
    print(f"[C] Saved {out['C']}")

    d = variant_d(512)
    d.save(OUT_VARIANTS / "v4-ai-pollinations.png", "PNG")
    out["D"] = OUT_VARIANTS / "v4-ai-pollinations.png"
    print(f"[D] Saved {out['D']}")

    return out


def apply_chosen(choice: str = "C") -> None:
    """Apply chosen variant to icon.png / apple-icon.png / favicon.ico."""
    factories = {
        "A": variant_a,
        "B": variant_b,
        "C": variant_c,
    }
    if choice not in factories:
        raise SystemExit(f"Bad choice {choice}; only A/B/C supported for final apply")
    factory = factories[choice]

    icon = factory(512)
    icon.save(OUT_APP / "icon.png", "PNG")
    print(f"[APPLY] {OUT_APP / 'icon.png'} (512)")

    apple = factory(180)
    apple.save(OUT_APP / "apple-icon.png", "PNG")
    print(f"[APPLY] {OUT_APP / 'apple-icon.png'} (180)")

    # Multi-size ICO — at tiny sizes the border/glow get muddy, so use less padding
    sizes_ico = [(16, 16), (32, 32), (48, 48)]
    # For ICO use a tighter padding variant (border-only style still readable)
    # Generate one large source then let PIL's `sizes=` parameter rescale it,
    # which is the only path that correctly embeds multiple frames.
    if choice == "C":
        base = variant_c(256, padding_ratio=0.14)
    elif choice == "B":
        base = variant_b(256, padding_ratio=0.14)
    else:
        base = variant_a(256, padding_ratio=0.10)

    ico_path = OUT_PUBLIC / "favicon.ico"
    base.save(ico_path, format="ICO", sizes=sizes_ico)
    print(f"[APPLY] {ico_path} (multi {sizes_ico})")


if __name__ == "__main__":
    variants = save_variants()
    print()
    print("=== 4 variants saved ===")
    for k, v in variants.items():
        print(f"  {k}: {v}")
    print()
    choice = sys.argv[1] if len(sys.argv) > 1 else "C"
    print(f"=== Applying chosen variant: {choice} ===")
    apply_chosen(choice)
    print("Done.")
