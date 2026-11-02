import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const base = 'shenzhen-srod-industrial-group-co-ltd-';
const spec = (p, key) => p.locator('[data-spec-key="' + key + '"]');
const badge = (p, key) => p.locator('[data-spec-source="' + key + '"]');
const high = (p) => p.locator('section[aria-labelledby="product-highlights"]');

test('canonical SROD and Macco profiles expose physical inventory and sourced company boundaries', async ({
  page,
}) => {
  for (const [id, count, term] of [
    ['shenzhen-srod-industrial-group-co-ltd', 16, 'Three repeated'],
    ['macco-robotics', 4, 'financing'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('T200 shows source mass conflict expansion conditions and separate winch', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 't200/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /70 kg.*75 kg/);
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'size')).toContainText('115 kg');
  await expect(spec(page, 'terrain')).toContainText('DN600 mm and above require');
  for (const key of ['armReach', 'batteryLife', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('S100C retains wheel-qualified mass and camera lift without cargo or GPS inference', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 's100c-mini/');
  await expect(spec(page, 'weight')).toContainText('70 mm wheels');
  await expect(spec(page, 'liftStroke')).toContainText('Camera elevator up to 50 mm');
  for (const key of ['payload', 'dof', 'navigationAccuracy'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('long-distance crawlers omit reel mass and batteries while retaining named lift and motor rows', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 's300yl/');
  await expect(high(page)).toContainText('125 kg winding vehicle');
  await expect(spec(page, 'liftStroke')).toContainText('600 mm');
  for (const key of ['weight', 'batteryLife', 'navigationAccuracy'])
    await expect(spec(page, key)).toHaveCount(0);
  await page.goto('/robot/' + base + 's300y/');
  await expect(spec(page, 'driveMode')).toContainText('2 x 80 W');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
});
test('application aliases retain multiple source links and one card per named S150A S190DHD S150AF', async ({
  page,
}) => {
  for (const model of ['s150a', 's190dhd', 's150af']) {
    await page.goto('/robot/' + base + model + '/');
    await expect(high(page)).toContainText('identical technical parameter block');
    await expect(high(page).locator('a[href^="https://srodrobotics.com/product/"]')).toHaveCount(2);
  }
});
test('D800F pump support battery and hazardous-area conditions remain distinct', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 'd800f/');
  await expect(spec(page, 'weight')).toContainText('650 kg robot body');
  await expect(spec(page, 'weight')).toContainText('2500 kg');
  await expect(spec(page, 'depthRating')).toContainText('20 m');
  await expect(spec(page, 'throughput')).toContainText('no simultaneous duty-point guarantee');
  await expect(spec(page, 'terrain')).toContainText('non-explosion-proof');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(high(page)).toContainText('Remote terminal battery of at least 12 h');
});
test('F100 retains battery exclusion and camera roadmap without calculated traversal speed', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 'f100/');
  await expect(spec(page, 'weight')).toContainText('excluding battery');
  await expect(spec(page, 'navigationAccuracy')).toContainText('10-30 cm per 100 m');
  await expect(spec(page, 'throughput')).toContainText('100 m blade in 5 min');
  for (const key of ['speed', 'ipRating']) await expect(spec(page, key)).toHaveCount(0);
  await expect(high(page)).toContainText('subsequent software upgrade');
});
test('S70 and S450A distinguish external power cable pull and system endurance', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 's70/');
  await expect(high(page)).toContainText('not documented onboard-battery endurance');
  for (const key of ['batteryLife', 'maxRuntime', 'depthRating', 'navigationAccuracy'])
    await expect(spec(page, key)).toHaveCount(0);
  await page.goto('/robot/' + base + 's450a/');
  await expect(spec(page, 'batteryLife')).toContainText('system');
  for (const key of ['weight', 'payload', 'depthRating'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('sonar and micro cutter preserve range and axial-feed unit discrepancies', async ({
  page,
}) => {
  await page.goto('/robot/' + base + 's3831e/');
  await expect(spec(page, 'terrain')).toHaveAttribute(
    'data-raw-value',
    /DN500-600 mm.*DN500-6000 mm/,
  );
  await expect(badge(page, 'terrain')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'batteryLife')).toContainText('High gear 2 h; low gear 4 h');
  await page.goto('/robot/' + base + 'micro-wriggling-cutting-robot/');
  await expect(high(page)).toContainText('100 m in headline and 100 mm in table');
  for (const key of ['armReach', 'liftStroke', 'dof']) await expect(spec(page, key)).toHaveCount(0);
});
test('Macco financing named outputs and versioned hardware have separate scopes without Offers', async ({
  page,
}) => {
  for (const [slug, output] of [
    ['bartender', '200 cocktails/h'],
    ['chef', '120 dishes/h'],
  ]) {
    await page.goto('/robot/macco-robotics-kime-' + slug + '/');
    await expect(spec(page, 'throughput')).toContainText(output);
    await expect(high(page)).toContainText('subject to bank approval');
    for (const key of ['weight', 'dof', 'ipRating', 'cookingCapacity', 'heatSource'])
      await expect(spec(page, key)).toHaveCount(0);
    const product = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
      );
    expect(product.offers).toBeUndefined();
  }
});
test('feature-only search finds S300YL reel-mass qualification', async ({ page }) => {
  await page.goto('/?q=' + encodeURIComponent('125 kg winding vehicle'));
  const card = page.locator('.robot-card[data-robot-id="' + base + 's300yl"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'not crawler mass or runtime',
  );
});
test('German mixed comparison retains conflicts per-arm load excluded battery and qualified throughput', async ({
  page,
}) => {
  await page.addInitScript((prefix) => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        prefix + 't200',
        prefix + 's3831e',
        prefix + 'f100',
        'macco-robotics-kime-v5',
      ]),
    );
  }, base);
  await page.goto('/brands/macco-robotics/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="weight"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="terrain"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(table).toContainText('5 kg per arm');
  await expect(table).toContainText('excluding battery');
  await expect(table).toContainText('100 m blade in 5 min');
  await expect(table).toContainText('3-DOF head/neck');
});
for (const id of [base + 't200', base + 's3831e', base + 'f100', 'macco-robotics-kime-v5'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
