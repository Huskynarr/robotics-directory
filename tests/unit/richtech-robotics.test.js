import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { CATEGORIES } from '../../src/data/categories.js';
import { matchesSubcategoryFilter } from '../../src/data/subcategory-filters.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `richtech-robotics-${id}`);
const review = (id) => getSpecificationReview(`richtech-robotics-${id}`);
const text = (id) => getProductInsights(`richtech-robotics-${id}`).highlights.join(' ');

describe('Richtech model, platform and measurement scope', () => {
  it('keeps eight exact identities without inventing unnamed platforms or event variants', () => {
    const models = all.filter((r) => r.manufacturer === 'Richtech Robotics');
    expect(models).toHaveLength(8);
    for (const id of ['adam', 'scorpion', 'titan']) {
      expect(robot(id).category).toBe('commercial');
      expect(robot(id).image).toBe(`images/smarthome/richtech-robotics-${id}.webp`);
    }
    expect(robot('dex-mobile')).toBeUndefined();
    expect(robot('scorpion-cybertruck')).toBeUndefined();
  });
  it('finds beverage and transport models in their actual commercial filters', () => {
    const subs = CATEGORIES.find((c) => c.id === 'commercial').subcategories;
    for (const id of ['adam', 'scorpion'])
      expect(
        matchesSubcategoryFilter(
          robot(id),
          subs.find((s) => s.id === 'commercial-food-service').filter,
        ),
      ).toBe(true);
    expect(
      matchesSubcategoryFilter(
        robot('titan'),
        subs.find((s) => s.id === 'commercial-logistics').filter,
      ),
    ).toBe(true);
  });
  it('marks announced Dex values as roadmap without multiplying arm load or stationary endurance', () => {
    const r = robot('dex');
    expect(r.payload).toBe('11 lb per arm');
    expect(r.batteryLife).toBe('4 h mobile platform; stationary uses continuous external power');
    expect(r.chargingTime).toBe('2 h mobile platform');
    expect(r.maxRuntime).toBe('');
    expect(r.dof).toBe('');
    for (const key of ['payload', 'batteryLife', 'chargingTime', 'size', 'terrain'])
      expect(review('dex').fields[key].status).toBe('roadmap');
    expect(r.description).toContain('as launch approaches');
  });
  it('keeps Matradee total load, body axis order and screens distinct', () => {
    const r = robot('matradee-plus');
    expect(r.payload).toBe('88 lb total across four trays');
    expect(r.size).toBe('22.8 in W x 19.2 in L x 50.7 in H');
    expect(r.batteryLife).toBe('10 h');
    expect(r.chargingTime).toBe('4 h');
    expect(text('matradee-plus')).toContain('16.9 x 15.7 inches; these are not whole-body');
  });
  it('separates Pallet Jack lifted height, stroke, turning aisle and generic position accuracy', () => {
    const r = robot('pallet-jack');
    expect(r.payload).toBe('3,307 lb rated load');
    expect(r.maxLiftHeight).toBe('8.26 in lifted height; reference datum unspecified');
    expect(r.liftStroke).toBe('');
    expect(r.navigationAccuracy).toBe('');
    expect(r.dockingAccuracy).toBe('');
    expect(r.terrain).toBe('Climb: 5° full load; 10° empty');
    expect(text('pallet-jack')).toContain('86.6-inch turning aisle width is not a turning radius');
    expect(text('pallet-jack')).toContain('±0.19 in/±1°');
  });
  it('keeps MX dry mass, labeled tank units and cleaning/rake widths', () => {
    const r = robot('dust-e-mx');
    expect(r.weight).toBe('557 lb without water');
    expect(r.workingWidth).toBe('20 in cleaning path; 30 in suction rake');
    expect(r.waterTankCapacity).toBe(
      '17 gal fresh / 13 gal wastewater; gallon standard unspecified',
    );
    expect(r.areaRate).toContain('21,958 ft²/h');
    expect(r.payload).toBe('');
    expect(r.chargingTime).toBe('');
  });
  it('keeps S percent slope distinct from MX degrees and leaves tank roles unassigned', () => {
    const r = robot('dust-e-s');
    expect(r.terrain).toBe('Gradeability: 7%');
    expect(robot('dust-e-mx').terrain).toBe('Gradeability: 6°');
    expect(r.workingWidth).toBe('13.7 in double-roller brush; 15.7 in squeegee');
    expect(r.waterTankCapacity).toBe('10 L / 15 L; tank roles unspecified');
    expect(r.chargingTime).toBe('2 h');
    expect(r.payload).toBe('');
  });
  it('retains the malformed ADAM size and ambiguous joint scope instead of inventing mass or total axes', () => {
    const r = robot('adam');
    expect(r.weight).toBe('');
    expect(r.size).toBe('19.6 x 32.6 in; third dimension unspecified');
    expect(review('adam').fields.size.status).toBe('conflicting');
    expect(review('adam').fields.size.note).toContain('110 lbs');
    expect(r.dof).toBe('6 (page label; per-arm/total scope unspecified)');
    expect(r.armReach).toBe('');
    expect(r.payload).toBe('11 lb per arm');
    expect(r.batteryLife).toBe('');
  });
  it('attributes ADAM venue throughput and rental formats without declaring guaranteed payback', () => {
    expect(text('adam')).toContain('up to 50 drinks/hour');
    expect(text('adam')).toContain('three-cocktail/two-mocktail menu');
    expect(text('adam')).toContain('payback wording ranges from before five years to six months');
    const sources = getProductInsights('richtech-robotics-adam').sources;
    expect(sources.some((s) => s.url.endsWith('.pdf'))).toBe(true);
    expect(sources.some((s) => s.url.endsWith('/robot-rentals'))).toBe(true);
  });
  it('does not convert Scorpion ingredient accuracy or average drink time to arm precision or motion speed', () => {
    const r = robot('scorpion');
    expect(r.dof).toBe('6');
    expect(r.payload).toBe('11 lb');
    expect(r.speed).toBe('');
    expect(r.visionPrecision).toBe('');
    expect(r.navigationAccuracy).toBe('');
    expect(text('scorpion')).toContain('±0.5% claim concerns ingredient measurement');
    expect(text('scorpion')).toContain('One primary language and three auxiliary languages');
  });
  it('exposes Titan payload conflict and keeps the battery IP rating at component scope', () => {
    const r = robot('titan');
    expect(r.payload).toBe('330 lb narrative; 330–1300 lb table, variant unspecified');
    expect(review('titan').fields.payload.status).toBe('conflicting');
    expect(r.ipRating).toBe('Whole body IP43; battery IP66');
    expect(r.batteryLife).toBe('10–24 h, depending on usage');
    expect(r.chargingTime).toBe('5.5 h');
    expect(r.maxRuntime).toBe('');
  });
  it('keeps company focus claims qualified and undocumented release years empty', () => {
    const brand = getAllBrands().find((b) => b.id === 'richtech-robotics');
    const focus = getCompanyInsights(brand).primary.highlights.join(' ');
    expect(focus).toContain('announced specifications');
    expect(focus).toContain('no server-rendered product content');
    expect(focus).toContain('market leadership are not established');
    for (const r of all.filter((r) => r.manufacturer === 'Richtech Robotics')) {
      expect(r.price).toBe('Not disclosed');
      expect(r.releaseDate).toBe('');
      expect(r.maxRuntime).toBe('');
    }
  });
});
