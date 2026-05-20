# Checkout Test Cases

This document contains test scenarios for the SauceDemo checkout functionality.

Application under test:

https://www.saucedemo.com

---

# Test Structure

CH001 — Checkout with single product
CH002 — Checkout with multiple products
CH003 — Correct products displayed on checkout overview page
CH004 — Order confirmation page after successful checkout
CH005 — Empty First Name field validation
CH006 — Empty Last Name field validation
CH007 — Empty Postal Code field validation
CH008 — Cancel button redirects to shopping cart
CH009 — Valid input data accepted in checkout form

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| CH001 | Verify user can complete checkout with a single product | User has one product added to the cart | 1. Open shopping cart<br>2. Click Checkout button<br>3. Enter valid checkout information<br>4. Click Continue button<br>5. Click Finish button | Checkout process is completed successfully | High |
| CH002 | Verify user can complete checkout with multiple products | User has multiple products added to the cart | 1. Open shopping cart<br>2. Click Checkout button<br>3. Enter valid checkout information<br>4. Click Continue button<br>5. Click Finish button | Checkout process is completed successfully | High |
| CH003 | Verify checkout overview page displays correct products | User is on checkout overview page | 1. Verify displayed products match previously added products | Checkout overview displays correct selected products | High |
| CH004 | Verify order confirmation page is displayed after successful checkout | User is on checkout overview page | 1. Click Finish button<br>2. Verify order confirmation page is displayed | Order confirmation page is displayed successfully | High |
| CH005 | Verify user cannot continue checkout with empty First Name field | User is on checkout information page | 1. Leave First Name field empty<br>2. Enter valid Last Name and Postal Code<br>3. Click Continue button | Validation message for missing First Name is displayed | High |
| CH006 | Verify user cannot continue checkout with empty Last Name field | User is on checkout information page | 1. Enter valid First Name<br>2. Leave Last Name field empty<br>3. Enter valid Postal Code<br>4. Click Continue button | Validation message for missing Last Name is displayed | High |
| CH007 | Verify user cannot continue checkout with empty Postal Code field | User is on checkout information page | 1. Enter valid First Name and Last Name<br>2. Leave Postal Code field empty<br>3. Click Continue button | Validation message for missing Postal Code is displayed | High |
| CH008 | Verify Cancel button redirects user back to shopping cart | User is on checkout information page | 1. Click Cancel button | User is redirected back to shopping cart page | Medium |
| CH009 | Verify checkout information form accepts valid input data | User is on checkout information page | 1. Enter valid First Name<br>2. Enter valid Last Name<br>3. Enter valid Postal Code<br>4. Click Continue button | User proceeds to checkout overview page successfully | Medium |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

| First Name | Last Name | Postal Code |
|---|---|---|
| John | Smith | 00-001 |

---

# Notes

The purpose of these test cases is to validate checkout flow, form validation and successful order completion functionality.
