# Test Automation

This section contains practical test automation projects covering REST API testing, UI testing, regression testing and containerized test execution.
Each automation project contains its own README with setup instructions, test scope and execution commands.

## Scope

This section is organized into separate automation areas:

| Project | Area | Tools | Purpose |
|---|---|---|---|
| [reqres-api-tests](./api-automation/reqres-api-tests/) | API Test Automation | Playwright | Automated REST API tests for ReqRes |
| [saucedemo-ui-tests](./playwright/saucedemo-ui-tests/) | UI Test Automation | Playwright | UI automation for login and inventory flows for SauceDemo |
| [saucedemo-regression-tests](./cypress/saucedemo-regression-tests/) | Regression Test Automation | Cypress | Regression tests for SauceDemo |
| [saucedemo-typescript-docker-tests](./cypress/saucedemo-typescript-docker-tests/) | UI Test Automation | Cypress, TypeScript, Docker | Cypress E2E tests for SauceDemo executed locally and in a Docker container |
| [saucedemo-cart-tests](./selenium/saucedemo-cart-tests/) | UI Test Automation | Selenium WebDriver | UI cart flow automation for SauceDemo |

## Automation Goals

The main goals of this section are to demonstrate:

- automated test design and implementation
- UI and REST API test automation
- positive and negative test scenarios
- test assertions and result validation
- reusable test structures
- test data management
- Page Object Model usage
- custom Cypress commands
- TypeScript-based test automation
- containerized test execution
- automated test reporting
- readable and maintainable test code
- test setup and execution documentation

## Test Types

The automation examples include:

- smoke tests
- regression tests
- positive scenarios
- negative scenarios
- end-to-end user flows
- REST API response validation
- UI validation

## Applications Under Test

| Application / API | Purpose |
|---|---|
| SauceDemo.com | UI automation practice |
| ReqRes.in | REST API automation practice |

## Projects


### Playwright - ReqRes REST API Tests

Automated REST API tests for ReqRes using Playwright.

Main focus:

- successful API requests
- negative API scenarios
- response status validation
- response body validation
- request payload validation
- environment variable usage

Tools:

- JavaScript
- Playwright
- Playwright Test Runner
- Node.js, npm


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

### Cypress - SauceDemo TypeScript Docker Tests

Cypress E2E tests for selected SauceDemo flows, written in TypeScript and executed locally or in a Docker container.

Main focus:

- TypeScript type validation
- containerized test execution
- valid and invalid login scenarios
- adding products to cart
- verifying cart item count and product details
- typed fixture data
- reusable login helper

Tools:

- TypeScript
- Cypress
- Cypress Test Runner
- Docker
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

