# SauceDemo Smoke Checklist

This checklist contains the most critical checks used to verify whether the SauceDemo application is stable enough for further testing.

Application under test:

https://www.saucedemo.com

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Smoke Checklist

## Authentication

- [ ] Login page is displayed correctly
- [ ] User can log in using valid credentials
- [ ] User is redirected to the inventory page after login
- [ ] User can log out successfully

---

## Inventory

- [ ] Inventory page is displayed after login
- [ ] Product list is visible
- [ ] Product titles are visible
- [ ] Product prices are visible
- [ ] Product images are visible

---

## Shopping Cart

- [ ] User can add product to the shopping cart
- [ ] Shopping cart badge is updated after adding product
- [ ] User can open shopping cart page
- [ ] Added product is visible in the shopping cart

---

## Checkout

- [ ] User can start checkout process
- [ ] Checkout information form is displayed
- [ ] User can enter valid checkout information
- [ ] User can proceed to checkout overview page
- [ ] User can complete checkout process
- [ ] Order confirmation page is displayed

---

# Notes

This checklist is intended for quick verification of core application functionality before deeper regression or exploratory testing.