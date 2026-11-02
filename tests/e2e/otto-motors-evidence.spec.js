import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const visit = (page, id) => page.goto(`/robot/otto-motors-otto-${id}/`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['100', '600', '1500', 'lifter'].map((id) => `otto-motors-otto-${id}`)),
    );
  });
  await page.goto('/brands/otto-motors/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand and manufacturer filter expose the five hardware models', async ({ page }) => {
  await page.goto('/brands/otto-motors/');
  await expect(page.locator('main .robot-card')).toHaveCount(5);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'OTTO by Rockwell Automation',
  );
  await page.goto('/?mfr=OTTO%20Motors');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(5);
});
test('100 keeps integrated lift travel, partial charging and no-payload aisle scope', async ({
  page,
}) => {
  await visit(page, '100');
  await expect(spec(page, 'liftStroke')).toHaveText(
    '62 mm integrated lift stroke; 150 kg capacity',
  );
  await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
  await expect(spec(page, 'chargingTime')).toHaveText('18 min from 10% to 90% charge');
  await expect(spec(page, 'batteryLife')).toHaveText('6 h from 90% to 10% charge');
  await expect(spec(page, 'minAisleWidth')).toHaveText(
    '1099 mm one-way; 1975 mm two-way; no payload',
  );
  await expect(spec(page, 'turningRadius')).toHaveText('Turn in place');
  await expect(page.locator('[data-spec-source="minAisleWidth"]')).toHaveAttribute(
    'href',
    /09a9a89cb03ecf15c4a6621d9a1b387b49a9ae4b\.pdf/,
  );
});
for (const [id, aisle, payload] of [
  ['600', '1575', '600'],
  ['1200', '1882', '1200'],
]) {
  test(`${id} keeps runtime and IP unknown while distinguishing charger capability`, async ({
    page,
  }) => {
    await visit(page, id);
    for (const key of ['batteryLife', 'ipRating', 'navigationAccuracy'])
      await expect(spec(page, key)).toHaveCount(0);
    await expect(spec(page, 'chargingTime')).toHaveText('30 min from 10% to 90% charge');
    await expect(spec(page, 'payload')).toHaveText(
      `${payload} kg total including fitted attachment`,
    );
    await expect(spec(page, 'minAisleWidth')).toHaveText(`${aisle} mm one-way; no payload`);
    await expect(highlights(page)).toContainText(
      id === '600' ? '100 A accessory charger' : '42 A charger',
    );
  });
}
test('1500 exposes the unit conflict with its actual 1900 kg payload', async ({ page }) => {
  await visit(page, '1500');
  await expect(spec(page, 'payload')).toHaveText('1900 kg total including fitted attachment');
  await expect(spec(page, 'minAisleWidth')).toContainText('PDF also says 146 in');
  await expect(page.locator('[data-spec-source="minAisleWidth"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="minAisleWidth"]')).toHaveAttribute(
    'title',
    /3708\.4 mm/,
  );
  await expect(spec(page, 'terrain')).toHaveText(
    '16 mm traversable gap; floor-obstacle height unspecified',
  );
});
test('Lifter retains manual/autonomous and lead-acid/lithium limits', async ({ page }) => {
  await visit(page, 'lifter');
  await expect(spec(page, 'maxLiftHeight')).toHaveText('1.0 m autonomous; 2.7 m manual');
  await expect(spec(page, 'turningRadius')).toHaveText('1420 mm manual; 1985 mm autonomous');
  await expect(spec(page, 'chargingTime')).toHaveText(
    '10%–90%: lead-acid about 6 h; lithium about 1 h with 200 A supercharger',
  );
  await expect(spec(page, 'dockingAccuracy')).toContainText(
    'Pallet docking ±50 mm; raised drop-off with target: x ±13 mm, y ±10 mm, yaw ±1°',
  );
  await expect(highlights(page)).toContainText('183 cm at 1000 kg versus 134 cm at 1200 kg');
});
test('structured data includes aisle and turning conditions without a fabricated offer', async ({
  page,
}) => {
  await visit(page, 'lifter');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Minimum aisle width',
        value: '2186 mm one-way; 4113 mm two-way; no payload',
      }),
      expect.objectContaining({
        name: 'Turning radius',
        value: '1420 mm manual; 1985 mm autonomous',
      }),
    ]),
  );
});
test('German comparison delivers maneuver fields, conflict and omitted runtime by model heading', async ({
  page,
}) => {
  const table = await compare(page);
  await expect(table).toContainText('Minimale Gangbreite');
  await expect(table).toContainText('Wenderadius');
  await expect(table).toContainText('146 in');
  const columns = await table.locator('thead th').allTextContents();
  const column = (name) => columns.findIndex((value) => value.trim() === name);
  for (const name of ['OTTO 100', 'OTTO 600', 'OTTO 1500', 'OTTO Lifter'])
    expect(column(name)).toBeGreaterThan(0);
  const runtime = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="batteryLife"]') });
  await expect(runtime.locator('td').nth(column('OTTO 600'))).toHaveText('-');
  const turning = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="turningRadius"]') });
  await expect(turning.locator('td').nth(column('OTTO Lifter'))).toContainText(
    '1420 mm manual; 1985 mm autonomous',
  );
});
for (const theme of ['light', 'dark'])
  for (const route of ['/robot/otto-motors-otto-lifter/', '/brands/otto-motors/', 'comparison']) {
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
  }
