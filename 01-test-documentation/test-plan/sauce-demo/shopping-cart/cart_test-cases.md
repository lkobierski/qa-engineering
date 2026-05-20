# Shopping Cart Test Cases

This document contains test scenarios for the SauceDemo shopping cart functionality.

Application under test:

https://www.saucedemo.com

---

# Test Structure

C001 — Verify user can add a single product to the cart  
C002 — Verify user can add multiple products to the cart  
C003 — Verify user can remove product from the cart  
C004 — Verify user can proceed to checkout with a single product added to the cart  
C005 — Verify user can proceed to checkout with multiple products added to the cart   
C006 — Verify Continue Shopping button redirects user back to inventory page  
C007 — Verify product price in shopping cart matches inventory page price  
C008 — Verify product titles and descriptions in shopping cart match inventory page  
C009 — Verify shopping cart badge quantity matches number of added products  
C010 — Verify products remain in cart after page refresh  
C011 — Verify shopping cart badge updates after removing product from cart  

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| C001 | Verify user can add a single product to the cart | User is logged in and inventory page is displayed | 1. Click Add to Cart button for a selected product 2. Open shopping cart | Selected product is visible in shopping cart | High |
| C002 | Verify user can add multiple products to the cart | User is logged in and inventory page is displayed | 1. Add multiple products to the cart 2. Open shopping cart | All selected products are visible in shopping cart | High |
| C003 | Verify user can remove product from the cart | User has product added to the cart | 1. Open shopping cart 2. Click Remove button for selected product | Product is removed from shopping cart | High |
| C004 | Verify user can proceed to checkout with a single product added to the cart | User has one product added to the cart | 1. Open shopping cart 2. Click Checkout button | Checkout page is displayed | High |
| C005 | Verify user can proceed to checkout with multiple products added to the cart | User has multiple products added to the cart | 1. Open shopping cart 2. Click Checkout button | Checkout page is displayed | High |
| C008 | Verify Continue Shopping button redirects user back to inventory page | User is on shopping cart page | 1. Click Continue Shopping button | Inventory page is displayed | Medium |
| C009 | Verify product price in shopping cart matches inventory page price | User has product added to the cart | 1. Add product to the cart 2. Open shopping cart 3. Compare product price with inventory page | Product price matches inventory page price | Medium |
| C010 | Verify product titles and descriptions in shopping cart match inventory page | User has product added to the cart | 1. Add product to the cart 2. Open shopping cart 3. Compare product title and description with inventory page | Product title and description match inventory page | Medium |
| C011 | Verify shopping cart badge quantity matches number of added products | User is logged in and inventory page is displayed | 1. Add multiple products to the cart 2. Verify shopping cart badge number | Shopping cart badge displays correct quantity | High |
| C012 | Verify products remain in cart after page refresh | User has products added to the cart | 1. Open shopping cart 2. Refresh page 3. Verify products visibility | Products remain visible in shopping cart after page refresh | Medium |
| C013 | Verify shopping cart badge updates after removing product from cart | User has products added to the cart | 1. Remove product from shopping cart 2. Verify shopping cart badge quantity | Shopping cart badge updates correctly after product removal | Medium |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main shopping cart functionality, product management, cart persistence and checkout navigation flow.

Additional checkout and edge-case scenarios will be covered in separate documentation files.