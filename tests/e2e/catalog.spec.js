import { test, expect } from '@playwright/test';

test.describe('Catalog page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads the homepage with robots', async ({ page }) => {
    await expect(page.locator('#robotsGrid')).toBeVisible();
    const cards = page.locator('#robotsGrid .robot-card');
    await expect(cards.first()).toBeVisible();
  });

  test('search filters robots', async ({ page }) => {
    const searchInput = page.locator('#searchInput');
    await searchInput.fill('Atlas');
    await page.waitForTimeout(500); // debounce
    const cards = page.locator('#robotsGrid .robot-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(24);
  });

  test('category pills filter by category', async ({ page, viewport }) => {
    const isMobile = viewport.width < 768;

    if (isMobile) {
      // On mobile, open the drawer and click the mobile nav item
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
      const humanoidBtn = page.locator('.mobile-nav-item[data-category="humanoid"]');
      await humanoidBtn.click();
    } else {
      const humanoidPill = page.locator('[data-category="humanoid"]').first();
      await humanoidPill.click();
    }

    await page.waitForTimeout(200);
    const categories = await page.locator('#robotsGrid .category-badge').allTextContents();
    for (const cat of categories) {
      expect(cat.toLowerCase()).toContain('humanoid');
    }
  });

  test('pagination works', async ({ page }) => {
    const pagination = page.locator('#pagination');
    await expect(pagination).toBeVisible();
    const nextBtn = pagination.locator('.pagination-btn').last();
    await nextBtn.click();
    await page.waitForTimeout(200);
    const info = await pagination.locator('.pagination-info').textContent();
    expect(info).toContain('25');
  });

  test('reset filters clears all filters', async ({ page }) => {
    // Apply a filter first
    await page.locator('#searchInput').fill('Atlas');
    await page.waitForTimeout(500);
    // Reset
    await page.locator('#resetFilters').click();
    await page.waitForTimeout(200);
    const searchVal = await page.locator('#searchInput').inputValue();
    expect(searchVal).toBe('');
  });
});
