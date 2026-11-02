import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer } from '../../src/utils/format.js';

const robots = new Map(getAllRobots().allRobots.map((r) => [r.id, r]));
const robot = (id) => robots.get(id);
const fields = (id) => getSpecificationReview(id).fields;
const high = (id) => getProductInsights(id).highlights.join(' ');

describe('Avidbots cleaning configurations and source revisions', () => {
  it('separates Kas working path, theoretical output, gross mass and brush downforce', () => {
    const r = robot('avidbots-kas');
    expect(r.weight).toContain('Empty 172 kg');
    expect(r.weight).toContain('266 kg');
    expect(r.payload).toBe('');
    expect(r.workingWidth).toContain('552 mm working');
    expect(r.areaRate).toContain('Practical 500-1000');
    expect(r.areaRate).toContain('theoretical 2186');
    expect(high(r.id)).toContain('none is robot payload');
  });
  it('preserves Kas runtime, tank-role and pass-through conflicts without borrowing Neo FAQs', () => {
    const id = 'avidbots-kas';
    for (const key of ['batteryLife', 'maxRuntime', 'waterTankCapacity', 'minAisleWidth'])
      expect(fields(id)[key].status).toBe('conflicting');
    expect(robot(id).batteryLife).toContain('up to 4 h');
    expect(robot(id).batteryLife).toContain('up to 3 h');
    expect(robot(id).batteryLife).not.toContain('6 h');
    expect(robot(id).waterTankCapacity).toContain('45/46 L');
    expect(robot(id).waterTankCapacity).toContain('46/45 L');
    expect(robot(id).minAisleWidth).toContain('U-turn clearance 1.55 m separately');
    expect(robot(id).chargingTime).toBe('');
    expect(robot(id).releaseDate).toBe('2024');
  });
  it('retains Neo 2 loaded and empty head-specific masses instead of a single fabricated mass', () => {
    const id = 'avidbots-neo-2';
    expect(fields(id).weight.status).toBe('conflicting');
    expect(robot(id).weight).toContain('661/669 kg');
    expect(robot(id).weight).toContain('663/688 kg');
    expect(robot(id).weight).toContain('batteries and full solution tank');
    expect(high(id)).toContain('283/291 and 285/290 kg');
    expect(robot(id).payload).toBe('');
    expect(robot(id).releaseDate).toBe('2020');
  });
  it('keeps Neo 2W grade, return-to-start and maintenance scopes separate from charging/endurance', () => {
    const id = 'avidbots-neo-2w';
    expect(robot(id).terrain).toContain('grade 3%');
    expect(robot('avidbots-neo-2').terrain).toContain('grade 0.5%');
    expect(robot(id).batteryLife).toContain('4-6 h');
    expect(robot(id).chargingTime).toBe('');
    expect(high(id)).toContain('not proof of automatic charging');
    expect(high(id)).toContain('every 480 h');
    expect(robot(id).minAisleWidth).toContain('not straight pass-through');
    expect(robot(id).areaRate).toContain('theoretical 2950/3941');
  });
});

describe('Event 38 aircraft and payload boundaries', () => {
  it('keeps mapping takeoff mass, packed size, flight/telemetry range and PPK claims distinct', () => {
    const r = robot('event-38-e400-mapping');
    expect(r.weight).toBe('');
    expect(r.maxTakeoffWeight).toContain('20 lb');
    expect(r.size).toContain('packed case');
    expect(r.flightTime).toContain('90 min');
    expect(r.navigationAccuracy).toBe('');
    expect(r.ipRating).toBe('');
    expect(high(r.id)).toContain('54-mile straight-line range');
    expect(high(r.id)).toContain('5-mile telemetry range');
  });
  it('does not turn ISR flying mass or gimbal mass into takeoff/cargo ratings', () => {
    const r = robot('event-38-e400-isr');
    expect(r.weight).toContain('full operational');
    expect(r.maxTakeoffWeight).toBe('');
    expect(r.payload).toBe('');
    expect(r.flightTime).toContain('120 min');
    expect(r.chargingTime).toBe('');
    expect(r.dof).toBe('');
    expect(r.ipRating).toContain('IP53');
    expect(high(r.id)).toContain('320 g');
    expect(high(r.id)).toContain('not battery charging time');
  });
  it('keeps E455 higher-payload, launch-date and gross-weight conflict conditions', () => {
    const r = robot('event-38-e455');
    expect(r.payload).toContain('7 lb while staying under 55 lb');
    expect(r.payload).toContain('up to 12 lb');
    expect(r.flightTime).toContain('no same endurance established for 12 lb');
    expect(fields(r.id).maxTakeoffWeight.status).toBe('conflicting');
    expect(r.maxTakeoffWeight).toContain('60 lb');
    expect(r.maxTakeoffWeight).toContain('65 lb');
    expect(r.weight).toBe('');
    expect(r.releaseDate).toBe('2023');
    expect(fields(r.id).releaseDate.note).toContain('2023-11-07');
    expect(high(r.id)).toContain('separate payload-system scope');
    expect(r.chargingTime).toBe('');
  });
  it('retains six distinct original models and no inferred retail prices or duplicate head cards', () => {
    const selected = [...robots.values()].filter((r) =>
      ['Avidbots', 'Event 38'].includes(r.manufacturer),
    );
    expect(selected).toHaveLength(6);
    for (const r of selected) {
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(getSpecificationReview(r.id).sources.every((s) => s.type === 'manufacturer')).toBe(
        true,
      );
    }
  });
});
