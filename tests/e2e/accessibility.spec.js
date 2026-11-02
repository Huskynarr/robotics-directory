import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [
  '/',
  '/finder/',
  '/stats/',
  '/robot/westwood-robotics-themis-v2/',
  '/brands/hebi-robotics/',
  '/brands/zhigu-tianchu/',
  '/brands/dji-official/',
  '/robot/t-chef-tc-40ea-us/',
  '/brands/solartodo-limited/',
  '/brands/open-robotics/',
  '/brands/vlt-robotics/',
  '/brands/scalable-robotics/',
  '/brands/hand-plus-robotics/',
  '/brands/macco-robotics/',
];

for (const url of pages) {
  for (const mode of ['light', 'dark']) {
    test(`${url} has no WCAG 2.2 AA/AAA violations in ${mode} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: mode });
      await page.goto(url);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .exclude('iframe')
        .analyze();

      expect(
        results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          nodes: violation.nodes.map((node) => node.target.join(' ')),
        })),
      ).toEqual([]);
    });
  }
}
