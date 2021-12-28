import { test, expect } from '@playwright/test';
import { MembersPage } from '../pom/members-page';

test.describe('members page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about-us/members');
  });
  test('should render', async ({ page }) => {
    const membersPage = new MembersPage(page);

    await expect(membersPage.page).toHaveURL('/about-us/members');
  });
});
