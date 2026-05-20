# Shopping Cart Test Cases

This document contains test scenarios for the SauceDemo shopping cart functionality.

Application under test:

https://www.saucedemo.com

---

# Test Scenarios

C001 — Adding single product to cart <br>
C002 — Adding multiple products to cart<br>
C003 — Removing product from cart<br>
C004 — Proceeding to checkout with single product<br>
C005 — Proceeding to checkout with multiple products<br>
C006 — Continue Shopping button redirects to inventory page<br>
C007 — Product price match between cart and inventory page<br>
C008 — Product titles and descriptions match between cart and inventory page<br>
C009 — Cart badge quantity matches number of added products<br>
C010 — Products persistence in cart after page refresh<br>
C011 — Cart badge update after removing product<br>

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| C001 | Verify user can add a single product to the cart | User is logged in and inventory page is displayed | 1. Click Add to Cart button for a selected product<br>2. Open shopping cart | Selected product is visible in shopping cart | High |
| C002 | Verify user can add multiple products to the cart | User is logged in and inventory page is displayed | 1. Add multiple products to the cart<br>2. Open shopping cart | All selected products are visible in shopping cart | High |
| C003 | Verify user can remove product from the cart | User has product added to the cart | 1. Open shopping cart<br>2. Click Remove button for selected product | Product is removed from shopping cart | High |
| C004 | Verify user can proceed to checkout with a single product added to the cart | User has one product added to the cart | 1. Open shopping cart<br>2. Click Checkout button | Checkout page is displayed | High |
| C005 | Verify user can proceed to checkout with multiple products added to the cart | User has multiple products added to the cart | 1. Open shopping cart<br>2. Click Checkout button | Checkout page is displayed | High |
| C006 | Verify Continue Shopping button redirects user back to inventory page | User is on shopping cart page | 1. Click Continue Shopping button | Inventory page is displayed | Medium |
| C007 | Verify product price in shopping cart matches inventory page price | User has product added to the cart | 1. Add product to the cart<br>2. Open shopping cart<br>3. Compare product price with inventory page | Product price matches inventory page price | Medium |
| C008 | Verify product titles and descriptions in shopping cart match inventory page | User has product added to the cart | 1. Add product to the cart<br>2. Open shopping cart<br>3. Compare product title and description with inventory page | Product title and description match inventory page | Medium |
| C009 | Verify shopping cart badge quantity matches number of added products | User is logged in and inventory page is displayed | 1. Add multiple products to the cart<br>2. Verify shopping cart badge number | Shopping cart badge displays correct quantity | High |
| C010 | Verify products remain in cart after page refresh | User has products added to the cart | 1. Open shopping cart<br>2. Refresh page<br>3. Verify products visibility | Products remain visible in shopping cart after page refresh | Medium |
| C011 | Verify shopping cart badge updates after removing product from cart | User has products added to the cart | 1. Remove product from shopping cart<br>2. Verify shopping cart badge quantity | Shopping cart badge updates correctly after product removal | Medium |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main shopping cart functionality, product management, cart persistence and checkout navigation flow.

Additional checkout and edge-case scenarios will be covered in separate documentation files.
