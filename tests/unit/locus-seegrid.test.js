import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';

const all = getAllRobots().allRobots;
const robot = (id) => all.find((r) => r.id === id);
const locus = (name) => robot('locus-robotics-locus-' + name);
const seegrid = (name) => robot('seegrid-seegrid-' + name);
const fields = (r) => getSpecificationReview(r.id).fields;
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Locus and Seegrid model evidence boundaries', () => {
  it('keeps Origin body axes and runtime/charging conditions qualified', () => {
    const r = locus('origin');
    expect(r.size).toContain('dimension axes not explicitly named');
    expect(r.payload).toContain('36 kg / 80 lb');
    expect(r.batteryLife).toContain('Up to 14 h');
    expect(r.batteryLife).toContain('load/duty profile not specified');
    expect(r.chargingTime).toContain('50 min');
    expect(r.chargingTime).toContain('state-of-charge window unspecified');
    expect(r.throughput).toBe('');
    expect(r.releaseDate).toBe('');
  });
  it('retains the Vector introduction conflict without inventing a turn radius', () => {
    const r = locus('vector');
    expect(r.releaseDate).toBe('2022');
    expect(fields(r).releaseDate.status).toBe('conflicting');
    expect(fields(r).releaseDate.note).toContain('2023');
    expect(r.payload).toContain('272 kg / 600 lb');
    expect(r.driveMode).toContain('Omnidirectional');
    expect(r.turningRadius).toBe('');
  });
  it('separates Array global introduction, grasping claims and mixed-fleet capacity', () => {
    const r = locus('array');
    expect(r.releaseDate).toBe('2026');
    expect(fields(r).releaseDate.status).toBe('documented');
    expect(r.description).toContain('April 13, 2026');
    expect(r.handType).toContain('NeuraGrasp');
    for (const key of ['payload', 'dof', 'batteryLife', 'maxRuntime', 'throughput'])
      expect(r[key]).toBe('');
    expect(highlights(r)).toContain('SKU');
  });
  it('keeps historical Max identity without inferring current availability or numeric capacity', () => {
    const r = locus('max');
    expect(r.releaseDate).toBe('2022');
    expect(r.website).toContain('prnewswire.com/news-releases/');
    expect(r.description).toContain('limited 2022 availability');
    expect(r.description).toContain('does not establish present sale status');
    for (const key of ['payload', 'weight', 'size', 'batteryLife', 'speed'])
      expect(r[key]).toBe('');
  });
  it('keeps CR1 current mast capacity separate from future plans and conflicting milestones', () => {
    const r = seegrid('lift-cr1');
    expect(r.payload).toContain('4000 lb maximum pallet load');
    expect(r.maxLiftHeight).toContain('15 ft maximum current');
    expect(r.maxLiftHeight).toContain('future mast capability not a current rating');
    expect(r.releaseDate).toBe('2024');
    expect(fields(r).releaseDate.status).toBe('conflicting');
    expect(fields(r).releaseDate.note).toContain('2025');
    expect(r.size).toBe('');
    expect(r.weight).toBe('');
  });
  it('preserves the RS1 feet/inches contradiction on the manufacturer page', () => {
    const r = seegrid('lift-rs1');
    expect(r.maxLiftHeight).toContain('6 ft');
    expect(r.maxLiftHeight).toContain('6 in');
    expect(fields(r).maxLiftHeight.status).toBe('conflicting');
    expect(r.releaseDate).toBe('2022');
    expect(r.payload).toContain('3500 lb');
    expect(r.size).toBe('');
  });
  it('keeps EL1 model-specific lift and compliance claims separate from a rollout plan', () => {
    const r = seegrid('lift-el1');
    expect(r.payload).toContain('2700 lb');
    expect(r.maxLiftHeight).toBe('5 ft 2 in maximum lift height');
    expect(r.speed).toContain('3.4 mph');
    expect(r.minAisleWidth).toBe('');
    expect(highlights(r)).toContain('VDA 5050 2.1');
    expect(highlights(r)).toContain('planned 2026 compliance');
    expect(r.releaseDate).toBe('');
  });
  it('labels S7 load as towing and never turns it into vehicle mass or pallet lifting', () => {
    const r = seegrid('tow-tractor-s7');
    expect(r.payload).toContain('10000 lb across wheeled cart train');
    expect(r.payload).toContain('not onboard cargo payload or vehicle self weight');
    expect(r.weight).toBe('');
    expect(r.maxLiftHeight).toBe('');
    expect(r.terrain).toContain('2.5%');
    expect(r.speed).toContain('4 mph');
    expect(r.releaseDate).toBe('');
  });
  it('does not convert fleet charging, safety or RaaS statements into single-robot ratings', () => {
    const selected = all.filter((r) => ['Locus Robotics', 'Seegrid'].includes(r.manufacturer));
    expect(selected).toHaveLength(8);
    for (const manufacturer of ['Locus Robotics', 'Seegrid'])
      expect(selected.filter((r) => r.manufacturer === manufacturer)).toHaveLength(4);
    for (const r of selected) {
      expect(getStructuredOffer(r.price)).toBeNull();
      for (const key of [
        'weight',
        'ipRating',
        'navigationAccuracy',
        'dockingAccuracy',
        'throughput',
      ])
        expect(r[key]).toBe('');
      if (r.manufacturer === 'Seegrid')
        for (const key of ['batteryLife', 'maxRuntime', 'chargingTime', 'size'])
          expect(r[key]).toBe('');
    }
  });
});
