import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const capraBrand = '/brands/capra-robotics/';
const hyperBrand = '/brands/hypershell/';
const capra = (id) => '/robot/capra-robotics-capra-' + id + '/';
const hyper = (id) => '/robot/hypershell-' + id + '/';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function comparison(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'capra-robotics-capra-200',
        'capra-robotics-capra-500',
        'hypershell-x-ultra-s',
        'hypershell-x-max-s',
      ]),
    );
  });
  await page.goto(hyperBrand);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
async function productData(page) {
  return page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
}
test('Capra brand retains five platforms and configured systems with sourced company focus', async ({
  page,
}) => {
  await page.goto(capraBrand);
  await expect(page.locator('main .robot-card')).toHaveCount(5);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'SmartFleet is fleet software',
  );
});
test('Hypershell brand separates old X names and S variants as eight sourced cards', async ({
  page,
}) => {
  await page.goto(hyperBrand);
  await expect(page.locator('main .robot-card')).toHaveCount(8);
  for (const id of [
    'x-ultra',
    'x-carbon',
    'x-pro',
    'x-ultra-s',
    'x-max-s',
    'x-pro-s',
    'x-go',
    'halo',
  ])
    await expect(
      page.locator('main .robot-card[data-robot-id="hypershell-' + id + '"]'),
    ).toBeVisible();
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'completed shipments',
  );
});
test('platform load values distinguish onboard carrying from towing', async ({ page }) => {
  await page.goto(capra('200'));
  await expect(spec(page, 'payload')).toHaveText(
    'Up to 50 kg onboard; up to 200 kg towing (separate limits)',
  );
  await page.goto(capra('500'));
  await expect(spec(page, 'payload')).toHaveText(
    'Up to 100 kg onboard; up to 500 kg towing (separate limits)',
  );
});
test('exact platform dimensions mass and turning radii retain their model columns', async ({
  page,
}) => {
  await page.goto(capra('200'));
  await expect(spec(page, 'weight')).toHaveText('50 kg with 2 batteries');
  await expect(spec(page, 'turningRadius')).toHaveText('465 mm');
  await expect(spec(page, 'size')).toHaveText('1125 x 600 x 373 mm (L x W x H)');
  await page.goto(capra('500'));
  await expect(spec(page, 'weight')).toContainText('battery inclusion unspecified');
  await expect(spec(page, 'turningRadius')).toHaveText('480 mm');
  await expect(spec(page, 'size')).toHaveText('1145 x 635 x 356 mm (L x W x H)');
});
test('wireless sixty-minute charge remains partial and conditionally sourced', async ({ page }) => {
  await page.goto(capra('200'));
  await expect(spec(page, 'chargingTime')).toHaveText(
    '60 min from 20% to 80% with wireless charger',
  );
  await expect(badge(page, 'chargingTime')).toHaveAttribute(
    'title',
    /Full charge time is not established/,
  );
  await expect(badge(page, 'chargingTime').locator('time')).toHaveAttribute(
    'datetime',
    '2026-11-02',
  );
  await expect(highlights(page)).toContainText('not a full 0-100% charge');
});
test('platform uptime and environmental claims retain battery load and heater conditions', async ({
  page,
}) => {
  await page.goto(capra('200'));
  await expect(spec(page, 'maxRuntime')).toContainText('Up to 20 h');
  await expect(highlights(page)).toContainText('weighed two-battery configuration');
  await expect(spec(page, 'terrain')).toContainText('50% slope and 140 mm step');
  await expect(highlights(page)).toContainText(
    'below -10 degrees C require an additional heating element',
  );
  await page.goto(capra('500'));
  await expect(spec(page, 'maxRuntime')).toContainText('Up to 15 h');
});
test('Carrier does not advertise five hundred kilograms as onboard capacity', async ({ page }) => {
  await page.goto(capra('carrier'));
  await expect(spec(page, 'payload')).toHaveText(
    'Up to 100 kg top-deck load; up to 500 kg loaded cart (separate limits)',
  );
  await expect(highlights(page)).toContainText('not 500 kg onboard carrying capacity');
  for (const key of ['weight', 'size', 'speed', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Scout and Urban do not inherit base-platform endurance and charging assumptions', async ({
  page,
}) => {
  await page.goto(capra('scout'));
  await expect(spec(page, 'maxRuntime')).toContainText('10 h advertised mission');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(highlights(page)).toContainText('manual control');
  await page.goto(capra('urban'));
  await expect(spec(page, 'chargingTime')).toContainText(
    '2 h advertised charge time; state-of-charge interval unspecified',
  );
  await expect(highlights(page)).toContainText('Autonomous or semi-autonomous');
});
test('S wearables have model-specific assistance power and pace outside speed and payload', async ({
  page,
}) => {
  for (const [id, power, pace] of [
    ['x-ultra-s', '1000', '25'],
    ['x-max-s', '1000', '25'],
    ['x-pro-s', '800', '20'],
  ]) {
    await page.goto(hyper(id));
    await expect(spec(page, 'assistPower')).toContainText(power + ' W maximum');
    await expect(spec(page, 'assistancePace')).toContainText(pace + ' km/h assisted wearer pace');
    await expect(spec(page, 'speed')).toHaveCount(0);
    await expect(spec(page, 'payload')).toHaveCount(0);
  }
});
test('range does not multiply included batteries or assign Ultra distance to Max', async ({
  page,
}) => {
  await page.goto(hyper('x-ultra-s'));
  await expect(spec(page, 'assistanceRange')).toHaveText(
    'Up to 30 km per battery; two batteries included',
  );
  await expect(highlights(page)).toContainText('not a guaranteed 60 km journey');
  await page.goto(hyper('x-max-s'));
  await expect(spec(page, 'assistanceRange')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not assigned to Max S');
});
test('legacy X records do not acquire S specifications or promotion-based release years', async ({
  page,
}) => {
  for (const id of ['x-ultra', 'x-carbon', 'x-pro']) {
    await page.goto(hyper(id));
    for (const key of ['weight', 'assistPower', 'assistancePace', 'assistanceRange', 'releaseDate'])
      await expect(spec(page, key)).toHaveCount(0);
    await expect(highlights(page)).toContainText('June 23-30 promotional price');
    expect((await productData(page)).offers).toBeUndefined();
  }
});
test('Halo retains battery mass uncertainty powered-joint scope and delivery plans', async ({
  page,
}) => {
  await page.goto(hyper('halo'));
  await expect(spec(page, 'weight')).toHaveAttribute(
    'data-raw-value',
    '2.6 kg stated system mass; battery inclusion unspecified',
  );
  await expect(spec(page, 'assistPower')).toContainText('1490 W peak');
  await expect(spec(page, 'assistanceRange')).toContainText('20 km per PocketVolt battery');
  await expect(spec(page, 'dof')).toHaveCount(0);
  await expect(highlights(page)).toContainText('does not confirm completed deliveries');
  await expect(highlights(page)).toContainText('Four motors are not a complete count');
});
test('assistance properties are structured separately and launch/preorder prices are not exact offers', async ({
  page,
}) => {
  await page.goto(hyper('x-ultra-s'));
  const product = await productData(page);
  const properties = Object.fromEntries(product.additionalProperty.map((p) => [p.name, p.value]));
  expect(properties['Assistance power']).toBe('Up to 1000 W maximum motor-system output');
  expect(properties['Assistance range']).toContain('30 km per battery');
  expect(properties.Speed).toBeUndefined();
  expect(product.offers).toBeUndefined();
  await page.goto(hyper('halo'));
  expect((await productData(page)).offers).toBeUndefined();
  await expect(spec(page, 'price')).toContainText('Origin Edition preorder');
});
test('dated catalog price sorting uses money amounts without appending the announcement date', async ({
  page,
}) => {
  await page.goto('/?mfr=Hypershell&sort=price');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(8);
  const ids = await cards.evaluateAll((nodes) => nodes.map((n) => n.dataset.robotId));
  expect(ids.indexOf('hypershell-x-max-s')).toBeLessThan(ids.indexOf('hypershell-x-ultra-s'));
  expect(ids.indexOf('hypershell-x-carbon')).toBeLessThan(ids.indexOf('hypershell-halo'));
});
test('qualified assistance distance is retrievable with its exact feature statement', async ({
  page,
}) => {
  await page.goto('/?mfr=Hypershell&q=not%20a%20guaranteed%2060%20km%20journey');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'hypershell-x-ultra-s');
  await expect(cards.locator('[data-search-highlight]')).toContainText('two batteries');
});
test('German comparison distinguishes towing assisted distance and unknown Max range', async ({
  page,
}) => {
  const table = await comparison(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (name) => headings.findIndex((t) => t.trim() === name);
  const row = (key) =>
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="' + key + '"]') });
  await expect(row('payload')).toContainText('200 kg towing');
  await expect(row('assistPower')).toContainText('Unterstützungsleistung');
  await expect(row('assistanceRange')).toContainText('Unterstützungsreichweite');
  await expect(row('assistanceRange').locator('td').nth(column('X Max S'))).toHaveText('-');
  await expect(row('assistanceRange').locator('td').nth(column('X Ultra S'))).toContainText(
    '30 km per battery',
  );
});
for (const theme of ['light', 'dark'])
  for (const target of [capraBrand, hyperBrand, hyper('halo'), 'comparison'])
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
