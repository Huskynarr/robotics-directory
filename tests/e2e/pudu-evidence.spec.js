import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const spec = (page, key) => page.locator(`[data-spec-key="${key}"]`);
const visit = (page, id) => page.goto(`/robot/pudu-robotics-${id}/`);

test('Pudu brand contains manufacturer configurations and the qualified company focus', async ({
  page,
}) => {
  await page.goto('/brands/pudu-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(40);
  for (const id of [
    'pudu-t150-lifting',
    'pudu-t300-standard',
    'pudu-t600-upright',
    'pudu-mp2000-narrow-fork',
    'pudubot-2-pdfd12',
    'pudubot-2-pdfd22',
  ]) {
    await expect(
      page.locator(`main .robot-card a[href="/robot/pudu-robotics-${id}/"]`),
    ).toHaveCount(1);
  }
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'Generic family listings do not select exact hardware',
  );
});

test('T150 and T300 variants separate mass, lifting, load-dependent endurance and partial charging', async ({
  page,
}) => {
  await visit(page, 'pudu-t150');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(page.locator('main')).toContainText('Commercial');
  await visit(page, 'pudu-t150-standard');
  await expect(spec(page, 'weight')).toHaveText('65 kg');
  await visit(page, 'pudu-t150-lifting');
  await expect(spec(page, 'weight')).toHaveText('81 kg');
  await expect(spec(page, 'chargingTime')).toContainText('0%-90%');
  await visit(page, 'pudu-t300-lifting');
  await expect(spec(page, 'batteryLife')).toContainText('12 h no load; 8 h full load');
  await expect(spec(page, 'terrain')).toContainText('determined by load size');
});

test('T600 Upright and Underride retain separate dimensions and excluded features', async ({
  page,
}) => {
  await visit(page, 'pudu-t600');
  await expect(spec(page, 'size')).toHaveCount(0);
  await visit(page, 'pudu-t600-upright');
  await expect(spec(page, 'weight')).toHaveText('112 kg');
  await expect(spec(page, 'size')).toContainText('1350 mm');
  await visit(page, 'pudu-t600-underride');
  await expect(spec(page, 'weight')).toHaveText('94 kg');
  await expect(spec(page, 'size')).toContainText('255 mm');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'power-assist switch are not supported',
  );
});

test('MP2000 fork configurations preserve voltage and load qualifications', async ({ page }) => {
  for (const [id, width] of [
    ['pudu-mp2000-standard', '620 mm'],
    ['pudu-mp2000-narrow-fork', '550 mm'],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'chargingTime')).toContainText('3.2 h at 100-120 Vac');
    await expect(spec(page, 'batteryLife')).toContainText('6 h maximum load');
    await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
      width,
    );
    await expect(spec(page, 'weight')).toHaveCount(0);
  }
});

test('BellaBot tray load, Pro roadmap and unresolved source runtime remain visible', async ({
  page,
}) => {
  await visit(page, 'bellabot');
  await expect(spec(page, 'payload')).toContainText('40 kg total maximum; 10 kg per tray');
  await expect(page.locator('[data-spec-source="batteryLife"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await visit(page, 'bellabot-pro');
  await expect(spec(page, 'batteryLife')).toContainText('11 h with no load');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'under development',
  );
  const schema = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(
    schema.map((text) => JSON.parse(text)).find((item) => item['@type'] === 'Product').offers,
  ).toBeUndefined();
});

test('PuduBot screen models do not inherit unresolved marketing charging figures', async ({
  page,
}) => {
  await visit(page, 'pudubot-2');
  await expect(page.locator('[data-spec-source="chargingTime"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  for (const [id, mass] of [
    ['pudubot-2-pdfd12', '37 kg'],
    ['pudubot-2-pdfd22', '39 kg'],
  ]) {
    await visit(page, id);
    await expect(spec(page, 'weight')).toHaveText(mass);
    await expect(spec(page, 'chargingTime')).toHaveText('About 3 h (manual)');
    await expect(spec(page, 'payload')).toContainText('13 kg maximum per tray');
  }
});

test('cleaner modes, accessories and manipulation load keep their evidence boundaries', async ({
  page,
}) => {
  await visit(page, 'pudu-cc1');
  await expect(spec(page, 'weight')).toHaveText('75 kg');
  await expect(spec(page, 'maxRuntime')).toHaveCount(0);
  await expect(page.locator('[data-spec-source="batteryLife"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await visit(page, 'pudu-mt1');
  await expect(spec(page, 'weight')).toHaveText('65 kg');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    '57.8 kg station weight is not robot mass',
  );
  await visit(page, 'flashbot-arm');
  await expect(spec(page, 'weight')).toHaveCount(0);
  await expect(spec(page, 'payload')).toContainText('not an arm payload rating');
  await expect(spec(page, 'dof')).toContainText('6 active + 5 passive');
});

test('corrected commercial category and specification terms are searchable', async ({ page }) => {
  await page.goto('/?category=commercial&q=Pudu%20T300%20Lifting');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await expect(page.locator('#robotsGrid .robot-card')).toContainText('PUDU T300 Lifting');
});

test('industrial comparison preserves distinct configurations and partial-charge notes', async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem('lang', 'en');
    localStorage.setItem(
      'compareRobots',
      JSON.stringify([
        'pudu-robotics-pudu-t150-standard',
        'pudu-robotics-pudu-t150-lifting',
        'pudu-robotics-pudu-t600-upright',
        'pudu-robotics-pudu-t600-underride',
      ]),
    );
  });
  await page.goto('/brands/pudu-robotics/?lang=en');
  await page.locator('#compareBarBtn').click();
  await expect(page.locator('[data-comparison-state="ready"]')).toBeVisible();
  const table = page.locator('#compareTableContainer');
  await expect(table).toBeVisible();
  await expect(table).toContainText('65 kg');
  await expect(table).toContainText('81 kg');
  await expect(table).toContainText('112 kg');
  await expect(table).toContainText('94 kg');
  await expect(table).toContainText('0%-90%');
});

for (const id of ['bellabot', 'pudubot-2']) {
  for (const mode of ['light', 'dark']) {
    test(`Pudu ${id} fits narrow screens and remains accessible in ${mode} mode`, async ({
      page,
    }) => {
      await page.emulateMedia({ colorScheme: mode });
      await visit(page, id);
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
