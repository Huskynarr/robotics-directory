import { test, expect } from '@playwright/test';

test.describe('URL state persistence', () => {
  test('search query persists in URL after debounce', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    await page.locator('#searchInput').fill('Atlas');
    await page.waitForTimeout(1000);
    const url = await page.evaluate(() => window.location.href);
    // Search is lowercased before serialization
    expect(url).toContain('q=atlas');
  });

  test('restores search from URL on page load', async ({ page }) => {
    // Use lowercase since that's how catalog.js serializes
    await page.goto('/?q=atlas');
    await page.waitForTimeout(1000);
    const searchVal = await page.locator('#searchInput').inputValue();
    expect(searchVal).toBe('atlas');
    const cards = page.locator('#robotsGrid .robot-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('category filter persists in URL via View All', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    await page.goto('/');
    await page.locator('[data-megatab="outdoor"]').click();
    await page.locator('.mega-view-all[data-category="outdoor"]').click();
    await page.waitForTimeout(500);
    const url = await page.evaluate(() => window.location.href);
    expect(url).toContain('category=outdoor');
  });

  test('restores category from URL on page load', async ({ page }) => {
    await page.goto('/?category=humanoid');
    await page.waitForTimeout(500);
    const cards = page.locator('#robotsGrid .robot-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(200);
  });

  test('sort option persists in URL', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    await page.selectOption('#sortFilter', 'name');
    await page.waitForTimeout(500);
    const url = await page.evaluate(() => window.location.href);
    expect(url).toContain('sort=name');
  });

  test('multiple filters combine in URL', async ({ page }) => {
    await page.goto('/?category=cleaning');
    await page.waitForTimeout(500);
    await page.locator('#searchInput').fill('Roomba');
    await page.waitForTimeout(1000);
    const url = await page.evaluate(() => window.location.href);
    expect(url).toContain('category=cleaning');
    // Search is lowercased
    expect(url).toContain('q=roomba');
  });

  test('reset clears all URL parameters', async ({ page }) => {
    await page.goto('/?category=humanoid&q=atlas&sort=name');
    await page.waitForTimeout(500);
    await page.locator('#advancedToggle').click();
    await page.locator('#resetFilters').click();
    await page.waitForTimeout(500);
    const url = await page.evaluate(() => window.location.href);
    expect(url).not.toContain('category=');
    expect(url).not.toContain('q=');
    expect(url).not.toContain('sort=');
  });

  test('page parameter for pagination', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    const nextBtn = page.locator('#pagination .pagination-btn').last();
    await nextBtn.click();
    await page.waitForTimeout(300);
    const url = await page.evaluate(() => window.location.href);
    expect(url).toContain('page=2');
  });
});
