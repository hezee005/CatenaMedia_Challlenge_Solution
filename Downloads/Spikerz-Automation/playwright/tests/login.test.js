const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const { CREDENTIALS } = require('../utils/helpers');

test('Login to Spikerz Dev UI', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(CREDENTIALS.username, CREDENTIALS.password);
  await expect(page).toHaveURL('/dashboard');
});
