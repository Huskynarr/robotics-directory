import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getCompanyInsights } from '../../src/data/company-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
const robots = getAllRobots().allRobots;
const byid = (id) => robots.find((r) => r.id === id);
const o = (model) => robots.find((r) => r.manufacturer === 'Ohmnilabs' && r.model === model);
const q = (model) => robots.find((r) => r.manufacturer === 'Quantum Systems' && r.model === model);
const review = (r) => getSpecificationReview(r.id);
const high = (r) => getProductInsights(r.id).highlights.join(' ');
describe('Ohmni generation and UV-C workflow boundaries', () => {
  it('keeps discontinued Ohmni specifications separate from successor OhmniCare', () => {
    const old = o('Ohmni Telepresence Robot'),
      care = o('OhmniCare Robot');
    expect(old.description).toContain('discontinued as of August 2024');
    expect(old.weight).toContain('18 lb robot');
    expect(care.weight).toContain('66 lb (30 kg)');
    expect(old.batteryLife).toContain('4-5 h');
    expect(care.batteryLife).toContain('8-9 h');
    expect(old.releaseDate).toBe('');
    expect(care.releaseDate).toBe('');
  });
  it('retains legacy speed conflict partial charge and historical price without a current Offer', () => {
    const r = o('Ohmni Telepresence Robot');
    expect(r.speed).toContain('2 mph');
    expect(r.speed).toContain('2.2 mph');
    expect(review(r).fields.speed.status).toBe('conflicting');
    expect(r.chargingTime).toContain('half charge to full while powered off');
    expect(r.price).toContain('Discontinued');
    expect(r.price).toContain('$3,899');
    expect(getStructuredOffer(r.price)).toBeNull();
  });
  it('preserves SuperCam serial evidence date despite blocked revalidation without platform inheritance', () => {
    const r = o('Ohmni SuperCam');
    expect(r.id).toBe('ohmnilabs-ohmni-supercam');
    expect(r.description).toContain('PVT 3000');
    expect(high(r)).toContain('HTTP 403');
    expect(review(r).sources[0].checkedAt).toBe('2026-11-01');
    expect(review(r).sources[1].checkedAt).toBe('2026-11-02');
    expect(high(r)).toContain('109 degrees horizontal');
    for (const key of ['weight', 'size', 'speed', 'batteryLife', 'chargingTime', 'dof'])
      expect(r[key]).toBe('');
  });
  it('shows OhmniCare footprint conflict and charge ratio rather than an inferred full charge', () => {
    const r = o('OhmniCare Robot');
    expect(r.size).toContain('14 x 18 in');
    expect(r.size).toContain('15 x 9.5 in');
    expect(review(r).fields.size.status).toBe('conflicting');
    expect(r.chargingTime).toContain('20 min charging per 1 h');
    expect(high(r)).toContain('A strong Wi-Fi connection is required');
    expect(high(r)).toContain('3x streaming superzoom');
    expect(r.dof).toBe('');
    expect(r.handType).toBe('');
  });
  it('keeps OhmniClean mass and battery disagreement separate from continuous swaps lamp life and area rate', () => {
    const r = o('OhmniClean Robot');
    expect(r.weight).toContain('79 lb');
    expect(r.weight).toContain('71 lb');
    expect(r.batteryLife).toContain('2 h average');
    expect(r.batteryLife).toContain('75 min');
    for (const key of ['weight', 'batteryLife'])
      expect(review(r).fields[key].status).toBe('conflicting');
    expect(r.chargingTime).toContain('1 h/60 min');
    expect(r.maxRuntime).toBe('');
    expect(r.areaRate).toBe('');
    expect(high(r)).toContain('not one charge');
    expect(high(r)).toContain('Unoccupied-space use');
    expect(high(r)).toContain('not robot operating duration per charge');
  });
});
describe('Quantum platform and mode-specific evidence', () => {
  it('keeps Vector fixed-wing and multicopter columns paired without MTOW as mass', () => {
    const fw = q('Vector AI Fixed-Wing'),
      multi = q('Vector AI Multicopter');
    expect(fw.flightTime).toContain('180+ min');
    expect(multi.flightTime).toContain('35 min');
    expect(fw.maxTakeoffWeight).toContain('9.5 kg');
    expect(multi.maxTakeoffWeight).toContain('8.0 kg');
    expect(fw.speed).toContain('15-20 m/s');
    expect(multi.speed).toContain('0-15 m/s');
    expect(fw.weight).toBe('');
    expect(multi.weight).toBe('');
    expect(fw.batteryLife).toBe('');
    expect(multi.batteryLife).toBe('');
  });
  it('separates Reliant fuel endurance payload and aircraft IP from controller values', () => {
    const r = q('Reliant');
    expect(r.flightTime).toContain('10+ h');
    expect(r.payload).toContain('9 kg');
    expect(r.maxTakeoffWeight).toBe('45 kg');
    expect(r.weight).toBe('');
    expect(r.batteryLife).toBe('');
    expect(r.ipRating).toBe('IP55');
    expect(high(r)).toContain('Ground-controller up-to 38 h');
    expect(r.releaseDate).toBe('');
  });
  it('retains Trinity Pro export defaults and Tactical IP disagreement without family launch inheritance', () => {
    expect(q('Trinity Pro').flightTime).toContain('59 min by default');
    expect(q('Trinity Pro').flightTime).toContain('subject to export regulation');
    expect(q('Trinity Pro').releaseDate).toBe('');
    expect(q('Trinity Tactical').releaseDate).toBe('');
    expect(q('Trinity Tactical').ipRating).toContain('IP54');
    expect(q('Trinity Tactical').ipRating).toContain('IP55');
    expect(review(q('Trinity Tactical')).fields.ipRating.status).toBe('conflicting');
    expect(q('Trinity Tactical').weight).toBe('');
  });
  it('marks PULSE preliminary performance and future unmanned mode without assuming VTOL', () => {
    const r = q('PULSE P19');
    for (const key of ['weight', 'payload', 'flightTime', 'speed', 'maxTakeoffWeight'])
      expect(review(r).fields[key].status).toBe('roadmap');
    expect(r.weight).toContain('excluding ejection seats');
    expect(r.maxTakeoffWeight).toContain('2500 kg aerobatic');
    expect(r.maxTakeoffWeight).toContain('4200 kg military');
    expect(r.flightTime).toContain('internal+external fuel');
    expect(r.terrain).toContain('not VTOL');
    expect(r.description).toContain('future unmanned operation');
  });
  it('keeps Mandrill option geometry range and energy separate from endurance and charge time', () => {
    const r = q('Mandrill');
    expect(r.size).toContain('short 2.9 x 1.8 m, height unspecified');
    expect(r.driveMode).toBe('Wheel drive; optional track drive');
    expect(r.payload).toContain('750+ kg');
    expect(review(r).fields.payload.status).toBe('conflicting');
    for (const key of ['batteryLife', 'maxRuntime', 'chargingTime']) expect(r[key]).toBe('');
    expect(high(r)).toContain('200 km electrical range is not 200 hours');
  });
  it('keeps Seavex displacement and draft separate from empty mass and body height', () => {
    const r = q('Seavex');
    expect(r.weight).toBe('');
    expect(r.size).toContain('draft, not total height');
    expect(r.maxRuntime).toContain('Up to 2 months');
    expect(r.batteryLife).toBe('');
    expect(r.terrain).toContain('operation up to Sea State 3, survivability up to Sea State 6');
    expect(high(r)).toContain('4500 kg is displacement');
  });
  it('retains Subvex diameter conflict and depth separately from sonar range and charge interval', () => {
    const r = q('Subvex');
    expect(r.size).toContain('533 mm');
    expect(r.size).toContain('530 mm');
    expect(review(r).fields.size.status).toBe('conflicting');
    expect(r.depthRating).toContain('6000 m');
    expect(r.maxRuntime).toContain('4 days');
    expect(r.batteryLife).toBe('');
    expect(r.chargingTime).toBe('');
    expect(high(r)).toContain('1000 m side-scan range concern different limits');
  });
  it('keeps Skyron 400 distinct from Addverb with booster limits and payload source conflict', () => {
    const r = q('Skyron 400');
    expect(r.maxTakeoffWeight).toContain('4.5 kg base /8.5 kg with booster');
    expect(r.payload).toContain('800 g');
    expect(r.payload).toContain('1.2 kg');
    expect(review(r).fields.payload.status).toBe('conflicting');
    expect(
      robots.some((r) => r.manufacturer === 'Addverb Technologies' && r.model === 'Skyron'),
    ).toBe(true);
    expect(high(r)).toContain('Separate identity from Addverb');
  });
  it('retains WIY manufacturer attribution and own-source conflict instead of duplicating STRILA under Quantum', () => {
    const r = byid('wiy-drones-strila');
    expect(r.manufacturer).toBe('WIY Drones');
    expect(q('STRILA')).toBeUndefined();
    expect(review(r).sources[0].type).toBe('integrator');
    expect(r.maxTakeoffWeight).toContain('5.7 kg');
    expect(r.maxTakeoffWeight).toContain('5300 g');
    expect(r.speed).toContain('415 km/h');
    expect(r.speed).toContain('350 km/h');
    expect(review(r).fields.maxTakeoffWeight.status).toBe('conflicting');
    expect(review(r).fields.speed.status).toBe('conflicting');
  });
  it('exposes three sourced company roles without option and software duplicate cards', () => {
    for (const [id, count] of [
      ['ohmnilabs', 4],
      ['quantum-systems', 11],
      ['catalog-wiy-drones-f0172e0357cc', 1],
    ]) {
      const b = getAllBrands().find((b) => b.id === id);
      expect(b.robots).toHaveLength(count);
      expect(getCompanyInsights(b).primary.highlights.length).toBeGreaterThanOrEqual(3);
      for (const r of b.robots) expect(getStructuredOffer(r.price)).toBeNull();
    }
  });
});
