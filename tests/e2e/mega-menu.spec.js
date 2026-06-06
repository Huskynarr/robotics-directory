import { test, expect } from '@playwright/test';

test.describe('Mega menu - desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows mega tabs for all 7 categories', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    const tabs = page.locator('[data-megatab]');
    await expect(tabs).toHaveCount(7);
  });

  test('clicking a mega tab opens the panel', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    const tab = page.locator('[data-megatab="humanoid"]');
    await tab.click();
    const menu = page.locator('#megaMenu');
    await expect(menu).toHaveClass(/open/);
    const panel = page.locator('[data-panel="humanoid"]');
    await expect(panel).not.toHaveAttribute('hidden', '');
  });

  test('panel shows subcategory cards with counts', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    await page.locator('[data-megatab="cleaning"]').click();
    await expect(page.locator('#megaMenu')).toHaveClass(/open/);
    const subcats = page.locator('[data-panel="cleaning"] .mega-subcategory');
    const count = await subcats.count();
    expect(count).toBeGreaterThan(0);
    // Each subcategory should have a count
    const counts = page.locator('[data-panel="cleaning"] .mega-subcategory-count');
    const firstCount = await counts.first().textContent();
    expect(parseInt(firstCount)).toBeGreaterThanOrEqual(0);
  });

  test('View All button filters by category', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    await page.locator('[data-megatab="quadruped"]').click();
    await page.locator('.mega-view-all[data-category="quadruped"]').click();
    await page.waitForTimeout(300);
    const badges = await page.locator('#robotsGrid .category-badge').allTextContents();
    for (const badge of badges) {
      expect(badge.toLowerCase()).toContain('quadruped');
    }
  });

  test('Escape closes the mega menu', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    await page.locator('[data-megatab="humanoid"]').click();
    await expect(page.locator('#megaMenu')).toHaveClass(/open/);
    await page.keyboard.press('Escape');
    await expect(page.locator('#megaMenu')).not.toHaveClass(/open/);
  });

  test('switching tabs changes the visible panel', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    await page.locator('[data-megatab="humanoid"]').click();
    await expect(page.locator('[data-panel="humanoid"]')).not.toHaveAttribute('hidden', '');
    await page.locator('[data-megatab="cleaning"]').click();
    await expect(page.locator('[data-panel="cleaning"]')).not.toHaveAttribute('hidden', '');
    await expect(page.locator('[data-panel="humanoid"]')).toHaveAttribute('hidden', '');
  });
});

test.describe('Mega menu - mobile accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('mobile drawer has accordion categories', async ({ page, viewport }) => {
    if (viewport.width >= 768) return;
    await page.locator('#mobileMenuToggle').click();
    await page.waitForTimeout(200);
    const accordions = page.locator('.mobile-accordion');
    const count = await accordions.count();
    expect(count).toBeGreaterThanOrEqual(7);
  });

  test('tapping accordion trigger expands subcategories', async ({ page, viewport }) => {
    if (viewport.width >= 768) return;
    await page.locator('#mobileMenuToggle').click();
    await page.waitForTimeout(200);
    const trigger = page.locator('.mobile-accordion-trigger[data-category="cleaning"]');
    await trigger.click();
    await page.waitForTimeout(300);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  test('mobile View All button is present in expanded accordion', async ({ page, viewport }) => {
    if (viewport.width >= 768) return;
    await page.locator('#mobileMenuToggle').click();
    await page.waitForTimeout(200);
    // Use a category near the top of the drawer to avoid viewport issues
    await page.locator('.mobile-accordion-trigger[data-category="humanoid"]').click();
    await page.waitForTimeout(300);
    // Verify View All button exists
    const viewAll = page.locator('[data-mobile-viewall][data-category="humanoid"]');
    await expect(viewAll).toBeAttached();
  });
});
