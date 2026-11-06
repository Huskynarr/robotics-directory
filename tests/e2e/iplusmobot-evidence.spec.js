import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, suffix) => page.goto(`/robot/iplusmobot-${suffix}/`);
const ids = ['emma-400k', 'fola-dn1416', 'nera-a12-uf', 'emma-t-with-emma-400l'].map(
  (name) => `iplusmobot-${name}`,
);
async function compare(page) {
  await page.addInitScript((ids) => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem('compareRobots', JSON.stringify(ids));
  }, ids);
  await page.goto('/brands/iplusmobot/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand presents named robot configurations while keeping components/software separate', async ({
  page,
}) => {
  await page.goto('/brands/iplusmobot/');
  await expect(page.locator('main .robot-card')).toHaveCount(33);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('NERA-C is a controller component');
  await expect(focus).toContainText('CLOUDIA, OWL, iMCS and CARLY');
  await expect(page.locator('.robot-card h3').filter({ hasText: /^NERA-C$/ })).toHaveCount(0);
  await expect(page.locator('.robot-card h3').filter({ hasText: /^SMT\/PCBA$/ })).toHaveCount(0);
});

test('EMMA keeps variant lift travel, QR-conditioned docking and runtime bounds', async ({
  page,
}) => {
  await visit(page, 'emma-400l');
  await expect(spec(page, 'liftStroke')).toHaveText('75 mm');
  await expect(spec(page, 'navigationAccuracy')).toContainText('±30 mm');
  await expect(spec(page, 'dockingAccuracy')).toContainText('with QR-code condition');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(spec(page, 'chargingTime')).toContainText('At most 1.5 h');
  await visit(page, 'emma-2000l');
  await expect(spec(page, 'payload')).toHaveText('2000 kg');
  await expect(spec(page, 'speed')).toContainText('full-load speed not documented');
});

test('brochure FOLA columns retain different load centres and lift envelopes', async ({ page }) => {
  for (const [suffix, mass, payload, height] of [
    ['bn1501t', '535', '1500', '180'],
    ['bn3001', '600', '3000', '205'],
    ['pn1530', '2700', '1500', '3000'],
  ]) {
    await visit(page, `fola-${suffix}`);
    await expect(spec(page, 'weight')).toContainText(`${mass} kg`);
    await expect(spec(page, 'payload')).toContainText(`${payload} kg`);
    await expect(spec(page, 'maxLiftHeight')).toContainText(`${height} mm maximum fork height`);
    await expect(spec(page, 'liftStroke')).toHaveCount(0);
  }
});

