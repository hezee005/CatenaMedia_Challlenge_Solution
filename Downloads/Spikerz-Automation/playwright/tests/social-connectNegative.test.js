const { test, expect } = require('@playwright/test');
const SocialConnectPage = require('../pages/socialConnectPage');
const { CREDENTIALS } = require('../utils/helpers');

test('Fail YouTube connection with incorrect Gmail credentials', async ({ page }) => {
    const socialPage = new SocialConnectPage(page);
  
    await socialPage.navigate();
    await socialPage.connectYouTube('wrongEmail@gmail.com', 'wrongPassword');
  
    await expect(page.locator('text=Wrong password. Try again')).toBeVisible();
  });
  
  test('Fail YouTube connection due to denied permissions', async ({ page }) => {
    const socialPage = new SocialConnectPage(page);
  
    await socialPage.navigate();
    await socialPage.connectYouTube(CREDENTIALS.gmailUsername, CREDENTIALS.gmailPassword);
  
    // Simulate denying permissions
    await page.click('text=Cancel');
  
    await expect(page.locator('text=Permission Denied')).toBeVisible();
  });
  
  test('Fail connection due to network error', async ({ page }) => {
    const socialPage = new SocialConnectPage(page);
  
    // Simulate network failure
    await page.route('**/youtube/connect', route => route.abort());
  
    await socialPage.navigate();
    await socialPage.connectYouTube(CREDENTIALS.gmailUsername, CREDENTIALS.gmailPassword);
  
    await expect(page.locator('text=Network Error. Try again')).toBeVisible();
  });
  