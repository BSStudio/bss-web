import { test, expect } from '@playwright/test';
import { CoursesPage } from '../pom/courses-page';

test.describe('courses page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/courses');
  });
  test('should render', async ({ page }) => {
    const coursesPage = new CoursesPage(page);

    await expect(coursesPage.page).toHaveURL('/courses');
  });
});
