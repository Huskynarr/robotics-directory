import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/carbon-robotics/';
const route = (id) => '/robot/carbon-robotics-' + id + '/';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const highlight = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function comparison(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'carbon-robotics-laserweeder',
        'carbon-robotics-laserweeder-g2-200',
        'carbon-robotics-laserweeder-g2-1200',
        'carbon-robotics-first-autonomous-laserweeder-unit',
      ]),
    );
  });
  await page.goto(brand);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand shows seven named implements/demo and scopes tractor retrofit/software separately', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(7);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('remote human supervision');
  await expect(focus).toContainText('initially limited U.S. regions under early access');
  await expect(focus).toContainText('Plant Profiles');
});
test('commercial implement and diesel demo retain distinct hardware and introduction years', async ({
  page,
}) => {
  await page.goto(route('laserweeder'));
  await expect(highlight(page)).toContainText('30 x 150 W diode lasers');
  await expect(spec(page, 'releaseDate')).toHaveText('2022');
  await page.goto(route('first-autonomous-laserweeder-unit'));
  await expect(highlight(page)).toContainText('not for commercial sale');
  await expect(highlight(page)).toContainText('eight 150 W CO2 lasers');
  await expect(spec(page, 'releaseDate')).toHaveText('2021');
  await expect(spec(page, 'driveMode')).toContainText('4 hydraulic drive motors');
  for (const key of ['size', 'areaRate', 'workingWidth', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('model treatment area and tractor lift capacity stay separate from robot payload and speed', async ({
  page,
}) => {
  await page.goto(route('laserweeder-g2-300'));
  await expect(spec(page, 'weight')).toHaveText('2540 kg');
  await expect(spec(page, 'areaRate')).toContainText('0.30-0.61 ha/h');
  await expect(highlight(page)).toContainText('minimum tractor lift capacity 3600 kg');
  for (const key of ['payload', 'speed', 'workingWidth', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('1200 retains rear PTO and 8R requirements without copying the 600 front-PTO power', async ({
  page,
}) => {
  await page.goto(route('laserweeder-g2-1200'));
  await expect(spec(page, 'driveMode')).toContainText('rear PTO');
  await expect(spec(page, 'areaRate')).toContainText('1.21-2.43 ha/h');
  await expect(highlight(page)).toContainText('8R-series IVT');
  await expect(highlight(page)).toContainText('no minimum rated PTO hp stated');
  await page.goto(route('laserweeder-g2-600'));
  await expect(spec(page, 'driveMode')).toContainText('front PTO');
  await expect(highlight(page)).toContainText('100 hp rated PTO');
});
test('inconsistent nominal width keeps its conflict note and module width remains unallocated', async ({
  page,
}) => {
  await page.goto(route('laserweeder'));
  await expect(spec(page, 'workingWidth')).toHaveCount(0);
  await expect(highlight(page)).toContainText('20 ft / 6.01 m');
  await page.goto(route('laserweeder-g2-400'));
  await expect(spec(page, 'workingWidth')).toHaveCount(0);
  await expect(highlight(page)).toContainText('21 inches (61 cm)');
});
test('software support hours create no battery runtime or numerical protection rating', async ({
  page,
}) => {
  await page.goto(route('laserweeder-g2-200'));
  await expect(highlight(page)).toContainText('24/7 software/remote support is not battery life');
  for (const key of ['batteryLife', 'maxRuntime', 'ipRating', 'chargingTime', 'dof'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlight(page)).toContainText('up to 99% weed kill remain manufacturer claims');
});
test('structured data carries area rate and drive mode while omitting unknown offers and swath', async ({
  page,
}) => {
  await page.goto(route('laserweeder-g2-1200'));
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  const properties = Object.fromEntries(product.additionalProperty.map((p) => [p.name, p.value]));
  expect(properties['Area rate']).toContain('1.21-2.43 ha/h');
  expect(properties['Drive mode']).toContain('rear PTO');
  expect(properties['Working width']).toBeUndefined();
  expect(product.offers).toBeUndefined();
});
test('feature search retrieves the exact missing PTO rating statement with its source context', async ({
  page,
}) => {
  await page.goto('/');
  await page.locator('#searchInput').fill('no minimum rated PTO hp stated');
  const card = page.locator('.robot-card[data-robot-id="carbon-robotics-laserweeder-g2-1200"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'no minimum rated PTO hp stated',
  );
});
test('German comparison shows exact area rates and unknown demo throughput and treatment width', async ({
  page,
}) => {
  const table = await comparison(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (name) => headings.findIndex((t) => t.trim() === name);
  const row = (key) =>
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="' + key + '"]') });
  await expect(row('areaRate').locator('td').nth(column('LaserWeeder G2 1200'))).toContainText(
    '1,21-2,43 ha/h',
  );
  await expect(
    row('areaRate').locator('td').nth(column('First Autonomous LaserWeeder Unit')),
  ).toHaveText('-');
  await expect(row('workingWidth')).toHaveCount(0);
  await expect(table).toContainText('20 ft / 6.01 m');
});
for (const theme of ['light', 'dark'])
  for (const target of [
    brand,
    route('laserweeder'),
    route('first-autonomous-laserweeder-unit'),
    'comparison',
  ])
    test('accessible ' + theme + ' ' + target, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      if (target === 'comparison') await comparison(page);
      else await page.goto(target);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });
