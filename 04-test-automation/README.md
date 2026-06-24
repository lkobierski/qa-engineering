# Test Automation

This section contains automated tests created as part of a QA engineering portfolio.

---

## Scope

This section is organized into separate automation areas:

| Area | Project | Purpose |
|---|---|---|
| API Automation | `reqres-api-tests` | Automated API tests for Reqres |
| Playwright | `saucedemo-ui-tests` | UI automation for login and inventory flows |
| Cypress | `saucedemo-regression-tests` | UI regression suite for SauceDemo |
| Selenium | `saucedemo-cart-tests` | UI cart flow automation using Selenium WebDriver |

---

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

---

## Test Types

The automation examples include:

- smoke tests
- regression tests
- positive scenarios
- negative scenarios
- end-to-end user flows
- API response validation
- UI validation

---

## Applications Under Test

| Application / API | Purpose |
|---|---|
| SauceDemo | UI automation practice |
| Reqres | API automation practice |

---

### Playwright - SauceDemo UI Tests

UI automation tests for selected SauceDemo flows.

Main focus:

- login functionality
- negative login validation
- inventory page validation
- product sorting
- Page Object Model
- test data separation

Tools:

- JavaScript
- Playwright
- Playwright Test Runner

---

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

---

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
- ChromeDriver
- Node.js assert

---

## Notes

Each automation project contains its own README with setup instructions, test scope and execution commands.

Generated dependencies and test artifacts such as `node_modules/`, reports, videos and screenshots should not be committed to the repository.

This section is focused on practical QA automation skills rather than advanced framework engineering.