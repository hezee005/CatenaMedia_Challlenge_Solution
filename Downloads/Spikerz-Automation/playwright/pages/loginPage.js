const { SELECTORS } = require('../utils/constants');
const { waitForElement } = require('../utils/commands');
const { BASE_URL } = require('../utils/constants');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded' });
  }

  async login(username, password) {
    await waitForElement(this.page, SELECTORS.loginPopup);
    await this.page.fill(SELECTORS.usernameInput, username);
    await this.page.fill(SELECTORS.passwordInput, password);
    await this.page.click(SELECTORS.loginButton);
    await this.page.waitForURL('/dashboard');
  }
}

module.exports = LoginPage;
