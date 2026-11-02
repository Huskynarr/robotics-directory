import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { t } from '../../src/data/translations.js';
import { CATEGORIES } from '../../src/data/categories.js';
import { matchesSubcategoryFilter } from '../../src/data/subcategory-filters.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `productive-robotics-${id}`);
const review = (id) => getSpecificationReview(`productive-robotics-${id}`);
const text = (id) => getProductInsights(`productive-robotics-${id}`).highlights.join(' ');

describe('Productive Robotics arm, process and cell boundaries', () => {
  it('keeps fifteen named configurations and does not invent a separate Duo model', () => {
    expect(all.filter((r) => r.manufacturer === 'Productive Robotics')).toHaveLength(15);
    expect(robot('blaze-duo')).toBeUndefined();
    for (const id of [
      'blaze-max',
      'blaze-laser-max',
      'blaze-max-mobile',
      'blaze-lf',
      'blaze-mig-cell',
      'blaze-laser-cell',
      'assemble-weld-cell',
    ])
      expect(robot(id)).toBeDefined();
  });
  it('retains OB7 and Stretch metric/imperial mass conflicts without changing their payload', () => {
    for (const [id, load, reach] of [
      ['ob7', '5 kg', '1000 mm'],
      ['ob7-stretch', '4 kg', '1250 mm'],
    ]) {
      expect(robot(id).weight).toBe('22 kg');
      expect(robot(id).payload).toBe(load);
      expect(robot(id).armReach).toBe(reach);
      expect(review(id).fields.weight.status).toBe('conflicting');
      expect(review(id).fields.weight.note).toContain('58 lb');
    }
  });
  it('keeps Max load/reach combinations and flange scope separate', () => {
    for (const [id, load, reach] of [
      ['ob7-max-8', '8 kg', '1700 mm'],
      ['ob7-max-12', '12 kg', '1300 mm'],
      ['ob7-max-16', '16 kg', '1000 mm'],
    ]) {
      expect(robot(id).weight).toBe('58 kg');
      expect(robot(id).payload).toBe(load);
      expect(robot(id).armReach).toBe(reach);
      expect(robot(id).size).toBe('');
      expect(text(id)).toContain('flange is not the overall robot footprint');
    }
  });
  it('does not apply component IP classes or gripper options to bare OB7 arms', () => {
    expect(robot('ob7').ipRating).toBe('');
    expect(robot('ob7').handType).toBe('');
    expect(text('ob7')).toContain('control computer is IP30');
    expect(text('ob7')).toContain('optional PG2 gripper is IP65');
    expect(review('ob7').fields.ipRating.status).toBe('not-documented');
  });
  it('retains standard and Max torch reach without treating it as a bare-arm radius', () => {
    expect(robot('blaze').armReach).toBe('1550 mm including MIG torch');
    expect(robot('blaze-max').armReach).toBe('2159 mm including MIG torch');
    expect(robot('blaze-laser-max').armReach).toBe('2159 mm including laser torch');
    expect(text('blaze-laser-max')).toContain('Blaze Max Laser');
    expect(robot('blaze-max-laser')).toBeUndefined();
  });
  it('exposes welding feed separately from conflicting free-motion speed', () => {
    expect(robot('blaze').weldSpeed).toBe('Up to 2540 mm/min welding feed');
    expect(robot('blaze').speed).toBe('');
    for (const id of ['blaze-laser', 'blaze-laser-max']) {
      expect(robot(id).weldSpeed).toBe('Up to 2540 mm/min welding feed');
      expect(robot(id).speed).toContain('position dependent; PDF also says 0-2+ m/s');
      expect(review(id).fields.speed.status).toBe('conflicting');
    }
  });
  it('does not apply the source mass or shared two-size mass to a complete welding system', () => {
    for (const id of [
      'blaze',
      'blaze-laser',
      'blaze-laser-max',
      'blaze-mobile',
      'blaze-lf',
      'blaze-laser-cell',
    ])
      expect(robot(id).weight).toBe('');
    expect(text('blaze-laser')).toContain('22 kg/58 lb robot mass is internally inconsistent');
    expect(text('blaze-mobile')).toContain('64 kg source mass');
    expect(robot('blaze-laser').ipRating).toContain('IP61 robot');
    expect(robot('blaze-laser-cell').ipRating).toBe('');
  });
  it('keeps Mobile variants manually repositioned without inventing an autonomous base', () => {
    expect(robot('blaze-max-mobile').armReach).toContain('2159 mm');
    expect(text('blaze-max-mobile')).toContain('locking wheels');
    expect(robot('blaze-mobile').speed).toBe('');
    expect(robot('blaze-mobile').batteryLife).toBe('');
    expect(text('blaze-mobile')).toContain('option to exclude the welder');
  });
  it('keeps table dimensions separate from cell footprint and source duty cycle', () => {
    for (const id of ['blaze-lf', 'blaze-mig-cell', 'blaze-laser-cell']) {
      expect(robot(id).workTableSize).toContain('4 ft x 8 ft work table');
      expect(robot(id).size).toBe('');
      expect(robot(id).maxRuntime).toBe('');
      expect(robot(id).payload).toBe('');
    }
    expect(text('blaze-mig-cell')).toContain('no separate Duo robot');
  });
  it('keeps custom coordinated systems distinct from summed bare-arm specifications', () => {
    const r = robot('assemble-weld-cell');
    expect(r.category).toBe('commercial');
    for (const key of [
      'weight',
      'size',
      'dof',
      'payload',
      'armReach',
      'weldSpeed',
      'workTableSize',
    ])
      expect(r[key]).toBe('');
    expect(text('assemble-weld-cell')).toContain('not summed or inherited');
  });
  it('localizes the two distinct process measurements and preserves language fallback', () => {
    expect(t('spec.weldSpeed', 'de')).toBe('Schweißvorschub');
    expect(t('spec.workTableSize', 'de')).toBe('Arbeitstischmaße');
    expect(t('spec.weldSpeed', 'fr')).toBe('Welding feed rate');
    expect(t('spec.workTableSize', 'ja')).toBe('Work table dimensions');
  });
  it('makes welding cells discoverable under manufacturing without classifying them as research bases', () => {
    const commercial = CATEGORIES.find((c) => c.id === 'commercial');
    const manufacturing = commercial.subcategories.find((s) => s.id === 'commercial-manufacturing');
    for (const id of ['blaze-lf', 'blaze-mig-cell', 'blaze-laser-cell', 'assemble-weld-cell']) {
      expect(matchesSubcategoryFilter(robot(id), manufacturing.filter)).toBe(true);
      expect(robot(id).tagsArray).not.toContain('research');
    }
    expect(t('sub.commercial.manufacturing', 'de')).toBe('Fertigung & Schweißen');
    expect(t('sub.commercial.manufacturing', 'fr')).toBe('Manufacturing & Welding');
  });
  it('keeps electrical, warranty and safety claims qualified at company level', () => {
    const brand = getAllBrands().find((b) => b.id === 'productive-robotics');
    const focus = getCompanyInsights(brand).primary.highlights.join(' ');
    expect(focus).toContain('32 A differs from 20 A');
    expect(focus).toContain('Duo identity, layout and warranty scope are unresolved');
    expect(focus).toContain('no independent certification or market ranking');
    for (const r of all.filter((r) => r.manufacturer === 'Productive Robotics')) {
      expect(r.price).toBe('Not disclosed');
      expect(r.releaseDate).toBe('');
      expect(r.batteryLife).toBe('');
    }
  });
});
