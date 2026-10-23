# Website product images

Real CarryOver captures from the existing App Store screenshot fixture. The
website composes these images and device frames in HTML/CSS, without simulated
app UI or a baked light-theme backdrop.

Regenerate from the main CarryOver project (requires `cwebp`):

```sh
node scripts/export_product_images.js /path/to/CarryOver
```

The exporter resizes/encodes images only; it does not run the app or alter the
App Store screenshots. Captures come from `maestro_screenshots/` and
`macos_screenshots/raw/`. Device artwork uses the same iPhone frame as the App
Store pipeline and the Apple Design Resources MacBook Pro frame in
`preview_assets/apple_product_bezels/`. Retain the accompanying Apple license.
Set `CARRYOVER_IPHONE_FRAME` to override the iPhone artwork's source location.
