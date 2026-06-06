import { test, expect } from '@playwright/test';

test.describe('Favorites system', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Clear localStorage favorites
    await page.evaluate(() => localStorage.removeItem('robotFavorites'));
    await page.reload();
    await page.waitForTimeout(300);
  });

  test('favorite button on card toggles heart icon', async ({ page }) => {
    const firstCard = page.locator('#robotsGrid .robot-card').first();
    const favBtn = firstCard.locator('.favorite-btn');
    await favBtn.click();
    await page.waitForTimeout(200);
    const icon = favBtn.locator('i');
    await expect(icon).toHaveClass(/fas/); // solid heart = favorited
  });

  test('favorites drawer opens and shows favorited robots', async ({ page, viewport }) => {
    // Favorite a robot first
    const firstCard = page.locator('#robotsGrid .robot-card').first();
    await firstCard.locator('.favorite-btn').click();
    await page.waitForTimeout(200);

    const isMobile = viewport.width < 768;
    const toggleId = isMobile ? '#favoritesToggleMobile' : '#favoritesToggle';

    if (isMobile) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
    }

    // Open favorites drawer
    await page.locator(toggleId).click();
    await page.waitForTimeout(300);
    const drawer = page.locator('#favoritesDrawer');
    await expect(drawer).toHaveClass(/active/);

    // Should show at least one favorited robot
    const favCards = page.locator('#favoritesGrid .robot-card, #favoritesGrid a');
    const count = await favCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('favorites count badge updates', async ({ page, viewport }) => {
    if (viewport.width < 768) return; // badge visibility varies
    // Favorite a robot
    const firstCard = page.locator('#robotsGrid .robot-card').first();
    await firstCard.locator('.favorite-btn').click();
    await page.waitForTimeout(200);
    const countBadge = page.locator('#favoritesCount');
    const text = await countBadge.textContent();
    expect(text).toContain('1');
  });

  test('clear favorites removes all', async ({ page, viewport }) => {
    // Favorite two robots
    const cards = page.locator('#robotsGrid .robot-card');
    await cards.nth(0).locator('.favorite-btn').click();
    await page.waitForTimeout(100);
    await cards.nth(1).locator('.favorite-btn').click();
    await page.waitForTimeout(200);

    const isMobile = viewport.width < 768;
    const toggleId = isMobile ? '#favoritesToggleMobile' : '#favoritesToggle';

    if (isMobile) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
    }

    // Open drawer and clear
    await page.locator(toggleId).click();
    await page.waitForTimeout(300);
    const clearBtn = page.locator('#clearFavorites');
    if (await clearBtn.isVisible()) {
      await clearBtn.click();
      await page.waitForTimeout(200);
      const noFavs = page.locator('#noFavorites');
      await expect(noFavs).toBeVisible();
    }
  });
});
