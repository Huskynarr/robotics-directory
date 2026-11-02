import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');
const badge = (p, k) => p.locator('[data-spec-source="' + k + '"]');

test('Rapyuta brand exposes five variants and the modular ASRS company focus', async ({ page }) => {
  await page.goto('/brands/rapyuta-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(5);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toBeVisible();
  await expect(focus).toContainText('Rapyuta ASRS');
  await expect(focus).toContainText('hardware-generation equivalence unresolved');
});
test('standard and XL pages show the runtime source conflict with unassigned XL mass', async ({
  page,
}) => {
  for (const id of ['pa-amr', 'pa-amr-xl']) {
    await page.goto('/robot/rapyuta-robotics-' + id + '/');
    await expect(badge(page, 'maxRuntime')).toHaveAttribute('data-review-status', 'conflicting');
    await expect(spec(page, 'maxRuntime')).toContainText('10 h');
  }
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'minAisleWidth')).toHaveCount(0);
});
test('Extra High Capacity omits tentative aisle and keeps cargo separate from tote volume', async ({
  page,
}) => {
  await page.goto('/robot/rapyuta-robotics-pa-amr-extra-high-capacity/');
  await expect(spec(page, 'payload')).toContainText('39.2 kg');
  await expect(spec(page, 'weight')).toContainText('63 kg');
  await expect(spec(page, 'speed')).toContainText('1.2 m/s');
  await expect(spec(page, 'minAisleWidth')).toHaveCount(0);
});
test('AFL keeps lift/payload qualifications and omits site throughput', async ({ page }) => {
  await page.goto('/robot/rapyuta-robotics-afl/');
  await expect(spec(page, 'maxLiftHeight')).toContainText(
    'rated payload at this height not established',
  );
  await expect(spec(page, 'chargingTime')).toContainText('3 h');
  await expect(spec(page, 'throughput')).toHaveCount(0);
  await expect(spec(page, 'minAisleWidth')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
});
test('Weight Inspection renders partial footprint and separate charging modes', async ({
  page,
}) => {
  await page.goto('/robot/rapyuta-robotics-pa-amr-weight-inspection/');
  await expect(spec(page, 'size')).toContainText('height not disclosed');
  await expect(spec(page, 'chargingTime')).toContainText(
    'Automatic charging 1 h; manual charging 2 h',
  );
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'throughput')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('weight threshold is searchable without becoming robot throughput', async ({ page }) => {
  await page.goto('/?q=' + encodeURIComponent('Minimum item weight is 10 g'));
  const card = page.locator(
    '.robot-card[data-robot-id="rapyuta-robotics-pa-amr-weight-inspection"]',
  );
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'Minimum item weight is 10 g',
  );
});
test('German comparison preserves runtime conflict and automatic/manual charging', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'rapyuta-robotics-pa-amr',
        'rapyuta-robotics-pa-amr-weight-inspection',
        'rapyuta-robotics-afl',
      ]),
    );
  });
  await page.goto('/brands/rapyuta-robotics/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="maxRuntime"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('Automatic charging 1 h; manual charging 2 h');
  await expect(table).toContainText('rated payload at this height not established');
});
for (const id of ['rapyuta-robotics-pa-amr', 'rapyuta-robotics-pa-amr-weight-inspection'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
