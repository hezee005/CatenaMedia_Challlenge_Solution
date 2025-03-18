# Spikerz Playwright Automation

## Setup
1. **Clone the repository**  
   ```sh
   git clone https://github.com/hezee005/spikerz-automation.git

2. **Install dependencies**
    ```sh
    npm install

3. **Set up environment variables**  
   ```sh
   cp .env.example .env

4. **Run tests**  
   ```sh
   npx playwright test


-- Troubleshooting

Test fails intermittently? Increase timeouts in playwright.config.js.
Elements not found? Run npx playwright test --debug and inspect the UI.

-- API Documentation

LoginPage.js
navigate() → Navigates to login page.
login(username, password) → Logs in with given credentials.
SocialConnectPage.js
navigate() → Navigates to social connect page.
connectYouTube(gmailUsername, gmailPassword) → Connects YouTube.
grantPermissions() → Selects all permissions.
verifyConnection() → Checks for success message.