import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
import { getAllBrands } from '../../src/data/brands.js';
const robots = getAllRobots().allRobots;
const robot = (manufacturer, model) =>
  robots.find((r) => r.manufacturer === manufacturer && r.model === model);
const interbotix = (model) => robot('Interbotix', model);
const trossen = (model) => robot('Trossen Robotics', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Trossen and Interbotix generation and configuration evidence', () => {
  it('keeps hardware brand and provider profiles separate while exposing their model sets', () => {
    const brands = getAllBrands();
    const i = brands.find((b) => b.name === 'Interbotix');
    const t = brands.find((b) => b.id === 'trossen-robotics');
    expect(i.id).toBe('catalog-interbotix-4c84889e15d1');
    expect(i.robots).toHaveLength(15);
    expect(t.robots).toHaveLength(16);
    expect(i.aliases).not.toContain('Trossen Robotics');
  });
  it('keeps working payload qualified by the extension limit', () => {
    for (const r of robots.filter(
      (r) =>
        r.manufacturer === 'Interbotix' &&
        !['ALOHA Mobile', 'ALOHA Solo', 'ALOHA Stationary'].includes(r.model),
    )) {
      expect(r.payload).toContain('50% extension');
      expect(review(r).fields.payload.note).toContain('overheating');
      expect(r.weight).toBe('');
      expect(r.batteryLife).toBe('');
    }
  });
  it('retains the unresolved PincherX-150 reach definition without inventing a correction', () => {
    const r = interbotix('PincherX-150');
    expect(r.armReach).toContain('150 mm');
    expect(r.armReach).toContain('900 mm total span');
    expect(highlights(r)).toContain('not silently corrected to 450 mm');
    expect(r.size).toBe('');
  });
  it('distinguishes arm DOF, servo counts, repeatability and accuracy', () => {
    const r = interbotix('ViperX-300 6DOF');
    expect(r.dof).toContain('6 arm DOF');
    expect(highlights(r)).toContain('9 servos');
    expect(r.armRepeatability).toContain('1 mm');
    expect(highlights(r)).toContain('5 - 8mm');
    expect(review(r).fields.handType.note).toContain('116 mm');
  });
  it('keeps separately documented ALOHA arm variants distinct from their complete kits', () => {
    expect(interbotix('ALOHA WidowX-250 6DOF').payload).toContain('250 g');
    expect(interbotix('ALOHA ViperX-300 6DOF').payload).toContain('750 g');
    expect(interbotix('ALOHA Solo').payload).toContain('per ALOHA ViperX follower');
    expect(interbotix('ALOHA Stationary').size).toContain('1019 mm depth');
  });
  it('does not turn mobile energy capacity into battery runtime or transfer it across generations', () => {
    const old = interbotix('ALOHA Mobile');
    expect(old.weight).toContain('122 kg');
    expect(old.speed).toContain('1 m/s');
    expect(highlights(old)).toContain('1.4 kWh');
    for (const r of [old, trossen('Mobile AI')]) {
      for (const key of ['batteryLife', 'maxRuntime', 'chargingTime', 'size'])
        expect(r[key]).toBe('');
    }
    expect(trossen('Mobile AI').weight).toBe('');
  });
  it('does not turn the previous AI arm gripper into a seventh arm axis', () => {
    for (const name of ['Base', 'Leader', 'Follower']) {
      const r = trossen('WidowX AI ' + name);
      expect(r.dof).toContain('6 arm DOF');
      expect(highlights(r)).toContain('Joint 7');
      expect(r.speed).toContain('180°/s joint speed');
      expect(r.weight).toContain('configuration-specific mass not separately given');
    }
    expect(highlights(trossen('WidowX AI Follower'))).toContain('D405 camera');
  });
  it('keeps current preliminary columns, reach conflicts and legacy repeatability separate', () => {
    for (const [name, mass, docReach] of [
      ['Core Follower', '5.5 kg', '790'],
      ['Pro', '6 kg', '790'],
      ['Heavy', '8 kg', '1114'],
    ]) {
      const r = trossen('WidowX ' + name);
      expect(r.weight).toContain(mass);
      expect(review(r).fields.weight.status).toBe('roadmap');
      expect(r.armReach).toContain(docReach + ' mm');
      expect(review(r).fields.armReach.status).toBe('conflicting');
      expect(r.handType).toContain('90 mm');
      expect(r.armRepeatability).toBe('');
    }
    expect(trossen('WidowX Core Leader').weight).toBe('');
  });
  it('preserves the Heavy arm versus Workbench package load conflict without summing arms', () => {
    for (const r of [
      trossen('WidowX Heavy'),
      trossen('Workbench Lite + 2 WidowX Heavy + Cameras'),
    ]) {
      expect(r.payload).toContain('6 kg per arm');
      expect(r.payload).toContain('8 kg per arm');
      expect(review(r).fields.payload.status).toBe('conflicting');
      expect(r.payload).not.toContain('16 kg');
    }
  });
  it('keeps empty Rivet Base and populated Pro package contents distinct', () => {
    const base = trossen('Rivet Base');
    const equipped = trossen('Rivet + 2 WidowX Pro + Cameras');
    expect(base.description).toContain('no built-in compute');
    expect(base.payload).toBe('');
    expect(base.armReach).toBe('');
    expect(equipped.payload).toContain('4 kg per');
    expect(equipped.id).toBe('trossen-robotics-rivet-plus-2-widowx-pro-plus-cameras');
    expect(base.liftStroke).toContain('890 mm');
    expect(base.maxLiftHeight).toBe('');
    expect(base.maxRuntime).toBe('');
  });
  it('keeps full Workbench coming-soon status and named Lite camera packages explicit', () => {
    expect(trossen('Workbench').description).toContain('coming soon');
    expect(review(trossen('Workbench')).fields.description.status).toBe('roadmap');
    for (const tier of ['Core', 'Pro', 'Heavy']) {
      const r = trossen('Workbench Lite + 2 WidowX ' + tier + ' + Cameras');
      expect(r.description).toContain('omits onboard compute and screen');
      expect(r.description).toContain('separately named camera package');
      expect(r.weight).toBe('');
    }
  });
  it('avoids firm structured offers, invented launch years and passive-device robot cards', () => {
    const selected = robots.filter((r) =>
      ['Interbotix', 'Trossen Robotics'].includes(r.manufacturer),
    );
    expect(selected).toHaveLength(31);
    for (const r of selected) {
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(r.releaseDate).toBe('');
      expect(r.ipRating).toBe('');
      expect(r.model).not.toMatch(/Glide|Cockpit|TRumi|TOTL/);
    }
    for (const r of selected.filter((r) => r.price.startsWith('Proposed')))
      expect(review(r).fields.price.status).toBe('roadmap');
  });
});
