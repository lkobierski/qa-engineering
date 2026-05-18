# Authentication Test Cases — Positive Scenarios

This document contains positive test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify username, password and login button visibility | User is on the login page | 1. Verify username, password and login button visibility | Username, password field and login button are visible and functional | High |
| L002 | Verify successful login using valid credentials | User is on the login page | 1. Enter valid username 2. Enter valid password 3. Click Login button | User is logged in and inventory page is displayed | High |
| L003 | Verify authenticated user session is maintained after login | User is logged in | 1. Verify authenticated content is visible and functional  | Authenticated content is visible and functional | High |
| L004 | Verify product list visibility after login | User is logged in | 1. Verify product list visibility | Product list is displayed | High |
| L005 | Verify user is redirected to the inventory page after successful login | User is on the login page | 1. Enter valid username and password 2. Click login button | User is redirected to the inventory page | High |
| L006 | Verify redirected page URL after successful login | User is on the login page | 1. Enter valid username and password 2. Click login button 3. Verify URL of redirected page | Displayed URL matches inventory page URL | Medium |
| L007 | Verify page title after successful login | User is on the login page | 1. Enter valid username and password 2. Click login button 3. Verify page title | Page title is displayed correctly | Medium |
| L008 | Verify navigation elements are visible and functional | User is logged in | 1. Open burger menu 2. Verify navigation menu elements are visible 3. Click visible navigation menu elements | Navigation menu elements are visible and functioning correctly | Medium |
| L009 | Verify products are displayed in the product list | User is logged in | 1. Verify products are correctly displayed | Products are visible in the inventory list | High |
| L010 | Verify user can add items to the shopping cart | 1. User is logged in 2. Products are available 3. Shopping cart is working correctly | 1. Add products to the cart 2. Verify the products are added correctly | Products are visible in the shopping cart | High |
| L011 | Verify user remains logged in after page refresh | User is logged in | 1. Refresh page 2. Verify authenticated content is visible and user is still logged in | User remains logged in and authenticated content is visible | Medium |
| L012 | Verify successful log out | User is logged in | 1. Successfully log out | User sees login page, has no access to authenticated content and is logged out | High |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main positive authentication flow and verify successful access to the application.

Additional negative and edge-case scenarios will be covered in separate documentation files.
