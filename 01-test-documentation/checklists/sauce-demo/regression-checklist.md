# SauceDemo Regression Checklist

This checklist contains regression checks used to verify that existing SauceDemo functionality still works correctly after changes or fixes.

Application under test:

https://www.saucedemo.com

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |
| locked_out_user | secret_sauce |
| problem_user | secret_sauce |

---

# Regression Checklist

## Authentication

- [ ] Login page is displayed correctly
- [ ] User can log in using valid credentials
- [ ] User cannot log in with empty username
- [ ] User cannot log in with empty password
- [ ] User cannot log in with invalid credentials
- [ ] Locked out user cannot log in
- [ ] Validation messages are displayed correctly
- [ ] User remains logged in after page refresh
- [ ] User can log out successfully
- [ ] User cannot access authenticated content after logout

---

## Inventory

- [ ] Inventory page is displayed after login
- [ ] Product list is visible
- [ ] Product titles are displayed correctly
- [ ] Product descriptions are displayed correctly
- [ ] Product prices are displayed correctly
- [ ] Product images are displayed correctly
- [ ] Sorting by Name A to Z works correctly
- [ ] Sorting by Name Z to A works correctly
- [ ] Sorting by Price low to high works correctly
- [ ] Sorting by Price high to low works correctly
- [ ] Inventory page remains functional after refresh
- [ ] Navigation menu is visible and functional

---

## Shopping Cart

- [ ] User can add a single product to the shopping cart
- [ ] User can add multiple products to the shopping cart
- [ ] Shopping cart badge displays correct product quantity
- [ ] User can open shopping cart page
- [ ] Added products are visible in the shopping cart
- [ ] Product title, description and price match inventory page data
- [ ] User can remove product from the shopping cart
- [ ] Shopping cart badge updates after product removal
- [ ] Products remain in cart after page refresh
- [ ] Continue Shopping button redirects user back to inventory page
- [ ] Checkout button redirects user to checkout information page

---

## Checkout

- [ ] User can start checkout with product added to cart
- [ ] Checkout information form is displayed
- [ ] User cannot continue checkout with empty First Name field
- [ ] User cannot continue checkout with empty Last Name field
- [ ] User cannot continue checkout with empty Zip/Postal Code field
- [ ] User can enter valid checkout information
- [ ] User can proceed to checkout overview page
- [ ] Checkout overview displays selected products correctly
- [ ] Checkout overview displays item total, tax and total amount
- [ ] User can finish checkout process
- [ ] Order confirmation page is displayed
- [ ] Cancel button redirects user back correctly

---

## UI / Navigation

- [ ] Main navigation menu opens correctly
- [ ] Navigation menu options are visible
- [ ] Shopping cart icon is visible
- [ ] Page headers are displayed correctly
- [ ] Buttons are visible and clickable
- [ ] Error messages are readable
- [ ] Layout is displayed correctly on desktop resolution

---

# Notes

This checklist is intended for regression testing after changes, bug fixes or new releases. It focuses on core user flows, validation, navigation and data consistency across the application.