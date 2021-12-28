import { test, expect } from '@playwright/test';
import { ContactPage } from '../pom/contact-page';

test.describe('contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about-us/contact');
  });
  test('should render', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await expect(contactPage.page).toHaveURL('/about-us/contact');
  });
});
