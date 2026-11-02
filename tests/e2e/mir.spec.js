import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('MiR base carrying limits remain separate from towing and pallet-module capacity', async ({
  page,
}) => {
  await page.goto('/robot/mobile-industrial-robots-mir250/');
  await expect(page.locator('[data-spec-key="payload"]')).toContainText(
    '250 kg (platform carrying capacity)',
  );
  const highlights = page.locator('section[aria-labelledby="product-highlights"]');
  await expect(highlights).toContainText('500 kg towing');
  await expect(highlights).toContainText('default doorway specification is 1500 mm');
  await page.goto('/robot/mobile-industrial-robots-mir1350/');
  await expect(page.locator('[data-spec-key="payload"]')).toContainText('1350 kg');
  await expect(highlights).toContainText('EU Pallet Lift 1350 carries up to 1250 kg');
});

test('MiR loaded runtime and opportunity charging use different fields', async ({ page }) => {
  await page.goto('/robot/mobile-industrial-robots-mir600/');
  await expect(page.locator('[data-spec-key="maxRuntime"]')).toContainText(
    '8 h 30 min at maximum payload / up to 11 h with no payload',
  );
  await expect(page.locator('[data-spec-key="batteryLife"]')).toHaveCount(0);
  await expect(page.locator('[data-spec-key="chargingTime"]')).toHaveCount(0);
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    'not the duration of a complete battery charge',
  );
});

test('MiR Pallet Jack conflicting runtime, mass and dimensions remain explicit', async ({
  page,
}) => {
  await page.goto('/robot/mobile-industrial-robots-mir1200-pallet-jack/');
  await expect(page.locator('[data-spec-key="maxRuntime"]')).toContainText(
    'Unconfirmed: 8 h on overview / up to 10 h',
  );
  for (const field of ['maxRuntime', 'weight', 'size']) {
    await expect(page.locator(`[data-spec-source="${field}"]`)).toHaveAttribute(
      'data-review-status',
      'conflicting',
    );
  }
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    '1140 mm',
  );
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    '1120 mm',
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
});

test('historical MiR models are searchable and charging does not imply battery endurance', async ({
  page,
}) => {
  await page.goto('/?category=commercial&q=MiR1000');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(1);
  await page
    .locator('#robotsGrid a[href="/robot/mobile-industrial-robots-mir1000/"]')
    .first()
    .click();
  await expect(page.locator('[data-spec-key="chargingTime"]')).toContainText('10–90%: 1 h');
  await expect(page.locator('[data-spec-key="maxRuntime"]')).toHaveCount(0);
  await expect(page.locator('main')).toContainText(
    'current new-unit availability remains unverified',
  );
  await page.goto('/robot/mobile-industrial-robots-mir200/');
  await expect(page.locator('[data-spec-key="payload"]')).toContainText('200 kg');
  await expect(page.locator('section[aria-labelledby="product-highlights"]')).toContainText(
    '500 kg towing',
  );
});

test('MiR software, components and Enabled partner labels do not create duplicate robots', async ({
  page,
}) => {
  await page.goto('/brands/mobile-industrial-robots-mir/');
  await expect(page.locator('main .robot-card')).toHaveCount(8);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'MiR Insights',
  );
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'partner-provided integrations',
  );
  await page.goto('/brands/enabled-robotics/');
  await expect(page.locator('main .robot-card')).toHaveCount(12);
  await expect(page.locator('section[aria-labelledby="company-focus"]')).toContainText(
    'no duplicate model cards',
  );
  await expect(page.locator('main a[href="/robot/enabled-robotics-mc250/"]')).toHaveCount(0);
});

for (const url of [
  '/brands/mobile-industrial-robots-mir/',
  '/brands/enabled-robotics/',
  '/robot/mobile-industrial-robots-mir1200-pallet-jack/',
]) {
  for (const mode of ['light', 'dark']) {
    test(`MiR ${url} remains accessible in ${mode} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await page.goto(url);
      const result = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
    });
  }
}
