import { test, expect } from '@playwright/test';

test.describe('Advanced filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('advanced filter panel toggles visibility', async ({ page }) => {
    const toggle = page.locator('#advancedToggle');
    const panel = page.locator('#advancedFilters');
    // Panel should be hidden initially
    await expect(panel).toHaveClass(/hidden/);
    await toggle.click();
    await page.waitForTimeout(200);
    await expect(panel).not.toHaveClass(/hidden/);
    // Toggle again to close
    await toggle.click();
    await page.waitForTimeout(200);
    await expect(panel).toHaveClass(/hidden/);
  });

  test('weight filter narrows results', async ({ page }) => {
    // Wait for initial render
    await page.waitForTimeout(1000);
    // Get total from pagination info (e.g., "1-24 of 202")
    const initialInfo = await page.locator('#pagination .pagination-info').textContent();
    const initialTotal = parseInt(initialInfo.match(/\/\s*(\d+)/)?.[1] || '0');
    expect(initialTotal).toBeGreaterThan(50);
    // Open advanced filters and select weight
    await page.locator('#advancedToggle').click();
    await page.waitForTimeout(300);
    await page.selectOption('#weightFilter', 'light');
    await page.waitForTimeout(800);
    // Check filtered count is less
    const filteredCards = await page.locator('#robotsGrid .robot-card').count();
    expect(filteredCards).toBeGreaterThan(0);
    expect(filteredCards).toBeLessThan(initialTotal);
  });

  test('sort by name works', async ({ page }) => {
    await page.selectOption('#sortFilter', 'name');
    await page.waitForTimeout(500);
    const names = await page.locator('#robotsGrid .robot-card h3').allTextContents();
    expect(names.length).toBeGreaterThan(1);
    // Verify alphabetical ordering
    for (let i = 1; i < names.length; i++) {
      expect(names[i].localeCompare(names[i - 1])).toBeGreaterThanOrEqual(0);
    }
  });

  test('manufacturer filter works', async ({ page }) => {
    await page.selectOption('#manufacturerFilter', { index: 1 }); // first manufacturer
    await page.waitForTimeout(500);
    const cards = page.locator('#robotsGrid .robot-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    // All cards should have the same manufacturer
    const manufacturers = await page.locator('#robotsGrid .manufacturer').allTextContents();
    const unique = [...new Set(manufacturers)];
    expect(unique).toHaveLength(1);
  });

  test('price pills filter by price range', async ({ page }) => {
    const lowPill = page.locator('[data-price="low"]');
    await lowPill.click();
    await page.waitForTimeout(500);
    await expect(lowPill).toHaveClass(/active/);
    const cards = page.locator('#robotsGrid .robot-card');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('use case pills filter cross-category', async ({ page, viewport }) => {
    if (viewport.width < 768) return;
    const usecasePill = page.locator('[data-usecase]').first();
    if (await usecasePill.isVisible()) {
      await usecasePill.click();
      await page.waitForTimeout(500);
      const cards = page.locator('#robotsGrid .robot-card');
      const count = await cards.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test('active filter chips appear for category and can be dismissed', async ({ page }) => {
    // Apply a category filter via URL
    await page.goto('/?category=humanoid');
    await page.waitForTimeout(500);
    // There should be an active chip for the category
    const chips = page.locator('#activeFilters .filter-chip');
    const count = await chips.count();
    expect(count).toBeGreaterThan(0);
    // Click the dismiss button on the chip
    await chips.first().locator('[data-clear]').click();
    await page.waitForTimeout(300);
    // Category filter should be cleared - all robots visible
    const cards = page.locator('#robotsGrid .robot-card');
    const totalCount = await cards.count();
    expect(totalCount).toBeGreaterThan(20); // more than humanoid-only count
  });

  test('no results message when search has no match', async ({ page }) => {
    await page.locator('#searchInput').fill('xyznonexistentrobot12345');
    await page.waitForTimeout(800);
    const noResults = page.locator('#noResults');
    await expect(noResults).toBeVisible();
  });
});
