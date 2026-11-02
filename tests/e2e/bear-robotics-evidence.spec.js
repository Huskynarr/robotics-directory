import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, suffix) => page.goto(`/robot/bear-robotics-${suffix}/`);
const compareIds = [
  'bear-robotics-servi-mini',
  'bear-robotics-servi-plus',
  'bear-robotics-carti-400',
  'lg-b9',
];
async function compare(page) {
  await page.addInitScript((ids) => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem('compareRobots', JSON.stringify(ids));
  }, compareIds);
  await page.goto('/brands/bear-robotics/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('Bear brand has twelve models with partner and provisional Kinisi scope in the focus', async ({
  page,
}) => {
  await page.goto('/brands/bear-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(12);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('LG B9 is explicitly an LG collaboration');
  await expect(focus).toContainText('to be confirmed at launch');
  await expect(page.locator('main .robot-card h3').filter({ hasText: /^B9$/ })).toHaveCount(0);
});

test('Servi mini keeps its own height and total capacity', async ({ page }) => {
  await visit(page, 'servi-mini');
  await expect(spec(page, 'size')).toContainText('980 mm');
  await expect(spec(page, 'payload')).toContainText('44 lb total; 22 lb per tray');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(highlights(page)).toContainText('one tray plus one bus tub');
  await visit(page, 'servi');
  await expect(spec(page, 'size')).toContainText('1046 mm');
  await expect(spec(page, 'payload')).toContainText('30 kg total');
});

test('Servi Plus keeps its stable route and image after commercial reassignment', async ({
  page,
}) => {
  await visit(page, 'servi-plus');
  await expect(page.locator('h1')).toHaveText('Servi Plus');
  await expect(spec(page, 'weight')).toContainText('62 kg');
  await expect(spec(page, 'size')).toContainText('535 x 590 x 1230 mm');
  const image = page.locator('main img[src*="bear-robotics-servi-plus"]');
  expect(await image.count()).toBeGreaterThan(0);
  expect(await image.first().evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
  const schema = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(schema.offers).toBeUndefined();
  expect(schema.category).toContain('Commercial');
});

test('Servi Plus displays the endurance conflict and safe-mode thresholds', async ({ page }) => {
  await visit(page, 'servi-plus');
  await expect(spec(page, 'batteryLife')).toContainText('Web 10-12 h; manual 8-12 h');
  await expect(page.locator('[data-spec-source="batteryLife"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(spec(page, 'speed')).toContainText('safe-drive mode up to 0.8 m/s');
  await expect(spec(page, 'terrain')).toContainText('safe bump 7 mm / maximum 12 mm');
});

test('Servi Q retains lower-bound runtime and the mat accessory condition', async ({ page }) => {
  await visit(page, 'servi-q');
  await expect(spec(page, 'batteryLife')).toContainText('At least 12 h');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(spec(page, 'chargingTime')).toContainText('4-6 h depending on robot settings');
  await expect(highlights(page)).toContainText('mat sold separately');
  await expect(highlights(page)).toContainText('8-inch touchscreen is separate from the 18.5-inch');
});

test('Carti 100 partial charging and shelf capacities survive rendered tables', async ({
  page,
}) => {
  await visit(page, 'carti-100');
  await expect(spec(page, 'chargingTime')).toContainText('from 1% to 75%');
  await expect(page.locator('[data-spec-source="chargingTime"]')).toHaveAttribute(
    'title',
    /not a full charge/,
  );
  await expect(spec(page, 'payload')).toContainText(
    'top and middle trays 15 kg each; bottom tray 70 kg',
  );
  await expect(spec(page, 'speed')).toContainText('0.8 m/s in safe driving mode');
});

test('Low-Profile separates QR docking, SLAM navigation and optional CE heights', async ({
  page,
}) => {
  await visit(page, 'carti-400');
  await expect(spec(page, 'navigationAccuracy')).toHaveText('±10 mm with SLAM');
  await expect(spec(page, 'dockingAccuracy')).toHaveText('±5 mm with QR docking');
  await expect(spec(page, 'size')).toContainText('optional CE-model height 300 mm');
  await expect(spec(page, 'liftStroke')).toHaveText('60 mm');
  await visit(page, 'carti-1000s');
  await expect(spec(page, 'weight')).toHaveText('135 kg');
  await expect(spec(page, 'size')).not.toContainText('CE-model height');
  await visit(page, 'carti-1000');
  await expect(spec(page, 'weight')).toHaveText('190 kg');
  await expect(spec(page, 'size')).toContainText('optional CE-model height 270 mm');
});

test('Clean and Clean Max keep different task runtimes and water capacity', async ({ page }) => {
  await visit(page, 'servi-clean');
  await expect(spec(page, 'batteryLife')).toHaveText('4 h vacuuming; 8 h dust mopping');
  await expect(spec(page, 'workingWidth')).toHaveText('17.33 in');
  await expect(spec(page, 'waterTankCapacity')).toHaveCount(0);
  await expect(spec(page, 'payload')).toHaveCount(0);
  await visit(page, 'servi-clean-max');
  await expect(spec(page, 'batteryLife')).toHaveText('3.5 h scrubbing; 8 h dust mopping');
  await expect(spec(page, 'waterTankCapacity')).toHaveText('35 L clean / 33 L dirty water');
  await expect(spec(page, 'areaRate')).toContainText('12917 sq ft/h');
  await expect(spec(page, 'payload')).toHaveCount(0);
});

test('LG B9 uses partner source labels and omits fabricated throughput', async ({ page }) => {
  await page.goto('/robot/lg-b9/');
  await expect(highlights(page)).toContainText('Integration partner source');
  await expect(spec(page, 'areaRate')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(spec(page, 'weight')).toContainText('with two batteries');
  await expect(highlights(page)).toContainText('not cleaning throughput');
  await expect(highlights(page)).toContainText('not single-charge runtime');
});

test('highlight-only search returns the complete accessory qualification', async ({ page }) => {
  await page.goto('/?q=mat%20sold%20separately');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
  const result = page.locator('#robotsGrid .robot-card[data-robot-id="bear-robotics-servi-q"]');
  await expect(result).toBeVisible();
  await expect(result.locator('[data-search-highlight]')).toContainText('mat sold separately');
  await expect(result.locator('a')).toHaveAttribute(
    'href',
    '/robot/bear-robotics-servi-q/#product-highlights',
  );
});

test('German comparison includes capacity limits, QR conditions and source conflicts', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('44 lb total');
  await expect(table).toContainText('Web 10-12 h; manual 8-12 h');
  await expect(table).toContainText('Navigationsgenauigkeit');
  await expect(table).toContainText('Andockgenauigkeit');
  await expect(table).toContainText('±5 mm with QR docking');
  await expect(table).toContainText('Quelle des Integrationspartners');
  await expect(table.locator('[data-review-status="conflicting"]')).toBeVisible();
});

for (const theme of ['light', 'dark']) {
  for (const mode of ['detail', 'comparison']) {
    test(`Bear ${mode} accessibility ${theme}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (mode === 'comparison') await compare(page);
      else await visit(page, 'servi-plus');
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(result.violations).toEqual([]);
    });
  }
}
