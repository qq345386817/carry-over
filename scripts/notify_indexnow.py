"""Preview changed canonical pages, or notify IndexNow once production is ready."""

import argparse
import json
import time
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
HOST = "carryover.luopeike.com"
ORIGIN = f"https://{HOST}"
KEY = "2de1a0426e544e16bbfb50ebab443a81"  # Public host ownership proof.
AGENT = f"CarryOver-IndexNow/1.0 (+{ORIGIN}/)"
NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"


def entries(xml):
    result = {}
    for row in ET.fromstring(xml).findall(NS + "url"):
        loc = row.findtext(NS + "loc", "")
        url = urlsplit(loc)
        date = row.findtext(NS + "lastmod")
        if (url.scheme != "https" or url.netloc != HOST or not url.path
                or url.query or url.fragment or loc in result or not date):
            raise ValueError(f"Invalid canonical sitemap entry: {loc!r}")
        result[loc] = date
    if not result:
        raise ValueError("Empty sitemap")
    return result


def changed(old, new):
    return sorted(url for url in old.keys() | new.keys() if old.get(url) != new.get(url))


def live(path):
    url = f"{ORIGIN}/{path}"
    req = Request(url, headers={"User-Agent": AGENT, "Cache-Control": "no-cache"})
    with urlopen(req, timeout=15) as response:
        if response.url != url:
            raise ValueError(f"Unexpected redirect: {url}")
        return response.read()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--before", type=Path, help="Sitemap before the deployment")
    group.add_argument("--urls", nargs="+", help="Explicit current canonical URLs")
    parser.add_argument("--submit", action="store_true", help="Default: offline preview")
    args = parser.parse_args()
    xml = (ROOT / "sitemap.xml").read_bytes()
    current = entries(xml)
    urls = changed(entries(args.before.read_bytes()), current) if args.before else sorted(set(args.urls))
    if args.urls and not set(urls) <= current.keys():
        parser.error("Explicit URLs must be present in the current sitemap")
    print(f"{len(urls)} changed URL(s):", *urls, sep="\n", flush=True)
    if not args.submit or not urls:
        return
    filename = KEY + ".txt"
    if (ROOT / filename).read_text().strip() != KEY:
        raise ValueError("Invalid local IndexNow verification file")
    for attempt in range(8):
        try:
            if live(filename).strip() == KEY.encode() and live("sitemap.xml") == xml:
                break
        except OSError as error:
            print(f"Production preflight: {error}", flush=True)
        if attempt == 7:
            raise SystemExit("Production key/sitemap not verified; no URLs sent")
        time.sleep(12)
    body = json.dumps({"host": HOST, "key": KEY, "urlList": urls}).encode()
    req = Request("https://api.indexnow.org/indexnow", data=body, headers={
        "User-Agent": AGENT, "Content-Type": "application/json; charset=utf-8"})
    with urlopen(req, timeout=30) as response:
        print(f"IndexNow HTTP {response.status}", flush=True)
        if response.status not in (200, 202):
            raise SystemExit("Unexpected IndexNow response")


if __name__ == "__main__":
    main()
