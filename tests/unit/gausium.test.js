import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands, getBrandSearchText } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { buildBrands } from '../../scripts/reconcile-competitors.mjs';

const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
const robot = (suffix) => robots.get(`gausium-${suffix}`);
const review = (suffix) => getSpecificationReview(`gausium-${suffix}`);
const text = (suffix) => getProductInsights(`gausium-${suffix}`).highlights.join(' ');

describe('Gausium exact configurations and manufacturer alias', () => {
  it('merges the documented Gaussian name while preserving distinct unrelated names and source URLs', () => {
    const names = ['Gausium Robotics', 'Gaussian Robotics', 'Gaussian Robotics Labs'];
    const { brands } = buildBrands(
      names.map((name, i) => ({
        name,
        source: { name: 'Directory', url: `https://example.com/${i}` },
      })),
      ['Gausium'],
      '2026-11-02',
    );
    expect(brands).toHaveLength(2);
    const brand = getAllBrands().find((b) => b.id === 'gausium-robotics');
    expect(brand.aliases).toContain('Gaussian Robotics');
    expect(brand.sources.map((s) => s.url)).toEqual(
      expect.arrayContaining([
        'https://buyandrentrobots.com/companies/gausium-robotics',
        'https://buyandrentrobots.com/companies/gaussian-robotics',
      ]),
    );
    expect(getBrandSearchText(brand)).toContain('gaussian robotics');
    expect(getAllBrands().some((b) => b.id === 'gaussian-robotics')).toBe(false);
    expect(getCompanyInsights(brand).primary.highlights.join(' ')).toContain('alias');
  });

  it('separates Beetle Standard and Pro without inventing one unconditional family runtime', () => {
    expect(robot('beetle-standard').weight).toBe('102 kg net');
    expect(robot('beetle-pro').weight).toBe('112 kg net');
    expect(robot('beetle-standard').batteryLife).toContain('3 h in named variant');
    expect(robot('beetle-pro').batteryLife).toContain('5 h in named variant');
    expect(robot('beetle').maxRuntime).toBe('');
    expect(review('beetle').fields.batteryLife.status).toBe('conflicting');
    expect(text('beetle-standard')).toContain('not assumed to be Standard');
  });

  it('keeps current Phantas generation, task widths and unit discrepancies explicit', () => {
    const r = robot('phantas');
    expect(r.weight).toBe('65 kg net in current linked Phantas table');
    expect(r.speed).toBe('');
    expect(r.releaseDate).toBe('');
    expect(r.batteryLife).toContain('sweeping 6 h; dust mopping 10 h');
    expect(r.areaRate).toContain('practical 350-700 m²/h');
    expect(review('phantas').fields.areaRate.status).toBe('conflicting');
    expect(text('phantas')).toContain('no extra hardware card');
    expect(robot('phantas-extra')).toBeUndefined();
  });

  it('distinguishes Omnie wet scrub path from optional sweeping coverage and disc roadmap', () => {
    const disc = robot('omnie-disc-brush');
    const roller = robot('omnie-roller-brush');
    expect(disc.weight).toBe('157 kg net');
    expect(roller.weight).toBe('148 kg net');
    expect(disc.batteryLife).toContain('sweeping listed Coming Soon');
    expect(disc.tagsArray).not.toContain('sweeper');
    expect(disc.areaRate).not.toContain('3931');
    expect(roller.workingWidth).toContain('406 mm scrubbing; 780 mm sweeping coverage');
    expect(roller.workingWidth).toContain('optional side brushes');
    expect(roller.areaRate).toContain('3931 m²/h sweeping');
  });

  it('does not convert Mira lower runtime bounds or cleaning pressure into maxima and payload', () => {
    const r = robot('mira');
    expect(r.batteryLife).toBe('Scrubbing >=4 h; sweeping >=8 h; dust mopping >=10 h');
    expect(r.maxRuntime).toBe('');
    expect(r.payload).toBe('');
    expect(review('mira').fields.speed.status).toBe('conflicting');
    expect(review('mira').fields.speed.note).toContain('about 4.59 ft/s');
  });

  it('retains Marvel mode-specific lower bounds and area-unit conflict', () => {
    const r = robot('marvel');
    expect(r.batteryLife).toContain('dust mopping >=13 h');
    expect(r.maxRuntime).toBe('');
    expect(r.chargingTime).toBe('');
    expect(r.payload).toBe('');
    expect(r.waterTankCapacity).toBe('80 L clean water; 70 L waste water');
    expect(review('marvel').fields.areaRate.status).toBe('conflicting');
    expect(text('marvel')).toContain('stand-on pedal is optional');
  });

  it('does not give PhanShop Max the Standard/Pro tray or a Pro touchscreen', () => {
    expect(robot('phanshop-standard').weight).toBe('62 kg net');
    expect(robot('phanshop-pro').size).toBe('540 x 440 x 1420 mm');
    expect(robot('phanshop-max').weight).toBe('61 kg net');
    expect(text('phanshop-max')).toContain('merchandise tray Not Supported');
    expect(text('phanshop-max')).toContain('touchscreen capability is not specified');
    expect(robot('phanshop-standard').maxRuntime).toContain('14 h in sweeping');
    expect(robot('phanshop-max').maxRuntime).toContain('10.5 h in sweeping');
  });

  it('does not map an unspecified Scrubber 50 Pro SKU to a brush-specific family table', () => {
    const provider = robot('scrubber-50-pro');
    expect(provider.weight).toBe('');
    expect(provider.workingWidth).toBe('');
    expect(review('scrubber-50-pro').fields.weight.status).toBe('not-documented');
    expect(robot('scrubber-50-disc-brush').weight).toBe('157 kg net');
    expect(robot('scrubber-50-roller-brush').weight).toBe('148 kg net');
    expect(robot('scrubber-50-disc-brush').maxRuntime).toContain('8 h in dust-mopping');
    expect(robot('scrubber-50-roller-brush').maxRuntime).toContain('6 h in dust-mopping');
    expect(text('scrubber-50-pro')).toContain('SoftBank Robotics America');
  });

  it('qualifies Scrubber 75 family physical values, separate slope modes and package ambiguity', () => {
    for (const suffix of ['scrubber-75-s', 'scrubber-75-p']) {
      expect(robot(suffix).payload).toBe('');
      expect(robot(suffix).terrain).toContain('3° autonomous cleaning / 8° autonomous driving');
      expect(robot(suffix).areaRate).toContain('700-1400 m²/h practical');
      expect(review(suffix).fields.weight.note).toContain('Shared Scrubber 75 family table');
      expect(text(suffix)).toContain('standard workstation and elsewhere as optional');
    }
  });

  it('separates Vacuum 40 diffuser reservoirs and leaves Sweeper 111 battery/pass-unit conflicts unresolved', () => {
    expect(robot('vacuum-40').weight).toBe('91 kg unladen');
    expect(robot('vacuum-40-diffuser').weight).toBe('97 kg unladen');
    expect(robot('vacuum-40-diffuser').waterTankCapacity).toContain('not floor-cleaning water');
    expect(robot('vacuum-40').maxRuntime).toContain('18 h in dry-mopping');
    expect(text('vacuum-40-diffuser')).toContain('no separate endurance test');
    expect(review('sweeper-111').fields.terrain.status).toBe('conflicting');
    expect(review('sweeper-111').fields.batteryLife.status).toBe('conflicting');
    expect(robot('sweeper-111').maxRuntime).toBe('');
    expect(robot('sweeper-111').payload).toBe('');
  });

  it('separates Delivery X1 dimensions/screens and keeps aggregate tray capacity within per-tray limits', () => {
    expect(robot('delivery-x1').weight).toBe('35 kg unladen');
    expect(robot('delivery-x1-pro').weight).toBe('38 kg unladen');
    expect(robot('delivery-x1').size).toBe('515 x 523 x 1286 mm');
    expect(robot('delivery-x1-pro').size).toBe('515 x 531 x 1310 mm');
    for (const suffix of ['delivery-x1', 'delivery-x1-pro']) {
      expect(robot(suffix).payload).toBe('30 kg across three trays; 10 kg maximum per tray');
      expect(robot(suffix).releaseDate).toBe('');
    }
    expect(text('delivery-x1')).toContain('Pro-only weight sensors');
    expect(text('delivery-x1-pro')).toContain('detecting customer pickup');
  });
});
