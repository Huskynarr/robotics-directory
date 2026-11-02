import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const brand = '/brands/deep-robotics/';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'deep-robotics-dr02',
        'deep-robotics-dr02-pro',
        'deep-robotics-dr02-standard',
        'deep-robotics-lite3',
      ]),
    );
  });
  await page.goto(`${brand}?lang=de`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('company page keeps legacy models and all three newly evidenced configurations', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(17);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText('M20_Piper');
  for (const id of ['lite3-venture', 'lite3-edu', 'dr02-standard'])
    await expect(
      page.locator(`main .robot-card[data-robot-id="deep-robotics-${id}"]`),
    ).toBeVisible();
});
test('M20 working speed and load-dependent endurance retain their distinct conditions', async ({
  page,
}) => {
  await page.goto('/robot/deep-robotics-lynx-m20/');
  await expect(spec(page, 'speed')).toHaveText('2 m/s maximum working speed');
  await expect(spec(page, 'weight')).toHaveText('33 kg including battery');
  await expect(spec(page, 'batteryLife')).toContainText('2.5 h / 12 km with effective payload');
  await expect(highlights(page)).toContainText('5 m/s laboratory extreme-test');
  await expect(highlights(page)).toContainText('Autonomous charging is optional');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
});
test('X30 base and Pro use their own dimensions and omit an unsupported top speed', async ({
  page,
}) => {
  for (const [id, mass, height] of [
    ['x30', '56', '595'],
    ['x30-pro', '59', '715'],
  ]) {
    await page.goto(`/robot/deep-robotics-${id}/`);
    await expect(spec(page, 'weight')).toHaveText(`${mass} kg including battery`);
    await expect(spec(page, 'size')).toHaveText(`1000 x 470 x ${height} mm`);
    await expect(spec(page, 'speed')).toHaveCount(0);
    await expect(spec(page, 'batteryLife')).toContainText('load conditions unspecified');
  }
});
test('Lite3 component mass is not rendered as total robot mass', async ({ page }) => {
  await page.goto('/robot/deep-robotics-lite3/');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'size')).toContainText('standing envelope unspecified');
  await expect(spec(page, 'dof')).toHaveText('12 leg joints');
  await expect(highlights(page)).toContainText('11 kg mbody');
  await expect(highlights(page)).toContainText('no total mass is derived');
});
test('Venture and EDU retain distinct SDK and perception configuration evidence', async ({
  page,
}) => {
  await page.goto('/robot/deep-robotics-lite3-venture/');
  await expect(highlights(page)).toContainText('only available for Lite 3 Venture Edition');
  await page.goto('/robot/deep-robotics-lite3-edu/');
  await expect(highlights(page)).toContainText('Jetson AGX and Livox Mid360');
  for (const key of ['weight', 'payload', 'batteryLife', 'dof'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('M20S and S10 do not inherit brochure hardware ratings from different models', async ({
  page,
}) => {
  for (const id of ['lynx-m20s', 'lynx-s10']) {
    await page.goto(`/robot/deep-robotics-${id}/`);
    for (const key of ['weight', 'speed', 'payload', 'ipRating', 'batteryLife'])
      await expect(spec(page, key)).toHaveCount(0);
    await expect(highlights(page)).toContainText('authentication code');
  }
});
test('DR02 family, Pro and Standard keep separate joint counts and neck restrictions', async ({
  page,
}) => {
  await page.goto('/robot/deep-robotics-dr02/');
  await expect(spec(page, 'dof')).toHaveCount(0);
  await page.goto('/robot/deep-robotics-dr02-pro/');
  await expect(spec(page, 'dof')).toHaveText(
    '31 joints; neck indices 29–30 currently locked in SDK',
  );
  await page.goto('/robot/deep-robotics-dr02-standard/');
  await expect(spec(page, 'dof')).toHaveText('21 joints; no neck joints');
  await expect(highlights(page)).toContainText('Mimic deployment is implemented in the Pro');
  await expect(highlights(page)).toContainText('not battery capacity, charger input');
});
test('component-mass qualification is searchable through source highlights', async ({ page }) => {
  await page.goto('/?mfr=DEEP%20Robotics&q=mbody');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(page.locator('#robotsGrid .robot-card')).toHaveAttribute(
    'data-robot-id',
    'deep-robotics-lite3',
  );
  await expect(page.locator('#robotsGrid .robot-card')).toContainText(
    'Neither is selected as complete robot mass',
  );
});
test('German comparison leaves family joints unknown beside Pro, Standard and Lite3', async ({
  page,
}) => {
  const table = await compare(page);
  const headings = await table.locator('thead th').allTextContents();
  const col = (name) => headings.findIndex((s) => s.trim() === name);
  const row = table.locator('tr').filter({ has: page.locator('[data-comparison-review="dof"]') });
  expect(col('DR02')).toBeGreaterThan(0);
  await expect(row.locator('td').nth(col('DR02'))).toHaveText('-');
  await expect(row.locator('td').nth(col('DR02 Pro'))).toContainText('currently locked');
  await expect(row.locator('td').nth(col('DR02 Standard'))).toContainText('21 joints');
  await expect(row.locator('td').nth(col('Lite3'))).toContainText('12 leg joints');
});
test('structured data keeps qualified joints and omits unsupported mass and price offers', async ({
  page,
}) => {
  await page.goto('/robot/deep-robotics-dr02-standard/');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty.some((p) => p.name === 'Weight')).toBe(false);
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: 'Degrees of freedom', value: '21 joints; no neck joints' }),
    ]),
  );
});
for (const theme of ['light', 'dark'])
  for (const route of [brand, '/robot/deep-robotics-dr02-pro/', 'comparison'])
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
