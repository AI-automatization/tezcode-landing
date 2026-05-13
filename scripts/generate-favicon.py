"""
Generate favicon variants from existing tezcode-logo.png.
- Replaces white background with Tezcode Ink (#0a0a0f)
- Inverts logo from black to white
- Outputs: icon.png (512), apple-icon.png (180), favicon.ico (16/32/48)
"""
from PIL import Image
import os

SRC = r"C:/Users/User/Desktop/tezcode-landing/public/tezcode-logo.png"
OUT_DIR_APP = r"C:/Users/User/Desktop/tezcode-landing/src/app"
OUT_DIR_PUBLIC = r"C:/Users/User/Desktop/tezcode-landing/public"

INK = (10, 10, 15, 255)         # --tc-ink
BLUE = (0, 64, 255, 255)        # --tc-blue
GOLD = (212, 160, 23, 255)      # --tc-gold

def make_variant(size: int, bg_color=INK, accent_color=None, padding_ratio=0.18):
    """Create square icon. accent_color = gold ring optional."""
    src = Image.open(SRC).convert("RGBA")
    # crop content (find non-white bbox)
    gray = src.convert("L")
    # White is ~255 — invert so logo is white pixels we can bbox
    inverted = Image.eval(gray, lambda v: 255 - v)
    bbox = inverted.getbbox()
    if bbox:
        cropped = src.crop(bbox)
    else:
        cropped = src

    # Convert logo: white pixels stay transparent, black pixels become white
    cw, ch = cropped.size
    new = Image.new("RGBA", (cw, ch), (0, 0, 0, 0))
    px = cropped.load()
    out_px = new.load()
    for y in range(ch):
        for x in range(cw):
            r, g, b, a = px[x, y]
            # If pixel is mostly white → transparent
            if r > 230 and g > 230 and b > 230:
                out_px[x, y] = (0, 0, 0, 0)
            else:
                # Black/dark logo → white pixel
                out_px[x, y] = (255, 255, 255, 255)

    # Scale logo to target with padding
    pad = int(size * padding_ratio)
    inner = size - 2 * pad
    # preserve aspect
    ratio = min(inner / cw, inner / ch)
    nw, nh = int(cw * ratio), int(ch * ratio)
    logo = new.resize((nw, nh), Image.LANCZOS)

    # Compose on rounded dark background
    canvas = Image.new("RGBA", (size, size), bg_color)
    # Center logo
    x_off = (size - nw) // 2
    y_off = (size - nh) // 2
    canvas.paste(logo, (x_off, y_off), logo)

    if accent_color:
        # Add corner accent dot (small)
        from PIL import ImageDraw
        draw = ImageDraw.Draw(canvas)
        dot_r = max(2, size // 28)
        margin = max(6, size // 18)
        draw.ellipse(
            [(size - margin - dot_r * 2, margin),
             (size - margin, margin + dot_r * 2)],
            fill=accent_color,
        )

    return canvas


# 512px icon.png (Next.js app/icon.png convention)
icon = make_variant(512, INK, GOLD, padding_ratio=0.16)
icon.save(os.path.join(OUT_DIR_APP, "icon.png"), "PNG")
print(f"Saved: {OUT_DIR_APP}/icon.png 512x512")

# 180px apple-icon.png
apple = make_variant(180, INK, GOLD, padding_ratio=0.18)
apple.save(os.path.join(OUT_DIR_APP, "apple-icon.png"), "PNG")
print(f"Saved: {OUT_DIR_APP}/apple-icon.png 180x180")

# favicon.ico — multi-resolution
sizes_ico = [16, 32, 48]
ico_images = [make_variant(s, INK, None, padding_ratio=0.10) for s in sizes_ico]
ico_path = os.path.join(OUT_DIR_PUBLIC, "favicon.ico")
ico_images[0].save(
    ico_path,
    format="ICO",
    sizes=[(s, s) for s in sizes_ico],
    append_images=ico_images[1:],
)
print(f"Saved: {ico_path} (multi-size)")

# Also new tezcode-logo.png dark variant (for Navbar use)
logo_dark = make_variant(256, INK, None, padding_ratio=0.14)
logo_dark.save(os.path.join(OUT_DIR_PUBLIC, "tezcode-logo-dark.png"), "PNG")
print(f"Saved: {OUT_DIR_PUBLIC}/tezcode-logo-dark.png 256x256")

# Transparent variant (white logo on transparent bg) — for use on light or dark
transparent = make_variant(256, (0, 0, 0, 0), None, padding_ratio=0.10)
transparent.save(os.path.join(OUT_DIR_PUBLIC, "tezcode-logo-white.png"), "PNG")
print(f"Saved: {OUT_DIR_PUBLIC}/tezcode-logo-white.png 256x256 transparent")
