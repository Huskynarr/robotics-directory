import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('Universal Robots controller offers are searchable without duplicate unverified suffix cards', async ({
  page,
}) => {
  await page.goto('/brands/universal-robots/');
  await expect(page.locator('main .robot-card')).toHaveCount(15);
  const focus = page.locator('section[aria-labelledby="company-focus"]');
  await expect(focus).toContainText('g-Series');
  await expect(focus).toContainText('do not establish their controller or hardware difference');
  await expect(page.locator('main a[href="/robot/universal-robots-ur20-1750/"]')).toHaveCount(0);
  await page.goto('/?category=robotic-arm&q=UR3e');
  await expect(page.locator('#robotsGrid .robot-card')).toHaveCount(2);
  await expect(
    page.locator('#robotsGrid a[href="/robot/universal-robots-ur3e-cb5/"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('#robotsGrid a[href="/robot/universal-robots-ur3e-540/"]').first(),
  ).toBeVisible();
});

test('Universal Robots conflicting reach stays visible with both dated sources', async ({
  page,
}) => {
  await page.goto('/robot/universal-robots-ur7e-920/');
  await expect(page.locator('[data-spec-key="size"]')).toContainText(
    '920 mm page / 850 mm linked datasheet',
  );
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'data-review-status',
    'conflicting',
  );
  await expect(page.locator('[data-spec-source="size"]')).toHaveAttribute(
    'title',
    /exact mechanical reach is unresolved/,
  );
  const highlights = page.locator('section[aria-labelledby="product-highlights"]');
  await expect(highlights).toContainText('linked datasheet does not identify a reach increase');
  await expect(highlights.locator('a[href*="/products/ur7e-920/"]')).toHaveCount(1);
  await expect(highlights.locator('a[href$="UR7e_techsheet_en.pdf"]')).toHaveCount(1);
});

test('Universal Robots payload and mass boundaries remain explicit in model details', async ({
  page,
}) => {
  await page.goto('/robot/universal-robots-ur17g-1300/');
  await expect(page.locator('[data-spec-key="payload"]')).toContainText(
    '15 kg nominal; up to 17.5 kg extended',
  );
  await expect(page.locator('[data-spec-key="weight"]')).toContainText('43.4 kg including cable');
  await expect(page.locator('[data-spec-source="weight"]')).toHaveAttribute(
    'href',
    /UR17g-1300_techsheet_en\.pdf$/,
  );
  await expect(page.locator('[data-spec-key="speed"]')).toContainText('5 m/s TCP');
  const highlights = page.locator('section[aria-labelledby="product-highlights"]');
  await expect(highlights).toContainText('SP7 Smart Panel is optional');
  await expect(highlights).toContainText('risk assessment');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
    await page.evaluate(() => window.innerWidth),
  );
});

for (const url of ['/brands/universal-robots/', '/robot/universal-robots-ur3e-540/']) {
  for (const mode of ['light', 'dark']) {
    test(`Universal Robots ${url} remains accessible in ${mode} mode`, async ({ page }) => {
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
