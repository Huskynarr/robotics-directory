import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');
const badge = (p, k) => p.locator('[data-spec-source="' + k + '"]');
const high = (p) => p.locator('section[aria-labelledby="product-highlights"]');
test('Geek brand exposes all named configurations and sourced company focus', async ({ page }) => {
  await page.goto('/brands/geek/');
  await expect(page.locator('main .robot-card')).toHaveCount(31);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'Six named families',
  );
});
test('P800R renders conflicting global and historical mass without borrowing V6 payload', async ({
  page,
}) => {
  await page.goto('/robot/geek-plus-p800r/');
  await expect(spec(page, 'weight')).toContainText('142 kg');
  await expect(spec(page, 'weight')).toContainText('162 kg');
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'payload')).toContainText('1000 kg');
  await expect(spec(page, 'navigationAccuracy')).toHaveCount(0);
  await expect(spec(page, 'dockingAccuracy')).toContainText('stopping frame');
  await page.goto('/robot/geek-plus-p800r-v6-0/');
  await expect(spec(page, 'payload')).toContainText('800 kg');
});
test('M200C and named MP revision keep load, motion frames and geometry separate', async ({
  page,
}) => {
  await page.goto('/robot/geek-plus-m200c/');
  await expect(spec(page, 'payload')).toContainText('300 kg');
  await expect(spec(page, 'navigationAccuracy')).toContainText('20 mm');
  await expect(spec(page, 'dockingAccuracy')).toContainText('10 mm');
  await page.goto('/robot/geek-plus-mp1000r-sne-v2-1/');
  await expect(spec(page, 'size')).toContainText('1105 x 855');
  await expect(badge(page, 'minAisleWidth')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'turningRadius')).toHaveCount(0);
});
test('F12ML shows payload derating and unresolved lift heights', async ({ page }) => {
  await page.goto('/robot/geek-plus-f12ml/');
  await expect(spec(page, 'payload')).toContainText('1500 kg at 0-2 m');
  await expect(spec(page, 'maxLiftHeight')).toContainText('2300 mm');
  await expect(badge(page, 'maxLiftHeight')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'chargingTime')).toContainText('full charge');
  await expect(spec(page, 'weight')).toHaveCount(0);
});
test('RS current load basis, malformed Air fields and P40 naming remain explicit', async ({
  page,
}) => {
  await page.goto('/robot/geek-plus-rs8-da/');
  await expect(spec(page, 'maxLiftHeight')).toContainText('7935 mm');
  await expect(high(page)).toContainText('320 kg stated maximum payload');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await page.goto('/robot/geek-plus-rs-air/');
  await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
  await expect(spec(page, 'minAisleWidth')).toHaveCount(0);
  await expect(high(page)).toContainText('Minimum Aisle width:1015');
  await page.goto('/robot/geek-plus-p40r/');
  await expect(spec(page, 'size')).toContainText('383 mm');
  await expect(high(page)).toContainText('mapping remains unresolved');
});
test('sorting V2 and V3 retain different dimensions and loaded speeds', async ({ page }) => {
  await page.goto('/robot/geek-plus-s20c-v2-0/');
  await expect(spec(page, 'weight')).toContainText('75 kg');
  await expect(spec(page, 'speed')).toContainText('fully loaded 2.0');
  await page.goto('/robot/geek-plus-s20c-v3-0/');
  await expect(spec(page, 'weight')).toContainText('78 kg');
  await expect(spec(page, 'speed')).toContainText('fully loaded 2.5');
});
test('X1200H unusual speed labels stay separate from Z cold-storage endurance', async ({
  page,
}) => {
  await page.goto('/robot/geek-plus-x1200h/');
  await expect(spec(page, 'speed')).toContainText('loaded 2.5 m/s and unloaded 1.8');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'turningRadius')).toHaveCount(0);
  await page.goto('/robot/geek-plus-x1200z/');
  await expect(spec(page, 'batteryLife')).toContainText('Room temperature 8-10');
  await expect(spec(page, 'batteryLife')).toContainText('cold storage 6-8');
  await expect(spec(page, 'navigationAccuracy')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('model source uncertainty can be found through catalog highlight search', async ({ page }) => {
  await page.goto('/?q=' + encodeURIComponent('malformed 11250'));
  const card = page.locator('.robot-card[data-robot-id="geek-plus-p800r"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('malformed 11250');
});
test('German comparison preserves forklift height conflict and separate shuttle configurations', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'geek-plus-f12ml',
        'geek-plus-p800r',
        'geek-plus-x1200h',
        'geek-plus-x1200z',
      ]),
    );
  });
  await page.goto('/brands/geek/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="maxLiftHeight"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('Room temperature 8-10');
  await expect(table).toContainText('loaded 2.5 m/s and unloaded 1.8');
});
for (const id of ['geek-plus-f12ml', 'geek-plus-rs-air', 'geek-plus-s20c-v3-0'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
