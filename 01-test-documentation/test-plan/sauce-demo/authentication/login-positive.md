# Authentication Test Cases — Positive Scenarios

This document contains positive test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify username, password and login button visibility | Login page is working | 1. Open login page | Username, password field and login button are visible and accessible | High |
| L002 | Verify successful login using valid credidentials | User credentials are valid | 1. Login using valid credentials | User is logged in and inventory page is displayed | High |
| L003 | Verify authenticated user session is maintained after login | User is logged in | 1. Check if authenticated page and content are visible and accessible  | Authenticated content is visible and accessible | High |
| L004 | Verify product list visibility after successful login | User is logged in | 1. Login to application | Product list is displayed | High |
| L005 | Verify user is redirected to the inventory page after successful login | User is logged in | 1. Login successfully | Inventory page is displayed correctly | High |
| L006 | Verify URL after successful login | User is logged in | 1. Login successfully | Correct inventory page URL is displayed | Medium |
| L007 | Verify page title after successful login | User is logged in | 1. Login successfuly 2. Check page title | Correct page title is displayed | Medium |
| L008 | Verify navigation elements are visible and accessible | User is logged in | 1. Open burger menu 2. Check if navigation is complete and accessible | Navigation is complete and working correctly | High |
| L010 | Verify products are displayed in the product list | User is logged in | 1. Check if products are correctly displayed | Product list and products are visible | High |
| L011 | Verify user can add items to the shopping cart | 1. User is logged in 2. Products are available 3. Shopping cart is working correctly | 1. Add products to the cart 2. Check if the products were added correctly | Products are visible in the shopping cart | High |
| L012 | Verify added items stay in the cart after page refresh | 1. User is logged in 2. Products are added to the cart | 1. Login successfully 2. Add products to the cart 3. Refresh page 4. Check if products are still visible in the cart | Products are visible in the shopping cart | Medium |
| L013 | Verify user remains logged in after page refresh | User is logged in | 1. Refresh page 2. Check if authenticated content is visible and user is still logged in | User is logged in | Medium |
| L014 | Verify successful log out | User is logged in | 1. Successfuly log out 2. enter login page | User sees login page, has no access to authenticated content and is logged out. | High |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main positive authentication flow and verify successful access to the application.

Additional negative and edge-case scenarios will be covered in separate documentation files.
