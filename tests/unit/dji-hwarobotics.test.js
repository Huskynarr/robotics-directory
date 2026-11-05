import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
const robots = getAllRobots().allRobots;
const find = (manufacturer, model) =>
  robots.find((r) => r.manufacturer === manufacturer && r.model === model);
const d = (model) => find('DJI', model);
const h = (model) => find('HWArobotics', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');
describe('DJI aircraft identity, flight test and battery conditions', () => {
  it('keeps Mini standard and Plus mass/flight configurations together without inventing MTOW', () => {
    const r = d('Mini 4 Pro');
    expect(r.weight).toContain('more than 249 g with Battery Plus');
    expect(r.flightTime).toContain('34 min standard');
    expect(r.flightTime).toContain('45 min Battery Plus (not available in Europe)');
    expect(r.maxTakeoffWeight).toBe('');
    expect(r.payload).toBe('');
    expect(r.dof).toBe('');
    expect(r.maxRuntime).toBe('');
    expect(r.batteryLife).toBe('');
    expect(r.size).toContain('unfolded with propellers');
  });
  it('separates Mavic Pro and Cine hardware without inheriting Cine-only imaging', () => {
    const pro = d('Mavic 3 Pro');
    const cine = d('Mavic 3 Pro Cine');
    expect(pro.weight).toContain('958 g');
    expect(cine.weight).toContain('963 g');
    expect(pro.description).toContain('does not inherit Cine-only Apple ProRes or 1 TB SSD');
    expect(cine.description).toContain('Cine adds Apple ProRes recording on all three cameras');
    for (const r of [pro, cine]) {
      expect(r.flightTime).toContain('43 min at 32.4 km/h');
      expect(highlights(r)).toContain('three hub batteries charge sequentially');
      expect(r.maxTakeoffWeight).toBe('');
    }
  });
  it('retains tailwind/regional speed limits and actual charge equipment/state conditions', () => {
    expect(d('Air 3S').speed).toContain('27 m/s with equivalent 6 m/s tailwind; EU limit 19 m/s');
    expect(d('Flip').speed).toContain('16 m/s with equivalent 4 m/s tailwind; tracking 12 m/s');
    expect(d('Flip').chargingTime).toContain('0-100%');
    expect(highlights(d('Flip'))).toContain('at least 5 A-rated PD cable');
    expect(d('Air 3S').chargingTime).toContain('charge-state interval unspecified');
    expect(d('Mini 4 Pro').chargingTime).toContain('58 min in two-way hub');
    expect(d('Inspire 3').weight).toContain('3.995');
    expect(Object.keys(review(d('Inspire 3')).fields)).toHaveLength(3);
  });
});
describe('HWArobotics cargo, individual shuttle and warehouse system scope', () => {
  it('keeps single-aisle throughput and unit load separate from goods-lift and chassis data', () => {
    expect(h('SLS300').payload).toContain('35 kg rated unit load; 50 kg maximum');
    expect(h('SLS300').throughput).toContain('2500 boxes/h single-aisle compound');
    expect(h('SLS400').throughput).toContain('10 m system height and 50 m rack length');
    expect(h('SLS500').throughput).toContain('single-aisle single-inbound');
    expect(h('SLS500').payload).toContain('3-20 kg');
    expect(h('SLS500').speed).toBe('');
    expect(h('SLS600').speed).toContain('at least 4 m/s');
    for (const model of ['SLS300', 'SLS400', 'SLS500', 'SLS600']) {
      const r = h(model);
      expect(r.size).toBe('');
      expect(r.weight).toBe('');
      expect(r.batteryLife).toBe('');
      expect(r.maxRuntime).toBe('');
    }
  });
  it('does not create SLS900 duplicates or substitute current page values into differently named PDFs', () => {
    expect(
      robots.filter((r) => r.manufacturer === 'HWArobotics' && r.model.includes('SLS900')),
    ).toHaveLength(0);
    expect(h('SLS300').speed).toContain('4 m/s');
    expect(h('SLS400').speed).toContain('4 m/s');
    expect(highlights(h('SLS600'))).toContain(
      'Mapping, rename and hardware-generation continuity remain unresolved',
    );
  });
  it('separates pallet chassis, hoist, lift stroke, rack height and multi-day charged duty', () => {
    const a = h('FPSS1500A');
    const b = h('FPSS1500B');
    expect(a.terrain).toContain('-10 to 50 °C');
    expect(b.terrain).toContain('-25 to 50 °C');
    for (const r of [a, b]) {
      expect(r.size).toContain('1172 x 960 x 125');
      expect(r.payload).toContain('1500 kg rated/max pallet load; separate hoist is 2000 kg');
      expect(r.liftStroke).toContain('35 mm');
      expect(r.stackingHeight).toContain('22 m system storage height');
      expect(r.navigationAccuracy).toContain('±3 mm');
      expect(r.dof).toBe('');
      expect(r.chargingTime).toBe('');
      expect(review(r).fields.speed.status).toBe('conflicting');
    }
    expect(review(a).fields.maxRuntime.status).toBe('documented');
    expect(review(b).fields.maxRuntime.status).toBe('conflicting');
    expect(a.maxRuntime).toContain('8 h per charge');
    expect(b.maxRuntime).toContain('FAQ also calls 72 h');
  });
  it('adds only the explicitly robotic GTR station without inventing a picking rate or arm configuration', () => {
    const r = h('GTR200');
    expect(r.description).toContain('integrated robotic station');
    expect(r.throughput).toBe('');
    expect(r.dof).toBe('');
    expect(r.payload).toBe('');
    expect(r.size).toBe('');
    expect(r.maxRuntime).toBe('');
    for (const name of ['PSD310', 'PSS105', 'MFC']) expect(h(name)).toBeUndefined();
    for (const model of ['FPSS1500A', 'FPSS1500B', 'GTR200'])
      expect(getStructuredOffer(h(model).price)).toBeNull();
  });
  it('connects sourced company focuses to all canonical brand cards', () => {
    for (const [id, count] of [
      ['dji', 12],
      ['hwarobotics', 7],
    ]) {
      const brand = getAllBrands().find((b) => b.id === id);
      expect(brand.robots).toHaveLength(count);
      expect(getCompanyInsights(brand).primary.highlights.length).toBeGreaterThan(3);
    }
  });
});
