from __future__ import annotations

import importlib.util
import sys
import unittest
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("news_radar", ROOT / "scripts" / "news-radar.py")
RADAR = importlib.util.module_from_spec(SPEC)
sys.modules["news_radar"] = RADAR
SPEC.loader.exec_module(RADAR)
CRAWLER = RADAR.load_crawler()


class NewsRadarTests(unittest.TestCase):
    def setUp(self) -> None:
        feed = (ROOT / "tests/python/fixtures/news-radar-feed.xml").read_bytes()
        self.items = RADAR.parse_feed(feed, "Fixture", "news")
        self.aliases = (
            CRAWLER.RobotAlias(manufacturer="Amazon", model="Ring Drone Cam", aliases=("amazon ring drone cam",)),
        )
        self.since = datetime(2026, 11, 9, tzinfo=timezone.utc)

    def select(self, seen: set[str] | None = None):
        return RADAR.select(self.items, set() if seen is None else seen, self.aliases, CRAWLER, self.since)

    def test_parses_rss_dates(self) -> None:
        self.assertEqual(len(self.items), 8)
        self.assertEqual(self.items[0].published, datetime(2026, 11, 11, 8, tzinfo=timezone.utc))

    def test_keeps_new_launches_and_groups_syndicated_copies(self) -> None:
        stories = self.select()
        leads = [story.lead.url for story in stories]
        self.assertIn("https://example.com/zephyr", leads)
        zephyr = next(story for story in stories if story.lead.url == "https://example.com/zephyr")
        self.assertEqual([item.url for item in zephyr.also], ["https://example.org/zephyr"])
        gongga = next(story for story in stories if story.lead.url == "https://example.cn/a")
        self.assertEqual([item.url for item in gongga.also], ["https://example.cn/b"])

    def test_drops_known_models_funding_old_and_off_topic_items(self) -> None:
        urls = {item.url for story in self.select() for item in [story.lead, *story.also]}
        for url in ("ring", "funding", "old", "pasta"):
            self.assertNotIn(f"https://example.com/{url}", urls)

    def test_reported_items_are_not_repeated(self) -> None:
        first = self.select()
        seen = {item.key for story in first for item in [story.lead, *story.also]}
        self.assertEqual(self.select(seen), [])

    def test_render_embeds_markers(self) -> None:
        text = RADAR.render(self.select())
        self.assertEqual(len(RADAR.MARKER.findall(text)), 4)


if __name__ == "__main__":
    unittest.main()
