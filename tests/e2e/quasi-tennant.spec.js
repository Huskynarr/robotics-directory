import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
test('both company focuses link to canonical brands and distinct models', async ({ page }) => {
  for (const [brand, count, text] of [
    ['quasi-robotics', 5, 'WebSocket'],
    ['tennant', 8, 'P1 VAC'],
  ]) {
    await page.goto('/brands/' + brand + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(text);
  }
});
test('Mini keeps its narrow aisle, partial charge boundaries and unavailable wireless option', async ({
  page,
}) => {
  await page.goto('/robot/quasi-robotics-c2-mini/');
  await expect(spec(page, 'minAisleWidth')).toHaveAttribute('data-raw-value', '2.5 ft / 0.76 m');
  await expect(spec(page, 'chargingTime')).toContainText('60 min to 50%; 2.5 h to 100%');
  await expect(badge(page, 'chargingTime')).toHaveAttribute('title', /without initial state/);
  await expect(badge(page, 'chargingTime').locator('time')).toHaveAttribute(
    'datetime',
    '2026-11-02',
  );
  await expect(highlights(page)).toContainText('explicitly unavailable');
  for (const key of ['speed', 'ipRating', 'batteryLife', 'areaRate'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Heavy and PartPorter keep different motion, shelf limits and aisle width', async ({
  page,
}) => {
  await page.goto('/robot/quasi-robotics-c2-heavy/');
  await expect(spec(page, 'driveMode')).toContainText('Mecanum');
  await expect(spec(page, 'maxRuntime')).toContainText('14 h');
  await expect(spec(page, 'chargingTime')).toContainText('90 min to 50%; 4 h to 100%');
  await expect(spec(page, 'payload')).toContainText('500 lb / 227 kg suggested');
  await page.goto('/robot/quasi-robotics-c2-partporter/');
  await expect(spec(page, 'minAisleWidth')).toHaveAttribute('data-raw-value', '5 ft / 1.5 m');
  await expect(spec(page, 'driveMode')).toContainText('differential');
  await expect(highlights(page)).toContainText('2 shelves each listed at 125 lb');
});
test('X4 and X6 distinguish tank coverage from manual hourly productivity', async ({ page }) => {
  await page.goto('/robot/tennant-x4-rovr/');
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'size')).toContainText('940 mm');
  await expect(spec(page, 'areaRate')).toContainText('manual mode');
  await expect(highlights(page)).toContainText('1860 m² estimated coverage per solution tank');
  await page.goto('/robot/tennant-x6-rovr/');
  await expect(spec(page, 'areaRate')).toContainText('1914 m²/h');
  await expect(highlights(page)).toContainText('6967 m² estimated coverage per solution tank');
  await expect(spec(page, 'minAisleWidth')).toContainText('1040 mm');
});
test('X2 retains the inconsistent hourly conversion and separate correct tank coverage', async ({
  page,
}) => {
  await page.goto('/robot/tennant-x2-rovr-scrub/');
  await expect(badge(page, 'areaRate')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'areaRate')).toContainText('10,000 ft² / 1929 m²');
  await expect(highlights(page)).toContainText('10,000 ft² / 929 m² per solution tank');
  await expect(spec(page, 'releaseDate')).toHaveText('2026');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('legacy scrubber runtimes expose disagreement without implying an upgrade', async ({
  page,
}) => {
  for (const id of ['t380amr', 't7amr']) {
    await page.goto('/robot/tennant-' + id + '/');
    await expect(badge(page, 'maxRuntime')).toHaveAttribute('data-review-status', 'conflicting');
    await expect(badge(page, 'maxRuntime')).toHaveAttribute('title', /does not prove an upgrade/);
    await expect(spec(page, 'releaseDate')).toHaveCount(0);
  }
  await expect(spec(page, 'areaRate')).toHaveCount(0);
});
test('T16 limits charge time by battery and keeps duty cycle separate from continuous runtime', async ({
  page,
}) => {
  await page.goto('/robot/tennant-t16amr/');
  await expect(spec(page, 'chargingTime')).toContainText('lithium pack only');
  await expect(spec(page, 'maxRuntime')).toContainText('5.5 h lithium-ion');
  await expect(highlights(page)).toContainText('not 13 continuous battery hours');
  await expect(spec(page, 'speed')).toContainText('Autonomous forward up to 3.6 km/h');
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'conflicting');
});
test('X16 retains navigation disagreement and excludes dry hopper volume from water/payload', async ({
  page,
}) => {
  await page.goto('/robot/tennant-x16-sweep/');
  for (const key of ['maxRuntime', 'minAisleWidth'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'areaRate')).toContainText('4621 m²/h autonomous');
  await expect(highlights(page)).toContainText('150 L volume and 350 lb / 158 kg debris');
  for (const key of ['waterTankCapacity', 'payload', 'chargingTime', 'releaseDate'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('P1 separates robot and charger and keeps side brush scope in productivity', async ({
  page,
}) => {
  await page.goto('/robot/tennant-p1-vac/');
  for (const key of ['size', 'weight'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'areaRate')).toContainText('without side brush');
  await expect(spec(page, 'maxRuntime')).toContainText('3.5 h vacuuming, Standard Mode');
  await expect(spec(page, 'chargingTime')).toContainText('1.5 h recharge');
  await expect(spec(page, 'waterTankCapacity')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('feature search indexes manufacturer USPs beyond model names', async ({ page }) => {
  await page.goto('/?mfr=Tennant&q=' + encodeURIComponent('9 kg charger mass'));
  const card = page.locator('.robot-card[data-robot-id="tennant-p1-vac"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('9 kg charger mass');
});
test('German comparison handles newly populated cleaning aisle field and category blanks', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'quasi-robotics-c2-heavy',
        'tennant-x2-rovr-scrub',
        'tennant-x16-sweep',
        'tennant-p1-vac',
      ]),
    );
  });
  await page.goto('/brands/tennant/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  const aisle = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="minAisleWidth"]') });
  await expect(aisle).toContainText('Gangbreite');
  await expect(aisle).toContainText('1400 mm');
  await expect(aisle).toContainText('584 mm');
  await expect(
    table.locator('[data-comparison-review="areaRate"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  const water = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="waterTankCapacity"]') });
  const headers = await table.locator('thead th').allTextContents();
  for (const name of ['C2 Heavy', 'X16 SWEEP', 'P1 VAC']) {
    const index = headers.findIndex((header) => header.trim() === name);
    expect(index).toBeGreaterThan(0);
    await expect(water.locator('td').nth(index)).toHaveText('-');
  }
  await expect(water).toContainText(/11[,.]35 L/);
});
for (const theme of ['light', 'dark']) {
  for (const target of [
    '/brands/quasi-robotics/',
    '/brands/tennant/',
    '/robot/quasi-robotics-c2-heavy/',
    '/robot/tennant-p1-vac/',
  ]) {
    test('accessibility ' + theme + ' ' + target, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      await page.goto(target);
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
  }
}
