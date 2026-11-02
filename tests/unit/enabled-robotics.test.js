import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { t } from '../../src/data/translations.js';

const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
const robot = (suffix) => robots.get(`enabled-robotics-${suffix}`);
const review = (suffix) => getSpecificationReview(`enabled-robotics-${suffix}`);
const text = (suffix) => getProductInsights(`enabled-robotics-${suffix}`).highlights.join(' ');

describe('Enabled Robotics integrated payload and marker precision', () => {
  it('separates integrated transport capacity from arm load and bare-platform ratings', () => {
    expect(robot('er-flex-250-7e').payload).toBe('7.5 kg arm payload in integration sheet');
    expect(robot('er-flex-250-7e').transportPayload).toContain('Up to 165 kg transport load');
    expect(robot('er-max-600-20').payload).toContain('25 kg arm payload');
    expect(robot('er-max-600-30').payload).toContain('35 kg arm payload');
    expect(robot('er-max-600-20').transportPayload).toContain('380 kg transport load');
  });
  it('retains exact arm columns rather than deriving values from model suffixes', () => {
    for (const [suffix, load, reach] of [
      ['7e', '7.5', 850],
      ['12e', '12.5', 1300],
      ['16e', '16', 900],
      ['15', '17.5', 1300],
      ['8l', '10', 1750],
    ]) {
      for (const coating of ['', '-esd']) {
        const r = robot(`er-flex-250-${suffix}${coating}`);
        expect(r.payload).toBe(`${load} kg arm payload in integration sheet`);
        expect(r.armReach).toBe(`${reach} mm excluding tool (integration sheet)`);
      }
    }
    expect(robot('er-max-600-20').armReach).toContain('1750 mm excluding tool');
    expect(robot('er-max-600-30').armReach).toContain('1300 mm excluding tool');
  });
  it('keeps Standard/ESD product numbers distinct without duplicate configuration cards', () => {
    for (const [suffix, standard, esd] of [
      ['7e', '102250', '102350'],
      ['12e', '102450', '102550'],
      ['16e', '102650', '102750'],
      ['15', '102850', '102950'],
      ['8l', '103050', '103150'],
    ]) {
      expect(text(`er-flex-250-${suffix}`)).toContain(
        `Standard configuration has product number ${standard}`,
      );
      expect(text(`er-flex-250-${suffix}-esd`)).toContain(
        `ESD-coated configuration has product number ${esd}`,
      );
      expect(robot(`er-flex-250-${suffix}-esd`).tagsArray).toContain('esd');
    }
  });
  it('preserves estimated battery-state intervals separately from daily utilization', () => {
    const flex = robot('er-flex-250-7e');
    const max = robot('er-max-600-20');
    expect(flex.batteryLife).toBe('Estimated 8 h operation from 100% to 10% charge');
    expect(max.batteryLife).toBe('Estimated 4 h operation from 100% to 10% charge');
    expect(flex.maxRuntime).toBe('');
    expect(max.maxRuntime).toBe('');
    expect(text('er-flex-250-7e')).toContain('twenty-hour daily utilization');
    expect(text('er-max-600-20')).toContain('18.5 hours');
    expect(flex.chargingTime).toBe('');
    expect(review('er-flex-250-7e').fields.chargingTime.note).toContain('No time computed');
  });
  it('keeps marker-relative vision separate from navigation, docking and arm repeatability', () => {
    for (const id of ['er-flex-250-7e', 'er-max-600-30']) {
      expect(robot(id).visionPrecision).toBe('1 mm relative to markers');
      expect(robot(id).navigationAccuracy).toBe('');
      expect(robot(id).dockingAccuracy).toBe('');
      expect(review(id).fields.dockingAccuracy.status).toBe('not-documented');
      expect(text(id)).toContain('safe-home position while');
    }
  });
  it('retains component protection classes without upgrading the whole mobile robot', () => {
    expect(robot('er-flex-250-7e').ipRating).toBe('IP21 platform; arm and tower IP54');
    expect(robot('er-max-600-30').ipRating).toBe('IP52 platform; arm and tower IP54');
    expect(text('er-flex-250-7e')).toContain('not whole-system IP54');
  });
  it('identifies family footprints and mass ranges without assigning complete arm envelopes', () => {
    expect(robot('er-flex-250-8l').weight).toContain('shared ER-FLEX family range');
    expect(robot('er-flex-250-8l').size).toContain('overall installed height not documented');
    expect(robot('er-max-600-30').weight).toContain('arm-specific mass not separated');
    expect(robot('er-max-600-30').size).toContain('1350 x 910 mm footprint');
  });
  it('retains family-name correspondence without exact historical package equivalence', () => {
    const brand = getAllBrands().find((b) => b.id === 'enabled-robotics');
    expect(brand.robots).toHaveLength(12);
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain('explicitly calls ER-FLEX also MC250');
    expect(focus.highlights.join(' ')).toContain('without mapping every older');
    expect(focus.highlights.join(' ')).toContain('introduction still says four models');
    expect(focus.highlights.join(' ')).toContain('five arm options');
  });
  it('keeps software/add-ons and historical numbers outside current hardware specification fields', () => {
    const brand = getAllBrands().find((b) => b.id === 'enabled-robotics');
    const focus = getCompanyInsights(brand).primary;
    expect(focus.highlights.join(' ')).toContain('ER-ORGANIZER is add-on software');
    expect(focus.highlights.join(' ')).toContain('ER-CONNECT mission-path coordination');
    expect(robot('er-organizer')).toBeUndefined();
    expect(robot('er-max-600-30-esd')).toBeUndefined();
    expect(text('er-max-600-30')).toContain('Earlier attached ER-FLEX-MAX material lists 20/30 kg');
  });
  it('leaves release years, quotations and recharge duration unknown for every reviewed integration', () => {
    const enabled = [...robots.values()].filter((r) => r.manufacturer === 'Enabled Robotics');
    expect(enabled).toHaveLength(12);
    for (const r of enabled) {
      expect(r.price).toBe('Not disclosed');
      expect(r.releaseDate).toBe('');
      expect(r.chargingTime).toBe('');
      expect(getSpecificationReview(r.id).fields.releaseDate.status).toBe('not-documented');
    }
  });
  it('localizes the two distinct comparison measurements with language fallback', () => {
    expect(t('spec.transportPayload', 'de')).toBe('Transporttraglast');
    expect(t('spec.visionPrecision', 'de')).toBe('Präzision der visuellen Lokalisierung');
    expect(t('spec.transportPayload', 'fr')).toBe('Transport payload');
    expect(t('spec.visionPrecision', 'ja')).toBe('Vision localization precision');
    expect(robot('bear-robotics-servi-plus')).toBeUndefined();
    expect(robots.get('bear-robotics-servi-plus').transportPayload).toBe('');
    expect(robots.get('bear-robotics-servi-plus').visionPrecision).toBe('');
  });
});
