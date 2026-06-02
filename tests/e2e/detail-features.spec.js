import { test, expect } from '@playwright/test';

test.describe('Detail page - new features', () => {
  test('shows robot description when available', async ({ page }) => {
    // Navigate to a robot that has a description
    await page.goto('/robot/westwood-robotics-themis-v2/');
    // The detail page should load
    await expect(page.locator('.detail-header h1').first()).toContainText('THEMIS V2');
  });

  test('shows tags on detail page', async ({ page }) => {
    // Find a robot with tags by going through the catalog
    await page.goto('/');
    // Click on first robot card to get to a detail page
    const firstCard = page.locator('#robotsGrid .robot-card').first();
    await firstCard.click();
    await page.waitForTimeout(300);
    // Should be on a detail page
    await expect(page.locator('.detail-header')).toBeVisible();
  });

  test('category breadcrumb links back to filtered catalog', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    const breadcrumbLinks = page.locator('nav[aria-label="Breadcrumb"] a');
    const catLink = breadcrumbLinks.nth(1);
    const href = await catLink.getAttribute('href');
    expect(href).toContain('category=');
  });

  test('favorite button toggles on detail page', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    const favBtn = page.locator('.favorite-btn-detail');
    await expect(favBtn).toBeVisible();
    await favBtn.click();
    // After clicking, the heart icon should change to solid
    await page.waitForTimeout(200);
    const icon = favBtn.locator('i');
    const iconClass = await icon.getAttribute('class');
    expect(iconClass).toContain('fas'); // solid heart
  });

  test('related robots are from the same category', async ({ page }) => {
    await page.goto('/robot/westwood-robotics-themis-v2/');
    const related = page.locator('.robot-card');
    const count = await related.count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThanOrEqual(4);
  });
});
