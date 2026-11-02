import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/smart-robotics/';
const route = (model) => '/robot/smart-robotics-smart-' + model + '/';
const spec = (page, key) => page.locator('[data-spec-key="' + key + '"]');
const badge = (page, key) => page.locator('[data-spec-source="' + key + '"]');
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
async function comparison(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'smart-robotics-smart-palletizer-essential',
        'smart-robotics-smart-item-picker',
        'smart-robotics-smart-depalletizer',
        'smart-robotics-smart-mixed-case-palletizer',
      ]),
    );
  });
  await page.goto(brand);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand lists six system configurations and a sourced company focus', async ({ page }) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(6);
  for (const id of [
    'palletizer-essential',
    'palletizer-advanced',
    'palletizer-premium',
    'item-picker',
    'depalletizer',
    'mixed-case-palletizer',
  ])
    await expect(
      page.locator('main .robot-card[data-robot-id="smart-robotics-smart-' + id + '"]'),
    ).toBeVisible();
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'partner robot hardware',
  );
});
test('named palletizer footprints and stacking height remain separate sourced fields', async ({
  page,
}) => {
  for (const [name, width] of [
    ['essential', '2.3'],
    ['advanced', '2.75'],
    ['premium', '3.5'],
  ]) {
    await page.goto(route('palletizer-' + name));
    await expect(spec(page, 'size')).toHaveAttribute(
      'data-raw-value',
      '2.4 x ' + width + ' m (installation footprint; L x W)',
    );
    await expect(spec(page, 'stackingHeight')).toHaveText('3 m maximum stacking height');
    await expect(badge(page, 'stackingHeight')).toHaveAttribute('data-review-status', 'documented');
    await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
  }
});
test('Essential omits multi-picks and open boxes while preserving table scope', async ({
  page,
}) => {
  await page.goto(route('palletizer-essential'));
  await expect(highlights(page)).toContainText(
    'Multi-picks and open-top box picking are not included',
  );
  await expect(highlights(page)).toContainText('10 products or stacking patterns');
});
test('Advanced enables multi-picks and reserves open boxes for Premium', async ({ page }) => {
  await page.goto(route('palletizer-advanced'));
  await expect(highlights(page)).toContainText(
    'Multi-picks of two or more cases are included; open-top box picking is not included',
  );
  await page.goto(route('palletizer-premium'));
  await expect(highlights(page)).toContainText(
    'Multi-picks of two or more cases and open-top box picking are included',
  );
  await expect(highlights(page)).toContainText('unlimited products or stacking patterns');
});
test('family maxima do not become package payload throughput or partner arm axes', async ({
  page,
}) => {
  await page.goto(route('palletizer-premium'));
  for (const key of ['payload', 'throughput', 'dof', 'handType'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('without assigning these maxima');
  await expect(highlights(page)).toContainText('optional interlayer sheet unit and vertical lift');
});
test('item throughput has its own translated label and dated source link', async ({ page }) => {
  await page.goto(route('item-picker'));
  await expect(spec(page, 'throughput')).toHaveAttribute(
    'data-raw-value',
    'Up to 1000 items/hour (manufacturer claim; application dependent)',
  );
  await expect(page.locator('[data-i18n="spec.throughput"]')).toHaveText('Throughput');
  await expect(badge(page, 'throughput')).toHaveAttribute(
    'href',
    'https://smart-robotics.io/item-picking/',
  );
  await expect(badge(page, 'throughput').locator('time')).toHaveAttribute('datetime', '2026-11-02');
  await expect(spec(page, 'speed')).toHaveCount(0);
});
test('item weighing above five kilograms does not advertise a five-kilogram maximum', async ({
  page,
}) => {
  await page.goto(route('item-picker'));
  await expect(spec(page, 'payload')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not a 5 kg maximum payload');
  await expect(highlights(page)).toContainText('Barcode identification and item weighing');
});
test('depalletizing preserves processing unit and configurable hardware', async ({ page }) => {
  await page.goto(route('depalletizer'));
  await expect(spec(page, 'throughput')).toContainText('1000 products/hour');
  await expect(highlights(page)).toContainText('pallets, cages and containers');
  await expect(highlights(page)).toContainText('Cobot and industrial robot options');
  for (const key of ['weight', 'payload', 'size', 'speed'])
    await expect(spec(page, key)).toHaveCount(0);
});
test('mixed-case system retains both manufacturer load and height conflicts', async ({ page }) => {
  await page.goto(route('mixed-case-palletizer'));
  await expect(spec(page, 'payload')).toContainText(
    'Up to 30 kg in product FAQ; 30 kg and above in overview',
  );
  await expect(spec(page, 'stackingHeight')).toContainText(
    'Up to 2 m in FAQ; over 2 m in feature text',
  );
  for (const key of ['payload', 'stackingHeight'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'throughput')).toContainText('500 items/hour');
  await expect(highlights(page)).toContainText(
    'no resolved maximum or simultaneous load/throughput pairing',
  );
});
test('structured data retains throughput and conflicting stacking height without a priced offer', async ({
  page,
}) => {
  await page.goto(route('mixed-case-palletizer'));
  const product = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) =>
      nodes.map((n) => JSON.parse(n.textContent)).find((v) => v['@type'] === 'Product'),
    );
  const props = Object.fromEntries(product.additionalProperty.map((p) => [p.name, p.value]));
  expect(props.Throughput).toBe('Up to 500 items/hour (manufacturer claim; application dependent)');
  expect(props['Stacking height']).toContain('manufacturer conflict');
  expect(props.Speed).toBeUndefined();
  expect(product.offers).toBeUndefined();
});
test('load-boundary feature search finds the exact item picker and statement', async ({ page }) => {
  await page.goto('/?mfr=Smart%20Robotics&q=not%20a%205%20kg%20maximum%20payload');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'smart-robotics-smart-item-picker');
  await expect(cards.locator('[data-search-highlight]')).toContainText('no upper item-mass limit');
});
test('German comparison shows separate output and stacking rows with unknowns and conflicts', async ({
  page,
}) => {
  const table = await comparison(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (name) => headings.findIndex((t) => t.trim() === name);
  const row = (key) =>
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="' + key + '"]') });
  await expect(row('throughput')).toContainText('Durchsatz');
  await expect(
    row('throughput').locator('td').nth(column('Smart Palletizer Essential')),
  ).toHaveText('-');
  await expect(row('throughput').locator('td').nth(column('Smart Item Picker'))).toContainText(
    '1000 items/hour',
  );
  await expect(row('stackingHeight')).toContainText('Stapelhöhe');
  await expect(row('stackingHeight').locator('[data-review-status="conflicting"]')).toHaveCount(1);
  await expect(row('payload').locator('[data-review-status="conflicting"]')).toHaveCount(1);
  await expect(row('size')).toContainText('2,4 x 2,3 m');
});
for (const theme of ['light', 'dark'])
  for (const target of [
    brand,
    route('palletizer-essential'),
    route('mixed-case-palletizer'),
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
