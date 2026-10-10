"""Validate generated SEO and multilingual content without third-party packages."""

import hashlib
import json
import subprocess
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[1]
SITE = "https://carryover.luopeike.com"
PRODUCT = json.loads((ROOT / "content/product.json").read_text())
DATES = json.loads((ROOT / "content/page-dates.json").read_text())
LOCALES = {
    "en-US": "en", "zh-Hans": "zh-Hans", "zh-Hant": "zh-Hant",
    "ja": "ja", "ko": "ko", "de-DE": "de", "fr-FR": "fr",
    "es-MX": "es-MX", "it": "it", "id": "id",
}
PAGES = {"home": "", "help": "help", "support": "support", "privacy": "privacy-policy"}


class Page(HTMLParser):
    def __init__(self, content):
        super().__init__()
        self.lang = None
        self.links = []
        self.resources = []
        self.meta = {}
        self.h1_count = 0
        self.visible = []
        self.schema = []
        self.in_body = False
        self.in_script = False
        self.script_type = None
        self.script_data = []
        self.email_excluded = False
        self.email_scopes = []
        self.feed(content)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.lang = attrs.get("lang")
        if tag == "body":
            self.in_body = True
        if tag == "h1":
            self.h1_count += 1
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property"))] = attrs.get("content")
        if tag == "link":
            self.links.append(attrs)
            if attrs.get("rel") in {"stylesheet", "icon", "apple-touch-icon"}:
                self.resources.append(attrs["href"])
        if tag == "a":
            self.resources.append(attrs.get("href", ""))
            if attrs.get("href", "").startswith("mailto:"):
                self.email_scopes.append(self.email_excluded)
        if tag == "img":
            self.resources.append(attrs["src"])
        if tag == "script":
            self.in_script = True
            self.script_type = attrs.get("type")
            self.script_data = []

    def handle_endtag(self, tag):
        if tag == "body":
            self.in_body = False
        if tag == "script":
            if self.script_type == "application/ld+json":
                self.schema.extend(json.loads("".join(self.script_data))["@graph"])
            self.in_script = False

    def handle_data(self, data):
        if self.in_script:
            self.script_data.append(data)
        elif self.in_body:
            self.visible.append(data)
            if "cameoshell09@gmail.com" in data:
                self.email_scopes.append(self.email_excluded)

    def handle_comment(self, data):
        if data.strip() == "email_off":
            self.email_excluded = True
        elif data.strip() == "/email_off":
            self.email_excluded = False


def canonical_url(locale, slug):
    return f"{SITE}/{locale}/{slug}"


def local_path(url):
    path = urlsplit(url).path.lstrip("/")
    candidate = ROOT / path
    if candidate.is_dir():
        return candidate / "index.html"
    if not candidate.suffix:
        candidate = candidate.with_suffix(".html")
    return candidate


def check_pages():
    urls = set()
    for locale, lang in LOCALES.items():
        product = PRODUCT[locale]
        for key, slug in PAGES.items():
            url = canonical_url(locale, slug)
            urls.add(url)
            page = Page(local_path(url).read_text())
            assert page.lang == lang, url
            assert page.h1_count == 1, url
            assert page.meta["robots"] == "index, follow", url
            assert page.meta["description"], url
            assert page.email_scopes and all(page.email_scopes), (url, "unprotected public support email")
            assert not page.email_excluded, (url, "unclosed email exclusion")
            canonical = [link["href"] for link in page.links if link.get("rel") == "canonical"]
            assert canonical == [url], url
            alternates = {link["hreflang"]: link["href"] for link in page.links if "hreflang" in link}
            expected = {value: canonical_url(code, slug) for code, value in LOCALES.items()}
            expected["x-default"] = canonical_url("en-US", slug)
            assert alternates == expected, url
            assert page.meta["og:url"] == url, url
            assert {node["@type"] for node in page.schema} <= {
                "Person", "WebSite", "WebPage", "CreativeWork", "FAQPage", "BreadcrumbList"
            }, url
            assert len({node["@id"] for node in page.schema}) == len(page.schema), url
            web_page = next(node for node in page.schema if node["@type"] == "WebPage")
            assert web_page["dateModified"] == DATES[key], url
            assert date.fromisoformat(DATES[key]) <= date.today(), url
            for resource in page.resources:
                resolved = urljoin(url, resource)
                if urlsplit(resolved).netloc == urlsplit(SITE).netloc:
                    assert local_path(resolved).is_file(), (url, resource)
            visible = "\n".join(page.visible)
            if key in {"home", "help"}:
                assert product["downloadNote"] in visible, url
                markdown_path = ROOT / locale / ("index.md" if key == "home" else "help.md")
                assert product["downloadNote"] in markdown_path.read_text(), url
            if key == "home":
                app = next(node for node in page.schema if node["@type"] == "CreativeWork")
                assert app["description"] == product["description"]
                assert app["inLanguage"] == list(LOCALES.values())
                assert app["sameAs"] == ["https://apps.apple.com/app/id6755507048"]
                assert app["abstract"] == "\n".join(f"{heading}: {text}" for heading, text in product["features"])
                assert "aggregateRating" not in app and "review" not in app
                markdown = (ROOT / locale / "index.md").read_text()
                for heading, text in product["features"]:
                    assert heading in visible and text in visible, (url, heading)
                    assert heading in markdown and text in markdown, (url, heading)
                assert product["faq"][-1][1] in visible, url
            if key == "help":
                faq = next(node for node in page.schema if node["@type"] == "FAQPage")
                markdown = (ROOT / locale / "help.md").read_text()
                assert len(faq["mainEntity"]) == 8, url
                for question in faq["mainEntity"]:
                    answer = question["acceptedAnswer"]["text"]
                    assert question["name"] in visible and answer in visible, url
                    assert question["name"] in markdown and answer in markdown, url
                for heading, text in [product["selection"], product["confirm"], product["manual"], *product["manage"]]:
                    assert heading in visible and text in visible, (url, heading)
                    assert heading in markdown and text in markdown, (url, heading)
            if key in {"home", "help"}:
                alternate = next(link for link in page.links if link.get("type") == "text/markdown")
                assert local_path(alternate["href"]).is_file(), url
    return urls


