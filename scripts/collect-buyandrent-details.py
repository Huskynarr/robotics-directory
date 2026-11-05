#!/usr/bin/env python3
"""Incremental, content-aware audit of public BuyAndRentRobots detail pages.

Only selected visible DOM fields are parsed. JavaScript fallback strings never
establish a missing product. Directory copy stays in local raw response files;
the committed ledger stores hashes, factual names and explicit review decisions.
"""

from __future__ import annotations

import argparse
import hashlib
from html.parser import HTMLParser
import importlib.util
import json
from pathlib import Path
import re
import time
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("buy_inventory", Path(__file__).with_name("collect-buyandrent.py"))
INVENTORY = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(INVENTORY)
FIELDS = {"heroTitle", "heroDesc", "coName", "heroCoBtn", "detailRows", "useCasesList"}
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


def digest(value: str | bytes) -> str:
    return hashlib.sha256(value.encode("utf-8") if isinstance(value, str) else value).hexdigest()


def normalized(value: str) -> str:
    return " ".join(value.split())


class DetailParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.text = {key: [] for key in FIELDS}
        self.links = {}
        self.occurrences = {key: 0 for key in FIELDS}
        self.hidden = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        key = attrs.get("id")
        hidden = "hidden" in attrs or attrs.get("aria-hidden") == "true" or bool(re.search(r"display\s*:\s*none|visibility\s*:\s*hidden", attrs.get("style", ""), re.I))
        if key in FIELDS:
            self.occurrences[key] += 1
            if hidden or any(item[2] for item in self.stack):
                self.hidden.add(key)
            if tag == "a":
                self.links[key] = attrs.get("href", "")
        if tag not in VOID:
            self.stack.append((tag, key, hidden))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                del self.stack[i:]
                break

    def handle_data(self, data):
        if any(tag in {"script", "style", "noscript"} or hidden for tag, _, hidden in self.stack):
            return
        for _, key, _ in self.stack:
            if key in FIELDS:
                self.text[key].append(data)

    def values(self):
        return {key: normalized(" ".join(parts)) for key, parts in self.text.items()}


def parse_detail(body: bytes, listing: dict, url: str, status: int | None) -> tuple[dict, dict]:
    """Extract visible facts and require the expected listing URL, name and provider."""
    parser = DetailParser()
    parser.feed(body.decode("utf-8", errors="replace"))
    values = parser.values()
    expected = f"https://buyandrentrobots.com/robot/{listing['listingId']}"
    location = urlparse(url)
    href = parser.links.get("heroCoBtn", "")
    company_path = urlparse(href).path
    fields = {
        "url": url == expected and location.hostname == "buyandrentrobots.com",
        "title": values["heroTitle"] == normalized(listing["name"]),
        "company": values["coName"] == normalized(listing["company"]),
        "companyLink": company_path == f"/companies/{listing['companySlug']}" and (not urlparse(href).netloc or urlparse(href).netloc == "buyandrentrobots.com"),
        "description": bool(values["heroDesc"]),
        "uniqueVisibleFields": all(parser.occurrences[key] == 1 and key not in parser.hidden for key in ["heroTitle", "heroDesc", "coName", "heroCoBtn"]),
    }
    result = "matched-identity" if status == 200 and all(fields.values()) else "needs-review"
    content = {
        "title": values["heroTitle"], "company": values["coName"], "companyPath": company_path,
        "descriptionSha256": digest(values["heroDesc"]), "descriptionCharacters": len(values["heroDesc"]),
        "detailTextSha256": digest(values["detailRows"]), "useCasesSha256": digest(values["useCasesList"]),
    }
    return content, {"status": result, "fields": fields, "scope": "Directory listing identity and visible content only; not manufacturer identity, availability or product performance verification."}


