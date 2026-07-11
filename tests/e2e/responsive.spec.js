import { test, expect } from '@playwright/test';

test.describe('Responsive design', () => {
  test('mobile shows hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const hamburger = page.locator('#mobileMenuToggle');
    await expect(hamburger).toBeVisible();
  });

  test('mobile drawer opens on hamburger click', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.locator('#mobileMenuToggle').click();
    const drawer = page.locator('#mobileDrawer');
    await expect(drawer).toHaveClass(/active/);
  });

  test('desktop hides hamburger menu', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const hamburger = page.locator('#mobileMenuToggle');
    await expect(hamburger).not.toBeVisible();
  });

  test('desktop shows category tabs in header', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const headerTabs = page.locator('header .mega-tab');
    await expect(headerTabs.first()).toBeVisible();
  });

  test('cards layout is responsive', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1440, height: 900 });
    const grid = page.locator('#robotsGrid');
    await expect(grid).toBeVisible();
  });

  test('catalog form controls share consistent geometry and select spacing', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const heights = await Promise.all(
      ['#searchInput', '#sortFilter', '#advancedToggle'].map(async (selector) =>
        page.locator(selector).evaluate((element) => element.getBoundingClientRect().height),
      ),
    );
    expect(new Set(heights).size).toBe(1);

    const selectStyles = await page.locator('.form-select').evaluateAll((selects) =>
      selects.map((select) => {
        const style = getComputedStyle(select);
        return {
          appearance: style.appearance,
          backgroundImage: style.backgroundImage,
          paddingRight: Number.parseFloat(style.paddingRight),
        };
      }),
    );
    expect(selectStyles.length).toBeGreaterThan(1);
    for (const style of selectStyles) {
      expect(style.appearance).toBe('none');
      expect(style.backgroundImage).not.toBe('none');
      expect(style.paddingRight).toBeGreaterThanOrEqual(40);
    }
  });

  test('catalog work area stays readable on wide screens and does not overflow on mobile', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    expect(
      await page
        .locator('#filtersSection > div')
        .evaluate((el) => el.getBoundingClientRect().width),
    ).toBeLessThanOrEqual(1152);

    await page.setViewportSize({ width: 390, height: 844 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
    await expect(page.locator('.filter-toggle-label')).toBeHidden();
    await expect(page.locator('#advancedToggle')).toHaveAttribute('aria-label', /filter/i);
  });
});
