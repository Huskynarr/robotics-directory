import { test, expect } from '@playwright/test';

const CATEGORIES = [
  'humanoid',
  'quadruped',
  'companion',
  'cleaning',
  'outdoor',
  'educational',
  'smarthome',
  'robotic-arm',
  'commercial',
];

test.describe('All 9 categories filter correctly', () => {
  for (const catId of CATEGORIES) {
    test(`category "${catId}" via URL shows only matching robots`, async ({ page }) => {
      await page.goto(`/?category=${catId}`);
      const cards = page.locator('#robotsGrid .robot-card');
      await expect(cards.first()).toBeVisible();
      const categories = await cards.evaluateAll((items) =>
        items.map((item) => item.dataset.category),
      );
      expect(new Set(categories)).toEqual(new Set([catId]));
    });
  }

  test('desktop mega tab View All filters catalog', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    await page.goto('/');
    await page.locator('[data-megatab="cleaning"]').click();
    await expect(page.locator('#megaMenu')).toHaveClass(/open/);
    await page.locator('.mega-view-all[data-category="cleaning"]').click();
    await page.waitForTimeout(300);
    expect(page.url()).toContain('category=cleaning');
    const cards = page.locator('#robotsGrid .robot-card');
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('mobile category pill filters catalog', async ({ page, viewport }) => {
    if (viewport.width >= 768) return;
    await page.goto('/');
    const pill = page.locator('#mobileCategoryPills [data-category="humanoid"]');
    await pill.click();
    await page.waitForTimeout(300);
    const cards = page.locator('#robotsGrid .robot-card');
    expect(await cards.count()).toBeGreaterThan(0);
    expect(await cards.count()).toBeLessThan(200);
  });

  test('URL state restores category filter on load', async ({ page }) => {
    await page.goto('/?category=outdoor');
    await page.waitForTimeout(500);
    const cards = page.locator('#robotsGrid .robot-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(200); // should be filtered, not all
  });
});

for (const [category, subcategory, robotId] of [
  ['outdoor', 'outdoor-exoskeleton', 'hypershell-x-ultra-s'],
  ['educational', 'educational-drones', 'locorobo-locodrone-x'],
  ['commercial', 'commercial-mobility', 'lucid-gravity-robotaxi'],
]) {
  test(`shared subcategory URL finds ${subcategory} and opens its sourced model`, async ({
    page,
  }) => {
    await page.goto(`/?category=${category}&sub=${subcategory}`);
    const cards = page.locator('#robotsGrid .robot-card');
    await expect(cards.first()).toBeVisible();
    expect(
      new Set(await cards.evaluateAll((items) => items.map((item) => item.dataset.category))),
    ).toEqual(new Set([category]));
    const link = page.locator(`#robotsGrid a[href="/robot/${robotId}/"]`).first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page.getByRole('heading', { name: 'Product highlights' })).toBeVisible();
    await expect(page.locator('main')).toContainText('2026-11-01');
  });
}
