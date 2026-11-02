"""Regression checks for safe competitor snapshot refreshes; no network needed."""
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from urllib.error import HTTPError


ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location('buy_collector', ROOT / 'scripts/collect-buyandrent.py')
COLLECTOR = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(COLLECTOR)


class CollectorTests(unittest.TestCase):
    def tearDown(self):
        COLLECTOR.RATE_LIMITED.clear()

    def test_shared_model_name_does_not_resolve_a_different_manufacturer(self):
        catalog = [{'manufacturer': '1X Technologies', 'model': 'NEO'},
                   {'manufacturer': 'Pilz', 'model': 'PRBT 6'}]
        by_brand, global_models = COLLECTOR.build_catalog_index(catalog)
        self.assertEqual(COLLECTOR.match_catalog('NEO', 'Pilz', by_brand, global_models), ('none', []))
        status, rows = COLLECTOR.match_catalog('NEO', '1X Technologies', by_brand, global_models)
        self.assertEqual(status, 'exact')
        self.assertEqual(rows, [catalog[0]])

    def test_foreign_exact_name_does_not_override_a_same_brand_fuzzy_hint(self):
        catalog = [{'manufacturer': 'Maker A', 'model': 'Advanced Platform 100'},
                   {'manufacturer': 'Maker B', 'model': 'Advanced Platform 1000'}]
        by_brand, global_models = COLLECTOR.build_catalog_index(catalog)
        status, rows = COLLECTOR.match_catalog('Advanced Platform 1000', 'Maker A', by_brand, global_models)
        self.assertEqual(status, 'fuzzy')
        self.assertEqual(rows, [catalog[0]])

    def test_unrepresented_manufacturer_has_no_global_model_fallback(self):
        by_brand, global_models = COLLECTOR.build_catalog_index([{'manufacturer': 'Unitree', 'model': 'Go2'}])
        self.assertEqual(COLLECTOR.match_catalog('Go2', 'Unknown Provider', by_brand, global_models), ('none', []))

    def test_rate_limit_stops_retries_and_following_requests(self):
        error = HTTPError('https://example.com', 429, 'Too Many Requests', {}, None)
        with patch.object(COLLECTOR.urllib.request, 'urlopen', side_effect=error) as request:
            with patch.object(COLLECTOR.time, 'sleep') as sleep:
                self.assertEqual(COLLECTOR.fetch('https://example.com')['status'], 429)
                self.assertTrue(COLLECTOR.fetch('https://example.com/next')['skipped'])
                request.assert_called_once()
                sleep.assert_not_called()

    def test_incomplete_offline_refresh_preserves_previous_inventory(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            out, gaps = root / 'inventory.json', root / 'gaps.json'
            original = {'fetchedAt': '2026-11-01T12:00:00Z', 'keep': 'prior complete inventory'}
            out.write_text(json.dumps(original))
            gaps.write_text('{"keep":"prior gaps"}')
            descriptions = root / 'company-descriptions.json'
            descriptions.write_text('{"keep":"prior description snapshot"}')
            for name in ['robots', 'directory', 'robots-page']:
                (root / f'buyandrent-{name}.html').write_text('')
            (root / 'buyandrent-sitemap.html').write_text('<urlset></urlset>')
            (root / 'buyandrent-stats.json').write_text('{}')
            for name in ['robots', 'companies']:
                (root / f'buyandrent-{name}-api.json').write_text('[]')
            arguments = ['collector', '--offline', '--out', str(out), '--gaps', str(gaps),
                         '--scratch', str(root), '--data-dir', str(root)]
            with patch.object(COLLECTOR.sys, 'argv', arguments):
                with patch.object(COLLECTOR, 'fetch', side_effect=AssertionError('unexpected network')):
                    with patch.object(COLLECTOR.sys, 'stderr', io.StringIO()):
                        self.assertEqual(COLLECTOR.main(), 1)
            self.assertEqual(json.loads(out.read_text()), original)
            self.assertEqual(json.loads(gaps.read_text()), {'keep': 'prior gaps'})
            self.assertEqual(json.loads(descriptions.read_text()), {'keep': 'prior description snapshot'})

    def test_preserves_agricultural_differentiators_beyond_five_themes(self):
        features = COLLECTOR.features_from(
            'A fully autonomous solar-powered field robot for seeding and weeding with RTK GPS.',
            'service',
        )
        self.assertTrue({'solar power', 'RTK positioning', 'GPS positioning',
                         'crop seeding', 'weed control', 'autonomous operation'} <= set(features))
        self.assertGreater(len(features), 5)

    def test_captures_video_presence_without_inferring_navigation_from_autonomy(self):
        features = COLLECTOR.features_from('A self-driving, two-wheeled videoconferencing robot.')
        self.assertTrue({'autonomous operation', 'two-wheel mobility', 'video conferencing'} <= set(features))
        self.assertNotIn('autonomous navigation', features)

    def test_component_and_category_words_do_not_imply_unsupported_capabilities(self):
        features = COLLECTOR.features_from('A forklift and an underwater vehicle with LiDAR.', 'cleaning')
        self.assertIn('floor cleaning', features)
        self.assertIn('lidar sensing', features)
        self.assertNotIn('autonomous forklift', features)
        self.assertNotIn('underwater inspection', features)
        self.assertNotIn('LiDAR navigation', features)
        self.assertNotIn('autonomous operation', features)

    def test_explicitly_unsupported_features_are_not_promoted(self):
        features = COLLECTOR.features_from('No LiDAR or cloud connectivity is supported. GPS is supported.')
        self.assertNotIn('lidar sensing', features)
        self.assertNotIn('cloud connectivity', features)
        self.assertIn('GPS positioning', features)
        self.assertNotIn('mapping', COLLECTOR.features_from('Mapping is not available.'))

    def test_company_description_and_use_cases_keep_source_claims_separate(self):
        result = COLLECTOR.company_feature_fields({
            'description': "World's leading modular robot platform using standard Ethernet.",
            'use_cases': ['research', 'research', '', None, {'invalid': True}, ' logistics '],
        })
        self.assertIn('modular hardware or software', result['features'])
        self.assertIn('Ethernet communication', result['features'])
        self.assertEqual(result['useCases'], ['research', 'logistics'])
        self.assertIn('not manufacturer verified', result['featureStatus'])
        self.assertNotIn('leading', ' '.join(result['features']))

    def test_robot_docking_is_not_inferred_from_warehouse_cross_docking(self):
        features = COLLECTOR.features_from('Cart trains for cross docking and line-side delivery.')
        self.assertIn('cross-docking logistics', features)
        self.assertIn('cart towing or cart-train transport', features)
        self.assertIn('production-line delivery', features)
        self.assertNotIn('robot docking', features)
        self.assertIn('robot docking', COLLECTOR.features_from('Auto docking and obstacle avoidance.'))
        self.assertIn('robot docking', COLLECTOR.features_from('Additional docking capabilities.'))

    def test_ros_reference_requires_word_boundaries_and_does_not_imply_version_two(self):
        features = COLLECTOR.features_from('ROS, Gazebo, and Open-RMF software.')
        self.assertIn('ROS ecosystem reference', features)
        self.assertIn('Gazebo software reference', features)
        self.assertNotIn('ROS 2 support claimed', features)
        self.assertIn('ROS 2 support claimed', COLLECTOR.features_from('Fully supported in ROS 2.'))
        self.assertNotIn('ROS ecosystem reference', COLLECTOR.features_from('Robots across many sectors.'))

    def test_withdrawn_operator_support_is_not_promoted_from_a_negative_offer(self):
        features = COLLECTOR.features_from(
            'Robots are available for purchase only. Rentals, event staffing, and '
            'on-site operator support are not offered.'
        )
        self.assertNotIn('on-site operator support', features)
        self.assertIn('on-site operator support', COLLECTOR.features_from(
            'They provide trained attendants and on-site operation support.'
        ))
        self.assertNotIn('on-site operator support', COLLECTOR.features_from('Support your on-site workforce.'))

    def test_specific_sensing_and_motion_do_not_turn_into_generic_autonomy(self):
        features = COLLECTOR.features_from(
            'Walks omnidirectionally, recovers from falls, and has tactile feedback. '
            'Onboard AI compute and an education curriculum are offered.'
        )
        self.assertTrue({'omnidirectional movement', 'fall recovery claimed', 'tactile sensing',
                         'onboard AI computing', 'education curriculum'} <= set(features))
        self.assertNotIn('autonomous operation', features)

    def test_model_merge_retains_different_reseller_themes_and_their_sources(self):
        model = {'features': [], 'featureSources': [], 'usp': ''}
        first = {'features': ['solar power', 'RTK positioning'], 'listingId': 'a', 'sourceUrl': 'https://example.com/a'}
        second = {'features': ['solar power', 'crop seeding'], 'listingId': 'b', 'sourceUrl': 'https://example.com/b'}
        COLLECTOR.merge_model_features(model, first)
        COLLECTOR.merge_model_features(model, second)
        COLLECTOR.merge_model_features(model, second)
        self.assertEqual(model['features'], ['solar power', 'RTK positioning', 'crop seeding'])
        self.assertEqual(model['featureSources'][0]['listingIds'], ['a', 'b'])
        self.assertEqual(model['featureSources'][1]['sourceUrls'], ['https://example.com/a'])
        self.assertEqual(model['featureSources'][2]['sourceUrls'], ['https://example.com/b'])


if __name__ == '__main__':
    unittest.main()
