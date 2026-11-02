import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const pipeBrand = '/brands/catalog-pipe-trekker-ebe4c47aba4e/';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'deep-trekker-vac-max',
        'pipe-trekker-a-200',
        'deep-trekker-spectra',
        'deep-trekker-dt320',
      ]),
    );
  });
  await page.goto(`${pipeBrand}?lang=de`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('affiliated brands keep distinct model cards and dated company focus', async ({ page }) => {
  await page.goto('/brands/deep-trekker/');
  await expect(page.locator('main .robot-card')).toHaveCount(13);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'Pipe Trekker',
  );
  await page.goto(pipeBrand);
  await expect(page.locator('main .robot-card')).toHaveCount(2);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'S and X packages',
  );
});
test('ROV depth and body mass are independent of long tether options', async ({ page }) => {
  await page.goto('/robot/deep-trekker-revolution/');
  await expect(spec(page, 'depthRating')).toHaveText('305 m');
  await expect(spec(page, 'weight')).toHaveText('33 kg in air');
  await expect(highlights(page)).toContainText('up to 2 km');
  for (const key of ['payload', 'dof', 'batteryLife', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('SPECTRA speed conflict and conditional sonar remain visible', async ({ page }) => {
  await page.goto('/robot/deep-trekker-spectra/');
  await expect(spec(page, 'speed')).toContainText('3.5 kn forward; 2.3 kn lateral');
  await expect(page.locator('[data-spec-source="speed"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="speed"]')).toHaveAttribute('title', /4 Knots/);
  await expect(spec(page, 'depthRating')).toHaveText('1000 m');
  await expect(highlights(page)).toContainText('3D sonar only');
  await expect(spec(page, 'payload')).toHaveCount(0);
});
test('MAG keeps inconsistent width labels and omits turning angles and reel ingress as robot fields', async ({
  page,
}) => {
  await page.goto('/robot/deep-trekker-mag/');
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute('title', /330.2 mm/);
  for (const key of ['turningRadius', 'ipRating', 'payload'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('360° as turn radius');
});
test('VAC shows package endurance and camera disagreement while excluding hose and pump', async ({
  page,
}) => {
  await page.goto('/robot/deep-trekker-vac/');
  await expect(spec(page, 'batteryLife')).toHaveText('Up to 8 h; VAC shop package');
  await expect(spec(page, 'turningRadius')).toHaveText('0 mm');
  await expect(highlights(page)).toContainText('excludes the hose and pump');
  await expect(highlights(page)).toContainText('1080p');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
});
test('VAC MAX head width does not populate complete-assembly speed size or endurance', async ({
  page,
}) => {
  await page.goto('/robot/deep-trekker-vac-max/');
  await expect(highlights(page)).toContainText('36-inch vacuum head');
  await expect(highlights(page)).toContainText('No 24 m/min speed is derived');
  for (const key of ['size', 'weight', 'speed', 'depthRating', 'payload', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('A-150 retains five/eight-hour conflict and omits unresolved body dimensions', async ({
  page,
}) => {
  await page.goto('/robot/pipe-trekker-a-150/');
  await expect(spec(page, 'batteryLife')).toContainText('5 h');
  await expect(page.locator('[data-spec-source="batteryLife"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'size')).toHaveCount(0);
  await expect(highlights(page)).toContainText('8.3 inches with 152 mm');
  await expect(spec(page, 'speed')).toHaveText('Up to 19 m/min; shop package');
});
test('A-200 preserves named values and discloses reused A-150 shop tables', async ({ page }) => {
  await page.goto('/robot/pipe-trekker-a-200/');
  for (const key of ['weight', 'size', 'speed', 'driveMode', 'batteryLife'])
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  await expect(spec(page, 'weight')).toContainText('29.3 kg');
  await expect(spec(page, 'speed')).toContainText('24 m/min');
  await expect(highlights(page)).toContainText('6000 mAh');
  await expect(highlights(page)).toContainText('3000 mAh');
  await expect(spec(page, 'payload')).toHaveCount(0);
});
test('DT320 and DT340 remain distinct historical evidence with no invented release years', async ({
  page,
}) => {
  await page.goto('/robot/deep-trekker-dt320/');
  await expect(page.locator('[data-spec-source="depthRating"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  await page.goto('/robot/deep-trekker-dt340/');
  await expect(spec(page, 'batteryLife')).toHaveText('4–8 h');
  await expect(spec(page, 'depthRating')).toHaveCount(0);
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
});
test('legacy DTG2 Worker and DTX2 preserve limited source identity without modern specifications', async ({
  page,
}) => {
  for (const id of ['dtg2-worker', 'dtx2']) {
    await page.goto(`/robot/deep-trekker-${id}/`);
    for (const key of ['size', 'weight', 'payload', 'depthRating', 'releaseDate'])
      await expect(spec(page, key)).toHaveCount(0);
  }
  await expect(highlights(page)).toContainText('model mention only');
});
test('PHOTON camera range conflict remains attributed to the two source layers', async ({
  page,
}) => {
  await page.goto('/robot/deep-trekker-photon/');
  for (const text of ['200°', '215°', 'embedded Product/FAQ'])
    await expect(highlights(page)).toContainText(text);
  await expect(spec(page, 'dof')).toHaveCount(0);
});
test('manufacturer and feature search returns the two crawler models for package equipment', async ({
  page,
}) => {
  await page.goto('/?mfr=Pipe%20Trekker&q=powered%20counter%20reel');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(2);
  for (const id of ['150', '200'])
    await expect(
      page.locator(`#robotsGrid .robot-card[data-robot-id="pipe-trekker-a-${id}"]`),
    ).toBeVisible();
});
test('German comparison retains missing VAC MAX depth and A-200 source conflicts', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Zulässige Tauchtiefe');
  const columns = await table.locator('thead th').allTextContents();
  const column = (name) => columns.findIndex((value) => value.trim() === name);
  const depth = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="depthRating"]') });
  expect(column('VAC MAX')).toBeGreaterThan(0);
  await expect(depth.locator('td').nth(column('VAC MAX'))).toHaveText('-');
  await expect(depth.locator('td').nth(column('SPECTRA'))).toContainText('1000 m');
  await expect(table).toContainText('shop S table also says 19 m/min');
  await expect(table).toContainText('3D sonar only');
});
test('structured product data retains exact depth and omits zero-price quote offers', async ({
  page,
}) => {
  await page.goto('/robot/pipe-trekker-a-200/');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: 'Depth rating', value: '50 m' })]),
  );
});
for (const theme of ['light', 'dark'])
  for (const route of [
    '/robot/deep-trekker-vac-max/',
    '/robot/pipe-trekker-a-200/',
    '/brands/deep-trekker/',
    pipeBrand,
    'comparison',
  ])
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
