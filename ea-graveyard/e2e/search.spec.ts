import { test, expect } from '@playwright/test';

test('Search', async ({ page }) => {
  await page.goto('/');
  await page.fill('input#studioSearchBox', 'Westwood');
  await page.locator('#studioSearchTagList > div > a:nth-child(1)').click();
  const studioList = page.locator('#studioList > li');
  await expect(studioList).toHaveCount(1);
});