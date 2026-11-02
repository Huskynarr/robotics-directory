import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
import { t } from '../../src/data/translations.js';

const robots = getAllRobots().allRobots.filter((r) => r.manufacturer === 'Smart Robotics');
const robot = (model) => robots.find((r) => r.model === model);
const field = (model, key) => getSpecificationReview(robot(model).id).fields[key];
const highlights = (model) => getProductInsights(robot(model).id).highlights.join(' ');

describe('Smart Robotics integrated systems and configuration boundaries', () => {
  it('keeps the four named systems and three palletizer configurations as six distinct records', () => {
    expect(robots).toHaveLength(6);
    expect(getAllBrands().find((b) => b.id === 'smart-robotics').modelCount).toBe(6);
    expect(robot('Smart Palletizer')).toBeUndefined();
    expect(robot('Smart Parcel Picker')).toBeUndefined();
    expect(
      getCompanyInsights(
        getAllBrands().find((b) => b.id === 'smart-robotics'),
      ).primary.highlights.join(' '),
    ).toContain('partner robot hardware');
  });
  it('retains configuration footprints and pattern limits without turning stacking height into body size', () => {
    for (const [name, footprint, limit] of [
      ['Essential', '2.4 x 2.3 m', '10'],
      ['Advanced', '2.4 x 2.75 m', '20'],
      ['Premium', '2.4 x 3.5 m', 'unlimited'],
    ]) {
      const model = 'Smart Palletizer ' + name;
      expect(robot(model).size).toBe(footprint + ' (installation footprint; L x W)');
      expect(robot(model).stackingHeight).toBe('3 m maximum stacking height');
      expect(highlights(model)).toContain(limit + ' products or stacking patterns');
      expect(field(model, 'size').note).toContain('third dimension is not published');
      expect(robot(model).maxLiftHeight).toBe('');
    }
  });
  it('does not infer exact package payload and throughput from family maxima or partner arms', () => {
    for (const name of ['Essential', 'Advanced', 'Premium']) {
      const model = 'Smart Palletizer ' + name;
      for (const key of ['payload', 'throughput', 'weight', 'dof', 'handType']) {
        expect(robot(model)[key]).toBe('');
        expect(field(model, key).status).toBe('not-documented');
      }
      expect(highlights(model)).toContain('without assigning these maxima');
      expect(highlights(model)).toContain('1600 boxes/hour');
      expect(field(model, 'payload').note).toContain('without a configuration/load pairing');
    }
  });
  it('distinguishes multi-pick and open-box inclusion in the exact table columns', () => {
    expect(highlights('Smart Palletizer Essential')).toContain(
      'Multi-picks and open-top box picking are not included',
    );
    expect(highlights('Smart Palletizer Advanced')).toContain(
      'Multi-picks of two or more cases are included; open-top box picking is not included',
    );
    expect(highlights('Smart Palletizer Premium')).toContain(
      'Multi-picks of two or more cases and open-top box picking are included',
    );
  });
  it('retains the table versus optional-hardware distinction for interlayer sheets and lift', () => {
    for (const name of ['Essential', 'Advanced', 'Premium']) {
      const h = highlights('Smart Palletizer ' + name);
      expect(h).toContain('includes placing sheets between layers');
      expect(h).toContain('optional interlayer sheet unit and vertical lift');
      expect(h).toContain('configuration confirmation');
    }
  });
  it('separates system processing rates from linear speed and preserves original output units', () => {
    for (const [model, rate] of [
      ['Smart Item Picker', '1000 items/hour'],
      ['Smart Depalletizer', '1000 products/hour'],
      ['Smart Mixed Case Palletizer', '500 items/hour'],
    ]) {
      expect(robot(model).throughput).toBe(
        'Up to ' + rate + ' (manufacturer claim; application dependent)',
      );
      expect(robot(model).speed).toBe('');
      expect(field(model, 'throughput').status).toBe('documented');
      expect(field(model, 'throughput').note).toContain('Not a guaranteed sustained result');
      expect(field(model, 'speed').status).toBe('not-documented');
    }
  });
  it('does not turn above-five-kilogram capability into a maximum payload', () => {
    expect(robot('Smart Item Picker').payload).toBe('');
    expect(field('Smart Item Picker', 'payload').note).toContain('no upper item-mass limit');
    expect(highlights('Smart Item Picker')).toContain('not a 5 kg maximum payload');
    expect(highlights('Smart Item Picker')).toContain('Barcode identification and item weighing');
  });
  it('retains both manufacturer mixed-case load and height disagreements', () => {
    const model = 'Smart Mixed Case Palletizer';
    expect(robot(model).payload).toBe(
      'Up to 30 kg in product FAQ; 30 kg and above in overview (manufacturer conflict)',
    );
    expect(robot(model).stackingHeight).toBe(
      'Up to 2 m in FAQ; over 2 m in feature text (manufacturer conflict)',
    );
    for (const key of ['payload', 'stackingHeight'])
      expect(field(model, key).status).toBe('conflicting');
    expect(getSpecificationReview(robot(model).id).sources.map((s) => s.url)).toContain(
      'https://smart-robotics.io/palletizing/',
    );
    expect(highlights(model)).toContain(
      'no resolved maximum or simultaneous load/throughput pairing',
    );
  });
  it('leaves unsupported system runtime mass protection and release dates empty', () => {
    for (const r of robots) {
      expect(r.price).toBe('Not disclosed');
      for (const key of [
        'weight',
        'batteryLife',
        'maxRuntime',
        'ipRating',
        'chargingTime',
        'releaseDate',
        'dof',
        'handType',
        'speed',
      ]) {
        expect(r[key]).toBe('');
        expect(getSpecificationReview(r.id).fields[key].status).toBe('not-documented');
      }
    }
  });
  it('makes the exact load-boundary warning searchable with its manufacturer evidence', () => {
    const r = robot('Smart Item Picker');
    expect(
      getRobotSearchMatch(r, 'not a 5 kg maximum payload', getProductInsights(r.id)).kind,
    ).toBe('highlight');
  });
  it('labels throughput and stacking height independently in German with English fallback', () => {
    expect(t('spec.throughput', 'de')).toBe('Durchsatz');
    expect(t('spec.stackingHeight', 'de')).toBe('Stapelhöhe');
    expect(t('spec.throughput', 'fr')).toBe('Throughput');
    expect(t('spec.stackingHeight', 'ja')).toBe('Stacking height');
  });
});
