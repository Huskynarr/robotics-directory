#!/usr/bin/env python3
"""Merge researched robot data (JSON) into the per-category CSV files.

Usage: python3 scripts/merge-robots.py <research.json>

The JSON file must contain {"robots": [...], "updates": [...]} as returned by
the research workflow. New robots are appended to data/<category>.csv after
dedup against existing manufacturer+model slugs; updates fill empty fields of
existing rows only (never overwrite non-empty values).
"""
import csv
import json
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
COLUMNS = [
    "category", "manufacturer", "model", "price", "weight", "size",
    "batteryLife", "maxRuntime", "tags", "handType", "dof", "payload",
    "speed", "terrain", "ipRating", "ageRange", "website", "image",
    "video", "gallery", "description", "releaseDate",
]
CATEGORIES = ["humanoid", "quadruped", "companion", "cleaning", "outdoor", "educational", "smarthome"]


def slugify(s: str) -> str:
    s = s.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss"), ("+", " plus ")):
        s = s.replace(a, b)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def robot_id(manufacturer: str, model: str) -> str:
    return slugify(f"{manufacturer} {model}")


def load_csv(path: Path):
    with path.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def save_csv(path: Path, rows):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=COLUMNS, extrasaction="ignore", lineterminator="\n")
        w.writeheader()
        w.writerows(rows)


def normalize_model_key(manufacturer: str, model: str) -> str:
    # Loose key to catch near-duplicates like "ECOVACS" vs "Ecovacs"
    return re.sub(r"[^a-z0-9]", "", (manufacturer + model).lower())


def main(json_path: str) -> None:
    payload = json.loads(Path(json_path).read_text(encoding="utf-8"))
    robots = payload.get("robots", [])
    updates = payload.get("updates", [])

    files = {c: DATA / f"{c}.csv" for c in CATEGORIES}
    tables = {c: load_csv(p) for c, p in files.items()}

    existing_ids = set()
    loose_keys = set()
    for rows in tables.values():
        for r in rows:
            existing_ids.add(robot_id(r["manufacturer"], r["model"]))
            loose_keys.add(normalize_model_key(r["manufacturer"], r["model"]))

    added, skipped = [], []
    for bot in robots:
        cat = (bot.get("category") or "").strip()
        man = (bot.get("manufacturer") or "").strip()
        mod = (bot.get("model") or "").strip()
        if cat not in CATEGORIES or not man or not mod:
            skipped.append((man, mod, "invalid category/fields"))
            continue
        rid = robot_id(man, mod)
        lkey = normalize_model_key(man, mod)
        if rid in existing_ids or lkey in loose_keys:
            skipped.append((man, mod, "duplicate"))
            continue
        existing_ids.add(rid)
        loose_keys.add(lkey)
        row = {c: (bot.get(c) or "").strip() for c in COLUMNS}
        row["category"] = cat
        row["image"] = row.get("image", "")
        tables[cat].append(row)
        added.append(f"{cat}: {man} {mod}")

    updated, not_found = [], []
    index = {}
    for cat, rows in tables.items():
        for r in rows:
            index[robot_id(r["manufacturer"], r["model"])] = r
    for up in updates:
        rid = robot_id(up.get("manufacturer", ""), up.get("model", ""))
        row = index.get(rid)
        if row is None:
            not_found.append(rid)
            continue
        changed = []
        for key, val in (up.get("fields") or {}).items():
            if key not in COLUMNS or key in ("manufacturer", "model", "category"):
                continue
            val = (val or "").strip()
            cur = (row.get(key) or "").strip()
            if val and (not cur or cur.startswith("N/A") or cur == "-"):
                row[key] = val
                changed.append(key)
        if changed:
            updated.append(f"{rid}: {', '.join(changed)}")

    for cat, p in files.items():
        save_csv(p, tables[cat])

    print(f"Added {len(added)} robots:")
    for a in added:
        print("  +", a)
    print(f"\nSkipped {len(skipped)}:")
    for m, mo, why in skipped:
        print(f"  - {m} {mo} ({why})")
    print(f"\nUpdated {len(updated)} existing rows:")
    for u in updated:
        print("  *", u)
    if not_found:
        print(f"\nUpdates with no matching row: {len(not_found)}: {', '.join(not_found)}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
