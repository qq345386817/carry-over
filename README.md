# CarryOver website

Independent static website repository for https://carryover.luopeike.com.

## Generate and validate

```sh
node generate_site.js
python3 scripts/check_site.py
git diff --check
```

The generator writes the ten localized HTML page sets, sitemap, routing rules,
headers, `llms.txt` and localized Markdown product/help mirrors. Commit generated
public files with their sources: Cloudflare Pages publishes this static directory.
Pushes to `main` trigger deployment; check the public website after deployment.

## Website design

`style/tokens.css` holds the shared light/dark palette, based on the app's
`Color+PK.swift`: action teal `#087f73`, dark-mode mint `#30e3d5`, dark background
`#061b19`, and dark surface `#102622`. `style/site.css` is the hand-maintained
stylesheet for all current pages; it is not overwritten by site generation.
The generated `style/base.css` is retained for legacy references only.

The home page uses real localized captures and the existing device artwork,
layered in CSS so screenshots are not tied to a baked light background. The
image exporter in `scripts/export_product_images.js` refreshes the small WebP
files from the main app repository; see `images/product/README.md`. The committed
images let this website build independently without Xcode or the app repository.
UI icons in `images/icons/` are Lucide Static 0.468.0, with the upstream license.
No web fonts, analytics scripts, additional framework, or runtime dependencies
were added for the design refresh.

## Content sources

- `content/workflow.json`: capture-to-Mac workflow and screenshot captions.
- `content/product.json`: localized SEO titles, descriptions, feature facts,
  instructions and FAQs. Shared by HTML, JSON-LD and Markdown; edit this source,
  not the generated mirrors.
- `generate_site.js`: navigation, existing help/sync/support/privacy content,
  layouts and generation logic.
- `content/page-dates.json`: dates of substantive page changes. Advance only the
  changed page types when editing content. Never substitute each build's date.
  The privacy policy's displayed effective date is separate and is not changed
  by a rebuild or a metadata-only edit.

Search is Mac-only. Unfinished items stay in the inbox; completed items go to
History and can be restored. Reminders are system-delivered local notifications
and require permission. Sync requires the same Apple Account and available
iCloud services. Do not claim instant sync, AI summaries or full offline articles.
Do not invent reviews or aggregate ratings to satisfy a rich-result validator.
The app uses a general `CreativeWork` entity, not incomplete software rich-result
markup. Only add `SoftwareApplication` rich-result markup when real, verifiable
reviews are available and displayed consistently on the page.
The download note identifies the currently older direct DMG. Update all localized
notes when a matching DMG is actually published; do not describe an old package
as the latest release.

`llms.txt` is a discovery aid, not a ranking guarantee or a substitute for SEO.
Markdown mirrors remain crawlable but use `X-Robots-Tag: noindex` and an HTTP
canonical link to keep the human-facing HTML pages as the search results.
Crawler training permissions and Cloudflare security rules are not changed here.

## Routing and Search Console

Canonical pages use locale paths and clean URLs, for example `/zh-Hans/help`.
Legacy `.html` URLs redirect permanently; only canonical HTML URLs belong in the
sitemap. Root `/` redirects to `/en-US/`. The top-level `404.html` prevents
Cloudflare's SPA fallback from returning `200` for nonexistent URLs.
Keep the existing Google verification HTML file.
Public support email output uses Cloudflare's scoped `email_off` comments so
support links remain ordinary `mailto:` links without a decoder script. This
prevents internal links to `/cdn-cgi/l/email-protection`; that utility endpoint
is not a content page and should not be redirected to the homepage or forced
into the index. This does not change zone-wide security or crawler settings.

After a deployment, verify all sitemap targets return `200`, legacy paths
redirect without loops, unknown paths return `404`, and Markdown is served with
the expected content type and headers. Then inspect the actual GSC reports and
request recrawling/validation where appropriate. Expected redirected aliases
and intentional non-indexed Markdown are not pages that need to be forced into
the index. Deployment alone does not prove Google has re-crawled or resolved a
reported issue.
