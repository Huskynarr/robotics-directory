import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';
const all = getAllRobots().allRobots;
const robot = (model) => all.find((r) => r.manufacturer === 'Geek+' && r.model === model);
const fields = (model) => getSpecificationReview(robot(model).id).fields;
const high = (model) => getProductInsights(robot(model).id).highlights.join(' ');

describe('Geek+ model identity and measured scope', () => {
  it('preserves the historical V6.0 load separately from the unversioned P800R', () => {
    expect(robot('P800R V6.0').payload).toBe('800 kg');
    expect(robot('P800R V6.0').weight).toContain('Less than 165 kg');
    expect(robot('P800R').payload).toBe('1000 kg');
    expect(fields('P800R').weight.status).toBe('conflicting');
    for (const mass of ['142 kg', '165 kg', '162 kg'])
      expect(robot('P800R').weight).toContain(mass);
  });
  it('retains global, regional and historical P1200R mass and speed conditions', () => {
    for (const mass of ['288 kg', '320 kg', '187 kg'])
      expect(robot('P1200R').weight).toContain(mass);
    for (const speed of ['2.6', '2.2', '1.5', '1.2'])
      expect(robot('P1200R').speed).toContain(speed);
    expect(fields('P1200R').speed.status).toBe('conflicting');
    expect(robot('P500R').payload).toBe('600 kg');
    expect(fields('P500R').speed.status).toBe('conflicting');
  });
  it('separates QR navigation, geometric stopping tolerance and shelf lift', () => {
    expect(robot('P800R').navigationAccuracy).toBe('');
    expect(robot('P800R').dockingAccuracy).toContain('stopping frame');
    expect(robot('P800R').liftStroke).toContain('55 mm');
    expect(fields('P800R').liftStroke.status).toBe('conflicting');
    expect(robot('P800R').maxLiftHeight).toBe('');
    expect(high('P800R')).toContain('malformed 11250');
  });
  it('keeps the M200C payload at 300 kg and distinguishes running and end-assisted stop tolerances', () => {
    expect(robot('M200C').payload).toBe('300 kg');
    expect(robot('M200C').weight).toBe('106 kg');
    expect(robot('M200C').navigationAccuracy).toContain('20 mm');
    expect(robot('M200C').dockingAccuracy).toContain('10 mm');
    expect(high('M200C')).toContain('Malformed temperature');
  });
  it('does not transfer MP1000R-SNE hardware or geometry into the generic MP1000R', () => {
    expect(robot('MP1000R').weight).toBe('');
    expect(robot('MP1000R').size).toContain('1090 x 830 x 250');
    expect(robot('MP1000R-SNE V2.1').size).toContain('1105 x 855 x 275');
    expect(robot('MP1000R-SNE V2.1').speed).toContain('1.5 m/s unloaded');
    expect(fields('MP1000R-SNE V2.1').minAisleWidth.status).toBe('conflicting');
    expect(robot('MP1000R-SNE V2.1').turningRadius).toBe('');
    expect(robot('M1000R').weight).toBe('169 kg in named sheet');
  });
  it('keeps heavy mover minimum customizable dimensions separate from shelf envelopes', () => {
    for (const model of ['M2000C', 'M3000C']) {
      expect(robot(model).size).toContain('Minimum 1800 x 1000 x 350');
      expect(robot(model).size).toContain('customizable');
      expect(robot(model).size).not.toContain('2100');
      expect(robot(model).batteryLife).toContain('40 min work after 10 min');
      expect(robot(model).weight).toBe('');
    }
  });
  it('retains F12ML derating and lift-height conflicts without assigning lift speed as base travel', () => {
    const r = robot('F12ML');
    expect(r.payload).toContain('1500 kg at 0-2 m');
    expect(r.payload).toContain('1000 kg at 2.5-3 m');
    expect(r.maxLiftHeight).toContain('2300 mm');
    expect(r.maxLiftHeight).toContain('2344/2844/3244');
    expect(fields('F12ML').maxLiftHeight.status).toBe('conflicting');
    expect(r.speed).toContain('Web loaded 1.2');
    expect(r.turningRadius).toBe('');
    expect(r.weight).toBe('');
    expect(robot('F20MT').chargingTime).toContain('full charge');
  });
  it('does not convert RS charging current, cycles or historical storage heights into endurance', () => {
    const r = robot('RS8-DA');
    expect(r.weight).toContain('900 kg');
    expect(r.weight).toContain('1000 kg');
    expect(fields('RS8-DA').weight.status).toBe('conflicting');
    expect(r.maxLiftHeight).toContain('7935 mm');
    expect(r.maxLiftHeight).not.toContain('8220');
    expect(high('RS8-DA')).toContain('320 kg stated maximum payload');
    for (const key of ['chargingTime', 'batteryLife', 'maxRuntime']) expect(r[key]).toBe('');
    expect(high('RS11-DA')).toContain('twelve seconds');
    expect(high('RS11-DA')).toContain('ten seconds');
  });
  it('does not turn the malformed RS Air aisle slot into a lifting height', () => {
    expect(robot('RS Air').payload).toContain('40 kg');
    for (const key of ['maxLiftHeight', 'minAisleWidth', 'weight'])
      expect(robot('RS Air')[key]).toBe('');
    expect(high('RS Air')).toContain('Minimum Aisle width:1015');
  });
  it('retains P40 and explicitly named P40R without asserting an alias', () => {
    expect(robot('P40').size).toContain('386 mm');
    expect(robot('P40R').size).toContain('383 mm');
    expect(robot('P40').weight).toContain('75 kg');
    expect(robot('P40').batteryLife).toBe('');
    expect(robot('P40R').batteryLife).toContain('after 10 min');
    expect(high('P40')).toContain('do not prove an alias');
  });
  it('keeps sorting revisions and their loaded speeds separate without extra generic cards', () => {
    expect(robot('S20C V2.0').weight).toBe('75 kg');
    expect(robot('S20C V2.0').size).toContain('560 x 600');
    expect(robot('S20C V2.0').speed).toContain('fully loaded 2.0');
    expect(robot('S20C V3.0').weight).toBe('78 kg');
    expect(robot('S20C V3.0').size).toContain('650 x 600');
    expect(robot('S20C V3.0').speed).toContain('fully loaded 2.5');
    expect(robot('S20C')).toBeUndefined();
    expect(robot('S20T V2.0').speed).toContain('fully loaded 2.0');
    expect(robot('S20C-A V2.0').liftStroke).toBe('');
    expect(robot('S20C-A V2.0').size).toContain('variable overall height');
  });
  it('keeps H, Z and historical X identities and does not swap unusual loaded speed labels', () => {
    expect(robot('X1200H').speed).toContain('loaded 2.5 m/s and unloaded 1.8');
    expect(robot('X1200H').weight).toBe('245 kg');
    expect(robot('X1200Z').weight).toBe('270 kg');
    expect(robot('X1200').size).toContain('1090 x 1030 x 160');
    expect(robot('X1200H').batteryLife).toBe('');
    expect(robot('X1200H').turningRadius).toBe('');
    expect(robot('X1200Z').batteryLife).toContain('Room temperature 8-10');
    expect(robot('X1200Z').batteryLife).toContain('cold storage 6-8');
    expect(robot('X1200Z').navigationAccuracy).toBe('');
    expect(high('X1200Z')).toContain('battery is TBD');
  });
  it('keeps cycle life, resource dates and ROI wording out of robot lifetime, launch and offers', () => {
    const geek = all.filter((r) => r.manufacturer === 'Geek+');
    expect(geek).toHaveLength(31);
    for (const r of geek) {
      expect(r.releaseDate).toBe('');
      expect(r.ipRating).toBe('');
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(r.batteryLife).not.toMatch(/2000|years|24x7/);
    }
  });
});
