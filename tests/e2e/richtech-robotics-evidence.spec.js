import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, id) => page.goto(`/robot/richtech-robotics-${id}/`);
async function comparison(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(
        ['dex', 'pallet-jack', 'dust-e-s', 'titan'].map((id) => `richtech-robotics-${id}`),
      ),
    );
  });
  await page.goto('/brands/richtech-robotics/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}
test('brand and commercial filters expose eight identities and corrected categories', async ({
  page,
}) => {
  await page.goto('/brands/richtech-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(8);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'announced specifications',
  );
  await page.goto('/?category=commercial&sub=commercial-food-service');
  for (const id of ['adam', 'scorpion'])
    await expect(
      page.locator(`#robotsGrid .robot-card[data-robot-id="richtech-robotics-${id}"]`),
    ).toBeVisible();
  await page.goto('/?category=commercial&sub=commercial-logistics');
  await expect(
    page.locator('#robotsGrid .robot-card[data-robot-id="richtech-robotics-titan"]'),
  ).toBeVisible();
});
test('Dex announces platform-scoped capacities and preserves launch qualification', async ({
  page,
}) => {
  await visit(page, 'dex');
  await expect(spec(page, 'payload')).toHaveText('11 lb per arm');
  await expect(spec(page, 'batteryLife')).toContainText('4 h mobile platform');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'data-review-status',
    'roadmap',
  );
  await expect(spec(page, 'dof')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('as launch approaches');
});
test('Matradee retains total load and manufacturer body axis order', async ({ page }) => {
  await visit(page, 'matradee-plus');
  await expect(spec(page, 'payload')).toHaveText('88 lb total across four trays');
  await expect(spec(page, 'size')).toHaveText('22.8 in W x 19.2 in L x 50.7 in H');
  await expect(spec(page, 'chargingTime')).toHaveText('4 h');
});
test('Pallet Jack separates loaded slopes, lifted height and unspecified accuracy scope', async ({
  page,
}) => {
  await visit(page, 'pallet-jack');
  await expect(spec(page, 'maxLiftHeight')).toContainText('8.26 in lifted height');
  await expect(spec(page, 'terrain')).toHaveText('Climb: 5° full load; 10° empty');
  for (const key of ['liftStroke', 'navigationAccuracy', 'dockingAccuracy'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('±0.19 in/±1°');
});
test('cleaning models retain width, tank-role and percent-degree distinctions', async ({
  page,
}) => {
  await visit(page, 'dust-e-mx');
  await expect(spec(page, 'workingWidth')).toHaveText('20 in cleaning path; 30 in suction rake');
  await expect(spec(page, 'waterTankCapacity')).toContainText('gallon standard unspecified');
  await expect(spec(page, 'terrain')).toHaveText('Gradeability: 6°');
  await visit(page, 'dust-e-s');
  await expect(spec(page, 'workingWidth')).toHaveText(
    '13.7 in double-roller brush; 15.7 in squeegee',
  );
  await expect(spec(page, 'waterTankCapacity')).toHaveText('10 L / 15 L; tank roles unspecified');
  await expect(spec(page, 'terrain')).toHaveText('Gradeability: 7%');
});
test('ADAM retains malformed size evidence and its commercial page at the existing URL', async ({
  page,
}) => {
  await visit(page, 'adam');
  await expect(spec(page, 'size')).toHaveText('19.6 x 32.6 in; third dimension unspecified');
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'dof')).toContainText('per-arm/total scope unspecified');
  await expect(highlights(page)).toContainText('up to 50 drinks/hour');
  await expect(
    highlights(page).locator('a[href="https://richtechrobotics.com/robot-rentals"]'),
  ).toBeVisible();
});
test('Scorpion keeps average drink production and ingredient accuracy out of motion speed', async ({
  page,
}) => {
  await visit(page, 'scorpion');
  await expect(spec(page, 'dof')).toHaveText('6');
  await expect(spec(page, 'payload')).toHaveText('11 lb');
  await expect(spec(page, 'speed')).toHaveCount(0);
  await expect(highlights(page)).toContainText('±0.5% claim concerns ingredient measurement');
});
test('Titan exposes conflicting payload and component ingress scope', async ({ page }) => {
  await visit(page, 'titan');
  await expect(spec(page, 'payload')).toContainText('330–1300 lb table, variant unspecified');
  await expect(page.locator('[data-spec-source="payload"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'ipRating')).toHaveText('Whole body IP43; battery IP66');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
});
test('structured cleaning properties retain exact units without numeric purchase offers', async ({
  page,
}) => {
  await visit(page, 'dust-e-s');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        name: 'Working width',
        value: '13.7 in double-roller brush; 15.7 in squeegee',
      }),
    ]),
  );
});
test('German comparison delivers roadmap, payload conflict and exact cleaning units', async ({
  page,
}) => {
  const table = await comparison(page);
  const payload = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="payload"]') });
  await expect(payload).toContainText('330–1300 lb table, variant unspecified');
  await expect(payload.locator('[data-review-status="roadmap"]')).toHaveCount(1);
  await expect(payload.locator('[data-review-status="conflicting"]')).toHaveCount(1);
  await expect(
    table.locator('tr').filter({ has: page.locator('[data-comparison-review="workingWidth"]') }),
  ).toContainText('13,7 in double-roller brush; 15,7 in squeegee');
});
for (const theme of ['light', 'dark']) {
  for (const route of [
    '/robot/richtech-robotics-adam/',
    '/robot/richtech-robotics-dust-e-s/',
    '/brands/richtech-robotics/',
  ]) {
    test(`accessible ${theme} ${route}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      await page.goto(route);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });
  }
}
