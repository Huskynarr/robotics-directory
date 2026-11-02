import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';

const all = getAllRobots().allRobots;
const robot = (suffix) => all.find((r) => r.id === 'robotnik-rb-' + suffix);
const fields = (r) => getSpecificationReview(r.id).fields;
const high = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Robotnik configured carrier, arm and source scope', () => {
  it('separates standard Kairos wheels from the heavier option and installed-arm cargo', () => {
    expect(robot('kairos').payload).toContain('100 kg standard');
    expect(robot('kairos').payload).toContain('250 kg with optional strong wheels');
    expect(robot('kairos').weight).toContain('115 kg');
    expect(robot('kairos-plus').weight).toContain('UR7e 135 kg');
    expect(robot('kairos-plus').payload).toContain('UR16e 16 kg');
    expect(robot('kairos-plus').transportPayload).toContain('UR7e 230 kg');
    expect(robot('kairos-plus').armReach).toContain('UR12e 1300 mm');
  });
  it('preserves Robout heavy-option footprint conditions and the 8/10-hour discrepancy', () => {
    const r = robot('robout');
    expect(r.payload).toContain('2000 kg optional adaptation requiring changed width and length');
    expect(r.size).toContain('changes footprint width and length');
    expect(r.weight).toContain('mass mapping');
    expect(r.batteryLife).toContain('10 h');
    expect(r.batteryLife).toContain('8 h');
    expect(fields(r).batteryLife.status).toBe('conflicting');
    expect(fields(r).maxRuntime.status).toBe('conflicting');
  });
  it('does not repair Robout+ carrier numbers or turn column lengths into vertical travel', () => {
    const r = robot('robout-plus');
    expect(r.transportPayload).toContain('755/765/760/735/765 kg');
    expect(fields(r).transportPayload.status).toBe('conflicting');
    expect(r.size).toContain('UR15 1758');
    expect(r.size).toContain('drawing instead 1785');
    expect(fields(r).size.status).toBe('conflicting');
    expect(r.payload).toContain('UR30 35 kg');
    expect(r.liftStroke).toBe('');
    expect(r.maxLiftHeight).toBe('');
    expect(high(r)).toContain('Column length supplies no demonstrated vertical travel');
  });
  it('keeps Watcher chassis protection below the microphone/speaker component label', () => {
    expect(robot('watcher').ipRating).toBe('IP54');
    expect(robot('watcher-xl').ipRating).toBe('IP55');
    expect(robot('watcher').weight).toContain('73 kg');
    expect(robot('watcher-xl').weight).toContain('75 kg');
    expect(robot('watcher').payload).toContain('50 kg');
    expect(robot('watcher-xl').payload).toContain('40 kg');
    expect(high(robot('watcher-xl'))).toContain('IP65 microphone');
    expect(robot('watcher-xl').terrain).toContain('50%');
  });
  it('keeps Fiqus carrier, manipulator and transverse guide dimensions separate', () => {
    const r = robot('fiqus-plus');
    expect(robot('fiqus').weight).toContain('450 kg');
    expect(robot('fiqus').payload).toContain('1000 kg');
    expect(robot('fiqus').ipRating).toBe('IP42');
    expect(r.weight).toContain('600 kg');
    expect(r.ipRating).toBe('IP53');
    expect(r.transportPayload).toContain('UR12e 720 kg');
    expect(r.size).toContain('adjustable width 1177-1610 mm');
    expect(r.armReach).toContain('transverse guide displacement excluded');
    expect(r.liftStroke).toBe('');
    expect(high(r)).toContain('±300 mm transverse');
  });
  it('keeps current Summit Kinova columns separate from the unmapped older route', () => {
    const r = robot('summit-plus');
    expect(robot('summit').payload).toBe('50 kg platform cargo');
    expect(r.payload).toContain('Lite 0.5 kg');
    expect(r.transportPayload).toContain('45 kg');
    expect(r.transportPayload).toContain('up to 40 kg');
    expect(fields(r).transportPayload.status).toBe('conflicting');
    expect(r.ipRating).toContain('IP22');
    expect(r.armReach).toContain('legacy 985 mm not inherited');
    expect(high(r)).toContain('generation mapping is unresolved');
    expect(all.find((x) => x.id === 'robotnik-rb-gen-plus')).toBeUndefined();
  });
  it('distinguishes Theron base, education and installed-arm battery values', () => {
    expect(robot('theron').batteryLife).toContain('8 h');
    expect(robot('theron-fp').batteryLife).toContain('5 h');
    expect(robot('theron-fp').category).toBe('educational');
    const r = robot('theron-plus');
    expect(r.batteryLife).toContain('6 h');
    expect(r.batteryLife).toContain('8 h');
    expect(fields(r).batteryLife.status).toBe('conflicting');
    expect(fields(r).payload.status).toBe('conflicting');
    expect(r.payload).toContain('UR5e');
    expect(r.payload).toContain('UR7e');
    expect(r.transportPayload).toContain('100 kg residual');
    expect(robot('theron').liftStroke).toBe('');
  });
  it('retains FP drawing precision and only reviews columns supported by its category schema', () => {
    const r = robot('theron-fp');
    expect(r.size).toContain('320.5 mm');
    expect(r.size).toContain('320.40 mm');
    expect(fields(r).size.status).toBe('conflicting');
    expect(fields(r)).not.toHaveProperty('armReach');
    expect(r.releaseDate).toBe('');
    expect(high(r)).toContain('not first model launch');
  });
  it('qualifies Vogui+ cargo, configured mass and the restricted long-arm workspace', () => {
    const r = robot('vogui-plus');
    expect(robot('vogui').weight).toContain('165 kg');
    expect(r.weight).toContain('UR8 Long 210 kg');
    expect(r.transportPayload).toContain('125 kg');
    expect(r.transportPayload).toContain('UR7e 130 kg');
    expect(fields(r).transportPayload.status).toBe('conflicting');
    expect(r.armReach).toContain('1750 mm with restricted workspace');
    expect(r.payload).toContain('UR12e 12.5 kg');
    expect(r.driveMode).toContain('Dual Ackerman');
  });
  it('keeps prices, first launch years, charge durations and positioning error unknown', () => {
    const selected = all.filter((r) => r.manufacturer === 'Robotnik');
    expect(selected).toHaveLength(15);
    for (const r of selected) {
      expect(getStructuredOffer(r.price)).toBeNull();
      for (const k of ['releaseDate', 'chargingTime', 'handType', 'dof']) expect(r[k]).toBe('');
      for (const k of ['navigationAccuracy', 'dockingAccuracy', 'throughput'])
        expect(r[k] || '').toBe('');
    }
  });
});
