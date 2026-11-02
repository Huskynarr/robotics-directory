import { describe, expect, it } from 'vitest';
import { getAllRobots } from '../../src/data/robots.js';
import { getAllBrands } from '../../src/data/brands.js';
import { getProductInsights } from '../../src/data/product-insights.js';
import { getSpecificationReview } from '../../src/data/specification-reviews.js';
import { getRobotSearchMatch } from '../../src/utils/robot-search.js';
import { getPriceValue, getStructuredOffer } from '../../src/utils/format.js';
import { t } from '../../src/data/translations.js';
const robots = getAllRobots().allRobots;
const robot = (brand, model) => robots.find((r) => r.manufacturer === brand && r.model === model);
const capra = (model) => robot('Capra Robotics', 'Capra ' + model);
const hyper = (model) => robot('Hypershell', model);
const review = (r) => getSpecificationReview(r.id);
const highlights = (r) => getProductInsights(r.id).highlights.join(' ');

describe('Capra exact platform and configured system scopes', () => {
  it('retains five platform/system cards without manufacturing extra use-case or software robots', () => {
    expect(getAllBrands().find((b) => b.id === 'capra-robotics').modelCount).toBe(5);
    expect(capra('SmartFleet')).toBeUndefined();
    expect(capra('Food Processing')).toBeUndefined();
  });
  it('separates chassis carrying limits from loaded cart and towing limits', () => {
    expect(capra('200').payload).toBe('Up to 50 kg onboard; up to 200 kg towing (separate limits)');
    expect(capra('500').payload).toBe(
      'Up to 100 kg onboard; up to 500 kg towing (separate limits)',
    );
    expect(capra('Carrier').payload).toBe(
      'Up to 100 kg top-deck load; up to 500 kg loaded cart (separate limits)',
    );
    expect(highlights(capra('Carrier'))).toContain('not 500 kg onboard');
  });
  it('retains exact dimensions, radius and battery mass boundaries for each base', () => {
    expect(capra('200').size).toBe('1125 x 600 x 373 mm (L x W x H)');
    expect(capra('500').size).toBe('1145 x 635 x 356 mm (L x W x H)');
    expect(capra('200').weight).toBe('50 kg with 2 batteries');
    expect(capra('500').weight).toContain('battery inclusion unspecified');
    expect(capra('200').turningRadius).toBe('465 mm');
    expect(capra('500').turningRadius).toBe('480 mm');
    expect(highlights(capra('200'))).toContain(
      'does not establish the same runtime with the weighed two-battery configuration',
    );
  });
  it('keeps platform partial wireless charging distinct from Urban unspecified interval', () => {
    for (const name of ['200', '500'])
      expect(capra(name).chargingTime).toBe('60 min from 20% to 80% with wireless charger');
    expect(capra('Urban').chargingTime).toBe(
      '2 h advertised charge time; state-of-charge interval unspecified',
    );
    expect(capra('Carrier').chargingTime).toBe('');
    expect(review(capra('Carrier')).fields.chargingTime.status).toBe('not-documented');
  });
  it('does not transfer bare-platform endurance or dimensions to the installed solutions', () => {
    expect(capra('200').maxRuntime).toContain('Up to 20 h');
    expect(capra('500').maxRuntime).toContain('Up to 15 h');
    for (const name of ['Carrier', 'Scout', 'Urban']) {
      expect(capra(name).maxRuntime).toContain('10 h');
      for (const key of ['weight', 'size', 'speed', 'turningRadius'])
        expect(capra(name)[key]).toBe('');
    }
    expect(capra('Scout').ipRating).toBe('');
    expect(highlights(capra('Urban'))).toContain('Autonomous or semi-autonomous');
    for (const name of ['200', '500', 'Carrier', 'Scout', 'Urban'])
      expect(capra(name).batteryLife).toBe('');
  });
  it('retains slope gradient, load conditions and heater requirement without a blanket certification', () => {
    expect(capra('200').terrain).toContain('50% slope and 140 mm step');
    expect(review(capra('200')).fields.terrain.note).toContain('not a degree value');
    expect(highlights(capra('500'))).toContain(
      'below -10 degrees C require an additional heating element',
    );
    expect(highlights(capra('Urban'))).toContain('do not prove independent certification');
  });
});
describe('Hypershell distinct variants, assistance quantities and dated availability', () => {
  it('keeps three separately named non-S models and the five existing wearables as eight cards', () => {
    expect(getAllBrands().find((b) => b.id === 'hypershell').modelCount).toBe(8);
    for (const model of [
      'X Ultra',
      'X Carbon',
      'X Pro',
      'X Go',
      'X Ultra S',
      'X Max S',
      'X Pro S',
      'Halo',
    ])
      expect(hyper(model)).toBeDefined();
    expect(hyper('Halo Origin Edition')).toBeUndefined();
  });
  it('stores assisted pace and motor output outside autonomous speed and cargo payload', () => {
    for (const [name, power, pace] of [
      ['X Ultra S', '1000', '25'],
      ['X Max S', '1000', '25'],
      ['X Pro S', '800', '20'],
    ]) {
      const r = hyper(name);
      expect(r.assistPower).toContain(power + ' W maximum');
      expect(r.assistancePace).toContain(pace + ' km/h assisted wearer pace');
      expect(r.speed).toBe('');
      expect(r.payload).toBe('');
      expect(review(r).fields.speed.status).toBe('not-documented');
    }
  });
  it('keeps model-specific assisted distance, battery count and hourly duration separate', () => {
    expect(hyper('X Ultra S').assistanceRange).toBe(
      'Up to 30 km per battery; two batteries included',
    );
    expect(hyper('X Pro S').assistanceRange).toBe(
      'Up to 17.5 km standard range; one battery included',
    );
    expect(hyper('X Max S').assistanceRange).toBe('');
    expect(review(hyper('X Max S')).fields.assistanceRange.note).toContain('Do not inherit');
    expect(highlights(hyper('X Ultra S'))).toContain('not a guaranteed 60 km journey');
    for (const r of robots.filter((r) => r.manufacturer === 'Hypershell')) {
      expect(r.batteryLife).toBe('');
      expect(r.maxRuntime).toBe('');
    }
  });
  it('does not copy S specifications into old X variants or infer launch year from a promotion', () => {
    for (const name of ['X Ultra', 'X Carbon', 'X Pro', 'X Go']) {
      for (const key of [
        'weight',
        'assistPower',
        'assistancePace',
        'assistanceRange',
        'ipRating',
        'releaseDate',
      ])
        expect(hyper(name)[key]).toBe('');
      expect(highlights(hyper(name))).toContain('June 23-30 promotional price');
    }
    expect(hyper('X Ultra S').weight).toContain('1.8 kg');
    expect(hyper('X Max S').weight).toBe('');
  });
  it('retains Halo battery inclusion uncertainty, powered-joint scope and delivery roadmap', () => {
    const r = hyper('Halo');
    expect(r.weight).toBe('2.6 kg stated system mass; battery inclusion unspecified');
    expect(r.assistPower).toContain('1490 W peak');
    expect(r.assistanceRange).toContain('20 km per PocketVolt battery');
    expect(r.dof).toBe('');
    expect(r.size).toBe('');
    expect(highlights(r)).toContain('Four motors are not a complete count');
    expect(highlights(r)).toContain('does not confirm completed deliveries');
    expect(highlights(hyper('X Ultra S'))).toContain('future firmware update is planned');
  });
  it('keeps dated MSRP or preorder prices searchable and sortable without exact offers', () => {
    for (const r of robots.filter((r) => r.manufacturer === 'Hypershell'))
      expect(getStructuredOffer(r.price)).toBeNull();
    expect(getPriceValue(hyper('X Ultra S').price)).toBe(1999);
    expect(getPriceValue(hyper('Halo').price)).toBe(2299);
    expect(getPriceValue(hyper('X Carbon').price)).toBe(1799);
  });
  it('retrieves qualified wearable and charging distinctions with their source statements', () => {
    const r = hyper('X Ultra S');
    expect(
      getRobotSearchMatch(r, 'not a guaranteed 60 km journey', getProductInsights(r.id)).kind,
    ).toBe('highlight');
    const c = capra('200');
    expect(getRobotSearchMatch(c, 'not a full 0-100% charge', getProductInsights(c.id)).kind).toBe(
      'highlight',
    );
    expect(t('spec.assistanceRange', 'de')).toBe('Unterstützungsreichweite');
    expect(t('spec.assistancePace', 'fr')).toBe('Assistance pace');
    expect(t('spec.assistPower', 'de')).toBe('Unterstützungsleistung');
  });
});
