from __future__ import annotations

import importlib.util
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
MODULE_PATH = ROOT / "scripts" / "ai-nexus-crawler.py"


class TestModuleLoadError(Exception):
    pass


SPEC = importlib.util.spec_from_file_location("ai_nexus_crawler", MODULE_PATH)
if SPEC is None or SPEC.loader is None:
    raise TestModuleLoadError(f"Cannot load {MODULE_PATH}")
MODULE = importlib.util.module_from_spec(SPEC)
sys.modules["ai_nexus_crawler"] = MODULE
SPEC.loader.exec_module(MODULE)


class AiNexusCrawlerTests(unittest.TestCase):
    def test_parse_entries_extracts_atom_metadata(self) -> None:
        feed = (ROOT / "tests/python/fixtures/ai-nexus-feed.xml").read_bytes()

        entries = MODULE.parse_entries(feed)

        self.assertEqual(len(entries), 2)
        self.assertEqual(entries[0].video_id, "FAKE001")
        self.assertEqual(entries[0].title, "AGIBOT A3 and Expedition A3 demo")
        self.assertEqual(entries[0].url, "https://www.youtube.com/watch?v=FAKE001")
        self.assertEqual(entries[1].description, "Featuring Xiaomi CyberOne V2.")

    def test_match_robots_uses_word_boundaries_and_aliases(self) -> None:
        aliases = [
            MODULE.RobotAlias(
                manufacturer="AGIBOT",
                model="A3",
                aliases=("agibot a3", "expedition a3"),
            )
        ]

        matches = MODULE.match_robots("AGIBOT A3 and Expedition A3 demo", aliases)
        unrelated = MODULE.match_robots("A3 robotics roundup", aliases)

        self.assertEqual(matches, tuple(aliases))
        self.assertEqual(unrelated, ())

    def test_word_only_model_names_require_the_maker(self) -> None:
        atlas = MODULE.RobotAlias(
            manufacturer="Boston Dynamics",
            model="Atlas",
            aliases=("boston dynamics atlas",),
            weak_aliases=("atlas",),
            maker_terms=MODULE.maker_terms("Boston Dynamics"),
        )

        self.assertEqual(MODULE.match_robots("Boston's new Atlas robot", [atlas]), (atlas,))
        self.assertEqual(MODULE.match_robots("An atlas of fighting robots", [atlas]), ())
        self.assertEqual(MODULE.maker_terms("Holiday Robotics"), ("holiday robotics", "holiday"))

    def test_build_report_contains_matches_and_source_urls(self) -> None:
        entries = [
            MODULE.FeedEntry(
                video_id="FAKE001",
                title="AGIBOT A3 demo",
                description="",
                url="https://www.youtube.com/watch?v=FAKE001",
                published="2026-08-15T10:00:00+00:00",
            )
        ]
        aliases = [
            MODULE.RobotAlias(
                manufacturer="AGIBOT",
                model="A3",
                aliases=("agibot a3", "expedition a3"),
            )
        ]

        report = MODULE.build_report(entries, {"FAKE001": aliases}, "The AI Nexus")

        self.assertIn("The AI Nexus", report)
        self.assertIn("AGIBOT A3", report)
        self.assertIn("https://www.youtube.com/watch?v=FAKE001", report)


if __name__ == "__main__":
    unittest.main()