def check_sitemap(urls):
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}
    entries = ElementTree.parse(ROOT / "sitemap.xml").findall("s:url", ns)
    assert len(entries) == 40
    assert {entry.findtext("s:loc", namespaces=ns) for entry in entries} == urls
    for entry in entries:
        url = entry.findtext("s:loc", namespaces=ns)
        locale, *rest = urlsplit(url).path.strip("/").split("/")
        slug = "/".join(rest)
        key = next(key for key, value in PAGES.items() if value == slug)
        assert entry.findtext("s:lastmod", namespaces=ns) == DATES[key], url
        alternates = {link.attrib["hreflang"]: link.attrib["href"] for link in entry.findall("x:link", ns)}
        expected = {lang: canonical_url(code, slug) for code, lang in LOCALES.items()}
        expected["x-default"] = canonical_url("en-US", slug)
        assert alternates == expected, url


def check_routing():
    aliases = {}
    for line in (ROOT / "_redirects").read_text().splitlines():
        if not line or line.startswith("#"):
            continue
        source, destination, status = line.split()
        assert status == "301", line
        assert source != destination and destination not in aliases, line
        assert local_path(SITE + destination).is_file(), line
        aliases[source] = destination
    assert len(aliases) == 48
    assert aliases["/"] == "/en-US/"
    not_found = Page((ROOT / "404.html").read_text())
    assert not_found.meta["robots"] == "noindex, follow"
    assert not_found.h1_count == 1
    assert "http-equiv" not in (ROOT / "404.html").read_text()
    assert (ROOT / "google8bdd3bd447b6e703.html").is_file()
    llms = (ROOT / "llms.txt").read_text()
    headers = (ROOT / "_headers").read_text()
    for locale in LOCALES:
        for file, slug in [("index.md", ""), ("help.md", "help")]:
            assert canonical_url(locale, file) in llms
            rule = f"/{locale}/{file}\n  Content-Type: text/markdown; charset=utf-8\n  X-Robots-Tag: noindex\n  Link: <{canonical_url(locale, slug)}>; rel=\"canonical\""
            assert rule in headers
    assert "Disallow" not in (ROOT / "robots.txt").read_text()


def snapshot():
    files = [ROOT / locale / file for locale in LOCALES for file in ["index.html", "help.html", "support.html", "privacy-policy.html", "index.md", "help.md"]]
    files += [ROOT / file for file in ["sitemap.xml", "robots.txt", "llms.txt", "_headers", "_redirects", "404.html", "style/base.css"]]
    return {str(file): hashlib.sha256(file.read_bytes()).hexdigest() for file in files}


if __name__ == "__main__":
    check_sitemap(check_pages())
    check_routing()
    before = snapshot()
    subprocess.run(["node", "generate_site.js"], cwd=ROOT, check=True)
    assert before == snapshot(), "Repeated generation changed output or content modification dates"
    print("PASS: 40 HTML pages, 20 Markdown mirrors, visible/schema content parity, sitemap, routing and deterministic generation")
