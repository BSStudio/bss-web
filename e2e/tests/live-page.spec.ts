import { test, expect } from '@playwright/test';
import { LivePage } from '../pom/live-page';

test.describe('live page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/live');
  });
  test('should render', async ({ page }) => {
    const livePage = new LivePage(page);

    await expect(livePage.page).toHaveURL('/live');
  });
});
