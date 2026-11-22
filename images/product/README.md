# Website product images

Real CarryOver captures from the existing App Store screenshot fixture. The
website composes these images and device frames in HTML/CSS, without simulated
app UI or a baked light-theme backdrop.

The current home page pairs the optional capture note with the single matching
Mac search result for the same fictional walking study. Rebuild its WebPs
from the website root with Pillow and the localized native capture directory:

```sh
python3 scripts/export_recall_images.py ../reports/aso/2026-11-22/capture-recall-localized/raw
```

The two detail panels crop native pixels; they do not add or translate UI
text. Old screenshots remain available at their existing URLs.

Regenerate the earlier image set and device frames (requires `cwebp`):

```sh
node scripts/export_product_images.js /path/to/CarryOver
```

The exporter resizes/encodes images only; it does not run the app or alter the
App Store screenshots. Captures come from `maestro_screenshots/` and
`macos_screenshots/raw/`. Device artwork uses the same iPhone frame as the App
Store pipeline and the Apple Design Resources MacBook Pro frame in
`preview_assets/apple_product_bezels/`. Retain the accompanying Apple license.
Set `CARRYOVER_IPHONE_FRAME` to override the iPhone artwork's source location.
