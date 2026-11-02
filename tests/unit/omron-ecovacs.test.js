import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getStructuredOffer, getPriceValue } from '../../src/utils/format.js';
const robots = getAllRobots().allRobots;
const robot = (brand, model) => robots.find((r) => r.manufacturer === brand && r.model === model);
const omron = (name) => robot('OMRON Robotics', name);
const eco = (name) => robot('ECOVACS', name);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Omron named variants and load/charge boundaries', () => {
  it('keeps the four ESD variants and two OL plate variants separate from packages', () => {
    for (const name of ['LD-60', 'LD-90', 'LD-90x', 'LD-250']) {
      expect(omron(name + ' ESD')).toBeDefined();
      expect(highlights(omron(name + ' ESD'))).toContain('IEC 61340-5-1');
      expect(omron(name + ' ESD').payload).toBe(omron(name).payload);
    }
    expect(omron('OL-450S').weight).toBe('');
    expect(omron('OL-450S2').weight).toContain('188 kg without mast');
    expect(omron('OL-450S3').weight).toContain('192 kg without mast');
    expect(omron('FLOW Core')).toBeUndefined();
    expect(omron('OL-450S2 Mast')).toBeUndefined();
  });
  it('retains the OL speed mismatch and plate travel instead of turning height into stroke', () => {
    for (const name of ['OL-450S', 'OL-450S2', 'OL-450S3']) {
      const r = omron(name);
      expect(r.speed).toContain('1.2 mm/s');
      expect(r.speed).toContain('1200 mm/s');
      expect(review(r).fields.speed.status).toBe('conflicting');
      expect(r.liftStroke).toContain('200 mm travel');
      expect(r.liftStroke).toContain('108-308 mm');
      expect(r.maxLiftHeight).toBe('');
      expect(r.turningRadius).toContain('750 mm turning radius; 685 mm swing radius');
    }
  });
  it('uses explicit shared PDF runtime for MD-900 and keeps mass inclusion specific', () => {
    expect(omron('MD-900').maxRuntime).toBe('10 h without payload; 8 h at full payload');
    expect(review(omron('MD-900')).fields.maxRuntime.note).toContain('shared runtime row');
    expect(omron('MD-900').weight).toContain('without battery or accessories');
    expect(omron('HD-1500').weight).toBe('506 kg with battery');
    expect(omron('HD-1500').payload).toBe('1500 kg');
    expect(omron('MD-650').ipRating).toContain('top-plate plugs installed');
    expect(omron('MD-650').ipRating).toContain('IP10 charging pads');
  });
  it('keeps all rapid charges partial and does not import battery protection onto the chassis', () => {
    for (const name of ['LD-60 ESD', 'LD-90x', 'LD-250', 'OL-450S3', 'MD-650', 'HD-1500']) {
      const r = omron(name);
      expect(r.chargingTime).toContain('20% to 80%');
      expect(r.batteryLife).toBe('');
      expect(r.releaseDate).toBe('');
    }
    expect(omron('LD-90').terrain).toContain('Level floor only at rated payload');
    expect(omron('LD-60').weight).toBe('62 kg with battery');
    expect(omron('LD-250 ESD').weight).toBe('148 kg with battery');
  });
});
describe('ECOVACS task quantities and consumer model boundaries', () => {
  it('keeps K1 charging/area disagreement without confusing body and brush width', () => {
    const r = eco('DEEBOT PRO K1 VAC');
    for (const key of ['chargingTime', 'areaRate'])
      expect(review(r).fields[key].status).toBe('conflicting');
    expect(r.workingWidth).toContain('440 mm cleaning width');
    expect(r.workingWidth).toContain('300 mm roller-brush width');
    expect(r.size).toContain('420');
    expect(r.waterTankCapacity).toBe('');
    expect(r.payload).toBe('');
    expect(eco('DEEBOT PRO M1').waterTankCapacity).toBe('35 L clean water; 33 L recovery');
    expect(eco('DEEBOT PRO M1 3D').weight).toBe('126.5 kg unladen');
    expect(eco('DEEBOT PRO M1').weight).toBe('125 kg unladen');
  });
  it('retains unitless/conflicting PRO values and prevents A-series/O-series inheritance', () => {
    const a3 = eco('GOAT A3000 LiDAR PRO');
    expect(a3.maxRuntime).toBe('');
    expect(review(a3).fields.maxRuntime.status).toBe('not-documented');
    for (const k of ['weight', 'terrain']) expect(review(a3).fields[k].status).toBe('conflicting');
    expect(a3.terrain).toContain('15 degrees');
    expect(a3.terrain).toContain('27 degrees');
    expect(eco('GOAT A2000 LiDAR PRO').maxRuntime).toContain('50 min');
    expect(eco('GOAT O1000 LiDAR PRO').maxRuntime).toContain('90 min');
    expect(eco('GOAT O1000 LiDAR PRO').workingWidth).toContain('8.66 in mower');
    expect(a3.ipRating).toBe('IPX6 mower; IPX4 station');
  });
  it('keeps original A3000 manual dimensions, discharge boundaries and selector price distinct', () => {
    const r = eco('GOAT A3000 LiDAR');
    expect(r.weight).toContain('16.4 kg with battery');
    expect(review(r).fields.size.status).toBe('conflicting');
    expect(r.maxRuntime).toContain('118 min from 100% to 15%');
    expect(r.areaRate).toContain('including charging');
    expect(getPriceValue(r.price)).toBe(2999.99);
    expect(r.price).toContain('out of stock');
    expect(r.releaseDate).toBe('');
  });
  it('keeps WINBOT water, station, runtime, safety backup and area-time separate', () => {
    const r = eco('WINBOT W2 Pro Omni');
    expect(r.weight).toContain('Robot 1.6 +/- 0.1 kg; station 5.5 +/- 0.2 kg');
    expect(r.maxRuntime).toContain('110 min +/- 10%');
    expect(r.areaRate).toBe('1 min 45 s +/- 15 s per m² in Fast Mode');
    expect(r.waterTankCapacity).toBe('60 +/- 5 ml robot water tank');
    for (const k of ['speed', 'payload', 'batteryLife', 'ipRating', 'releaseDate'])
      expect(r[k]).toBe('');
    expect(highlights(r)).toContain('30 min');
    expect(highlights(r)).toContain('power-off protection');
  });
  it('keeps dated regional prices out of universal structured offers and excludes bundles as robots', () => {
    for (const name of [
      'GOAT A3000 LiDAR',
      'GOAT A3000 LiDAR PRO',
      'GOAT A2000 LiDAR PRO',
      'GOAT O1000 LiDAR PRO',
      'WINBOT W2 Pro Omni',
    ]) {
      const r = eco(name);
      expect(r.price).toContain('November 2, 2026');
      expect(getStructuredOffer(r.price)).toBeNull();
      expect(getPriceValue(r.price)).toBeGreaterThan(400);
      expect(review(r).fields.price.status).toBe('documented');
    }
    expect(getAllBrands().find((b) => b.id === 'ecovacs').modelCount).toBe(51);
    expect(eco('GOAT O1000 LiDAR PRO + Garage')).toBeUndefined();
  });
});
