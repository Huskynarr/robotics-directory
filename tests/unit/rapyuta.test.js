import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';

const all = getAllRobots().allRobots;
const robot = (model) =>
  all.find((r) => r.manufacturer === 'Rapyuta Robotics' && r.model === model);
const fields = (r) => getSpecificationReview(r.id).fields;
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Rapyuta model evidence boundaries', () => {
  it('preserves the standard/XL runtime disagreement across both sources', () => {
    for (const model of ['PA-AMR', 'PA-AMR XL']) {
      const r = robot(model);
      for (const key of ['batteryLife', 'maxRuntime']) {
        expect(fields(r)[key].status).toBe('conflicting');
        expect(fields(r)[key].note).toContain('8 h');
        expect(fields(r)[key].note).toContain('10 h');
      }
      expect(getSpecificationReview(r.id).sources.some((s) => s.url.endsWith('.pdf'))).toBe(true);
    }
  });
  it('keeps cargo, item envelope and localization claims distinct', () => {
    const r = robot('PA-AMR');
    expect(r.weight).toContain('40 kg');
    expect(r.payload).toContain('45 kg total cargo');
    expect(r.size).toBe('');
    expect(fields(r).size.note).toContain('transportable-item envelope');
    expect(r.navigationAccuracy).toContain('10–15 cm');
    expect(r.navigationAccuracy).toContain('error metric unspecified');
    expect(r.dockingAccuracy).toBe('');
    expect(highlights(r)).toContain('four 10 L totes');
  });
  it('does not assign current High Capacity parameters to an unresolved XL generation', () => {
    const r = robot('PA-AMR XL');
    expect(r.weight).toBe('');
    expect(r.minAisleWidth).toBe('');
    expect(r.navigationAccuracy).toBe('');
    expect(fields(r).weight.note).toContain('same hardware generation');
    expect(fields(r).minAisleWidth.note).toContain('1.2 m');
    expect(r.description).toContain('unchanged hardware identity is not established');
    expect(all.filter((x) => x.manufacturer === r.manufacturer)).toHaveLength(5);
  });
  it('keeps three-tote capacities and tentative aisle guidance specific to Extra High Capacity', () => {
    const r = robot('PA-AMR Extra High Capacity');
    expect(r.weight).toContain('63 kg');
    expect(r.payload).toContain('39.2 kg');
    expect(r.speed).toContain('1.2 m/s');
    expect(r.minAisleWidth).toBe('');
    expect(fields(r).minAisleWidth.status).toBe('not-documented');
    expect(fields(r).minAisleWidth.note).toContain('4 ft as tentative');
    expect(highlights(r)).toContain('Three 75 L totes');
  });
  it('does not turn AFL pallet clearances or site results into universal robot ratings', () => {
    const r = robot('AFL');
    expect(r.payload).toContain('1.35 tons');
    expect(r.maxLiftHeight).toContain('4.5 m');
    expect(r.maxLiftHeight).toContain('rated payload at this height not established');
    expect(r.chargingTime).toContain('3 h');
    for (const key of [
      'weight',
      'size',
      'batteryLife',
      'maxRuntime',
      'throughput',
      'minAisleWidth',
    ])
      expect(r[key]).toBe('');
    expect(fields(r).throughput.note).toContain('30 pallets/hour at deployment sites');
    expect(fields(r).minAisleWidth.note).toContain('150–200 mm');
    expect(r.description).toContain('Japan availability');
    expect(r.description).toContain('older models');
  });
  it('keeps Weight Inspection footprint, weighing thresholds and tote layout scoped', () => {
    const r = robot('PA-AMR Weight Inspection');
    expect(r.size).toContain('Width 610 mm × depth 580 mm');
    expect(r.size).toContain('height not disclosed');
    expect(r.payload).toContain('40 kg maximum total cargo');
    expect(r.weight).toBe('');
    expect(r.throughput).toBe('');
    expect(highlights(r)).toContain('Minimum item weight is 10 g');
    expect(highlights(r)).toContain('neither specifies weighing accuracy');
    expect(r.description).toContain('do not establish four simultaneous 50 L totes');
  });
  it('retains automatic/manual charging modes without transferring them to other variants', () => {
    const r = robot('PA-AMR Weight Inspection');
    expect(r.chargingTime).toContain('Automatic charging 1 h; manual charging 2 h');
    expect(fields(r).chargingTime.status).toBe('documented');
    expect(r.maxRuntime).toContain('Up to 10 h');
    expect(fields(r).maxRuntime.status).toBe('documented');
    expect(robot('PA-AMR').chargingTime).toContain('2 h');
    expect(robot('PA-AMR Extra High Capacity').maxRuntime).toContain('8 h');
  });
  it('does not invent launch years, exact offers or included picking arms', () => {
    for (const r of all.filter((x) => x.manufacturer === 'Rapyuta Robotics')) {
      expect(r.releaseDate).toBe('');
      expect(getStructuredOffer(r.price)).toBeNull();
      for (const key of ['handType', 'dof', 'armReach', 'ipRating', 'dockingAccuracy'])
        expect(r[key]).toBe('');
      expect(highlights(r)).not.toMatch(/world.s first|no\. 1|fastest installation/i);
    }
  });
});
