const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('Login with incorrect credentials should fail', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('wrongUser', 'wrongPass');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
});
