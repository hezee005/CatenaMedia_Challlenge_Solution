const { SELECTORS } = require('../utils/constants');
const { waitForElement, retryAction } = require('../utils/commands');
const { BASE_URL } = require('../utils/constants');

class SocialConnectPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(`${BASE_URL}/social-connect`);
  }

  async connectYouTube(gmailUsername, gmailPassword) {
    await retryAction(async () => {
      await this.page.click(SELECTORS.youtubeButton);
    });

    await waitForElement(this.page, 'input[type="email"]');
    await this.page.fill('input[type="email"]', gmailUsername);
    await this.page.click('text=Next');
    await this.page.fill('input[type="password"]', gmailPassword);
    await this.page.click('text=Next');
  }

  async grantPermissions() {
    await waitForElement(this.page, SELECTORS.permissionCheckbox);
    await this.page.locator(SELECTORS.permissionCheckbox).check();
    await this.page.click(SELECTORS.continueButton);
  }

  async verifyConnection() {
    await waitForElement(this.page, SELECTORS.successMessage);
  }
}

module.exports = SocialConnectPage;
