import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (p, k) => p.locator('[data-spec-key="' + k + '"]');
const badge = (p, k) => p.locator('[data-spec-source="' + k + '"]');
const high = (p) => p.locator('section[aria-labelledby="product-highlights"]');
test('canonical company profiles expose exact inventories and manufacturer versus partner roles', async ({
  page,
}) => {
  for (const [id, count, term] of [
    ['ohmnilabs', 4, 'discontinued'],
    ['quantum-systems', 11, 'preliminary'],
    ['catalog-wiy-drones-f0172e0357cc', 1, 'joint venture'],
  ]) {
    await page.goto('/brands/' + id + '/');
    await expect(page.locator('main .robot-card')).toHaveCount(count);
    await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(term);
  }
});
test('legacy Ohmni retains speed disagreement partial charge and discontinued price without Offer', async ({
  page,
}) => {
  await page.goto('/robot/ohmnilabs-ohmni-telepresence-robot/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /18 lb robot/);
  await expect(spec(page, 'speed')).toHaveAttribute('data-raw-value', /2 mph.*2.2 mph/);
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'chargingTime')).toContainText('half charge to full while powered off');
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((ns) =>
      ns.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  expect(product.offers).toBeUndefined();
  await expect(high(page)).toContainText('old product URL now mainly promotes OhmniCare');
});
test('SuperCam retains archived date and serial evidence without inheriting whole-platform specifications', async ({
  page,
}) => {
  await page.goto('/robot/ohmnilabs-ohmni-supercam/');
  await expect(high(page)).toContainText('PVT 3000+');
  await expect(high(page)).toContainText('HTTP 403');
  await expect(badge(page, 'price').locator('time')).toHaveAttribute('datetime', '2026-11-01');
  for (const key of ['weight', 'batteryLife', 'speed', 'size', 'dof'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('OhmniCare keeps footprint conflict and ratio charging distinct from historical Ohmni', async ({
  page,
}) => {
  await page.goto('/robot/ohmnilabs-ohmnicare-robot/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /66 lb \(30 kg\)/);
  await expect(spec(page, 'size')).toHaveAttribute('data-raw-value', /14 x 18 in.*15 x 9.5 in/);
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'chargingTime')).toContainText('20 min charging per 1 h');
  await expect(high(page)).toContainText('neither is assumed to be optical zoom');
});
test('OhmniClean shows mass and runtime conflicts with unoccupied-space and swap conditions', async ({
  page,
}) => {
  await page.goto('/robot/ohmnilabs-ohmniclean-robot/');
  await expect(spec(page, 'weight')).toHaveAttribute('data-raw-value', /79 lb.*71 lb/);
  await expect(spec(page, 'batteryLife')).toHaveAttribute('data-raw-value', /2 h average.*75 min/);
  for (const key of ['weight', 'batteryLife'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  for (const key of ['maxRuntime', 'areaRate', 'workingWidth'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(high(page)).toContainText('Unoccupied-space use');
  await expect(high(page)).toContainText('not one charge');
});
test('Vector modes retain own endurance MTOW and speed columns without empty-mass inheritance', async ({
  page,
}) => {
  for (const [mode, duration, mass, speed] of [
    ['fixed-wing', '180+', '9.5', '15-20'],
    ['multicopter', '35', '8.0', '0-15'],
  ]) {
    await page.goto('/robot/quantum-systems-vector-ai-' + mode + '/');
    await expect(spec(page, 'flightTime')).toHaveAttribute(
      'data-raw-value',
      new RegExp(duration.replace('+', '\\+') + ' min'),
    );
    await expect(spec(page, 'maxTakeoffWeight')).toHaveAttribute(
      'data-raw-value',
      new RegExp(mass + ' kg'),
    );
    await expect(spec(page, 'speed')).toContainText(speed + ' m/s');
    for (const key of ['weight', 'batteryLife']) await expect(spec(page, key)).toHaveCount(0);
  }
});
test('Trinity Pro export default and Tactical IP conflict remain visible without family release year', async ({
  page,
}) => {
  await page.goto('/robot/quantum-systems-trinity-pro/');
  await expect(spec(page, 'flightTime')).toContainText('59 min by default');
  await expect(spec(page, 'releaseDate')).toHaveCount(0);
  await page.goto('/robot/quantum-systems-trinity-tactical/');
  await expect(spec(page, 'ipRating')).toHaveAttribute('data-raw-value', /IP54.*IP55/);
  await expect(badge(page, 'ipRating')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'weight')).toHaveCount(0);
});
test('PULSE preliminary figures retain roadmap badges fuel cases and empty-mass exclusions', async ({
  page,
}) => {
  await page.goto('/robot/quantum-systems-pulse-p19/');
  for (const key of ['weight', 'payload', 'flightTime', 'speed', 'maxTakeoffWeight'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'roadmap');
  await expect(spec(page, 'flightTime')).toContainText('internal+external fuel');
  await expect(spec(page, 'weight')).toContainText('excluding ejection seats');
  await expect(spec(page, 'terrain')).toContainText('not VTOL');
});
test('Mandrill preserves wheel-track and short-long options without treating range as runtime', async ({
  page,
}) => {
  await page.goto('/robot/quantum-systems-mandrill/');
  await expect(spec(page, 'driveMode')).toContainText('Wheel drive; optional track drive');
  await expect(spec(page, 'size')).toContainText('height unspecified');
  await expect(badge(page, 'payload')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(high(page)).toContainText('200 km electrical range is not 200 hours');
  for (const key of ['batteryLife', 'maxRuntime', 'chargingTime'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('Seavex and Subvex keep displacement draft diameter conflict and sensor range distinct', async ({
  page,
}) => {
  await page.goto('/robot/quantum-systems-seavex/');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'size')).toContainText('draft, not total height');
  await expect(spec(page, 'terrain')).toContainText(
    'operation up to Sea State 3, survivability up to Sea State 6',
  );
  await page.goto('/robot/quantum-systems-subvex/');
  await expect(spec(page, 'size')).toHaveAttribute('data-raw-value', /533 mm.*530 mm/);
  await expect(badge(page, 'size')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'depthRating')).toContainText('6000 m');
  for (const key of ['batteryLife', 'chargingTime']) await expect(spec(page, key)).toHaveCount(0);
});
test('Skyron and WIY STRILA preserve distinct identities conflicts and integration-partner evidence', async ({
  page,
}) => {
  await page.goto('/robot/quantum-systems-skyron-400/');
  await expect(spec(page, 'payload')).toHaveAttribute('data-raw-value', /800 g.*1.2 kg/);
  await expect(high(page)).toContainText('Separate identity from Addverb');
  await page.goto('/robot/wiy-drones-strila/');
  await expect(badge(page, 'maxTakeoffWeight')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(badge(page, 'speed')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(high(page)).toContainText('Integration partner source');
  await expect(high(page)).toContainText('Quantum WIY Industries');
});
test('feature-only search retrieves Trinity export default footnote', async ({ page }) => {
  await page.goto('/?mfr=Quantum+Systems&q=' + encodeURIComponent('12.8 m/s default'));
  const card = page.locator('.robot-card[data-robot-id="quantum-systems-trinity-pro"]');
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText('12.8 m/s default');
});
test('German mixed comparison retains conflict roadmap and absent mass rather than cross-model values', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'ohmnilabs-ohmniclean-robot',
        'quantum-systems-trinity-pro',
        'quantum-systems-pulse-p19',
        'quantum-systems-seavex',
      ]),
    );
  });
  await page.goto('/brands/quantum-systems/');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(
    table.locator('[data-comparison-review="weight"][data-review-status="conflicting"]'),
  ).toHaveCount(1);
  await expect(
    table.locator('[data-comparison-review="weight"][data-review-status="roadmap"]'),
  ).toHaveCount(1);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="weight"]') });
  const headers = await table.locator('thead th').allTextContents();
  for (const name of ['Trinity Pro', 'Seavex'])
    await expect(row.locator('td').nth(headers.findIndex((v) => v.includes(name)))).toHaveText('-');
  await expect(table).toContainText('59 min by default');
});
for (const id of [
  'ohmnilabs-ohmni-supercam',
  'ohmnilabs-ohmniclean-robot',
  'quantum-systems-pulse-p19',
  'wiy-drones-strila',
])
  for (const theme of ['light', 'dark'])
    test('axe ' + id + ' ' + theme, async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
      await page.goto('/robot/' + id + '/');
      expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
    });
