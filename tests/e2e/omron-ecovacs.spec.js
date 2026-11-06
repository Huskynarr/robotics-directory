import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const omron = (id) => '/robot/omron-robotics-' + id + '/';
const eco = (id) => '/robot/ecovacs-' + id + '/';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');

test('brand pages expose distinct robot variants and sourced company focuses', async ({ page }) => {
  for (const [brand, count, term] of [
    ['omron', 14, 'ESD'],
    ['ecovacs', 55, 'TruEdge'],
  ]) {
    await page.goto('/brands/' + brand + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('ESD identities keep load-qualified runtime and partial charge evidence', async ({ page }) => {
  await page.goto(omron('ld-90x-esd'));
  await expect(spec(page, 'maxRuntime')).toContainText(
    '20 h without payload; 15 h at full payload',
  );
  await expect(spec(page, 'chargingTime')).toContainText('20% to 80%');
  await expect(spec(page, 'weight')).toHaveText('62 kg with battery');
  await expect(highlights(page)).toContainText('IEC 61340-5-1');
  await expect(badge(page, 'weight').locator('time')).toHaveAttribute('datetime', '2026-11-02');
});
test('OL unit conflict is sourced and lifting stroke differs from plate maximum height', async ({
  page,
}) => {
  await page.goto(omron('ol-450s3'));
  await expect(spec(page, 'speed')).toHaveAttribute(
    'data-raw-value',
    /1.2 mm\/s; datasheet: 1200 mm\/s/,
  );
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'liftStroke')).toContainText('200 mm travel');
  await expect(spec(page, 'liftStroke')).toContainText('108-308 mm');
  await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
  await expect(spec(page, 'weight')).toContainText('192 kg without mast');
});
test('MD shared PDF runtime and pad protection are not inherited from adjacent website cells', async ({
  page,
}) => {
  await page.goto(omron('md-900'));
  await expect(spec(page, 'maxRuntime')).toContainText('8 h at full payload');
  await expect(badge(page, 'maxRuntime')).toHaveAttribute('title', /shared runtime row/);
  await expect(spec(page, 'weight')).toContainText('without battery or accessories');
  await expect(spec(page, 'ipRating')).toContainText('top-plate plugs installed');
  await expect(spec(page, 'ipRating')).toContainText('IP10 charging pads');
});
test('K1 exposes source disagreement and retains three different widths', async ({ page }) => {
  await page.goto(eco('deebot-pro-k1-vac'));
  for (const key of ['areaRate', 'chargingTime'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'workingWidth')).toContainText('440 mm cleaning width');
  await expect(spec(page, 'workingWidth')).toContainText('300 mm roller-brush width');
  await expect(spec(page, 'size')).toContainText('420');
  await expect(spec(page, 'waterTankCapacity')).toHaveCount(0);
  await expect(spec(page, 'payload')).toHaveCount(0);
});
test('A3000 PRO keeps slope/mass conflict and omits an unlabelled runtime', async ({ page }) => {
  await page.goto(eco('goat-a3000-lidar-pro'));
  for (const key of ['weight', 'terrain'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'terrain')).toContainText('15 degrees');
  await expect(spec(page, 'terrain')).toContainText('27 degrees');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('without a unit');
});
test('A2000 and O1000 retain their own mowing duration and mower/trimmer paths', async ({
  page,
}) => {
  await page.goto(eco('goat-a2000-lidar-pro'));
  await expect(spec(page, 'maxRuntime')).toContainText('50 min');
  await expect(spec(page, 'workingWidth')).toHaveAttribute('data-raw-value', /12.96 in mower/);
  await page.goto(eco('goat-o1000-lidar-pro'));
  await expect(spec(page, 'maxRuntime')).toContainText('90 min');
  await expect(spec(page, 'workingWidth')).toHaveAttribute('data-raw-value', /8.66 in mower/);
  await expect(spec(page, 'workingWidth')).toHaveAttribute('data-raw-value', /7.09 in trimmer/);
});
test('original A3000 keeps manual height conflict and discharge/duty-cycle boundaries', async ({
  page,
}) => {
  await page.goto(eco('goat-a3000-lidar'));
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'maxRuntime')).toContainText('100% to 15%');
  await expect(spec(page, 'areaRate')).toContainText('including charging');
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  await expect(spec(page, 'price')).toContainText('out of stock');
});
test('WINBOT separates robot and station, area-time, water and power-off backup', async ({
  page,
}) => {
  await page.goto(eco('winbot-w2-pro-omni'));
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /Robot 1.6.*station 5.5/);
  await expect(spec(page, 'waterTankCapacity')).toContainText('60 +/- 5 ml');
  await expect(spec(page, 'areaRate')).toContainText('per m²');
  await expect(spec(page, 'maxRuntime')).toContainText('110 min');
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(highlights(page)).toContainText('power-off protection');
});
test('dated regional main-product prices do not publish universal Offers', async ({ page }) => {
  for (const id of ['goat-a3000-lidar', 'goat-a3000-lidar-pro', 'winbot-w2-pro-omni']) {
    await page.goto(eco(id));
    const product = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
      );
    expect(product.offers).toBeUndefined();
    await expect(spec(page, 'price')).toContainText('November 2, 2026');
  }
});
test('sourced feature search finds safety-runtime context beyond model names', async ({ page }) => {
  await page.goto('/?mfr=ECOVACS&q=' + encodeURIComponent('power-off protection'));
  await expect(
    page.locator('.robot-card[data-robot-id="ecovacs-winbot-w2-pro-omni"]'),
  ).toBeVisible();
  await expect(
    page.locator('.robot-card[data-robot-id="ecovacs-winbot-w2-pro-omni"] [data-search-highlight]'),
  ).toContainText('power-off protection');
});
test('German mixed-category comparison delivers conflicts and blanks without unit substitution', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'omron-robotics-ol-450s3',
        'ecovacs-deebot-pro-k1-vac',
        'ecovacs-goat-a3000-lidar-pro',
        'ecovacs-winbot-w2-pro-omni',
      ]),
    );
  });
  await page.goto('/brands/ecovacs/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="speed"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="chargingTime"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  const width = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="workingWidth"]') });
  await expect(width).toContainText('Arbeitsbreite');
  await expect(width).toContainText('440 mm');
  const runtime = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="maxRuntime"]') });
  await expect(runtime.locator('td').nth(3)).toHaveText('-');
  await expect(runtime).toContainText('110 min');
  await expect(
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="areaRate"]') }),
  ).toContainText('Flächenleistung');
});
for (const theme of ['light', 'dark']) {
  for (const target of [
    '/brands/omron/',
    '/brands/ecovacs/',
    omron('ol-450s3'),
    eco('winbot-w2-pro-omni'),
  ]) {
    test('accessibility ' + theme + ' ' + target, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      await page.goto(target);
      const result = await new AxeBuilder({ page }).analyze();
      expect(result.violations).toEqual([]);
    });
  }
}
