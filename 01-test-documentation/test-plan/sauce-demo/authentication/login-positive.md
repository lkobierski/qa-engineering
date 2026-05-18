# Authentication Test Cases — Positive Scenarios

This document contains positive test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify successful login using valid credentials | User is on the Login page | 1. Enter valid username and password\ 2. Click Login button | User is logged in and inventory page is displayed | High |
| L002 | Verify authenticated user session is maintained after login | User is on the Login page | 1. Enter valid username and password 2. Click Login button 3. Verify authenticated content is visible and functional  | Authenticated content is visible and functional | High |
| L003 | Verify product list visibility after successful login | User is on the Login page | 1. Enter valid username and password 2. Click Login button 3. Verify product list visibility | Product list is displayed | High |
| L004 | Verify user is redirected to the inventory page after login | User is on the Login page | 1. Enter valid username and password 2. Click Login button | User is redirected to the inventory page | High |
| L005 | Verify redirected page URL after login | User is on the Login page | 1. Enter valid username and password 2. Click Login button 3. Verify URL of redirected page | Displayed URL matches inventory page URL | Medium |
| L006 | Verify page title after login | User is on the Login page | 1. Enter valid username and password 2. Click Login button 3. Verify page title | Page title is displayed correctly | Medium |
| L007 | Verify navigation elements are visible and functional | User is logged in | 1. Open navigation menu 2. Verify navigation menu elements are visible 3. Click visible navigation menu elements | Navigation menu elements are visible and functioning correctly | Medium |
| L008 | Verify products are displayed in the product list | 1. User is logged in 2. User is on the inventory page | 1. Verify products are correctly displayed | Products are visible in the inventory list | High |
| L009 | Verify user can add items to the shopping cart | 1. User is logged in 2. User is on the inventory page 3. Products are available 4. Shopping cart is working correctly | 1. Add products to the cart 2. Click shopping cart icon 2. Verify the products are added correctly | Added products are visible in the shopping cart | High |
| L010 | Verify user remains logged in after page refresh | User is logged in | 1. Refresh page 2. Verify authenticated content is visible and user is still logged in | User remains logged in and authenticated content is visible | Medium |
| L011 | Verify successful log out | User is logged in | 1. Navigate to Logout button 2. Click Logout button | User is redirected to login page, has no access to authenticated content and is logged out | High |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main positive authentication flow and verify successful access to the application.

Additional negative and edge-case scenarios will be covered in separate documentation files.
