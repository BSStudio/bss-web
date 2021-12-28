import { test, expect } from '@playwright/test';
import { AboutUsPage } from '../pom/about-us-page';

test.describe('about us page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about-us');
  });
  test('should render', async ({ page }) => {
    const aboutUsPage = new AboutUsPage(page);

    await expect(aboutUsPage.page).toHaveURL('/about-us');
  });
});
