import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const brand = '/brands/addverb-technologies/';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const source = (page, key) => page.locator(`[data-spec-source="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'addverb-technologies-flowt-1530',
        'addverb-technologies-flowt-1520',
        'addverb-technologies-elixis-w',
        'addverb-technologies-dynamo-2500',
      ]),
    );
  });
  await page.goto(`${brand}?lang=de`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('company page retains all named hardware and distinguishes software evidence', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(34);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('Movect');
  for (const id of ['flowt-1530', 'flowt-1520', 'trakr-20', 'elixis-w', 'syncro-5', 'jen-6'])
    await expect(
      page.locator(`main .robot-card[data-robot-id="addverb-technologies-${id}"]`),
    ).toBeVisible();
});
test('Dynamo preserves loaded speed, partial charge and drive conflict', async ({ page }) => {
  await page.goto('/robot/addverb-technologies-dynamo-2500/');
  await expect(spec(page, 'speed')).toHaveText('1.2 m/s empty; 0.8 m/s loaded');
  await expect(spec(page, 'chargingTime')).toHaveText('24 min (0–80%); 8 min (20–80%)');
  for (const key of ['speed', 'driveMode'])
    await expect(source(page, key)).toHaveAttribute('data-review-status', 'conflicting');
});
test('FlowT document mismatch leaves 1530 mass and lift unknown beside separate 1520', async ({
  page,
}) => {
  await page.goto('/robot/addverb-technologies-flowt-1530/');
  for (const key of ['size', 'weight', 'maxLiftHeight', 'ipRating'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('FlowT 1520');
  await page.goto('/robot/addverb-technologies-flowt-1520/');
  await expect(spec(page, 'weight')).toHaveText('800 kg');
  await expect(spec(page, 'maxLiftHeight')).toHaveText('2000 mm');
});
test('generic families have no inherited battery, payload or launch values', async ({ page }) => {
  for (const id of ['flowt', 'trakr']) {
    await page.goto(`/robot/addverb-technologies-${id}/`);
    for (const key of ['weight', 'payload', 'batteryLife', 'releaseDate'])
      await expect(spec(page, key)).toHaveCount(0);
  }
});
test('sorter retains charge and position conflicts without inventing turn radius', async ({
  page,
}) => {
  await page.goto('/robot/addverb-technologies-zippy-10/');
  for (const key of ['chargingTime', 'navigationAccuracy'])
    await expect(source(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'turningRadius')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not established as one robot’s throughput');
});
test('Trakr variants retain optional IP and battery-inclusive mass', async ({ page }) => {
  for (const [id, mass] of [
    ['5', '18'],
    ['20', '53.5'],
  ]) {
    await page.goto(`/robot/addverb-technologies-trakr-${id}/`);
    await expect(spec(page, 'weight')).toHaveText(`${mass} kg including battery`);
    await expect(spec(page, 'ipRating')).toHaveText('IP67 optional configuration');
  }
});
test('Elixis biped and wheeled model keep different mass and targeted runtime', async ({
  page,
}) => {
  for (const [id, mass, dof] of [
    ['elixis', '75', '41'],
    ['elixis-w', '210', '33'],
  ]) {
    await page.goto(`/robot/addverb-technologies-${id}/`);
    await expect(spec(page, 'weight')).toHaveText(`${mass} kg gross`);
    await expect(spec(page, 'dof')).toHaveText(dof);
    await expect(source(page, 'batteryLife')).toHaveAttribute('data-review-status', 'roadmap');
    await expect(spec(page, 'payload')).toContainText('5 kg per arm');
  }
});
test('Syncro arm excludes controller dimensions and JEN omits copied quadruped load', async ({
  page,
}) => {
  await page.goto('/robot/addverb-technologies-syncro-5/');
  await expect(spec(page, 'weight')).toHaveText('22 kg arm only');
  await expect(spec(page, 'armReach')).toHaveText('650 mm');
  await expect(spec(page, 'size')).toHaveCount(0);
  await page.goto('/robot/addverb-technologies-jen-6/');
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(spec(page, 'speed')).toHaveCount(0);
});
test('source-only turning geometry is searchable with full qualification', async ({ page }) => {
  await page.goto('/?mfr=Addverb%20Technologies&q=1789%20mm%20turning%20diameter');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(page.locator('#robotsGrid .robot-card')).toHaveAttribute(
    'data-robot-id',
    'addverb-technologies-veloce',
  );
  await expect(page.locator('#robotsGrid .robot-card')).toContainText('not radius');
});
test('German comparison preserves 1530 missing lift beside 1520 and targeted wheeled endurance', async ({
  page,
}) => {
  const table = await compare(page);
  const columns = await table.locator('thead th').allTextContents();
  const col = (name) => columns.findIndex((v) => v.trim() === name);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="maxLiftHeight"]') });
  expect(col('FlowT 1530')).toBeGreaterThan(0);
  await expect(row.locator('td').nth(col('FlowT 1530'))).toHaveText('-');
  await expect(row.locator('td').nth(col('FlowT 1520'))).toContainText('2000 mm');
  await expect(table).toContainText('Target 2 h');
  await expect(table).toContainText('web selector says differential');
});
test('structured data retains per-arm load and excludes quote-price offers', async ({ page }) => {
  await page.goto('/robot/addverb-technologies-elixis/');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: 'Payload', value: '5 kg per arm' })]),
  );
});
for (const theme of ['light', 'dark'])
  for (const route of [brand, '/robot/addverb-technologies-elixis-w/', 'comparison'])
    test(`accessible ${theme} ${route}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (route === 'comparison') await compare(page);
      else await page.goto(route);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });
