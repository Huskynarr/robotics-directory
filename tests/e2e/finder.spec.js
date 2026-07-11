import { test, expect } from '@playwright/test';

test.describe('Robot Finder', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/finder/');
  });

  test('loads the wizard with the first question', async ({ page }) => {
    await expect(page.locator('#finderWizard')).toBeVisible();
    const options = page.locator('#finderStep .finder-option');
    await expect(options.first()).toBeVisible();
    // First step offers the category/need choices
    expect(await options.count()).toBeGreaterThanOrEqual(6);
  });

  test('identifies the budget currency explicitly', async ({ page }) => {
    await page.locator('#finderStep .finder-option[data-value="cleaning"]').click();
    const budgetOptions = page.locator('#finderStep .finder-option-title');
    await expect(budgetOptions.first()).toContainText('USD');
    expect(await budgetOptions.allTextContents()).not.toContainEqual(expect.stringMatching(/\$/));
  });

  test('completing the flow shows ranked matches', async ({ page }) => {
    // Step 1: need -> cleaning (auto-advances)
    await page.locator('#finderStep .finder-option[data-value="cleaning"]').click();
    await page.waitForTimeout(350);
    // Step 2: budget -> any (auto-advances)
    await page.locator('#finderStep .finder-option[data-value="any"]').click();
    await page.waitForTimeout(350);
    // Step 3: recency -> any (auto-advances)
    await page.locator('#finderStep .finder-option[data-value="any"]').click();
    await page.waitForTimeout(350);
    // Step 4: features -> pick mop, then continue
    await page.locator('#finderStep .finder-option[data-value="mop"]').click();
    await page.locator('#finderNext').click();
    await page.waitForTimeout(250);

    const results = page.locator('#finderResults');
    await expect(results).toBeVisible();
    const cards = results.locator('.finder-result');
    expect(await cards.count()).toBeGreaterThan(0);
    // All matches should be cleaning robots and link to a detail page
    const href = await cards.first().getAttribute('href');
    expect(href).toMatch(/^\/robot\/.+\/$/);
  });

  test('skipping features still produces results', async ({ page }) => {
    await page.locator('#finderStep .finder-option[data-value="humanoid"]').click();
    await page.waitForTimeout(350);
    await page.locator('#finderStep .finder-option[data-value="b5"]').click();
    await page.waitForTimeout(350);
    await page.locator('#finderStep .finder-option[data-value="r2"]').click(); // recency
    await page.waitForTimeout(350);
    await page.locator('#finderSkip').click(); // skip features
    await page.waitForTimeout(250);
    await expect(page.locator('#finderResults')).toBeVisible();
    expect(await page.locator('#finderResults .finder-result').count()).toBeGreaterThan(0);
  });

  test('educational path reveals the age question', async ({ page }) => {
    await page.locator('#finderStep .finder-option[data-value="educational"]').click();
    await page.waitForTimeout(350);
    await page.locator('#finderStep .finder-option[data-value="any"]').click(); // budget
    await page.waitForTimeout(350);
    await page.locator('#finderStep .finder-option[data-value="any"]').click(); // recency
    await page.waitForTimeout(350);
    await page.locator('#finderSkip').click(); // skip features
    await page.waitForTimeout(250);
    // Age step should now be visible (child age icons)
    const label = await page.locator('#finderProgressLabel').textContent();
    expect(label).toMatch(/5|of|von/);
    const ageOptions = page.locator('#finderStep .finder-option');
    await expect(ageOptions.first()).toBeVisible();
    await ageOptions.first().click();
    await page.waitForTimeout(300);
    await expect(page.locator('#finderResults')).toBeVisible();
  });

  test('header link navigates to the finder', async ({ page, viewport }) => {
    await page.goto('/');
    if (viewport.width < 768) {
      await page.locator('#mobileMenuToggle').click();
      await page.waitForTimeout(200);
    }
    await page.locator('a[href="/finder/"]:visible').first().click();
    await expect(page).toHaveURL(/\/finder\/?$/);
    await expect(page.locator('#finderWizard')).toBeVisible();
  });
});
