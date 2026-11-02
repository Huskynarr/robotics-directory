import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
test('canonical brands expose exact model inventories and sourced company roles', async ({
  page,
}) => {
  for (const [id, count, term] of [
    ['greyorange', 4, 'third-party'],
    ['kuka', 11, 'standard versions'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('Uplift exposes metric and imperial dimension conflict without inferred aisle clearance', async ({
  page,
}) => {
  await page.goto('/robot/greyorange-ranger-uplift-l/');
  await expect(spec(page, 'size')).toHaveAttribute(
    'data-raw-value',
    /1280 x 920 x 350 mm.*51.2 x 36.2 x 13.8 in/,
  );
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(badge(page, 'size').locator('time')).toHaveAttribute('datetime', '2026-11-02');
  await expect(highlights(page)).toContainText('1300.48 mm, not 1280 mm');
  for (const key of ['weight', 'minAisleWidth', 'turningRadius', 'maxLiftHeight'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Elevate and AnyPallet keep different closed-pallet pickup conditions', async ({ page }) => {
  await page.goto('/robot/greyorange-ranger-forklift-elevate/');
  await expect(page.locator('main')).toContainText('Closed-pallet pickup from elevated positions');
  await expect(spec(page, 'payload')).toContainText('1400 kg');
  await expect(spec(page, 'speed')).toHaveAttribute('data-raw-value', /1.50 m\/s/);
  await page.goto('/robot/greyorange-ranger-forklift-anypallet/');
  await expect(page.locator('main')).toContainText(
    'Ground-level handling of both closed and open pallets',
  );
  await expect(spec(page, 'payload')).toContainText('2000 kg');
  await expect(spec(page, 'speed')).toHaveAttribute(
    'data-raw-value',
    /1.4 m\/s loaded; 1.7 m\/s unloaded/,
  );
});
test('XXL fork length and fleet case study do not become lift height or individual hourly rate', async ({
  page,
}) => {
  await page.goto('/robot/greyorange-ranger-forklift-xxl/');
  await expect(highlights(page)).toContainText('2450 mm fork length is horizontal geometry');
  await expect(highlights(page)).toContainText('not this individual robot throughput');
  await expect(highlights(page)).toContainText('third-party vendors');
  for (const key of ['liftStroke', 'maxLiftHeight', 'throughput', 'maxRuntime', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('standard iiwa arm mass reach and pose repeatability retain exact named pairing', async ({
  page,
}) => {
  for (const [model, mass, reach, precision] of [
    ['7-r800', '23.9 kg', '800 mm', '±0.1 mm'],
    ['14-r820', '29.9 kg', '820 mm', '±0.15 mm'],
  ]) {
    await page.goto('/robot/kuka-lbr-iiwa-' + model + '/');
    await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', new RegExp(mass));
    await expect(spec(page, 'armReach')).toContainText(reach);
    await expect(spec(page, 'armRepeatability')).toHaveAttribute(
      'data-raw-value',
      new RegExp(precision.replace('.', '\\.')),
    );
    await expect(spec(page, 'dof')).toContainText('7 axes');
  }
});
test('iiwa CR mounting is floor only and excludes standard-only mass and precision', async ({
  page,
}) => {
  for (const model of ['7-r800', '14-r820']) {
    await page.goto('/robot/kuka-lbr-iiwa-' + model + '-cr/');
    await expect(spec(page, 'terrain')).toContainText('Floor only');
    for (const key of ['weight', 'armRepeatability']) await expect(spec(page, key)).toHaveCount(0);
    await expect(spec(page, 'ipRating')).toHaveText('IP54');
    await expect(highlights(page)).toContainText('standard versions');
  }
});
test('iisy smallest IP30 arm does not inherit larger-arm protection or seven iiwa axes', async ({
  page,
}) => {
  await page.goto('/robot/kuka-lbr-iisy-3-r760/');
  await expect(spec(page, 'ipRating')).toHaveText('IP30');
  await expect(spec(page, 'dof')).toContainText('6 axes');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /22.8 kg/);
  await expect(page.locator('main')).toContainText('KR C5 micro-2');
  await page.goto('/robot/kuka-lbr-iisy-6-r1300/');
  await expect(spec(page, 'ipRating')).toHaveText('IP54');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /46.3 kg/);
  await expect(spec(page, 'armReach')).toContainText('1300 mm');
  await page.goto('/robot/kuka-lbr-iisy-8-r930/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /43.2 kg/);
  await expect(spec(page, 'armReach')).toContainText('930 mm');
});
test('iisy 11 and 15kg standard and CR cards remain separate without precision inheritance or universal Offers', async ({
  page,
}) => {
  for (const model of ['11-r1300', '15-r930']) {
    await page.goto('/robot/kuka-lbr-iisy-' + model + '/');
    await expect(spec(page, 'armRepeatability')).toHaveAttribute('data-raw-value', /±0.05 mm/);
    await page.goto('/robot/kuka-lbr-iisy-' + model + '-cr/');
    await expect(spec(page, 'terrain')).toContainText('angle, ceiling, floor and wall');
    for (const key of ['weight', 'armRepeatability', 'handType', 'speed'])
      await expect(spec(page, key)).toHaveCount(0);
    const product = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
      );
    expect(product.offers).toBeUndefined();
  }
});
test('feature-only search retrieves the named dimensional conversion conflict', async ({
  page,
}) => {
  await page.goto('/?mfr=GreyOrange&q=' + encodeURIComponent('1300.48 mm'));
  const card = page.locator('.robot-card[data-robot-id="greyorange-ranger-uplift-l"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('1300.48 mm');
});
async function compare(page, ids) {
  await page.addInitScript((ids) => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem('compareRobots', JSON.stringify(ids));
  }, ids);
  await page.goto('/brands/kuka/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('German arm comparison leaves CR mass and repeatability blank while preserving payload and reach', async ({
  page,
}) => {
  const table = await compare(page, [
    'kuka-lbr-iiwa-7-r800',
    'kuka-lbr-iiwa-7-r800-cr',
    'kuka-lbr-iisy-15-r930',
    'kuka-lbr-iisy-15-r930-cr',
  ]);
  const headers = await table.locator('thead th').allTextContents();
  for (const key of ['weight', 'armRepeatability']) {
    const row = table
      .locator('tr')
      .filter({ has: page.locator('[data-comparison-review="' + key + '"]') });
    for (const name of ['LBR iiwa 7 R800 CR', 'LBR iisy 15 R930 CR'])
      await expect(row.locator('td').nth(headers.findIndex((v) => v.includes(name)))).toHaveText(
        '-',
      );
  }
  const reach = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="armReach"]') });
  await expect(reach).toContainText('930 mm');
});
test('German mixed comparison retains dimension conflict and does not fill arm reach for forklifts', async ({
  page,
}) => {
  const table = await compare(page, [
    'greyorange-ranger-uplift-l',
    'greyorange-ranger-forklift-anypallet',
    'kuka-lbr-iisy-3-r760',
    'kuka-lbr-iisy-11-r1300-cr',
  ]);
  await expect(
    table.locator('[data-comparison-review="size"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="armReach"]') });
  const headers = await table.locator('thead th').allTextContents();
  for (const name of ['Ranger Uplift-L', 'Ranger Forklift AnyPallet'])
    await expect(row.locator('td').nth(headers.findIndex((v) => v.includes(name)))).toHaveText('-');
  await expect(table).toContainText('IP30');
});
for (const id of [
  'greyorange-ranger-uplift-l',
  'kuka-lbr-iiwa-7-r800-cr',
  'kuka-lbr-iisy-3-r760',
  'kuka-lbr-iisy-15-r930-cr',
])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
