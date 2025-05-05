import { test, expect } from '@playwright/test';

import rawStudioData from '../src/studios.json' with {type: 'json'};

test('Filter', async ({ page }) => {
  await page.goto('/');
  const filter = page.locator('#studioFilter');
  await filter.click();
  await page.locator('#studioFilterList > div > a:nth-child(2)').click();
  const studioList = page.locator('#studioList > li');
  await expect(studioList).toHaveCount(rawStudioData.filter((studio) => (studio.acquiredBy == 'EA' || studio.ownedBy == 'EA')).length);
});