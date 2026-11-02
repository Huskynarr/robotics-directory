import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (p, key) => p.locator('[data-spec-key="' + key + '"]');
const badge = (p, key) => p.locator('[data-spec-source="' + key + '"]');
const high = (p) => p.locator('section[aria-labelledby="product-highlights"]');

test('Avidbots and Event 38 brand inventories expose sourced company focus', async ({ page }) => {
  for (const [id, term] of [
    ['avidbots', 'practical/theoretical'],
    ['event-38', '60/65 lb'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(3);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('Kas displays source revision conflicts and separates working path from gross mass and downforce', async ({
  page,
}) => {
  await page.goto('/robot/avidbots-kas/');
  for (const key of ['batteryLife', 'maxRuntime', 'waterTankCapacity', 'minAisleWidth'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'batteryLife')).toContainText('up to 4 h');
  await expect(spec(page, 'batteryLife')).toContainText('up to 3 h');
  await expect(spec(page, 'waterTankCapacity')).toContainText('45/46 L');
  await expect(spec(page, 'workingWidth')).toContainText('552 mm');
  await expect(spec(page, 'areaRate')).toContainText('Practical 500-1000');
  for (const key of ['payload', 'chargingTime', 'ipRating'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Neo 2 shows head-specific loaded mass conflict and calculated rather than practical rates', async ({
  page,
}) => {
  await page.goto('/robot/avidbots-neo-2/');
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'weight')).toContainText('661/669 kg');
  await expect(spec(page, 'areaRate')).toContainText('Maximum theoretical');
  await expect(spec(page, 'terrain')).toContainText('grade 0.5%');
  await expect(spec(page, 'releaseDate')).toContainText('2020');
  await expect(spec(page, 'payload')).toHaveCount(0);
});
test('Neo 2W keeps warehouse grade and home-base service scope without charge-time inference', async ({
  page,
}) => {
  await page.goto('/robot/avidbots-neo-2w/');
  await expect(spec(page, 'terrain')).toContainText('grade 3%');
  await expect(spec(page, 'minAisleWidth')).toContainText('turnaround clearance');
  await expect(high(page)).toContainText('not proof of automatic charging');
  await expect(high(page)).toContainText('every 480 h');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('Mapping aircraft retains packed-size and range scopes without manufactured IP or navigation accuracy', async ({
  page,
}) => {
  await page.goto('/robot/event-38-e400-mapping/');
  await expect(spec(page, 'maxTakeoffWeight')).toContainText('20 lb');
  await expect(spec(page, 'size')).toContainText('packed case');
  await expect(high(page)).toContainText('54-mile straight-line range');
  await expect(high(page)).toContainText('5-mile telemetry range');
  for (const key of ['weight', 'ipRating', 'navigationAccuracy', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('ISR flying mass, sensor weight and four-minute setup do not become cargo rating or charging', async ({
  page,
}) => {
  await page.goto('/robot/event-38-e400-isr/');
  await expect(spec(page, 'weight')).toContainText('full operational');
  await expect(spec(page, 'flightTime')).toContainText('120 min');
  await expect(spec(page, 'ipRating')).toContainText('IP53');
  await expect(high(page)).toContainText('320 g');
  await expect(high(page)).toContainText('not battery charging time');
  for (const key of ['payload', 'maxTakeoffWeight', 'chargingTime', 'dof'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('E455 displays takeoff conflict and seven-pound endurance separately from optional twelve-pound payload', async ({
  page,
}) => {
  await page.goto('/robot/event-38-e455/');
  await expect(badge(page, 'maxTakeoffWeight')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'maxTakeoffWeight')).toContainText('60 lb');
  await expect(spec(page, 'maxTakeoffWeight')).toContainText('65 lb');
  await expect(spec(page, 'flightTime')).toContainText('no same endurance established for 12 lb');
  await expect(spec(page, 'releaseDate')).toContainText('2023');
  await expect(high(page)).toContainText('separate payload-system scope');
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('Kas source-specific tank uncertainty is searchable in the catalog', async ({ page }) => {
  await page.goto('/?q=' + encodeURIComponent('50 L recovery statement'));
  const card = page.locator('.robot-card[data-robot-id="avidbots-kas"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('Tank sources disagree');
});
test('German comparison keeps cleaner runtime conflicts separate from aircraft flight endurance', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['avidbots-kas', 'avidbots-neo-2w', 'event-38-e400-isr', 'event-38-e455']),
    );
  });
  await page.goto('/brands/avidbots/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="batteryLife"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="maxTakeoffWeight"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('Practical 500-1000');
  await expect(table).toContainText('120 min at full operational');
  await expect(table).toContainText('no same endurance established for 12 lb');
});
for (const id of ['avidbots-kas', 'avidbots-neo-2', 'event-38-e400-mapping', 'event-38-e455'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
