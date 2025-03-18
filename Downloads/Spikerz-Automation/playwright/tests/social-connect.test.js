const { test, expect } = require('@playwright/test');
const SocialConnectPage = require('../pages/socialConnectPage');
const { CREDENTIALS } = require('../utils/helpers');

test('Successfully connect YouTube account to Spikerz', async ({ page }) => {
  const socialPage = new SocialConnectPage(page);
  
  await socialPage.navigate();
  await socialPage.connectYouTube(CREDENTIALS.gmailUsername, CREDENTIALS.gmailPassword);
  await socialPage.grantPermissions();
  await socialPage.verifyConnection();

  await expect(page.locator('text=Successfully Connected')).toBeVisible();
});
