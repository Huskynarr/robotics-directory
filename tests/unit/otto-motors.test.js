import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { t } from '../../src/data/translations.js';
const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === `otto-motors-otto-${id}`);
const review = (id) => getSpecificationReview(`otto-motors-otto-${id}`);
const text = (id) => getProductInsights(`otto-motors-otto-${id}`).highlights.join(' ');

describe('OTTO load, charge window, aisle and operating-mode boundaries', () => {
  it('keeps five actual hardware models without deriving names from capacities or software', () => {
    expect(all.filter((r) => r.manufacturer === 'OTTO Motors')).toHaveLength(5);
    expect(robot('1900')).toBeUndefined();
    expect(robot('fleet-manager')).toBeUndefined();
    expect(robot('hads')).toBeUndefined();
    for (const id of ['100', '600', '1200', '1500', 'lifter'])
      expect(robot(id).category).toBe('commercial');
  });
  it('counts attachments and cart inside the documented total payload', () => {
    expect(robot('100').payload).toBe(
      '150 kg total including payload, attachments and cart where fitted',
    );
    expect(robot('600').payload).toBe('600 kg total including fitted attachment');
    expect(robot('1200').payload).toBe('1200 kg total including fitted attachment');
    expect(robot('1500').payload).toBe('1900 kg total including fitted attachment');
    expect(robot('lifter').payload).toBe('1200 kg; load-height limits apply');
  });
  it('keeps runtime and partial-charge windows distinct from charge-cycle lifetime', () => {
    expect(robot('100').batteryLife).toBe('6 h from 90% to 10% charge');
    expect(robot('100').chargingTime).toBe('18 min from 10% to 90% charge');
    expect(robot('1500').batteryLife).toBe('10 h from 90% to 10% charge');
    expect(robot('1500').chargingTime).toBe('60 min from 10% to 90% charge');
    for (const id of ['600', '1200']) {
      expect(robot(id).batteryLife).toBe('');
      expect(robot(id).chargingTime).toBe('30 min from 10% to 90% charge');
      expect(review(id).fields.batteryLife.note).toContain('6,000 full charge cycles');
    }
  });
  it('does not equate common charging interfaces, accessory capability and pack charge limit', () => {
    expect(text('600')).toContain('42 A maximum battery charge rate');
    expect(text('600')).toContain('100 A accessory charger');
    expect(text('1200')).toContain('42 A charger');
    expect(text('100')).toContain('98 A autonomous/25 A manual chargers');
  });
  it('keeps translational docking and optional HADS without inventing unreadable angular statistics', () => {
    for (const id of ['100', '1500']) {
      expect(robot(id).dockingAccuracy).toBe(
        'Standard ±10 mm (x/y); optional HADS ±5 mm (x/y); yaw notation unverified',
      );
      expect(review(id).fields.dockingAccuracy.note).toContain('separately sold upgrade');
    }
    for (const id of ['100', '600', '1200', '1500']) {
      expect(robot(id).navigationAccuracy).toBe('');
      expect(robot(id).driveMode).toBe('Differential drive');
      expect(robot(id).turningRadius).toBe('Turn in place');
    }
  });
  it('separates OTTO100 lift travel from Lifter fork height and load height', () => {
    expect(robot('100').liftStroke).toBe('62 mm integrated lift stroke; 150 kg capacity');
    expect(robot('100').maxLiftHeight).toBe('');
    expect(robot('lifter').liftStroke).toBe('');
    expect(robot('lifter').maxLiftHeight).toBe('1.0 m autonomous; 2.7 m manual');
    expect(text('lifter')).toContain('183 cm at 1000 kg versus 134 cm at 1200 kg');
  });
  it('keeps Lifter battery-specific charging without treating the web headline as universal', () => {
    expect(robot('lifter').chargingTime).toBe(
      '10%–90%: lead-acid about 6 h; lithium about 1 h with 200 A supercharger',
    );
    expect(robot('lifter').batteryLife).toBe('');
    expect(text('lifter')).toContain('web 60-minute');
    expect(robot('lifter').ipRating).toBe('');
  });
  it('keeps Lifter docking targets and manual/autonomous maneuver requirements separate', () => {
    expect(robot('lifter').turningRadius).toBe('1420 mm manual; 1985 mm autonomous');
    expect(robot('lifter').minAisleWidth).toBe('2186 mm one-way; 4113 mm two-way; no payload');
    expect(robot('lifter').dockingAccuracy).toContain(
      'Pallet docking ±50 mm; raised drop-off with target',
    );
    expect(text('lifter')).toContain('4268 mm minimum width for a 90°');
  });
  it('keeps step height, ground clearance, traversable gap and environmental classes distinct', () => {
    expect(robot('100').terrain).toBe('13 mm floor obstacle; ground clearance 6 mm separate');
    for (const id of ['600', '1200']) {
      expect(robot(id).terrain).toBe('4 mm floor obstacle; ground clearance 16 mm separate');
      expect(robot(id).ipRating).toBe('');
    }
    expect(robot('1500').terrain).toBe('16 mm traversable gap; floor-obstacle height unspecified');
    expect(robot('100').ipRating).toBe('IP20');
    expect(robot('1500').ipRating).toBe('IP20');
  });
  it('exposes the 1500 two-way aisle unit discrepancy without changing other model values', () => {
    expect(robot('100').minAisleWidth).toBe('1099 mm one-way; 1975 mm two-way; no payload');
    expect(robot('600').minAisleWidth).toBe('1575 mm one-way; no payload');
    expect(robot('1200').minAisleWidth).toBe('1882 mm one-way; no payload');
    expect(review('1500').fields.minAisleWidth.status).toBe('conflicting');
    expect(review('1500').fields.minAisleWidth.note).toContain('3708.4 mm');
    expect(robot('1500').minAisleWidth).toContain('PDF also says 146 in');
  });
  it('localizes the two maneuver measurements while preserving the existing language fallback', () => {
    expect(t('spec.minAisleWidth', 'de')).toBe('Minimale Gangbreite');
    expect(t('spec.turningRadius', 'de')).toBe('Wenderadius');
    expect(t('spec.minAisleWidth', 'fr')).toBe('Minimum aisle width');
    expect(t('spec.turningRadius', 'ja')).toBe('Turning radius');
  });
  it('attributes the current branding and fleet integration claims without numeric quote offers', () => {
    const b = getAllBrands().find((b) => b.id === 'otto-motors');
    const focus = getCompanyInsights(b).primary.highlights.join(' ');
    expect(focus).toContain('OTTO by Rockwell Automation');
    expect(focus).toContain('Open APIs for MES/ERP/WMS');
    expect(focus).toContain('VDA5050 support without an exact version verified');
    for (const r of all.filter((r) => r.manufacturer === 'OTTO Motors')) {
      expect(r.price).toBe('Not disclosed');
      expect(r.releaseDate).toBe('');
      expect(r.maxRuntime).toBe('');
      expect(getSpecificationReview(r.id).sources[0].url).toContain('.pdf');
    }
  });
});
