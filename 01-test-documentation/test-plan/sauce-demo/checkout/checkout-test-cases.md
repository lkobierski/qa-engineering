# Checkout Test Cases

This document contains test scenarios for the SauceDemo checkout functionality.

Application under test:

https://www.saucedemo.com

---

# Test Structure

CH001 — Verify user can complete checkout with a single product  
CH002 — Verify user can complete checkout with multiple products  
CH003 — Verify checkout overview page displays correct products  
CH004 — Verify order confirmation page is displayed after successful checkout  
CH005 — Verify user cannot continue checkout with empty First Name field  
CH006 — Verify user cannot continue checkout with empty Last Name field  
CH007 — Verify user cannot continue checkout with empty Postal Code field  
CH008 — Verify Cancel button redirects user back to shopping cart  
CH009 — Verify checkout information form accepts valid input data  

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| CH001 | Verify user can complete checkout with a single product | User has one product added to the cart | 1. Open shopping cart 2. Click Checkout button 3. Enter valid checkout information 4. Click Continue button 5. Click Finish button | Checkout process is completed successfully | High |
| CH002 | Verify user can complete checkout with multiple products | User has multiple products added to the cart | 1. Open shopping cart 2. Click Checkout button 3. Enter valid checkout information 4. Click Continue button 5. Click Finish button | Checkout process is completed successfully | High |
| CH003 | Verify checkout overview page displays correct products | User entered valid checkout information | 1. Proceed to checkout overview page 2. Verify displayed products | Checkout overview displays correct selected products | High |
| CH004 | Verify order confirmation page is displayed after successful checkout | User completed checkout process | 1. Complete checkout process 2. Verify confirmation page | Order confirmation page is displayed successfully | High |
| CH005 | Verify user cannot continue checkout with empty First Name field | User is on checkout information page | 1. Leave First Name field empty 2. Enter valid Last Name and Postal Code 3. Click Continue button | Validation message for missing First Name is displayed | High |
| CH006 | Verify user cannot continue checkout with empty Last Name field | User is on checkout information page | 1. Enter valid First Name 2. Leave Last Name field empty 3. Enter valid Postal Code 4. Click Continue button | Validation message for missing Last Name is displayed | High |
| CH007 | Verify user cannot continue checkout with empty Postal Code field | User is on checkout information page | 1. Enter valid First Name and Last Name 2. Leave Postal Code field empty 3. Click Continue button | Validation message for missing Postal Code is displayed | High |
| CH008 | Verify Cancel button redirects user back to shopping cart | User is on checkout information page | 1. Click Cancel button | User is redirected back to shopping cart page | Medium |
| CH009 | Verify checkout information form accepts valid input data | User is on checkout information page | 1. Enter valid First Name 2. Enter valid Last Name 3. Enter valid Postal Code 4. Click Continue button | User proceeds to checkout overview page successfully | Medium |

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