test('DN/QN fork travel and source disagreements remain qualified', async ({ page }) => {
  await visit(page, 'fola-dn1416');
  await expect(spec(page, 'maxLiftHeight')).toContainText(
    '1600 mm maximum fork height; 90 mm minimum',
  );
  await expect(page.locator('[data-spec-source="liftStroke"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'terrain')).toContainText('full-load slope 3%');
  await visit(page, 'fola-qn1416');
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute('title', /12034 mm/);
  await expect(spec(page, 'terrain')).toContainText('2320 mm web / 2410 mm');
});

test('BN2001 keeps metric/imperial mass disagreement and height versus travel', async ({
  page,
}) => {
  await visit(page, 'fola-bn2001');
  await expect(spec(page, 'weight')).toContainText('585 kg');
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute('title', /1829 lb/);
  await expect(spec(page, 'liftStroke')).toContainText('travel unresolved');
});

test('SN600 keeps all conflicting source values without replacing its 600 kg rating', async ({
  page,
}) => {
  await visit(page, 'fola-sn600');
  await expect(spec(page, 'payload')).toHaveText('600 kg');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute('title', /1400 kg/);
  await expect(spec(page, 'batteryLife')).toContainText('headline says 6 h');
  await expect(spec(page, 'speed')).toContainText('detailed brochure: 1.5 / 1.2');
  await expect(spec(page, 'liftStroke')).toHaveText('60 mm');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
});

test('OMNI compares navigation and docking rather than using the same accuracy claim', async ({
  page,
}) => {
  await visit(page, 'omni-3-5t');
  await expect(spec(page, 'navigationAccuracy')).toContainText('±10 mm');
  await expect(spec(page, 'dockingAccuracy')).toContainText('±2 mm');
  await expect(spec(page, 'speed')).toContainText('0.5 m/s full load');
  await expect(spec(page, 'liftStroke')).toHaveText('60 mm');
  await expect(spec(page, 'maxLiftHeight')).toHaveCount(0);
});

test('Luna 30T omits undocumented values while older table discrepancies are visible', async ({
  page,
}) => {
  await visit(page, 'luna-30t');
  await expect(spec(page, 'payload')).toHaveText('30000 kg');
  for (const key of ['size', 'speed', 'chargingTime', 'weight', 'ipRating'])
    await expect(spec(page, key)).toHaveCount(0);
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(schemas.map(JSON.parse).find((x) => x['@type'] === 'Product').offers).toBeUndefined();
  await visit(page, 'luna-5t');
  await expect(page.locator('[data-spec-source="dockingAccuracy"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute('title', /6270 mm/);
});

test('NERA arm payload and reach do not imply platform cargo or a common drive', async ({
  page,
}) => {
  await visit(page, 'nera-a12-jm');
  await expect(spec(page, 'armReach')).toHaveText('1327 mm arm range');
  await expect(spec(page, 'driveMode')).toHaveText('Differential drive');
  await expect(spec(page, 'payload')).toContainText('mobile-platform cargo limit not documented');
  await expect(spec(page, 'dof')).toHaveCount(0);
  await visit(page, 'nera-a12-uf');
  await expect(spec(page, 'driveMode')).toContainText('omnidirectional');
  await expect(highlights(page)).toContainText('exact column lists ±1 mm execution precision');
});

test('LDT exact model does not inherit runtime from adjacent application blocks', async ({
  page,
}) => {
  await visit(page, 'ldt1500-omni');
  await expect(spec(page, 'size')).toContainText('non-lifting height, customizable');
  await expect(spec(page, 'liftStroke')).toHaveText('280 mm');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'chargingTime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('neighboring SMT/PCBA, FPD or PV');
});

test('autonomous NERA chassis is an integration platform with qualified mass', async ({ page }) => {
  await visit(page, 'nera-p200-ds3');
  await expect(spec(page, 'weight')).toContainText('optional counterweight');
  await expect(spec(page, 'payload')).toHaveText('200 kg chassis load capacity');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'armReach')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not a delivered robot arm');
});

test('EMMA T 400L drawing retains 300 kg rather than generic 800 kg family capacity', async ({
  page,
}) => {
  await visit(page, 'emma-t-with-emma-400l');
  await expect(spec(page, 'payload')).toContainText('300 kg in EMMA-T / EMMA 400L drawing');
  await expect(spec(page, 'size')).toHaveCount(0);
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not an 800 kg tug');
});

test('highlight-only precision qualification remains searchable with source links', async ({
  page,
}) => {
  await page.goto('/?category=commercial&q=exact%20column%20lists');
  const cards = page.locator('#robotsGrid .robot-card');
  // Three iplusmobot NERA rows plus six Unitree -D/R1 rows whose highlights use the same wording.
  await expect(cards).toHaveCount(9);
  const link = cards.locator('a[href="/robot/iplusmobot-nera-a12-uf/#product-highlights"]');
  await expect(link).toBeVisible();
  await link.click();
  await expect(page.locator('h1')).toHaveText('NERA-A12-UF');
});

test('German comparison shows all six new measurements and retains conflict notes', async ({
  page,
}) => {
  const table = await compare(page);
  for (const label of [
    'Navigationsgenauigkeit',
    'Andockgenauigkeit',
    'Antriebsart',
    'Hubweg',
    'Maximale Gabelhöhe',
    'Armreichweite',
  ])
    await expect(table).toContainText(label);
  await expect(table).toContainText('with QR-code condition');
  await expect(table).toContainText('1300 mm arm range');
  await expect(table.locator('[data-review-status="conflicting"]')).not.toHaveCount(0);
});

for (const [label, route] of [
  ['FOLA DN1416', '/robot/iplusmobot-fola-dn1416/'],
  ['Luna 30T', '/robot/iplusmobot-luna-30t/'],
  ['company', '/brands/iplusmobot/'],
]) {
  for (const mode of ['light', 'dark']) {
    test(`${label} remains accessible without overflow in ${mode}`, async ({ page }) => {
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
  test(`German accuracy/lift comparison remains accessible in ${mode}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: mode });
    await compare(page);
    const result = await new AxeBuilder({ page })
      .include('#compareModal')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  });
}
