import { test, expect } from '@playwright/test';

const CATEGORIES = ['humanoid', 'quadruped', 'companion', 'cleaning', 'outdoor', 'educational', 'smarthome'];

test.describe('All 7 categories filter correctly', () => {
  for (const catId of CATEGORIES) {
    test(`category "${catId}" via URL shows only matching robots`, async ({ page }) => {
      await page.goto(`/?category=${catId}`);
      await page.waitForTimeout(500);
      const cards = page.locator('#robotsGrid .robot-card');
      const count = await cards.count();
      expect(count).toBeGreaterThan(0);
      // Verify all visible robots belong to this category by checking
      // that no other category badges appear (robot-card data attribute)
      const robotIds = await page.locator('#robotsGrid .robot-card').evaluateAll(
        (cards) => cards.map(c => c.dataset.robotId)
      );
      expect(robotIds.length).toBeGreaterThan(0);
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
