# Authentication Test Cases — Positive Scenarios

This document contains positive test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases


Verify username, password and login button visiblity
Verify successuful login using valid credidentials
Verify session is created correctly
Verify user is redirected to the inventory page after successful login
Verify URL after successful login
Verify page title after successful login
Verify navigation elements are visibile and accessibile
Verify products are displayed in the product list
Verify user can to add items to the shopping cart
Verify added items stay in the cart after page refresh
Verify user see elements visible only for a logged in user
Verify user remains logged in after page refresh
Verify successful log out
Verify session is terminated after logout





| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-LOGIN-001 | Verify username, password and login button visiblity | User is on login page | 1. Open login page | Username, password field and login button are visible and accessible | High |
| TC-LOGIN-002 | Verify successuful login using valid credidentials | User credentials are valid | 1. Login using valid credentials | User is logged in and inventory page is displayed | High |
| TC-LOGIN-003 | Verify authenticated user session is maintained after login | User is logged in | 1. Check if authenticated page and content are visible and accessible  | Authenticated content is visible and accesible | High |
| TC-LOGIN-004 | Verify product list visibility after successful login | User is logged in | 1. Login to application | Product list is displayed | High |
| TC-LOGIN-005 | Verify user is redirected to the inventory page after successful login | User is logged in | 1. Login successfully | Inventory page is displayed correctly | High |
| TC-LOGIN-006 | Verify URL after successful login | User is logged in | 1. Login successfuly | URL is as provided | High |
| TC-LOGIN-007 | Verify page title after successful login | User is logged in | 1. Login successfuly 2. Check if Page Title is as provided | Page Title is as provided | High |
| TC-LOGIN-009 | Verify navigation elements are visibile and accessibile | User is logged in | 1. Open burger menu 2. Check if navigation is complete and accessible | Navigation is complete and working correctly | High |
| TC-LOGIN-010 | Verify products are displayed in the product list | User is logged in | 1. Check if products are correctly displayed | Product list and products are visible | High |
| TC-LOGIN-011 | Verify user can to add items to the shopping cart | 1. User is logged in 2. Products are available 3. Shopping cart is working correctly | 1. Add products to the cart 2. Check if the products were added correctly | Products are visible in the shopping cart | High |
| TC-LOGIN-012 | Verify added items stay in the cart after page refresh | 1. User is logged in 2. Products are added to the cart | 1. Login successfully 2. Add procucts to the cart 3. Refresh page 4. Check if products are still visible in the cart | Products are visible in the shopping cart | Medium |
| TC-LOGIN-013 | Verify user remains logged in after page refresh | User is logged in | 1. Refresh page 2. Check if authenticated content is visible and user is still logged in | User is logged in | Medium |
| TC-LOGIN-014 | Verify successful log out | User is logged in | 1. Successfuly log out 2. enter login page | User see login page, has no access to authenticated content and is logged out. | Medium |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main positive authentication flow and verify successful access to the application.

Additional negative and edge-case scenarios will be covered in separate documentation files.