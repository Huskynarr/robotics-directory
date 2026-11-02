#!/usr/bin/env python3
"""Refresh comparison hints from saved inventory, without fetching or changing it.

The heuristic list is separate from reviewed identity decisions. A missing hint is
not proof of a missing robot; components, aliases and families retain their audit
status. Source dates remain the dates of the saved inventory.
"""

from __future__ import annotations

import argparse
from copy import deepcopy
import hashlib
import importlib.util
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("buy_collector", ROOT / "scripts/collect-buyandrent.py")
COLLECTOR = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(COLLECTOR)


def build_gap_report(inventory, catalog, coverage, generated_at):
    if coverage["catalog"]["models"] != len(catalog):
        raise ValueError("Coverage catalog is stale; run audit-competitor-coverage.mjs first")
    if coverage["catalog"]["manufacturers"] != len({row["manufacturer"] for row in catalog}):
        raise ValueError("Coverage manufacturer inventory is stale")
    source_models = {(row["brand"], row["model"]): row for row in inventory["models"]}
    strict_models = {(row["brand"], row["model"]): row for row in coverage["buyandrentrobots"]["models"]}
    if len(source_models) != len(inventory["models"]) or source_models.keys() != strict_models.keys():
        raise ValueError("Coverage model identities differ from saved inventory")
    for key, row in source_models.items():
        if set(row["sourceUrls"]) != set(strict_models[key]["sourceUrls"]):
            raise ValueError("Coverage model source URLs changed")
    unclear = {row["listingId"]: row for row in inventory["unclear"]}
    reviewed = {row["listingId"]: row for row in coverage["listingReviews"]["entries"]}
    pending = {row["listingId"]: row for row in coverage["listingReviews"]["unreviewedListings"]}
    if reviewed.keys() & pending.keys() or reviewed.keys() | pending.keys() != unclear.keys():
        raise ValueError("Coverage listing identities differ from saved inventory")
    for key, row in {**reviewed, **pending}.items():
        if any(row[field] != unclear[key][field] for field in ["name", "company", "sourceUrl"]):
            raise ValueError("Coverage listing source identity changed")

    by_brand, global_models = COLLECTOR.build_catalog_index(catalog)
    models = []
    for row in inventory["models"]:
        if not row.get("isConcreteModel", True):
            continue
        status, _ = COLLECTOR.match_catalog(row["model"], row["brand"], by_brand, global_models)
        if status != "none":
            continue
        models.append({
            "model": row["model"], "brand": row["brand"], "category": row["category"],
            "entryType": row["entryType"],
            "competitorUrl": row["sourceUrls"][0] if row["sourceUrls"] else "",
            "allCompetitorUrls": deepcopy(row["sourceUrls"]),
            "officialProductUrl": row["officialProductUrl"],
            "officialProductUrlStatus": row["officialProductUrlStatus"],
            "officialProductUrlVerified": False,
            "features": deepcopy(row["features"]), "usp": row["usp"],
            "matchStatus": "no same-brand exact or fuzzy hint; this is not proof of a missing model",
            "strictReview": deepcopy(strict_models[(row["brand"], row["model"])]),
        })
    catalog_brands = {COLLECTOR.brand_key(row["manufacturer"]) for row in catalog}
    brands = []
    for row in sorted(inventory["brands"], key=lambda value: value["name"].lower()):
        if COLLECTOR.brand_key(row["name"]) in catalog_brands:
            continue
        brands.append({
            "brand": row["name"], "website": row["website"],
            "officialWebsiteStatus": "candidate; brand site, not independently verified",
            "categories": deepcopy(row["categories"]), "modelCount": row["modelCount"],
            "missingModelCount": sum(COLLECTOR.brand_key(model["brand"]) == COLLECTOR.brand_key(row["name"]) for model in models),
            "competitorUrl": row["sourceUrls"][0] if row["sourceUrls"] else "",
            "sourceUrls": deepcopy(row["sourceUrls"]),
            "scope": "No same-key catalog manufacturer; aliases, company roles and reviewed corrections are separate",
        })
    unresolved = [{
        "name": row["name"], "company": row["company"], "category": row["category"],
        "sourceUrl": row["sourceUrl"], "listingId": row["listingId"],
        "reason": "Original listing was unclear; current review status is separate",
        "reviewStatus": "reviewed" if row["listingId"] in reviewed else "identity-review-needed",
        "strictReview": deepcopy(reviewed.get(row["listingId"])),
    } for row in inventory["unclear"]]
    remaining = [deepcopy(row) for row in coverage["buyandrentrobots"]["models"]
                 if row["status"] in ["missing", "family-covered", "family-or-variant-review"]]
    return {
        "schemaVersion": 2, "source": inventory["source"], "fetchedAt": inventory["fetchedAt"],
        "comparedAt": generated_at, "networkRequests": 0,
        "scope": "Saved-source comparison only. Legacy missingModels/missingBrands counts are heuristic hints, not verified gaps. Strict identity decisions and unresolved queues are separate. No source refetch or full product certification.",
        "comparison": {
            "catalogFiles": sorted({row["file"] for row in catalog}), "catalogRows": len(catalog),
            "catalogManufacturers": len(catalog_brands),
            "catalogManufacturerSpellings": len({row["manufacturer"] for row in catalog}),
            "method": "same-brand normalized exact match, then same-brand SequenceMatcher >= 0.92; candidate hints only",
        },
        "strictComparison": {
            "coverageGeneratedAt": coverage["generatedAt"], "catalog": deepcopy(coverage["catalog"]),
            "modelStatusCounts": deepcopy(coverage["buyandrentrobots"]["counts"]),
            "unrepresentedSourceNames": deepcopy(coverage["companyCoverage"]["unrepresentedNames"]),
            "scope": "Reviewed families/context references do not establish exact configuration; company representation is not manufacturer certification",
        },
        "counts": {
            "missingModels": len(models), "missingBrands": len(brands),
            "heuristicModelCandidates": len(models), "heuristicBrandCandidates": len(brands),
            "competitorModels": len(inventory["models"]), "competitorBrands": len(inventory["brands"]),
            "strictUnresolvedModelMentions": len(remaining), "sourceUnclearListings": len(unclear),
            "reviewedUnclearListings": len(reviewed), "strictUnresolvedListings": len(pending),
        },
        "models": models, "brands": brands, "unresolved": unresolved,
        "strictUnresolvedModels": remaining,
        "strictUnresolvedListings": deepcopy(list(pending.values())),
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--inventory", default="data/competitors/buyandrentrobots.json")
    parser.add_argument("--coverage", default="data/competitors/coverage.json")
    parser.add_argument("--data-dir", default="data")
    parser.add_argument("--out", default="data/competitors/buyandrentrobots-gaps.json")
    args = parser.parse_args(argv)
    inventory_body, coverage_body = Path(args.inventory).read_bytes(), Path(args.coverage).read_bytes()
    report = build_gap_report(json.loads(inventory_body), COLLECTOR.csv_catalog(args.data_dir),
                              json.loads(coverage_body), COLLECTOR.utc_now())
    report["inputSha256"] = dict(inventory=hashlib.sha256(inventory_body).hexdigest(),
                                coverage=hashlib.sha256(coverage_body).hexdigest())
    output = Path(args.out)
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = output.with_name(output.name + ".tmp")
    temporary.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    os.replace(temporary, output)
    print(json.dumps({"catalogRows": report["comparison"]["catalogRows"], **report["counts"], "networkRequests": 0}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
