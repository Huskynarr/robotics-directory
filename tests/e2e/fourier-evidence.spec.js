import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const brand = '/brands/fourier/';
const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const badge = (page, key) => page.locator(`[data-spec-source="${key}"]`);
const highlights = (page) => page.locator('section[aria-labelledby="product-highlights"]');
const route = (id) => `/robot/${id}/`;
async function compare(page) {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'de');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'fourier-grw',
        'fourier-grw-lite',
        'fourier-gr-mini',
        'fourier-intelligence-n1',
      ]),
    );
  });
  await page.goto(`${brand}?lang=de`);
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  return page.locator('#compareTableContainer');
}

test('brand profile exposes eighteen distinct models and configurations with dated company scope', async ({
  page,
}) => {
  await page.goto(brand);
  await expect(page.locator('main .robot-card')).toHaveCount(18);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'formerly Fourier Intelligence',
  );
  for (const id of [
    'fourier-grw-lite',
    'fourier-intelligence-gr-nano',
    'fourier-gr-3c-ultra',
    'fourier-intelligence-armmotus-m2-pro',
  ])
    await expect(page.locator(`main .robot-card[data-robot-id="${id}"]`)).toBeVisible();
});

test('GR-1 presents corrected per-hand load, walking endurance and no unverified price offer', async ({
  page,
}) => {
  await page.goto(route('fourier-intelligence-gr-1'));
  await expect(spec(page, 'payload')).toContainText('3 kg per hand');
  await expect(spec(page, 'batteryLife')).toContainText('45 min walking');
  await expect(spec(page, 'chargingTime')).toContainText('315 min');
  await expect(spec(page, 'dof')).toContainText('44/34');
  const schemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(
    JSON.parse,
  );
  expect(schemas.find((entry) => entry['@type'] === 'Product').offers).toBeUndefined();
});

test('GR-2 qualifies optional hand counts and average runtime', async ({ page }) => {
  await page.goto(route('fourier-gr-2'));
  await expect(spec(page, 'dof')).toContainText('optional 12-DoF hands');
  await expect(spec(page, 'handType')).toContainText('Standard 6-DoF');
  await expect(spec(page, 'batteryLife')).toContainText('2 h average');
  await expect(badge(page, 'armReach')).toHaveAttribute('title', /single-arm working radius/);
});

test('GR-3 retains source differences without a false optional-hand conflict', async ({ page }) => {
  await page.goto(route('fourier-intelligence-gr-3'));
  await expect(spec(page, 'dof')).toContainText('43 with basic 6-DoF');
  await expect(badge(page, 'dof')).toHaveAttribute('data-review-status', 'documented');
  await expect(spec(page, 'chargingTime')).toHaveText('≈1.5 h');
  await expect(spec(page, 'terrain')).toContainText('15°');
  for (const key of ['speed', 'armReach'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'armReach')).toContainText('1759 mm in docs / 1795 mm');
});

