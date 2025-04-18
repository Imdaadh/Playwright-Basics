import { test, expect, devices } from '@playwright/test';

//npx playwright test codegen.spec.js --project chromium --headed
test('Verifying login and pagination', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('#loginpassword').press('Enter');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#next2').click();
  await page.locator('#prev2').click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Monitors' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});

//npx playwright codegen --device "iPhone 13"
test.use({
  ...devices['iPhone 13'],
});

test('verification in iPhone 13', async ({ page }) => {
  await page.goto('https://www.anaconda.com/');
  await page.locator('#menu-item-13916').getByRole('link', { name: 'Company' }).click();
  await page.locator('#menu-item-88').getByRole('link', { name: 'Products' }).click();
  await page.locator('#menu-item-88').getByRole('link', { name: 'Products' }).click();
  await page.locator('#mega-menu-wrap-main-menu div').first().click();
  await page.locator('#mega-menu-wrap-main-menu div').first().click();
});
