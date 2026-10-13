# SauceDemo Playwright Automation

UI automation framework for SauceDemo using JavaScript and Playwright.

## Technologies

- JavaScript
- Playwright
- Node.js
- Mocha-style Playwright Test runner
- Page Object Model
- Data-driven testing
- Firefox and Microsoft Edge

## Test Scenarios

- Verify product prices are sorted from low to high.
- Verify cart badge updates after adding and removing products.
- Verify invalid login error message.
- Verify locked user error message.

## Run Tests

Install dependencies:

npm install

Install browsers:

npx playwright install

Run all tests:

npm test

Run tests with a visible browser:

npm run test:headed

Run Firefox tests:

npm run test:firefox

Run Edge tests:

npm run test:edge

Open the HTML report:

npm run report