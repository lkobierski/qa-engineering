# Playwright Automation - SauceDemo UI Tests

## Project overview 

UI automation tests for the SauceDemo web application using Playwright and JavaScript.

This project covers selected UI test scenarios for:

- login functionality
- negative login validation
- locked out user validation
- inventory page validation
- product details validation
- adding products to cart
- product sorting

The project uses the Page Object Model pattern to separate test logic from page selectors and actions.

## Application under test

SauceDemo:

```text
https://www.saucedemo.com/
```

## Test coverage

### Login tests

- should login successfully with valid credentials
- should show error for locked out user
- should show error for invalid credentials
- should show error when username is missing
- should show error when password is missing

### Inventory tests

- should display products page after login
- should display product details
- should add product to cart
- should add multiple products to cart
- should sort products by name descending
- should sort products by price ascending

## Project Structure

### Tests

| File | Description |
|---|---|
| [tests/login.spec.js](./tests/login.spec.js) | Playwright test suite covering SauceDemo login scenarios |
| [tests/inventory.spec.js](./tests/inventory.spec.js) | Playwright test suite covering inventory page scenarios, including product visibility, sorting and cart interactions |
| [tests/login-nonPOM.spec.js](./tests/login-nonPOM.spec.js) | Playwright login tests written without Page Object Model for comparison and learning purposes |

### Page Objects

| File | Description |
|---|---|
| [pages/login.page.js](./pages/login.page.js) | Page Object Model class for the SauceDemo login page |
| [pages/inventory.page.js](./pages/inventory.page.js) | Page Object Model class for the inventory page, including product selection, product sorting and cart actions |

### Test Data

| File | Description |
|---|---|
| [data/test-data.js](./data/test-data.js) | Contains test data used in Playwright tests, including user credentials, expected messages and product details |

### Configuration

| File | Description |
|---|---|
| [playwright.config.js](./playwright.config.js) | Playwright configuration file defining test directory, browser project, reporter and execution settings |

### Reports and Results

| Directory | Description |
|---|---|
| [playwright-report](./playwright-report/) | Generated Playwright HTML report |

## Installation

Install dependencies:

```bash
npm install
```

```bash
npx playwright install
```

## Running tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open Playwright HTML report:

```bash
npm run report
```

## Attachments
![SauceDemo UI Automated Tests Result](./attachments/saucedemo-ui-tests-result.png) 
