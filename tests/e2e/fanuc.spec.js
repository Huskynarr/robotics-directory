import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/fanuc/';
const route = (id) => '/robot/fanuc-' + id + '/';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function comparison(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(['fanuc-cr-14ia-l', 'fanuc-cr-35ib', 'fanuc-crx-3ia', 'fanuc-crx-5ia-food']),
    );
  });
  await page.goto(brand);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand exposes eighteen exact CR/CRX Food/Paint models and sourced company focus', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(18);
  for (const id of ['crx-3ia', 'crx-30ia', 'crx-10ia-l-paint', 'crx-30ia-food'])
    await expect(page.locator('main .robot-card[data-robot-id="fanuc-' + id + '"]')).toBeVisible();
  await expect(page.locator('main .robot-card[data-robot-id="fanuc-crx-25ia"]')).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'wrist orientation',
  );
});
test('CR-14 has a load-dependent reach boundary at twelve kilograms', async ({ page }) => {
  await page.goto(route('cr-14ia-l'));
  await expect(spec(page, 'payload')).toHaveText('14 kg maximum wrist load');
  await expect(spec(page, 'armReach')).toHaveText('911 mm below 12 kg; 820 mm at 12 kg or greater');
  await expect(badge(page, 'armReach')).toHaveAttribute('title', /at or above 12 kg/);
});
test('CR-35 optional payload does not retain full reach or erase its mass disagreement', async ({
  page,
}) => {
  await page.goto(route('cr-35ib'));
  await expect(spec(page, 'armReach')).toContainText('1831 mm at 35 kg; 1643 mm in 50 kg');
  await expect(spec(page, 'weight')).toContainText('386 kg');
  await expect(spec(page, 'weight')).toContainText('375 kg');
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'conflicting');
});
test('standard CR-7 and long arm keep their separate reach and prose conflict', async ({
  page,
}) => {
  await page.goto(route('cr-7ia'));
  await expect(spec(page, 'armReach')).toContainText('717 mm specification table');
  await expect(badge(page, 'armReach')).toHaveAttribute('data-review-status', 'conflicting');
  await page.goto(route('cr-7ia-l'));
  await expect(spec(page, 'armReach')).toHaveText('911 mm');
  await expect(spec(page, 'speed')).toContainText('collaborative/high-speed split not stated');
});
test('US legacy status stays attributed and does not retire all CR arms', async ({ page }) => {
  await page.goto(route('cr-4ia'));
  await expect(highlights(page)).toContainText('no longer in production');
  await expect(highlights(page)).toContainText('not a worldwide installed-base retirement date');
  await page.goto(route('cr-15ia'));
  await expect(highlights(page)).not.toContainText('no longer in production');
});
test('Paint remains a separate mass-conflicting model', async ({ page }) => {
  await page.goto(route('crx-10ia-l-paint'));
  await expect(spec(page, 'weight')).toContainText('47 kg current EU brochure; 40 kg US');
  await expect(badge(page, 'weight')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(highlights(page)).toContainText('no independent explosion-protection approval');
});
test('CRX-30 keeps payload reach pairing and the downward-facing wrist restriction', async ({
  page,
}) => {
  await page.goto(route('crx-30ia'));
  await expect(spec(page, 'payload')).toContainText(
    '40 kg mode requires downward-facing wrist flange',
  );
  await expect(spec(page, 'armReach')).toContainText('1756 mm at 30 kg; 1889 mm at 25 kg');
  await expect(badge(page, 'armReach')).toHaveAttribute('data-review-status', 'conflicting');
  await expect(highlights(page)).toContainText('1700 mm reach entry has a mismatched footnote');
});
test('IP classes remain component scoped and speed modes stay model specific', async ({ page }) => {
  await page.goto(route('cr-15ia'));
  await expect(spec(page, 'ipRating')).toHaveText('Body: IP54; wrist and J3 arm: IP67');
  await expect(spec(page, 'speed')).toContainText('separately located area safety sensor');
  await page.goto(route('crx-3ia'));
  await expect(spec(page, 'speed')).toContainText('2500 mm/s high-speed mode');
});
test('CRX-20 does not inherit a high-speed maximum from adjacent columns', async ({ page }) => {
  await page.goto(route('crx-20ia-l'));
  await expect(spec(page, 'speed')).toContainText('high-speed-mode maximum not specified');
  await expect(spec(page, 'speed')).not.toContainText('2000');
});
test('Food package omits unsupported standard-arm mass speed axes and repeatability', async ({
  page,
}) => {
  await page.goto(route('crx-5ia-food'));
  for (const key of ['weight', 'speed', 'dof', 'armRepeatability'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(spec(page, 'payload')).toHaveText('5 kg');
  await expect(highlights(page)).toContainText('incidental food contact');
});
test('Food 30 payload modes do not inherit the standard forty-kilogram mode', async ({ page }) => {
  await page.goto(route('crx-30ia-food'));
  await expect(spec(page, 'payload')).toContainText('25/30 kg');
  await expect(spec(page, 'payload')).not.toContainText('40 kg');
  await expect(spec(page, 'armReach')).toContainText('pairing unspecified');
});
test('arm repeatability has a dedicated sourced specification with an accuracy boundary note', async ({
  page,
}) => {
  await page.goto(route('crx-3ia'));
  await expect(spec(page, 'armRepeatability')).toHaveAttribute(
    'data-raw-value',
    '+/-0.02 mm (ISO 9283)',
  );
  await expect(badge(page, 'armRepeatability')).toHaveAttribute('data-review-status', 'documented');
  await expect(badge(page, 'armRepeatability')).toHaveAttribute(
    'title',
    /not absolute positioning accuracy/,
  );
});
test('structured product data exposes repeatability and excludes unknown dimensions and offers', async ({
  page,
}) => {
  await page.goto(route('crx-3ia'));
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  const props = Object.fromEntries(product.additionalProperty.map((p) => [p.name, p.value]));
  expect(props['Arm repeatability']).toBe('+/-0.02 mm (ISO 9283)');
  expect(props.Size).toBeUndefined();
  expect(product.offers).toBeUndefined();
});
test('manufacturer footnote restriction is retrievable through exact feature search', async ({
  page,
}) => {
  await page.goto('/?mfr=FANUC&q=additional%201700%20mm%20reach%20entry');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'fanuc-crx-30ia');
  await expect(cards.locator('[data-search-highlight]')).toContainText('mismatched footnote');
});
test('German comparison localizes repeatability and preserves unknown Food and conflicting mass', async ({
  page,
}) => {
  const table = await comparison(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (name) => headings.findIndex((t) => t.trim() === name);
  const row = (key) =>
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="' + key + '"]') });
  await expect(row('armRepeatability')).toContainText('Wiederholgenauigkeit des Arms');
  await expect(row('armRepeatability').locator('td').nth(column('CRX-3iA'))).toContainText(
    '+/-0,02 mm',
  );
  await expect(row('armRepeatability').locator('td').nth(column('CRX-5iA Food'))).toHaveText('-');
  await expect(row('weight').locator('[data-review-status="conflicting"]')).toHaveCount(1);
});
test('mounting footprints and maintenance intervals do not become size battery or release-year fields', async ({
  page,
}) => {
  await page.goto(route('crx-30ia'));
  for (const key of ['size', 'batteryLife', 'maxRuntime', 'chargingTime', 'releaseDate'])
    await expect(spec(page, key)).toHaveCount(0);
});
for (const theme of ['light', 'dark'])
  for (const target of [brand, route('cr-35ib'), route('crx-5ia-food'), 'comparison'])
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
