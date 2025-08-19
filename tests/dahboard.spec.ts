import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});

test('dashboard component', async ({ page }) => {
  const landingPageLayout = page.locator('forge-landing-page-layout').first();

  const mainTitle = landingPageLayout.locator('[slot="main-title"]').first();
  await expect(mainTitle).toHaveText('Dashboard component');

  const secondaryTitle = landingPageLayout.locator('[slot="secondary-title"]').first();
  await expect(secondaryTitle).toHaveText('Welcome to');

  const announcments = landingPageLayout.locator('[slot="announcements"]').first();
  await expect(announcments).toHaveText('Announcing announcements');

  const action = landingPageLayout.locator('[slot="action"]').first();
  await expect(action).toHaveText('Take action');
  await action.click();

  // const actionElementHandle = await action.elementHandle();
  // console.log(actionElementHandle);

  const landingPageLayoutBodyContainer = landingPageLayout.locator('[part="body-container"]');
  await expect(landingPageLayoutBodyContainer).toContainClass('forge-landing-page-layout__body');
});
