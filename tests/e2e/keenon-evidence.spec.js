import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, id) => page.goto(`/robot/${id}/`);
const cleaners = [
  'keenon-robotics-kleenbot-c20',
  'keenon-kleenbot-c30',
  'keenon-kleenbot-c40',
  'keenon-robotics-kleenbot-c55',
];

async function compare(page, ids, lang = 'en') {
  await page.addInitScript(
    ({ ids, lang }) => {
      localStorage.setItem('lang', lang);
      localStorage.setItem('compareRobots', JSON.stringify(ids));
    },
    { ids, lang },
  );
  await page.goto(`/brands/keenon-robotics/?lang=${lang}`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('C20 empty-tank weight and C30 dry-cleaning modes remain qualified', async ({ page }) => {
  await visit(page, cleaners[0]);
  await expect(spec(page, 'weight')).toContainText('empty water tanks');
  await expect(spec(page, 'workingWidth')).toContainText(
    '450 mm sweeping/vacuuming; 285 mm scrubbing',
  );
  await expect(spec(page, 'waterTankCapacity')).toHaveText('7 L clean water; 5 L waste water');
  await expect(spec(page, 'payload')).toHaveCount(0);
  await visit(page, cleaners[1]);
  await expect(spec(page, 'batteryLife')).toContainText(
    '6 h sweeping/vacuuming; up to 10 h dust mopping',
  );
  await expect(spec(page, 'waterTankCapacity')).toHaveCount(0);
  await expect(highlights(page)).toContainText('2500 m² per full charge');
  await expect(highlights(page)).toContainText('dry-cleaning robot');
});

test('C40/C55 separate task endurance, water capacity and battery swaps', async ({ page }) => {
  await visit(page, cleaners[2]);
  await expect(spec(page, 'batteryLife')).toContainText(
    '5 h floor scrubbing; up to 12 h floor sweeping',
  );
  await expect(spec(page, 'waterTankCapacity')).toHaveText('16 L clean water; 11 L waste water');
  await visit(page, cleaners[3]);
  await expect(spec(page, 'maxRuntime')).toContainText('5 h per battery operating period');
  await expect(spec(page, 'areaRate')).toContainText('maximum theoretical');
  await expect(page.locator('[data-spec-source="waterTankCapacity"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="waterTankCapacity"]')).toHaveAttribute(
    'title',
    /107 L combined/,
  );
  await expect(highlights(page)).toContainText('hot swap while powered on');
});

test('T3 enclosed capacity and T8 compact delivery are distinct commercial configurations', async ({
  page,
}) => {
  await visit(page, 'keenon-robotics-dinerbot-t3');
  await expect(spec(page, 'payload')).toHaveText('40 kg total');
  await expect(highlights(page)).toContainText('180 L cabin is volume');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await visit(page, 'keenon-robotics-dinerbot-t8');
  await expect(spec(page, 'payload')).toHaveText('20 kg total');
  await expect(spec(page, 'terrain')).toContainText('55 cm minimum passage');
  await expect(spec(page, 'maxRuntime')).toContainText('15 h');
  await expect(page.locator('main a[href="/?category=commercial"]').first()).toBeVisible();
});

test('T9/T10 partial charging does not supply a missing T11 duration', async ({ page }) => {
  for (const [id, charge] of [
    ['t9', '4 h'],
    ['t10', '5.5 h'],
  ]) {
    await visit(page, `keenon-robotics-dinerbot-${id}`);
    await expect(spec(page, 'chargingTime')).toHaveText(
      `${charge} from 15% to 100%, robot powered on`,
    );
  }
  await visit(page, 'keenon-robotics-dinerbot-t11');
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(spec(page, 'payload')).toHaveText(
    '20 kg total; middle level 5 kg; bottom level 10 kg',
  );
  await expect(highlights(page)).toContainText('no numeric charging duration');
});

test('industrial S100/S300 retain unit and height conflicts with different runtime loads', async ({
  page,
}) => {
  await visit(page, 'keenon-robotics-s100');
  await expect(spec(page, 'maxRuntime')).toContainText('load below 100 kg');
  await expect(page.locator('[data-spec-source="terrain"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'chargingTime')).toContainText('0% to 100%');
  await visit(page, 'keenon-robotics-s300');
  await expect(spec(page, 'maxRuntime')).toContainText('6 h at full load');
  await expect(spec(page, 'size')).toContainText('configuration basis unresolved');
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(highlights(page)).toContainText('without Wi-Fi/5G');
});

test('W3 adjustable compartments and installation remain qualified without waterproof assertion', async ({
  page,
}) => {
  await visit(page, 'keenon-robotics-butlerbot-w3');
  await expect(spec(page, 'payload')).toHaveText('20 kg total');
  await expect(spec(page, 'chargingTime')).toContainText('6.5 h');
  await expect(spec(page, 'ipRating')).toHaveCount(0);
  await expect(highlights(page)).toContainText('four compartments are a supported layout');
  await expect(highlights(page)).toContainText(
    'does not substantiate the old waterproof description',
  );
});

test('XMAN wheeled and bipedal poster facts are sourced without numeric price offers', async ({
  page,
}) => {
  for (const [id, weight, dof, type] of [
    ['r1', '110 kg', '36', 'wheeled'],
    ['f1', '68 kg', '43', 'bipedal'],
  ]) {
    await visit(page, `keenon-xman-${id}`);
    await expect(spec(page, 'weight')).toHaveText(weight);
    await expect(spec(page, 'dof')).toHaveText(dof);
    await expect(highlights(page)).toContainText(type);
    await expect(highlights(page)).toContainText('OCR');
    await expect(spec(page, 'payload')).toHaveCount(0);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const product = schemas.map(JSON.parse).find((x) => x['@type'] === 'Product');
    expect(product.offers).toBeUndefined();
  }
});

test('brand keeps three navigation leads distinct from verified model cards', async ({ page }) => {
  await page.goto('/brands/keenon-robotics/');
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  for (const name of ['XMAN-L1', 'X101', 'M102']) {
    await expect(focus).toContainText(name);
    await expect(page.locator('.robot-card h3').filter({ hasText: name })).toHaveCount(0);
  }
  await expect(page.locator('.robot-card a[href="/robot/keenon-xman-f1/"]').first()).toBeVisible();
  await expect(focus).toContainText('404');
});

test('new C55 maintenance claim is searchable with a source-section result link', async ({
  page,
}) => {
  await page.goto('/?category=cleaning&q=three-second%20tank%20flip');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toContainText('building-connected workstation');
  await cards.locator('a[href="/robot/keenon-robotics-kleenbot-c55/#product-highlights"]').click();
  await expect(page.locator('h1')).toHaveText('Kleenbot C55');
});

test('German comparison shows qualified water tanks and omits an undocumented dry tank', async ({
  page,
}) => {
  const table = await compare(page, cleaners, 'de');
  const row = table
    .getByRole('row')
    .filter({ has: page.getByRole('cell', { name: 'Wassertankvolumen', exact: true }) });
  await expect(row).toContainText('7 L clean water; 5 L waste water');
  await expect(row).toContainText('16 L clean water; 11 L waste water');
  await expect(row).toContainText('headline says 110 L');
  await expect(row.locator('[data-review-status="conflicting"]')).toContainText('107 L combined');
  await expect(table).toContainText('Arbeitsbreite');
  await expect(table).toContainText('Flächenleistung');
});

for (const [label, route] of [
  ['C55', '/robot/keenon-robotics-kleenbot-c55/'],
  ['XMAN-F1', '/robot/keenon-xman-f1/'],
  ['company focus', '/brands/keenon-robotics/'],
]) {
  for (const mode of ['light', 'dark']) {
    test(`${label} remains accessible without overflow in ${mode} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await page.goto(route);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        await page.evaluate(() => innerWidth),
      );
    });
  }
}
for (const mode of ['light', 'dark']) {
  test(`water-capacity comparison remains accessible in ${mode} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: mode });
    await compare(page, cleaners);
    const result = await new AxeBuilder({ page })
      .include('#compareModal')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  });
}
