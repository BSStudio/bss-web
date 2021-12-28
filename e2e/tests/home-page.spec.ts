import { test, expect } from '@playwright/test';
import { HomePage } from '../pom/home-page';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test('should render', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.title).toHaveText('Legutóbbi videóink');
  });
});
