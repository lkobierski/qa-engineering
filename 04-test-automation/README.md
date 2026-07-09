# Test Automation

This section contains automated tests.

## Scope

This section is organized into separate automation areas:

| Project | Area | Framework | Purpose |
|---|---|---|---|
| [reqres-api-tests](./api-automation/reqres-api-tests/) | API Test Automation | Playwright | Automated API tests for ReqRes |
| [saucedemo-ui-tests](./playwright/saucedemo-ui-tests/) | UI Test Automation | Playwright | UI automation for login and inventory flows for SauceDemo |
| [saucedemo-regression-tests](./cypress/saucedemo-regression-tests/) | Regression Test Automation | Cypress | Regression tests for SauceDemo |
| [saucedemo-cart-tests](./selenium/saucedemo-cart-tests/) | UI Test Automation | Selenium WebDriver | UI cart flow automation for SauceDemo |

## Automation Goals

The main goals of this section are to demonstrate:

- automated test creation
- UI test automation
- API test automation
- test assertions
- positive and negative automated scenarios
- reusable test structure
- test data management
- Page Object Model usage
- custom commands
- readable and maintainable test code
- test execution documentation

## Test Types

The automation examples include:

- smoke tests
- regression tests
- positive scenarios
- negative scenarios
- end-to-end user flows
- API response validation
- UI validation

## Applications Under Test

| Application / API | Purpose |
|---|---|
| SauceDemo.com | UI automation practice |
| ReqRes.in | API automation practice |

### Playwright - SauceDemo UI Tests

UI automation tests for selected SauceDemo flows.

Main focus:

- login functionality
- negative login validation
- inventory page validation
- product sorting
- test data separation

Tools:

- JavaScript
- Playwright
- Playwright Test Runner
- Node.js

### Cypress - SauceDemo Regression Tests

Regression UI tests for SauceDemo.

Main focus:

- login regression
- inventory regression
- cart regression
- checkout regression
- custom Cypress commands
- fixtures for test data
- Mochawesome HTML reporting

Tools:

- JavaScript
- Cypress
- Cypress Test Runner
- Mochawesome
- Node.js

### Selenium - SauceDemo Shopping Cart Tests

UI automation tests for SauceDemo cart flow.

Main focus:

- login before cart tests
- adding a single product to cart
- adding multiple products to cart
- verifying cart item details
- removing a product from cart
- continuing shopping from cart

Tools:

- JavaScript
- Selenium WebDriver
- Mocha
- Node.js


## Notes

Each automation project contains its own README with setup instructions, test scope and execution commands.
