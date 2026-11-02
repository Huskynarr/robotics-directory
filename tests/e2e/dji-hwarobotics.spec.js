import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
test('company pages expose canonical aircraft and system counts with sourced focuses', async ({
  page,
}) => {
  for (const [id, count, term] of [
    ['dji', 11, 'Cine'],
    ['hwarobotics', 7, 'SLS900'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('Mini keeps standard and Plus flight/mass conditions without invented maximum takeoff weight', async ({
  page,
}) => {
  await page.goto('/robot/dji-mini-4-pro/');
  await expect(spec(page, 'flightTime')).toContainText('34 min standard');
  await expect(spec(page, 'flightTime')).toContainText(
    '45 min Battery Plus (not available in Europe)',
  );
  await expect(spec(page, 'weight')).toContainText('more than 249 g with Battery Plus');
  for (const key of ['maxTakeoffWeight', 'payload', 'dof', 'maxRuntime', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(badge(page, 'flightTime')).toHaveAttribute('data-review-status', 'documented');
  await expect(badge(page, 'flightTime').locator('time')).toHaveAttribute('datetime', '2026-11-02');
});
test('Mavic Pro and Cine expose separate mass and storage hardware', async ({ page }) => {
  await page.goto('/robot/dji-mavic-3-pro/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /958 g/);
  await expect(page.locator('main')).toContainText(
    'does not inherit Cine-only Apple ProRes or 1 TB SSD',
  );
  await page.goto('/robot/dji-mavic-3-pro-cine/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /963 g/);
  await expect(page.locator('main')).toContainText(
    'Cine adds Apple ProRes recording on all three cameras',
  );
  await expect(spec(page, 'flightTime')).toContainText('43 min at 32.4 km/h');
  await expect(highlights(page)).toContainText('three hub batteries charge sequentially');
});
test('Air and Flip distinguish tailwind speeds, EU limit and parallel charging equipment', async ({
  page,
}) => {
  await page.goto('/robot/dji-air-3s/');
  await expect(spec(page, 'speed')).toHaveAttribute(
    'data-raw-value',
    /27 m\/s.*6 m\/s tailwind; EU limit 19 m\/s/,
  );
  await expect(spec(page, 'chargingTime')).toContainText('charge-state interval unspecified');
  await page.goto('/robot/dji-flip/');
  await expect(spec(page, 'speed')).toHaveAttribute(
    'data-raw-value',
    /16 m\/s.*4 m\/s tailwind; tracking 12 m\/s/,
  );
  await expect(spec(page, 'chargingTime')).toContainText('0-100%');
  await expect(highlights(page)).toContainText('at least 5 A-rated PD cable');
});
test('SLS unit load and aisle throughput do not become chassis dimensions or lift payload', async ({
  page,
}) => {
  await page.goto('/robot/hwarobotics-sls300/');
  await expect(spec(page, 'payload')).toContainText('35 kg rated unit load; 50 kg maximum');
  await expect(spec(page, 'throughput')).toHaveAttribute(
    'data-raw-value',
    /2500 boxes\/h single-aisle compound/,
  );
  for (const key of ['size', 'weight', 'maxRuntime', 'batteryLife'])
    await expect(spec(page, key)).toHaveCount(0);
  await page.goto('/robot/hwarobotics-sls400/');
  await expect(spec(page, 'throughput')).toContainText('10 m system height and 50 m rack length');
  await expect(spec(page, 'speed')).toHaveAttribute('data-raw-value', /4 m\/s/);
});
test('SLS500 inbound rate and SLS600 inequality survive without current-series substitution', async ({
  page,
}) => {
  await page.goto('/robot/hwarobotics-sls500/');
  await expect(spec(page, 'throughput')).toContainText('single-aisle single-inbound');
  await expect(spec(page, 'speed')).toHaveCount(0);
  await page.goto('/robot/hwarobotics-sls600/');
  await expect(spec(page, 'speed')).toHaveAttribute('data-raw-value', /at least 4 m\/s/);
  await expect(highlights(page)).toContainText(
    'Mapping, rename and hardware-generation continuity remain unresolved',
  );
});
test('FPSS separates 35mm shuttle stroke from 22m rack height and source runtime ambiguity', async ({
  page,
}) => {
  for (const suffix of ['a', 'b']) {
    await page.goto('/robot/hwarobotics-fpss1500' + suffix + '/');
    await expect(spec(page, 'size')).toContainText('1172 x 960 x 125');
    await expect(spec(page, 'payload')).toContainText(
      '1500 kg rated/max pallet load; separate hoist is 2000 kg',
    );
    await expect(spec(page, 'liftStroke')).toContainText('35 mm');
    await expect(spec(page, 'stackingHeight')).toContainText('22 m system storage height');
    await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'conflicting');
    await expect(badge(page, 'maxRuntime')).toHaveAttribute(
      'data-review-status',
      suffix === 'a' ? 'documented' : 'conflicting',
    );
    await expect(spec(page, 'chargingTime')).toHaveCount(0);
  }
  await expect(spec(page, 'terrain')).toHaveAttribute('data-raw-value', /-25 to 50 °C/);
  await expect(spec(page, 'maxRuntime')).toContainText('FAQ also calls 72 h');
});
test('GTR station has no invented installed arm or battery endurance and no universal Offer', async ({
  page,
}) => {
  await page.goto('/robot/hwarobotics-gtr200/');
  await expect(page.locator('main')).toContainText('integrated robotic station');
  for (const key of ['throughput', 'payload', 'dof', 'size', 'maxRuntime'])
    await expect(spec(page, key)).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
});
test('feature-only search retrieves the exact parallel-charge cable condition', async ({
  page,
}) => {
  await page.goto('/?mfr=DJI&q=' + encodeURIComponent('at least 5 A-rated PD cable'));
  const card = page.locator('.robot-card[data-robot-id="dji-flip"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'at least 5 A-rated PD cable',
  );
});
async function compare(page, ids) {
  await page.addInitScript((ids) => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem('compareRobots', JSON.stringify(ids));
  }, ids);
  await page.goto('/brands/hwarobotics/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('German mixed comparison keeps drone flight time blank for shuttles and exposes B runtime conflict', async ({
  page,
}) => {
  const table = await compare(page, [
    'dji-mini-4-pro',
    'dji-mavic-3-pro-cine',
    'hwarobotics-fpss1500a',
    'hwarobotics-fpss1500b',
  ]);
  const headers = await table.locator('thead th').allTextContents();
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="flightTime"]') });
  for (const name of ['FPSS1500A', 'FPSS1500B'])
    await expect(row.locator('td').nth(headers.findIndex((v) => v.includes(name)))).toHaveText('-');
  await expect(
    table.locator('[data-comparison-review="maxRuntime"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="speed"][data-review-status="conflicting"]'),
  ).toHaveCount(2);
  await expect(row).toContainText('Battery Plus');
});
test('German system comparison preserves aisle geometry and keeps GTR picking rate blank', async ({
  page,
}) => {
  const table = await compare(page, [
    'hwarobotics-sls300',
    'hwarobotics-sls400',
    'hwarobotics-sls500',
    'hwarobotics-gtr200',
  ]);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="throughput"]') });
  await expect(row).toContainText('10 m system height and 50 m rack length');
  await expect(row).toContainText('single-aisle single-inbound');
  const headers = await table.locator('thead th').allTextContents();
  await expect(row.locator('td').nth(headers.findIndex((v) => v.includes('GTR200')))).toHaveText(
    '-',
  );
});
for (const id of [
  'dji-mini-4-pro',
  'dji-mavic-3-pro-cine',
  'hwarobotics-fpss1500b',
  'hwarobotics-gtr200',
])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
