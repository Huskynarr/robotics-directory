"""Offline comparison refreshes preserve source identities and review boundaries."""
from copy import deepcopy
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location('gap_refresh', ROOT / 'scripts/refresh-competitor-gaps.py')
REFRESH = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(REFRESH)


class GapRefreshTests(unittest.TestCase):
    def setUp(self):
        self.catalog = [{'manufacturer': 'Maker A', 'model': 'NEO', 'category': 'humanoid', 'file': 'humanoid.csv'}]
        self.inventory = {
            'source': 'https://example.com/directory', 'fetchedAt': '2026-11-01T12:00:00Z',
            'brands': [{'name': 'Maker B', 'website': 'https://example.com/maker-b', 'categories': ['service'],
                        'modelCount': 1, 'sourceUrls': ['https://example.com/company/b']}],
            'models': [{'brand': 'Maker B', 'model': 'NEO', 'category': 'service', 'entryType': 'model',
                        'sourceUrls': ['https://example.com/robot/1'], 'officialProductUrl': 'https://example.com/maker-b',
                        'officialProductUrlStatus': 'candidate', 'features': ['service tasks'], 'usp': 'service tasks'}],
            'unclear': [{'listingId': 'listing-1', 'name': 'Robot', 'company': 'Maker B', 'category': 'service',
                         'sourceUrl': 'https://example.com/robot/2'}],
        }
        self.coverage = {
            'generatedAt': '2026-11-02T10:00:00Z', 'catalog': {'models': 1, 'manufacturers': 1},
            'buyandrentrobots': {'counts': {'missing': 1}, 'models': [dict(
                brand='Maker B', model='NEO', sourceUrls=['https://example.com/robot/1'], status='missing', catalogIds=[])]},
            'listingReviews': {'entries': [], 'unreviewedListings': deepcopy(self.inventory['unclear'])},
            'companyCoverage': {'unrepresentedNames': []},
        }

    def report(self):
        return REFRESH.build_gap_report(self.inventory, self.catalog, self.coverage, '2026-11-02T11:00:00Z')

    def test_refresh_is_offline_keeps_snapshot_dates_and_does_not_change_inputs(self):
        before = deepcopy((self.inventory, self.catalog, self.coverage))
        with patch.object(REFRESH.COLLECTOR, 'fetch', side_effect=AssertionError('network')):
            result = self.report()
        self.assertEqual((self.inventory, self.catalog, self.coverage), before)
        self.assertEqual(result['fetchedAt'], '2026-11-01T12:00:00Z')
        self.assertEqual(result['comparedAt'], '2026-11-02T11:00:00Z')
        self.assertEqual(result['networkRequests'], 0)
        self.assertEqual(result['counts']['strictUnresolvedModelMentions'], 1)
        self.assertFalse(result['models'][0]['officialProductUrlVerified'])

    def test_reviewed_component_remains_a_heuristic_candidate_without_a_robot_gap(self):
        entry = self.coverage['buyandrentrobots']['models'][0]
        entry.update(status='reviewed-component', note='A controller, not a complete robot')
        self.coverage['buyandrentrobots']['counts'] = {'reviewed-component': 1}
        result = self.report()
        self.assertEqual(result['counts']['missingModels'], 1)
        self.assertEqual(result['counts']['strictUnresolvedModelMentions'], 0)
        self.assertEqual(result['models'][0]['strictReview']['status'], 'reviewed-component')

    def test_original_unclear_listing_is_preserved_after_a_review(self):
        entry = deepcopy(self.inventory['unclear'][0])
        entry.update(kind='non_robot_service', note='Training service')
        self.coverage['listingReviews'] = {'entries': [entry], 'unreviewedListings': []}
        result = self.report()
        self.assertEqual(len(result['unresolved']), 1)
        self.assertEqual(result['unresolved'][0]['reviewStatus'], 'reviewed')
        self.assertEqual(result['strictUnresolvedListings'], [])

    def test_rejects_stale_catalog_models_source_urls_and_listing_identities(self):
        cases = [
            lambda: self.coverage['catalog'].update(models=2),
            lambda: self.coverage['buyandrentrobots']['models'][0].update(model='Changed'),
            lambda: self.coverage['buyandrentrobots']['models'][0].update(sourceUrls=['https://example.com/changed']),
            lambda: self.coverage['listingReviews']['unreviewedListings'][0].update(company='Changed'),
        ]
        original = deepcopy(self.coverage)
        for mutate in cases:
            self.coverage = deepcopy(original)
            mutate()
            with self.assertRaises(ValueError):
                self.report()

    def test_failed_refresh_preserves_existing_file_and_inventory(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            inventory = root / 'inventory.json'
            inventory.write_text(json.dumps(self.inventory))
            original = inventory.read_bytes()
            coverage = root / 'coverage.json'
            coverage.write_text(json.dumps(self.coverage))
            (root / 'humanoid.csv').write_text('manufacturer,model,category\nMaker A,NEO,humanoid\nMaker A,Other,humanoid\n')
            output = root / 'gaps.json'
            output.write_text('{"keep":"previous result"}')
            with self.assertRaisesRegex(ValueError, 'stale'):
                REFRESH.main(['--inventory', str(inventory), '--coverage', str(coverage),
                              '--data-dir', str(root), '--out', str(output)])
            self.assertEqual(output.read_text(), '{"keep":"previous result"}')
            self.assertEqual(inventory.read_bytes(), original)


if __name__ == '__main__':
    unittest.main()
