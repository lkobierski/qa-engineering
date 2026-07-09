# Cypress Automation - SauceDemo Regression Tests

## Project overview

Automated UI regression tests for the SauceDemo web application using Cypress and JavaScript.

This project covers regression tests for the most important user flows in SauceDemo:

- login regression
- inventory regression
- cart regression
- checkout regression

The purpose of this project is to verify that critical application functionality still works correctly after changes.

## Application under test

SauceDemo:

```text
https://www.saucedemo.com/
```

## Test coverage

### Login regression

- should login successfully with valid credentials
- should show error for locked out user
- should show error for invalid credentials

### Inventory regression

- should display products page
- should sort products by name descending
- should sort products by price ascending

### Cart regression

- should add product to cart and update cart badge
- should display added product in cart
- should add multiple products to cart

### Checkout regression

- should require first name during checkout
- should require last name during checkout
- should require postal code during checkout
- should complete checkout successfully

## Project Structure

### Tests

| File | Description |
|---|---|
| [cypress/e2e/login-regression.cy.js](./cypress/e2e/login-regression.cy.js) | Cypress regression tests covering SauceDemo login scenarios |
| [cypress/e2e/inventory-regression.cy.js](./cypress/e2e/inventory-regression.cy.js) | Cypress regression tests covering inventory page functionality and product actions |
| [cypress/e2e/cart-regression.cy.js](./cypress/e2e/cart-regression.cy.js) | Cypress regression tests covering cart functionality, including adding and removing products |
| [cypress/e2e/checkout-regression.cy.js](./cypress/e2e/checkout-regression.cy.js) | Cypress regression tests covering checkout flow validation |

### Test Data

| File | Description |
|---|---|
| [cypress/fixtures/test-data.json](./cypress/fixtures/test-data.json) | Contains test data used in Cypress tests, including user credentials, product details and checkout data |

### Support Files

| File | Description |
|---|---|
| [cypress/support/commands.js](./cypress/support/commands.js) | Contains custom Cypress commands used across test files, such as login and product actions |

### Configuration

| File | Description |
|---|---|
| [cypress.config.js](./cypress.config.js) | Cypress configuration file defining base URL, spec pattern, reporter and test execution settings |

### Reports and Results

| Directory | Description |
|---|---|
| [cypress/reports](./cypress/reports/) | Generated Mochawesome test reports |



## Installation

Install dependencies:

```bash
npm install
```

## Running tests

Run all tests in headless mode:

```bash
npm test
```

Open Cypress Test Runner:

```bash
npm run test:open
```

## Custom commands

Reusable Cypress commands are stored in:

```text
cypress/support/commands.js
```

Current custom commands include:

- `cy.login(username, password)`
- `cy.addProductToCart(productName)`

## Attachments

![Cypress Automated Tests Result](./attachments/cypress-automation-tests.png) 
