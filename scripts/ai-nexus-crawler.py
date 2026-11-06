#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.13"
# dependencies = ["httpx2[http2,brotli,zstd]"]
# ///
"""Match the public AI Nexus YouTube feed against the local robot catalog.

Usage:
  uv run scripts/ai-nexus-crawler.py
  uv run scripts/ai-nexus-crawler.py --offline tests/python/fixtures/ai-nexus-feed.xml
"""

from __future__ import annotations

import csv
import re
import sys
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from pathlib import Path
from typing import Final


FEED_URL: Final = "https://www.youtube.com/feeds/videos.xml?channel_id=UCGEdlrtxWPKsZEPKV2Wsepg"
ATOM: Final = "http://www.w3.org/2005/Atom"
YT: Final = "http://www.youtube.com/xml/schemas/2015"
MEDIA: Final = "http://search.yahoo.com/mrss/"
NAMESPACES: Final = {"a": ATOM, "yt": YT, "media": MEDIA}
ROOT: Final = Path(__file__).resolve().parent.parent
DATA_DIR: Final = ROOT / "data"
REPORT_PATH: Final = ROOT / "reports" / "ai-nexus-youtube.md"
CSV_CATEGORIES: Final = (
    "humanoid", "quadruped", "companion", "cleaning",
    "outdoor", "educational", "smarthome", "robotic-arm",
)


@dataclass(frozen=True, slots=True)
class RobotAlias:
    """A catalog robot and the normalized phrases that identify it."""

    manufacturer: str
    model: str
    aliases: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class FeedEntry:
    """The searchable metadata for one YouTube feed entry."""

    video_id: str
    title: str
    description: str
    url: str
    published: str


class FetchError(RuntimeError):
    """A typed failure while retrieving or decoding the feed."""

    def __init__(self, reason: str) -> None:
        self.reason = reason
        super().__init__(reason)


def normalize(value: str) -> str:
    """Lowercase text and retain word separators for boundary matching."""
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9]+", " ", value.lower())).strip()


def load_aliases() -> tuple[RobotAlias, ...]:
    """Load manufacturer/model aliases from every catalog CSV."""
    aliases: list[RobotAlias] = []
    for category in CSV_CATEGORIES:
        with (DATA_DIR / f"{category}.csv").open(encoding="utf-8", newline="") as file:
            for row in csv.DictReader(file):
                manufacturer = row["manufacturer"].strip()
                model = row["model"].strip()
                phrases = [normalize(f"{manufacturer} {model}")]
                normalized_model = normalize(model)
                if len(normalized_model) >= 4:
                    phrases.append(normalized_model)
                if manufacturer.casefold() == "agibot" and model.casefold() == "a3":
                    phrases.append("expedition a3")
                aliases.append(RobotAlias(manufacturer, model, tuple(dict.fromkeys(phrases))))
    return tuple(aliases)


def fetch_feed(url: str = FEED_URL) -> bytes:
    """Fetch XML through the project-standard HTTP client."""
    try:
        import httpx2
    except ModuleNotFoundError as error:
        raise FetchError("httpx2 is unavailable; run the script with uv") from error
    try:
        with httpx2.Client(http2=True, follow_redirects=True, timeout=30.0) as client:
            response = client.get(url, headers={"User-Agent": "RoboticsDirectoryCrawler/1.0"})
            response.raise_for_status()
            content_type = response.headers.get("content-type", "").lower()
            if "xml" not in content_type:
                raise FetchError(f"feed returned non-XML content type: {content_type or 'unknown'}")
            return response.content
    except FetchError:
        raise
    except httpx2.HTTPError as error:
        raise FetchError(f"feed request failed: {error}") from error


def _text(element: ET.Element | None) -> str:
    return "" if element is None else (element.text or "").strip()


def parse_entries(xml_bytes: bytes) -> tuple[FeedEntry, ...]:
    """Parse Atom entries and reconstruct missing watch URLs from video IDs."""
    root = ET.fromstring(xml_bytes)
    entries: list[FeedEntry] = []
    for entry in root.findall("a:entry", NAMESPACES):
        video_id = _text(entry.find("yt:videoId", NAMESPACES))
        link = next(
            (item.get("href", "") for item in entry.findall("a:link", NAMESPACES)
             if item.get("rel") == "alternate"),
            "",
        )
        entries.append(FeedEntry(
            video_id=video_id,
            title=_text(entry.find("a:title", NAMESPACES)),
            description=_text(entry.find("media:group/media:description", NAMESPACES)),
            url=link or f"https://www.youtube.com/watch?v={video_id}",
            published=_text(entry.find("a:published", NAMESPACES)),
        ))
    return tuple(entries)


def match_robots(title: str, aliases: tuple[RobotAlias, ...]) -> tuple[RobotAlias, ...]:
    """Return catalog robots whose aliases occur as complete title words."""
    normalized_title = normalize(title)
    return tuple(
        robot for robot in aliases
        if any(re.search(rf"\b{re.escape(alias)}\b", normalized_title) for alias in robot.aliases)
    )


def build_report(
    entries: tuple[FeedEntry, ...],
    matches: dict[str, tuple[RobotAlias, ...]],
    channel_title: str,
    fetch_error: str = "",
) -> str:
    """Render a deterministic Markdown report from crawl observations."""
    lines = [f"# AI Nexus Crawl Report", "", f"Channel: {channel_title}", f"Feed: {FEED_URL}", ""]
    if fetch_error:
        lines.extend([f"**Crawl failed:** {fetch_error}", "", "No video matches were produced.", ""])
        return "\n".join(lines)
    lines.extend([f"Videos scanned: {len(entries)}", f"Videos with catalog matches: {len(matches)}", ""])
    if not matches:
        lines.extend(["No robot aliases matched in the feed.", ""])
        return "\n".join(lines)
    grouped: dict[RobotAlias, list[FeedEntry]] = {}
    for entry in entries:
        for robot in matches.get(entry.video_id, ()):
            grouped.setdefault(robot, []).append(entry)
    for robot in sorted(grouped, key=lambda item: (item.manufacturer.casefold(), item.model.casefold())):
        lines.extend([f"## {robot.manufacturer} {robot.model}", ""])
        for entry in grouped[robot]:
            lines.append(f"- [{entry.title}]({entry.url}) ({entry.published})")
        lines.append("")
    return "\n".join(lines)


def main(arguments: tuple[str, ...]) -> int:
    """Run the live or offline crawl and write the report."""
    output = REPORT_PATH
    offline: Path | None = None
    index = 0
    while index < len(arguments):
        argument = arguments[index]
        if argument == "--help":
            print(__doc__)
            return 0
        if argument == "--output" and index + 1 < len(arguments):
            index += 1
            output = Path(arguments[index])
        elif argument == "--offline" and index + 1 < len(arguments):
            index += 1
            offline = Path(arguments[index])
        else:
            raise FetchError(f"unknown or incomplete argument: {argument}")
        index += 1
    aliases = load_aliases()
    try:
        payload = offline.read_bytes() if offline is not None else fetch_feed()
        entries = parse_entries(payload)
        matches = {
            entry.video_id: match_robots(f"{entry.title} {entry.description}", aliases)
            for entry in entries
        }
        matches = {video_id: robots for video_id, robots in matches.items() if robots}
        report = build_report(entries, matches, "The AI Nexus")
    except (FetchError, OSError, ET.ParseError) as error:
        report = build_report((), {}, "The AI Nexus", str(error))
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(report, encoding="utf-8")
    print(f"Wrote {output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(tuple(sys.argv[1:])))
