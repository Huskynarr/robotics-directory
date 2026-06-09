#!/usr/bin/env python3
"""Import downloaded robot images: convert to webp, place under public/images,
and set the image column in the category CSVs.

Usage: python3 scripts/import-images.py <results.json> <download-dir>

results.json: {"results": [{"id": ..., "filename": ..., "ok": true}, ...]}
Only rows whose CSV image field is still empty are updated.
"""
import csv
import json
import re
import sys
import unicodedata
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MAX_WIDTH = 800
MIN_BYTES = 15000
MIN_DIM = 200


def slugify(s: str) -> str:
    s = s.lower()
    for a, b in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss"), ("+", " plus ")):
        s = s.replace(a, b)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def main(results_path: str, download_dir: str) -> None:
    results = json.loads(Path(results_path).read_text())["results"]
    dl = Path(download_dir)
    ok_files = {}
    for r in results:
        if not r.get("ok"):
            continue
        f = dl / Path(r.get("filename") or f"{r['id']}.jpg").name
        if not f.exists():
            cands = list(dl.glob(r["id"] + ".*"))
            if not cands:
                continue
            f = cands[0]
        ok_files[r["id"]] = f

    converted = {}
    for rid, src in sorted(ok_files.items()):
        if src.stat().st_size < MIN_BYTES:
            print(f"skip {rid}: too small ({src.stat().st_size} B)")
            continue
        try:
            im = Image.open(src)
            im.load()
        except Exception as e:
            print(f"skip {rid}: not an image ({e})")
            continue
        if im.width < MIN_DIM or im.height < MIN_DIM:
            print(f"skip {rid}: too small dimensions {im.size}")
            continue
        if im.mode in ("P", "LA"):
            im = im.convert("RGBA")
        if im.width > MAX_WIDTH:
            im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
        converted[rid] = im

    updated = 0
    for csv_path in sorted((ROOT / "data").glob("*.csv")):
        rows = list(csv.DictReader(csv_path.open()))
        cols = list(rows[0].keys())
        changed = False
        for row in rows:
            if (row.get("image") or "").strip():
                continue
            rid = slugify(f"{row['manufacturer']} {row['model']}")
            im = converted.get(rid)
            if im is None:
                continue
            rel = f"images/{row['category']}/{rid}.webp"
            out = ROOT / "public" / rel
            out.parent.mkdir(parents=True, exist_ok=True)
            im.save(out, "WEBP", quality=82, method=6)
            row["image"] = rel
            changed = True
            updated += 1
        if changed:
            with csv_path.open("w", newline="") as fh:
                w = csv.DictWriter(fh, fieldnames=cols, lineterminator="\n")
                w.writeheader()
                w.writerows(rows)

    print(f"converted {len(converted)} images, updated {updated} CSV rows")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
