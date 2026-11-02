import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, id) => page.goto(`/robot/fdata-robot-${id}/`);
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['a012', 'a012-mini', 'a006', 'a026'].map((id) => `fdata-robot-${id}`)),
    );
  });
  await page.goto('/brands/fdata-robot/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('Fdata company page lists fourteen models and scopes redirect-only leads', async ({
  page,
}) => {
  await page.goto('/brands/fdata-robot/');
  await expect(page.locator('main .robot-card')).toHaveCount(14);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('A redirect is not proof of equal hardware');
  await expect(focus).toContainText('orderability, stock and version history are not certified');
});
test('workbook-only Mini has its own payload and source without a universal offer', async ({
  page,
}) => {
  await visit(page, 'a012-mini');
  await expect(spec(page, 'payload')).toHaveText('30 kg');
  await expect(spec(page, 'size')).toHaveText('500 x 465 x 285 mm');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'href',
    /A012-Series.*xlsx$/,
  );
  await expect(highlights(page)).toContainText('absent from the four-column web table');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
});
test('A012 and Plus expose unresolved legacy payloads with correct current dimensions', async ({
  page,
}) => {
  for (const [id, load, legacy] of [
    ['a012', '60 kg', '50 kg'],
    ['a012-plus', '100 kg', '80 kg'],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'payload')).toHaveText(load);
    await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
    await expect(highlights(page)).toContainText(`payload ${legacy}`);
  }
  await expect(spec(page, 'size')).toHaveText('920 x 700 x 420 mm');
  await expect(highlights(page)).toContainText('Passage geometry is unresolved');
});
test('A025 R F N preserve different sensor packages and conditional runtime', async ({ page }) => {
  for (const [id, phrase] of [
    ['a025r', 'No mapping-area'],
    ['a025f', 'F column checks 2D LiDAR'],
    ['a025n', '2D LiDAR is a dash'],
  ]) {
    await visit(page, id);
    await expect(highlights(page)).toContainText(phrase);
    await expect(spec(page, 'batteryLife')).toHaveText('8-10 h; workload not stated');
    await expect(spec(page, 'maxRuntime')).toHaveCount(0);
    await expect(spec(page, 'size')).toHaveText('2000 x 1300 x 590 mm');
  }
});
test('A026 retains full-load, clearance and estimated-noise qualifications', async ({ page }) => {
  await visit(page, 'a026');
  await expect(spec(page, 'weight')).toHaveText('450 kg');
  await expect(spec(page, 'ipRating')).toHaveText('IP65');
  await expect(spec(page, 'terrain')).toContainText('at full load');
  await expect(highlights(page)).toContainText('130 mm tire-assembly clearance');
  await expect(highlights(page)).toContainText('noise below 80 dB is explicitly estimated');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('Ackermann models do not relabel range or unitless cells as hourly endurance', async ({
  page,
}) => {
  await visit(page, 'a005');
  await expect(spec(page, 'chargingTime')).toHaveText('4 h');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'terrain')).toContainText('unloaded: 20° and 90 mm');
  await visit(page, 'a006');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(highlights(page)).toContainText('battery-life header has no time unit');
  await visit(page, 'a010');
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(spec(page, 'navigationAccuracy')).toHaveCount(0);
  await expect(spec(page, 'ipRating')).toHaveCount(0);
});
test('search retrieves a complete qualification on unitless battery-life data', async ({
  page,
}) => {
  await page.goto('/?q=battery-life%20header%20has%20no%20time%20unit');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
  const card = page.locator('#robotsGrid .robot-card[data-robot-id="fdata-robot-a006"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'neither number is stored as hours',
  );
  await expect(card.locator('a')).toHaveAttribute(
    'href',
    '/robot/fdata-robot-a006/#product-highlights',
  );
});
test('German comparison delivers payload conflict, drive mode and model source scope', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('60 kg');
  await expect(table).toContainText('30 kg');
  await expect(table).toContainText('Ackermann front steering');
  await expect(table).toContainText('battery-life header has no time unit');
  await expect(
    table.locator('[data-comparison-review="payload"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('No reviewed revision mapping');
});
for (const theme of ['light', 'dark']) {
  for (const mode of ['detail', 'comparison', 'brand']) {
    test(`Fdata ${mode} accessibility ${theme}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (mode === 'comparison') await compare(page);
      else if (mode === 'brand') await page.goto('/brands/fdata-robot/');
      else await visit(page, 'a026');
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(result.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        await page.evaluate(() => window.innerWidth),
      );
    });
  }
}