test('N1 presents differing table and introduction values with separate running and walking modes', async ({
  page,
}) => {
  await page.goto(route('fourier-intelligence-n1'));
  for (const key of ['weight', 'size', 'speed'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  await expect(spec(page, 'speed')).toContainText('Walking 2.7 km/h; running 10.8 km/h');
  await expect(spec(page, 'chargingTime')).toHaveText('≈3.5 h');
  await expect(spec(page, 'handType')).toHaveCount(0);
});

test('GRW keeps combined load, partial recharge and unresolved body data visible', async ({
  page,
}) => {
  await page.goto(route('fourier-grw'));
  await expect(spec(page, 'payload')).toContainText('16 kg combined dual-arm');
  await expect(spec(page, 'payload')).toContainText('8 kg per arm');
  await expect(spec(page, 'chargingTime')).toContainText('0 to 80%');
  for (const key of ['weight', 'size', 'dof'])
    await expect(badge(page, key)).toHaveAttribute('data-review-status', 'conflicting');
  for (const key of ['turningRadius', 'maxLiftHeight'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(highlights(page)).toContainText('880 mm in docs versus 895 mm');
});

test('GRW Lite does not inherit full-size load, joint totals or terrain', async ({ page }) => {
  await page.goto(route('fourier-grw-lite'));
  await expect(spec(page, 'weight')).toHaveText('≈120 kg');
  await expect(spec(page, 'dof')).toContainText('whole-platform total not stated');
  for (const key of ['payload', 'terrain', 'turningRadius'])
    await expect(spec(page, key)).toHaveCount(0);
  await expect(spec(page, 'chargingTime')).toContainText('0 to 80%');
  await expect(highlights(page)).toContainText('Ubuntu 24.04');
});

for (const id of ['fourier-gr-3c', 'fourier-gr-3c-ultra'])
  test(`${id} keeps exact edition joints while omitting unverified mass and release year`, async ({
    page,
  }) => {
    await page.goto(route(id));
    await expect(spec(page, 'dof')).toContainText('43 with basic 6-DoF');
    await expect(spec(page, 'weight')).toHaveCount(0);
    await expect(spec(page, 'releaseDate')).toHaveCount(0);
    await expect(highlights(page).locator('a[href*="/pdf/cn/"]').first()).toBeVisible();
  });

test('GR Mini has its own joint count without inherited N1 speed or recharge', async ({ page }) => {
  await page.goto(route('fourier-gr-mini'));
  await expect(spec(page, 'dof')).toContainText('25');
  await expect(spec(page, 'weight')).toHaveText('≈43 kg');
  for (const key of ['speed', 'chargingTime', 'payload'])
    await expect(spec(page, key)).toHaveCount(0);
});

test('GR Nano exposes desktop form, head joints and customer-provided AI boundary', async ({
  page,
}) => {
  await page.goto(route('fourier-intelligence-gr-nano'));
  await expect(spec(page, 'weight')).toContainText('200 g');
  await expect(spec(page, 'dof')).toHaveText('3 head DoF');
  await expect(spec(page, 'batteryLife')).toHaveCount(0);
  await expect(highlights(page)).toContainText('customer AI platform');
  await expect(highlights(page)).toContainText('not included standalone robot intelligence');
});

test('M2, M2 Pro and the Immersive exoskeleton retain separate named pages without unsupported ratings', async ({
  page,
}) => {
  for (const id of [
    'fourier-intelligence-armmotus-m2',
    'fourier-intelligence-armmotus-m2-pro',
    'fourier-intelligence-exomotus-m4-immersive',
  ]) {
    await page.goto(route(id));
    for (const key of ['weight', 'payload', 'batteryLife', 'dof'])
      await expect(spec(page, key)).toHaveCount(0);
    await expect(highlights(page)).toBeVisible();
  }
});

test('rehabilitation workspace does not become actuator count and Galileo retains module scope', async ({
  page,
}) => {
  await page.goto(route('fourier-intelligence-armmotus-emu'));
  await expect(spec(page, 'dof')).toHaveCount(0);
  await expect(highlights(page)).toContainText('Three-dimensional training workspace');
  await page.goto(route('fourier-intelligence-metamotus-galileo'));
  await expect(spec(page, 'dof')).toContainText(
    'motion platform; complete configured-system total unspecified',
  );
  await expect(highlights(page)).toContainText('optional gait-training integration');
  await expect(spec(page, 'releaseDate')).toContainText('2023');
});

test('feature search finds the documented Lite computing configuration', async ({ page }) => {
  await page.goto('/?mfr=Fourier&q=Jetson%20Thor');
  const cards = page.locator('#robotsGrid .robot-card');
  await expect(cards).toHaveCount(1);
  await expect(cards).toHaveAttribute('data-robot-id', 'fourier-grw-lite');
  await expect(cards).toContainText('Ubuntu 24.04');
});

test('German comparison preserves combined GRW payload and unknown Lite/Mini/N1 loads', async ({
  page,
}) => {
  const table = await compare(page);
  const headings = await table.locator('thead th').allTextContents();
  const column = (model) => headings.findIndex((text) => text.trim() === model);
  const row = table
    .locator('tr')
    .filter({ has: page.locator('[data-comparison-review="payload"]') });
  await expect(row.locator('td').nth(column('GRW'))).toContainText('16 kg combined');
  for (const model of ['GRW Lite', 'GR Mini', 'N1']) {
    expect(column(model)).toBeGreaterThan(0);
    await expect(row.locator('td').nth(column(model))).toHaveText('-');
  }
});

for (const theme of ['light', 'dark'])
  for (const target of [brand, route('fourier-intelligence-gr-nano'), 'comparison'])
    test(`accessible ${theme} ${target}`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
      if (target === 'comparison') await compare(page);
      else await page.goto(target);
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(scan.violations).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    });
