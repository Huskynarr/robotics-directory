import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
test('canonical brands expose source-backed model inventories and company focus', async ({
  page,
}) => {
  for (const [id, term] of [
    ['videoray', 'manipulator lift'],
    ['standard-bots', 'coming soon'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(4);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('Pro 5 exposes mass depth and inequality conflicts with dated source badges', async ({
  page,
}) => {
  await page.goto('/robot/videoray-pro-5/');
  for (const [key, pattern] of [
    ['weight', /11.8 kg.*10 kg/],
    ['depthRating', /300 m.*305 m/],
    ['speed', /4.4 knots.*over 4.4 knots/],
  ]) {
    await expect(spec(page, key)).toHaveAttribute('data-raw-value', pattern);
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
    await expect(badge(page, key).locator('time')).toHaveAttribute('datetime', '2026-11-02');
  }
  await expect(spec(page, 'dof')).toContainText('3 controlled motion DOF');
  await expect(spec(page, 'releaseDate')).toHaveAttribute('data-raw-value', '2019');
});
test('Defender depth configurations stay separate from tether range and piloting load', async ({
  page,
}) => {
  await page.goto('/robot/videoray-defender/');
  await expect(spec(page, 'depthRating')).toContainText('300 m standard; 1000 m and 4000 m');
  await expect(spec(page, 'payload')).toHaveAttribute(
    'data-raw-value',
    /9.5 kg maximum piloting lift/,
  );
  await expect(highlights(page)).toContainText('tether retrieval is not free-swimming payload');
  await expect(spec(page, 'dof')).toContainText('6 controlled motion DOF');
  for (const key of ['handType', 'batteryLife', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Ally equipment bundles and unavailable battery do not become standard features', async ({
  page,
}) => {
  await page.goto('/robot/videoray-ally/');
  await expect(highlights(page)).toContainText('Premium 74953 adds manipulator');
  await expect(highlights(page)).toContainText('subsea battery not currently available');
  await expect(highlights(page)).toContainText('180 degrees');
  await expect(highlights(page)).toContainText('200 degrees');
  for (const key of ['batteryLife', 'maxRuntime', 'handType'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Wraith retains competing speed definitions without controller IP or energy-derived endurance', async ({
  page,
}) => {
  await page.goto('/robot/videoray-wraith/');
  await expect(spec(page, 'speed')).toHaveAttribute('data-raw-value', /4.3 knots.*4.2 knots/);
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(highlights(page)).toContainText('IP65 applies to controller/console');
  await expect(highlights(page)).toContainText('Neither establishes two-hour runtime');
  for (const key of ['ipRating', 'batteryLife', 'maxRuntime', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Spark reach conflict and elapsed speed roadmap remain visible without invented dimensions', async ({
  page,
}) => {
  await page.goto('/robot/standard-bots-spark/');
  await expect(spec(page, 'armReach')).toHaveAttribute('data-raw-value', /950 mm.*900 mm/);
  await expect(badge(page, 'armReach')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'roadmap');
  await expect(spec(page, 'speed')).toContainText('Coming Q2 2026');
  await expect(spec(page, 'ipRating')).toContainText('design rating');
  await expect(spec(page, 'size')).toHaveCount(0);
});
test('Core and Thor retain own model speed load and reach rather than adjacent comparison columns', async ({
  page,
}) => {
  await page.goto('/robot/standard-bots-core/');
  await expect(spec(page, 'speed')).toHaveAttribute(
    'data-raw-value',
    'Up to 3 m/s tool linear speed',
  );
  await expect(spec(page, 'armReach')).toContainText('1.3 m');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await page.goto('/robot/standard-bots-thor/');
  await expect(spec(page, 'armReach')).toHaveAttribute(
    'data-raw-value',
    /2000 mm.*2 mm \(78.7 in\)/,
  );
  await expect(badge(page, 'armReach')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'payload')).toContainText('collaborative speeds');
  await expect(spec(page, 'armRepeatability')).toHaveAttribute('data-raw-value', /±0.025 mm/);
});
test('Bolt remains planned with no reach runtime mechanical axes or delivered-autonomy inference', async ({
  page,
}) => {
  await page.goto('/robot/standard-bots-bolt/');
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'roadmap');
  await expect(highlights(page)).toContainText('not document 24 hours on a single charge');
  await expect(highlights(page)).toContainText('not arm reach');
  await expect(page.locator('main')).toContainText(
    'Fully autonomous navigation remains marked coming soon',
  );
  for (const key of [
    'armReach',
    'dof',
    'payload',
    'size',
    'batteryLife',
    'maxRuntime',
    'chargingTime',
  ])
    await expect(spec(page, key)).toHaveCount(0);
});
test('qualified starting dollar listings remain visible without structured Offers', async ({
  page,
}) => {
  for (const model of ['spark', 'core', 'thor']) {
    await page.goto('/robot/standard-bots-' + model + '/');
    await expect(spec(page, 'price')).toHaveAttribute(
      'data-raw-value',
      /Starting at \$.*currency unspecified/,
    );
    const product = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((nodes) =>
        nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
      );
    expect(product.offers).toBeUndefined();
    await expect(highlights(page)).toContainText('beta features may not work offline');
  }
});
test('feature-only search retrieves the named battery and energy caveat', async ({ page }) => {
  await page.goto('/?mfr=VideoRay&q=' + encodeURIComponent('two-hour runtime'));
  const card = page.locator('.robot-card[data-robot-id="videoray-wraith"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('two-hour runtime');
});
test('German mixed comparison retains roadmap and conflicts without filling absent reach or body size', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'videoray-pro-5',
        'standard-bots-spark',
        'standard-bots-thor',
        'standard-bots-bolt',
      ]),
    );
  });
  await page.goto('/brands/standard-bots/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="armReach"][data-review-status="conflicting"]'),
  ).toHaveCount(2);
  await expect(
    table.locator('[data-comparison-review="speed"][data-review-status="roadmap"]'),
  ).toHaveCount(2);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="armReach"]') });
  const headers = await table.locator('thead th').allTextContents();
  for (const name of ['Pro 5', 'Bolt'])
    await expect(row.locator('td').nth(headers.findIndex((v) => v.includes(name)))).toHaveText('-');
});
for (const id of ['videoray-pro-5', 'videoray-wraith', 'standard-bots-thor', 'standard-bots-bolt'])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
