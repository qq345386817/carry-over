"""Build the website's capture-to-search scenes from isolated native ASO screenshots."""
import argparse
import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]


def load(path, size):
    with Image.open(path) as source:
        if source.format != "PNG" or source.size != size:
            raise ValueError(f"Unexpected capture geometry: {path} ({source.size})")
        return source.convert("RGBA")


def webp(image, path, width):
    height = round(image.height * width / image.width)
    image.resize((width, height), Image.Resampling.LANCZOS).save(path, "WEBP", quality=92, method=6)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("raw", type=Path)
    args = parser.parse_args()
    for locale in json.loads((ROOT / "content/product.json").read_text()):
        target = ROOT / "images/product" / locale
        phone = load(args.raw / locale / "iphone-capture.png", (1320, 2868))
        mac = load(args.raw / locale / "mac-search.png", (1280, 944))
        webp(phone, target / "phone-share.webp", 600)
        webp(mac, target / "mac-search.webp", 1072)
        webp(phone.crop((98, 429, 1180, 893)), target / "note-detail.webp", 700)
        # Enlarge the actual query and matched row without redrawing their text.
        search = mac.crop((933, 102, 1267, 164))
        result = mac.crop((221, 218, 555, 269))
        detail = Image.new("RGB", (334, 123), "#f6f9fd")
        detail.paste(search, (0, 0))
        detail.paste(result, (0, 72))
        webp(detail, target / "mac-match.webp", 334)


if __name__ == "__main__":
    main()
