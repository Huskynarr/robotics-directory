import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const visit = (page, suffix) => page.goto(`/robot/elephant-robotics-${suffix}/`);
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify(
        ['myagv', 'myagv-pi-2023', 'myagv-jn-2023', 'mercury-x1'].map(
          (id) => `elephant-robotics-${id}`,
        ),
      ),
    );
  });
  await page.goto('/brands/elephant-robotics/?lang=de');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('company focus keeps unconfirmed AI and rate-limited search leads distinct from verified products', async ({
  page,
}) => {
  await page.goto('/brands/elephant-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(13);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('separately named LLM edition');
  await expect(focus).toContainText('HTTP 429');
  await expect(focus).toContainText('do not become newly verified model cards');
});

test('original myAGV exposes conflicts and separates work, standby and charge duration', async ({
  page,
}) => {
  await visit(page, 'myagv');
  await expect(spec(page, 'weight')).toContainText('3.6 kg specifications vs 3.02 kg overview');
  await expect(spec(page, 'size')).toContainText(
    '311 x 236 x 130 mm specifications vs 300 x 205 x 145 mm',
  );
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'batteryLife')).toContainText('standby 1.5-2 h is separate');
  await expect(spec(page, 'chargingTime')).toHaveText('3.5-4 h');
  await expect(spec(page, 'payload')).toHaveCount(0);
});

test('2023 controllers and camera columns retain navigation mode instead of standby endurance', async ({
  page,
}) => {
  for (const id of ['myagv-pi-2023', 'myagv-jn-2023']) {
    await visit(page, id);
    await expect(spec(page, 'weight')).toHaveText('4.16 kg');
    await expect(spec(page, 'batteryLife')).toHaveText(
      '181 min navigation; 328 min standby is separate',
    );
    await expect(spec(page, 'speed')).toHaveCount(0);
    await expect(spec(page, 'chargingTime')).toHaveCount(0);
    await expect(highlights(page)).toContainText(
      id.includes('-pi-')
        ? '5-megapixel camera with 65-degree'
        : '8-megapixel camera with 77-degree',
    );
  }
});

test('myCobot reach and controller distinctions do not turn lifespan into runtime', async ({
  page,
}) => {
  await visit(page, 'mycobot-280-m5');
  await expect(spec(page, 'armReach')).toHaveText('280 mm');
  await expect(highlights(page)).toContainText('500 hours as working lifespan');
  await expect(spec(page, 'handType')).toHaveCount(0);
  await visit(page, 'mycobot-320-pi');
  await expect(spec(page, 'armReach')).toHaveText('350 mm');
  await expect(highlights(page)).toContainText('Raspberry Pi 4B');
  await expect(highlights(page)).toContainText('Terminology and conditions differ');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(spec(page, 'speed')).toHaveCount(0);
});

test('Mercury arm, torso and mobile specifications stay separate', async ({ page }) => {
  await visit(page, 'mercury-b1');
  await expect(spec(page, 'dof')).toHaveText('17');
  await expect(spec(page, 'payload')).toContainText('per-arm/combined scope not stated');
  await expect(spec(page, 'armReach')).toHaveText('450 mm');
  await visit(page, 'mercury-x1');
  await expect(spec(page, 'dof')).toHaveText('19');
  await expect(spec(page, 'armReach')).toHaveCount(0);
  await expect(spec(page, 'batteryLife')).toContainText('workload not stated');
  await expect(highlights(page)).toContainText('does not certify a coherent bill of materials');
});

test('MarsCat manual supplies pose and mode-specific values with a separate charge duration', async ({
  page,
}) => {
  await visit(page, 'marscat');
  await expect(spec(page, 'weight')).toHaveText('2.9 kg (MARS-1001 manual)');
  await expect(spec(page, 'batteryLife')).toHaveText('2 h active motion; 3-4 h regular motion');
  await expect(spec(page, 'chargingTime')).toHaveText('3 h (MARS-1001 manual)');
  await expect(spec(page, 'ageRange')).toHaveText('12+');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('age 12+');
});

test('MetaCat removes unsupported ten-hour runtime and retains regional shop qualification', async ({
  page,
}) => {
  await visit(page, 'metacat');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(highlights(page)).toContainText('not a globally applicable purchase offer');
  await expect(highlights(page)).toContainText('USD 159');
  await expect(highlights(page)).toContainText('do not establish legged locomotion');
});

test('structured properties retain exact reach and avoid universal price offers', async ({
  page,
}) => {
  await visit(page, 'mercury-b1');
  const product = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .map(JSON.parse)
    .find((x) => x['@type'] === 'Product');
  expect(product.offers).toBeUndefined();
  expect(product.additionalProperty).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: 'Arm reach', value: '450 mm' }),
      expect.objectContaining({
        name: 'Payload',
        value: '1 kg listed maximum; per-arm/combined scope not stated',
      }),
    ]),
  );
});

test('qualified lifespan statement is searchable without converting it to operating endurance', async ({
  page,
}) => {
  await page.goto('/?q=2000%20hours%20as%20working%20lifespan');
  await expect(page.locator('#productSearchStatus')).toHaveAttribute('data-search-state', 'ready');
  const card = page.locator(
    '#robotsGrid .robot-card[data-robot-id="elephant-robotics-mycobot-320-m5"]',
  );
  await expect(card).toBeVisible();
  await expect(card.locator('[data-search-highlight]')).toContainText(
    'It is not battery endurance',
  );
  await expect(card.locator('a')).toHaveAttribute(
    'href',
    '/robot/elephant-robotics-mycobot-320-m5/#product-highlights',
  );
});

test('German comparison keeps physical conflicts and operating-mode qualifications alongside values', async ({
  page,
}) => {
  const table = await compare(page);
  for (const key of ['weight', 'size'])
    await expect(
      table.locator(`[data-comparison-review="${key}"][data-review-status="conflicting"]`),
    ).toHaveCount(1);
  await expect(table).toContainText('181 min navigation; 328 min standby is separate');
  await expect(table).toContainText('Up to 8 h; workload not stated');
  await expect(table).toContainText('3.5-4 h');
  await expect(table).toContainText('No revision mapping reviewed');
});

for (const theme of ['light', 'dark']) {
  for (const mode of ['detail', 'comparison', 'brand']) {
    test(`Elephant ${mode} accessibility ${theme}`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('theme', theme), theme);
      if (mode === 'comparison') await compare(page);
      else if (mode === 'brand') await page.goto('/brands/elephant-robotics/');
      else await visit(page, 'myagv');
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(result.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        await page.evaluate(() => window.innerWidth),
      );
    });
  }
}
