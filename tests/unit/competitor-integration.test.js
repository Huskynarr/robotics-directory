import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { createRobotId } from '../../src/utils/format.js';
import { CATEGORIES } from '../../src/data/categories.js';
import { matchesSubcategoryFilter, getUseCaseDef } from '../../src/data/subcategory-filters.js';
import { getCatalogScript } from '../../src/data/catalog-script.js';
import { buildBrands } from '../../scripts/reconcile-competitors.mjs';
import { isPrimaryProductSource } from '../../src/utils/product-evidence.js';

const read = (file) => JSON.parse(fs.readFileSync(`data/competitors/${file}.json`, 'utf8'));

describe('competitor data reaches the catalog', () => {
  it('reports company-description coverage separately from listing and model claims', () => {
    const buy = read('buyandrentrobots');
    const robotics = read('roboticsdir');
    const metrics = read('coverage').sourceFeatureCoverage;
    const total = (entries, field) =>
      entries.reduce((sum, entry) => sum + (entry[field]?.length || 0), 0);
    expect(metrics.roboticsdirFeatureAssignments).toBe(total(robotics.entries, 'features'));
    expect(metrics.listingFeatureAssignments).toBe(total(buy.listings, 'features'));
    expect(metrics.modelFeatureAssignments).toBe(total(buy.models, 'features'));
    expect(metrics.companyDescriptionFeatureAssignments).toBe(total(buy.companies, 'features'));
    expect(metrics.companyUseCaseAssignments).toBe(total(buy.companies, 'useCases'));
    expect(metrics.scope).toContain('do not prove unique advantages');
  });

  it('retains the union of all listing themes and exact per-theme source provenance', () => {
    const inventory = read('buyandrentrobots');
    const listings = new Map(inventory.listings.map((listing) => [listing.listingId, listing]));
    for (const model of inventory.models) {
      const originals = model.listingIds.map((id) => listings.get(id));
      const themes = [...new Set(originals.flatMap((listing) => listing.features))];
      expect(model.features, model.model).toEqual(themes);
      expect(
        model.featureSources.map((claim) => claim.feature),
        model.model,
      ).toEqual(themes);
      for (const claim of model.featureSources) {
        const matching = originals.filter((listing) => listing.features.includes(claim.feature));
        expect(claim.listingIds, model.model).toEqual(matching.map((listing) => listing.listingId));
        expect(claim.sourceUrls, model.model).toEqual([
          ...new Set(matching.map((listing) => listing.sourceUrl)),
        ]);
      }
    }
  });

  it('retains every source company name while assigning catalog models once', () => {
    const brands = getAllBrands();
    const names = new Set(brands.flatMap((brand) => [brand.name, ...brand.aliases]));
    for (const entry of read('roboticsdir').entries)
      expect(names.has(entry.name), entry.name).toBe(true);
    for (const entry of read('buyandrentrobots').companies)
      expect(names.has(entry.name), entry.name).toBe(true);
  });

  it('imports primary-sourced models with usable evidence and a matching subcategory', () => {
    const { allRobots } = getAllRobots();
    for (const product of read('verified-products').products) {
      const id = createRobotId(product.row);
      const robot = allRobots.find((entry) => entry.id === id);
      expect(robot, id).toBeDefined();
      expect(getProductInsights(id)?.highlights.length, id).toBeGreaterThan(0);
      expect(getProductInsights(id)?.sources.some(isPrimaryProductSource), id).toBe(true);
      const category = CATEGORIES.find((cat) => cat.id === robot.category);
      expect(
        category.subcategories.some((sub) => matchesSubcategoryFilter(robot, sub.filter)),
        id,
      ).toBe(true);
    }
  });

  it('reports missing product highlights separately from model identity coverage', () => {
    const coverage = read('coverage');
    const ids = new Set([
      ...coverage.roboticsdir.mentions.flatMap((entry) => entry.catalogIds),
      ...coverage.buyandrentrobots.models.flatMap((entry) => entry.catalogIds),
    ]);
    const missing = [...ids].filter((id) => !getProductInsights(id));
    expect(coverage.productEvidenceCoverage.matchedCatalogModels).toBe(ids.size);
    expect(coverage.productEvidenceCoverage.withDatedHighlights).toBe(ids.size - missing.length);
    expect(coverage.productEvidenceCoverage.withoutDatedHighlights).toBe(missing.length);
    expect(
      coverage.productEvidenceCoverage.missingHighlightEvidence.map((robot) => robot.id).sort(),
    ).toEqual(missing.sort());
    expect(coverage.productEvidenceCoverage.scope).toContain(
      'specification tables are not certified',
    );
  });

  it('keeps unrelated companies separate even if a directory gave them the same website', () => {
    const records = ['Construction Robotics', 'Advanced Construction Robotics'].map((name) => ({
      name,
      website: 'https://example.com',
    }));
    expect(buildBrands(records, [], '2026-11-01').brands).toHaveLength(2);
  });

  it('retains both names when grouping the documented Kiwibot rebrand', () => {
    const records = ['Kiwibot', 'robot.com'].map((name) => ({ name }));
    const result = buildBrands(records, ['Robot.com'], '2026-11-01').brands;
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      name: 'Robot.com',
      aliases: ['Kiwibot', 'robot.com'],
      catalogManufacturers: ['Robot.com'],
    });
  });

  it('publishes a single complete catalog script with a content fingerprint', () => {
    const script = getCatalogScript();
    const robots = JSON.parse(
      script.body.replace(/^window\.__ROBOTS_DATA__=/, '').replace(/;\n$/, ''),
    );
    expect(robots.map((r) => r.id)).toEqual(getAllRobots().allRobots.map((r) => r.id));
    expect(script.version).toMatch(/^[a-f0-9]{16}$/);
  });

  it('connects Sanbot branding to QIHAN models while retaining distinct robotaxi companies', () => {
    const records = ['Sanbot Robots', 'QIHAN Technology', 'Nuro', 'Lucid'].map((name) => ({
      name,
    }));
    const result = buildBrands(records, ['QIHAN Technology', 'Lucid'], '2026-11-01').brands;
    expect(result).toHaveLength(3);
    const sanbot = result.find((entry) => entry.id === 'sanbot-robots');
    expect(sanbot.catalogManufacturers).toEqual(['QIHAN Technology']);
    expect(sanbot.aliases).toContain('QIHAN Technology');
    expect(result.find((entry) => entry.name === 'Nuro').catalogManufacturers).toEqual([]);
    expect(result.find((entry) => entry.name === 'Lucid').catalogManufacturers).toEqual(['Lucid']);
  });

  it('finds professional platforms under industry while keeping professional scrubbers out of home', () => {
    const { allRobots } = getAllRobots();
    const industry = getUseCaseDef('industry').filter;
    const home = getUseCaseDef('home').filter;
    for (const id of [
      'otto-motors-otto-1500',
      'productive-robotics-ob7',
      'clearpath-robotics-jackal-ugv',
      'pudu-robotics-pudu-bg1',
      'farmdroid-fd20',
      'ekso-bionics-eksonr',
      'boteyes-boteyes-pad',
      'pal-robotics-tiago-pro',
      'iplusmobot-fola-dn1416',
    ]) {
      const robot = allRobots.find((candidate) => candidate.id === id);
      expect(robot, id).toBeDefined();
      expect(matchesSubcategoryFilter(robot, industry), id).toBe(true);
      expect(matchesSubcategoryFilter(robot, home), id).toBe(false);
    }
    expect(
      matchesSubcategoryFilter({ category: 'cleaning', tagsArray: ['consumer', 'vacuum'] }, home),
    ).toBe(true);
    expect(
      matchesSubcategoryFilter(
        { category: 'robotic-arm', tagsArray: ['educational', 'maker'] },
        industry,
      ),
    ).toBe(false);
  });
});