def update_check(ledger: dict, check: dict) -> None:
    """Keep prior attempts; retain a decision only when its exact content is unchanged."""
    previous = next((row for row in reversed(ledger["checks"]) if row["listingId"] == check["listingId"]), None)
    if previous and check["identity"]["status"] == "matched-identity" and previous["identity"]["status"] == "matched-identity" and previous["content"] == check["content"] and previous["inventory"] == check["inventory"]:
        check["review"] = previous.get("review", {"status": "pending"})
    else:
        check["review"] = {"status": "pending"}
    ledger["checks"].append(check)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--inventory", type=Path, default=ROOT / "data/competitors/buyandrentrobots.json")
    parser.add_argument("--out", type=Path, default=ROOT / "data/competitors/detail-content-reviews.json")
    parser.add_argument("--cache", type=Path, default=ROOT / "scratch/competitor-research/detail-content")
    parser.add_argument("--limit", type=int, default=25)
    parser.add_argument("--delay", type=float, default=2.0)
    parser.add_argument("--timeout", type=int, default=30)
    parser.add_argument("--offline", action="store_true", help="Parse cached bodies; make no network requests")
    parser.add_argument("--refresh", action="store_true", help="Also revisit listing IDs already attempted")
    args = parser.parse_args(argv)
    if args.limit < 1 or args.delay < 0:
        parser.error("limit must be positive and delay must be nonnegative")
    inventory = json.loads(args.inventory.read_text())
    ledger = json.loads(args.out.read_text()) if args.out.exists() else {"version": 1, "scope": "Per-URL directory content checks and explicit claim-review decisions, separate from catalog specification reviews.", "checks": []}
    attempted = {row["listingId"] for row in ledger["checks"]}
    pending = [row for row in inventory["listings"] if args.refresh or row["listingId"] not in attempted][:args.limit]
    args.cache.mkdir(parents=True, exist_ok=True)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    fetched = parsed = 0
    for listing in pending:
        listing_id = listing["listingId"]
        if not re.fullmatch(r"[a-f0-9-]{36}", listing_id):
            raise ValueError("Invalid listing UUID")
        body_path = args.cache / f"{listing_id}.html"
        meta_path = args.cache / f"{listing_id}.json"
        url = f"https://buyandrentrobots.com/robot/{listing_id}"
        if args.offline:
            if not body_path.exists() or not meta_path.exists():
                continue
            meta = json.loads(meta_path.read_text())
            body = body_path.read_bytes()
            if digest(body) != meta["bodySha256"] or meta["url"] != url:
                raise ValueError(f"Cached response integrity failure: {listing_id}")
        else:
            if fetched:
                time.sleep(args.delay)
            response = INVENTORY.fetch(url, timeout=args.timeout, retries=1)
            body = response["body"]
            meta = {key: response.get(key) for key in ["url", "status", "fetchedAt", "contentType", "error"]}
            meta["finalUrl"] = response.get("finalUrl", url)
            meta["bodySha256"] = digest(body)
            body_path.write_bytes(body)
            meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n")
            fetched += 1
        archive_path = args.cache / f"{listing_id}-{meta['bodySha256']}.html"
        if archive_path.exists() and digest(archive_path.read_bytes()) != meta['bodySha256']:
            raise ValueError(f"Archived response integrity failure: {listing_id}")
        if not archive_path.exists():
            archive_path.write_bytes(body)
        try:
            stored_path = str(archive_path.resolve().relative_to(ROOT))
        except ValueError:
            stored_path = str(archive_path)
        content, identity = parse_detail(body, listing, meta.get("finalUrl", url), meta["status"])
        check = {
            "listingId": listing_id,
            "inventory": {key: listing.get(key, "") for key in ["name", "company", "companySlug", "sourceUrl", "fetchedAt"]},
            "checkedAt": meta["fetchedAt"],
            "source": {**meta, "bodyBytes": len(body), "bodyFile": stored_path},
            "content": content, "identity": identity,
        }
        update_check(ledger, check)
        ledger["updatedAt"] = INVENTORY.utc_now()
        args.out.write_text(json.dumps(ledger, ensure_ascii=False, indent=2) + "\n")
        parsed += 1
        print(json.dumps({"listingId": listing_id, "name": listing["name"], "status": meta["status"], "identity": identity["status"]}), flush=True)
        if meta["status"] == 429:
            break
    print(json.dumps({"networkRequests": fetched, "parsedResponses": parsed, "totalAttempts": len(ledger["checks"]), "rateLimited": INVENTORY.RATE_LIMITED.is_set()}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
