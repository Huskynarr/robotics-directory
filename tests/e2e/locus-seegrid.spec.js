import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');
const badge = (p, k) => p.locator('[data-spec-source="' + k + '"]');

test('both brand pages expose four named models and dated company focus', async ({ page }) => {
  for (const id of ['locus-robotics', 'seegrid']) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(4);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toBeVisible();
  }
});
test('Origin and Vector show qualified battery values and the introduction conflict', async ({
  page,
}) => {
  await page.goto('/robot/locus-robotics-locus-origin/');
  await expect(spec(page, 'chargingTime')).toContainText('state-of-charge window unspecified');
  await expect(spec(page, 'batteryLife')).toContainText('Up to 14 h');
  await expect(spec(page, 'throughput')).toHaveCount(0);
  await page.goto('/robot/locus-robotics-locus-vector/');
  await expect(badge(page, 'releaseDate')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'payload')).toContainText('272 kg');
});
test('Array and historical Max preserve introduction and technical limits', async ({ page }) => {
  await page.goto('/robot/locus-robotics-locus-array/');
  await expect(spec(page, 'releaseDate')).toContainText('2026');
  await expect(spec(page, 'handType')).toContainText('NeuraGrasp');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'payload')).toHaveCount(0);
  await page.goto('/robot/locus-robotics-locus-max/');
  await expect(spec(page, 'releaseDate')).toContainText('2022');
  await expect(spec(page, 'payload')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('Seegrid lift pages expose unit and milestone conflicts and omit fork-based body size', async ({
  page,
}) => {
  await page.goto('/robot/seegrid-seegrid-lift-rs1/');
  await expect(spec(page, 'maxLiftHeight')).toContainText('6 ft');
  await expect(spec(page, 'maxLiftHeight')).toContainText('6 in');
  await expect(badge(page, 'maxLiftHeight')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'size')).toHaveCount(0);
  await page.goto('/robot/seegrid-seegrid-lift-cr1/');
  await expect(spec(page, 'maxLiftHeight')).toContainText('15 ft maximum current');
  await expect(badge(page, 'releaseDate')).toHaveAttribute('data-review-status', 'conflicting');
  await page.goto('/robot/seegrid-seegrid-lift-el1/');
  await expect(spec(page, 'maxLiftHeight')).toContainText('5 ft 2 in');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
});
test('S7 towing qualification remains visible and searchable', async ({ page }) => {
  await page.goto('/robot/seegrid-seegrid-tow-tractor-s7/');
  await expect(spec(page, 'payload')).toContainText('not onboard cargo payload');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await page.goto('/?q=' + encodeURIComponent('total towed cart-train capacity'));
  const card = page.locator('.robot-card[data-robot-id="seegrid-seegrid-tow-tractor-s7"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'total towed cart-train capacity',
  );
});
test('German comparison retains Seegrid height and both introduction conflicts', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'seegrid-seegrid-lift-rs1',
        'seegrid-seegrid-lift-cr1',
        'locus-robotics-locus-vector',
        'locus-robotics-locus-array',
      ]),
    );
  });
  await page.goto('/brands/seegrid/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="maxLiftHeight"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('Current company timeline uses 2023 launch wording');
  await expect(table).toContainText('current company timeline instead places CR1 in 2025');
  await expect(table).toContainText('NeuraGrasp');
});
for (const id of ['locus-robotics-locus-max', 'seegrid-seegrid-lift-rs1'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
