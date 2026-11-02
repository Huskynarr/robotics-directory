import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const visit = (page, id) => page.goto(`/robot/robotize-gopal-${id}/`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['400', 'e22', 'u24w', 'p35'].map((id) => `robotize-gopal-${id}`)),
    );
  });
  await page.goto('/brands/robotize/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('brand and manufacturer filter include six current models and historical 400', async ({
  page,
}) => {
  await page.goto('/brands/robotize/');
  await expect(page.locator('main .robot-card')).toHaveCount(7);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'December 2017',
  );
  await page.goto('/?mfr=Robotize');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(7);
});
test('historical GoPal 400 has evidenced launch but no borrowed current specifications', async ({
  page,
}) => {
  await visit(page, '400');
  await expect(spec(page, 'releaseDate')).toHaveText('2017');
  await expect(page.locator('[data-spec-source="releaseDate"]')).toHaveAttribute(
    'href',
    'https://robotize.com/about',
  );
  for (const key of [
    'payload',
    'weight',
    'size',
    'batteryLife',
    'speed',
    'turningRadius',
    'minAisleWidth',
  ])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('no 400 kg specification is inferred');
});
test('E22 and E24 retain body measurements and expose payload/turn-label boundaries', async ({
  page,
}) => {
  await visit(page, 'e22');
  await expect(spec(page, 'size')).toHaveText('1400 x 860 x 340 mm');
  await expect(spec(page, 'minAisleWidth')).toHaveText('1200 mm minimum; 2500 mm minimum two-way');
  await expect(spec(page, 'turningRadius')).toContainText(
    'page labels diameter; brochure 1900 mm diameter',
  );
  await visit(page, 'e24');
  await expect(spec(page, 'payload')).toHaveText('1000 kg');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'title',
    /summary says 500 kg/,
  );
});
for (const [id, mass] of [
  ['e24w', '215'],
  ['u22w', '242'],
  ['u24w', '242'],
])
  test(`${id} shows named model values and keeps conflicting summary labels`, async ({ page }) => {
    await visit(page, id);
    await expect(spec(page, 'weight')).toHaveText(`${mass} kg`);
    await expect(spec(page, 'size')).toHaveText('1400 x 1060 x 340 mm');
    for (const key of ['weight', 'size', 'speed'])
      await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
        'data-review-status',
        'conflicting',
      );
    await expect(spec(page, 'terrain')).toContainText('edge 3 mm; gradient ±2%');
    if (id === 'u24w') await expect(spec(page, 'payload')).toHaveText('1200 kg including pallet');
  });
test('P35 keeps module-inclusive load and charger dimensions separate from robot', async ({
  page,
}) => {
  await visit(page, 'p35');
  await expect(spec(page, 'payload')).toContainText('300 kg including top module');
  await expect(spec(page, 'weight')).toHaveText('120 kg');
  await expect(spec(page, 'size')).toHaveText('960 x 660 x 295 mm');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'title',
    /homepage fleet card says 250 kg/,
  );
  await expect(highlights(page)).toContainText(
    '20 kg, 505 x 790 x 258 mm, 1000 W charging station is separate',
  );
});
test('pallet charging and platform charging keep their incompatible duration/window labels', async ({
  page,
}) => {
  await visit(page, 'e22');
  await expect(spec(page, 'chargingTime')).toHaveText(
    '45 min; full-charge versus 30%–95% source conflict',
  );
  await expect(page.locator('[data-spec-source="chargingTime"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await visit(page, 'p35');
  await expect(spec(page, 'chargingTime')).toHaveText(
    '45 min from 30% to 95%; brochure lists 55 min',
  );
  await expect(highlights(page)).toContainText('primary inductive charging and emergency USB-C');
});
test('P35 retains bare-AMR maneuver conflicts and omits unsupported accuracy and IP', async ({
  page,
}) => {
  await visit(page, 'p35');
  await expect(spec(page, 'minAisleWidth')).toHaveText(
    '960 mm web / 1000 mm brochure; 2090 mm minimum two-way (bare AMR)',
  );
  await expect(spec(page, 'turningRadius')).toContainText(
    '660 mm from robot center; brochure 1300 mm rotation diameter',
  );
  for (const key of ['minAisleWidth', 'turningRadius'])
    await expect(page.locator(`[data-spec-source="${key}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  for (const key of [
    'maxRuntime',
    'ipRating',
    'navigationAccuracy',
    'dockingAccuracy',
    'maxLiftHeight',
    'liftStroke',
  ])
    await expect(spec(page, key)).toHaveCount(0);
});
test('structured properties retain conflicting conditions and omit quote offers', async ({
  page,
}) => {
  await visit(page, 'p35');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Charging time',
        value: '45 min from 30% to 95%; brochure lists 55 min',
      }),
      expect.objectContaining({
        name: 'Minimum aisle width',
        value: '960 mm web / 1000 mm brochure; 2090 mm minimum two-way (bare AMR)',
      }),
    ]),
  );
});
test('German comparison retains missing historical values and current source conflicts', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Minimale Gangbreite');
  await expect(table).toContainText('Wenderadius');
  await expect(table).toContainText('brochure lists 55 min');
  const columns = await table.locator('thead th').allTextContents();
  const column = (name) => columns.findIndex((value) => value.trim() === name);
  for (const name of ['GoPal 400', 'GoPal E22', 'GoPal U24W', 'GoPal P35'])
    expect(column(name)).toBeGreaterThan(0);
  const width = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="minAisleWidth"]') });
  await expect(width.locator('td').nth(column('GoPal 400'))).toHaveText('-');
  await expect(width.locator('td').nth(column('GoPal P35'))).toContainText('bare AMR');
  await expect(table).toContainText('December 2017');
});
test('catalog search finds the historical model under its manufacturer', async ({ page }) => {
  await page.goto('/?mfr=Robotize&q=GoPal%20400');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(
    page.locator('#robotsGrid .robot-card[data-robot-id="robotize-gopal-400"]'),
  ).toBeVisible();
});
for (const theme of ['light', 'dark'])
  for (const route of ['/robot/robotize-gopal-p35/', '/brands/robotize/', 'comparison'])
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
