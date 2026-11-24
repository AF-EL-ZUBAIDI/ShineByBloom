"""Turn the raw files in media/ (git-ignored) into web-ready assets in public/media/.

  python scripts/prepare-media.py

Photos  -> public/media/<slug>-800.webp and <slug>-1600.webp (EXIF rotation applied)
Logo    -> public/media/logo-mask.png (alpha mask, coloured in CSS)
Videos  -> public/media/video/<slug>.mp4 with the AUDIO TRACK REMOVED, plus a poster
           image, and listed in src/data/videos.json so the site picks them up.

Requires: pip install pillow pillow-heif ; ffmpeg on PATH (only for videos).
"""
import json
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "media"
OUT = ROOT / "public" / "media"
VIDEO_OUT = OUT / "video"
MANIFEST = ROOT / "src" / "data" / "videos.json"

# slug -> source file. The slug is what the site references.
PHOTOS = {
    # hero
    "hero-peach-closeup": "IMG_7401.HEIC",
    "hero-pink-closeup": "IMG_0290.HEIC",
    "hero-beauty-closeup": "IMG_3269.HEIC",
    "hero-basket-gold": "IMG_5119.HEIC",
    "hero-basket-white": "IMG_7339.HEIC",
    "hero-basket-care": "IMG_7390.HEIC",
    "hero-red-butterflies": "640C518A-C314-4105-BE9A-54D69025E4FF.JPEG",
    "hero-blush-closeup": "IMG_4727.HEIC",
    "hero-perfume-closeup": "IMG_3876.HEIC",
    # beauty bouquets
    "beauty-makeup": "IMG_3229.HEIC",
    "beauty-perfumes": "IMG_3887.HEIC",
    "beauty-skincare": "IMG_4726.HEIC",
    "beauty-coral": "IMG_6503.HEIC",
    "beauty-pink-wrap": "IMG_2859.HEIC",
    "beauty-blush-wrap": "IMG_3046.HEIC",
    "beauty-gerbera": "IMG_2431.HEIC",
    "beauty-vanity": "IMG_8291.JPG",
    # baskets
    "basket-gold-handle": "IMG_5118.HEIC",
    "basket-haircare": "IMG_7389.HEIC",
    "basket-fuchsia": "IMG_8655.HEIC",
    "basket-lily": "A8885EF5-B7C2-441C-9AE0-275822EBF4DC.JPG",
    "basket-white-lily": "IMG_7346.HEIC",
    "basket-haircare-closeup": "IMG_7404.HEIC",
    "basket-pastel": "IMG_0319.HEIC",
    "basket-top": "IMG_7345.HEIC",
    # red roses
    "red-heart": "IMG_3820.HEIC",
    "red-perfume-hand": "IMG_4021.HEIC",
    "red-crown": "IMG_1642.HEIC",
    "red-lily-basket": "IMG_3152.HEIC",
    "red-lily-closeup": "IMG_3176.HEIC",
    "red-shell": "IMG_5320.HEIC",
    "red-ribbon-basket": "IMG_1578.HEIC",
    "red-black-basket": "162D497E-ADB9-4E0C-9461-7A56033649E1.JPG",
    # made to measure
    "custom-yellow": "IMG_4181.HEIC",
    "custom-bear": "IMG_3676.HEIC",
    "custom-dome": "IMG_4807.HEIC",
    "custom-pink-bouquet": "IMG_5084.HEIC",
    "custom-yellow-vanity": "IMG_7963.JPG",
    "custom-white-pink": "IMG_8412.HEIC",
    "custom-balloons": "IMG_0314.HEIC",
    # basket sizes
    "size-s": "IMG_0452.heic",
    "size-m": "IMG_0453.heic",
    "size-l": "IMG_0451.heic",
}
WIDTHS = (800, 1600)
LOGO = "A1EAA522-1D3F-4F73-9226-B3B81D1936E1.PNG"
VIDEO_EXT = {".mp4", ".mov", ".m4v", ".webm", ".avi", ".mkv"}


def photos():
    for slug, name in PHOTOS.items():
        src = SRC / name
        if not src.exists():
            print(f"  missing: {name}")
            continue
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        for w in WIDTHS:
            dst = OUT / f"{slug}-{w}.webp"
            if dst.exists() and dst.stat().st_mtime > src.stat().st_mtime:
                continue
            r = im.copy()
            if r.width > w:
                r = r.resize((w, round(r.height * w / r.width)), Image.LANCZOS)
            r.save(dst, "WEBP", quality=80, method=6)
        print(f"  {slug}")


def logo():
    src = SRC / LOGO
    if not src.exists():
        return
    im = Image.open(src).convert("RGBA")
    # crop to the visible artwork (ignore near-transparent stray pixels)
    im = im.crop(im.getchannel("A").point(lambda a: 255 if a > 40 else 0).getbbox())
    alpha = im.getchannel("A")
    mask = Image.new("RGBA", im.size, (0, 0, 0, 0))
    mask.putalpha(alpha)
    mask.save(OUT / "logo-mask.png", optimize=True)
    print("  logo-mask")


def videos():
    VIDEO_OUT.mkdir(parents=True, exist_ok=True)
    items = []
    for src in sorted(p for p in SRC.rglob("*") if p.suffix.lower() in VIDEO_EXT):
        slug = re.sub(r"[^a-z0-9]+", "-", src.stem.lower()).strip("-")
        mp4 = VIDEO_OUT / f"{slug}.mp4"
        poster = VIDEO_OUT / f"{slug}.jpg"
        if not mp4.exists() or mp4.stat().st_mtime < src.stat().st_mtime:
            subprocess.run(
                ["ffmpeg", "-y", "-loglevel", "error", "-i", str(src),
                 "-an",  # drop every audio track
                 "-vf", "scale='min(1080,iw)':-2", "-c:v", "libx264", "-crf", "26",
                 "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
                 str(mp4)],
                check=True,
            )
            subprocess.run(
                ["ffmpeg", "-y", "-loglevel", "error", "-ss", "0.5", "-i", str(mp4),
                 "-frames:v", "1", "-q:v", "4", str(poster)],
                check=True,
            )
        items.append({"src": f"/media/video/{slug}.mp4", "poster": f"/media/video/{slug}.jpg"})
        print(f"  video {slug} (muted)")
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(items, indent=2) + "\n", encoding="utf-8")
    print(f"  {len(items)} video(s) in manifest")


if __name__ == "__main__":
    if not SRC.exists():
        sys.exit("media/ folder not found")
    OUT.mkdir(parents=True, exist_ok=True)
    photos()
    logo()
    videos()
