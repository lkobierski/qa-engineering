# Authentication Test Cases — Positive Scenarios

This document contains positive test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Structure

L001 — Successful login with valid credentials <br>
L002 — Authenticated content visibility after login <br>
L003 — Redirect to inventory page after login <br>
L004 — Redirected URL verification after login <br>
L005 — Inventory page title verification after login <br>
L006 — Navigation elements visibility and functionality after login <br>
L007 — Session persistence after page refresh <br>
L008 — Successful logout <br>
L009 — Page load time after login <br>

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify successful login using valid credentials | User is on the login page | 1. Enter standard_user username<br>2. Enter valid password<br>3. Click Login button | User is logged in and inventory page is displayed | High |
| L002 | Verify authenticated content is visible after login | User is on the login page | 1. Enter standard_user username<br>2. Enter valid password<br>3. Click Login button<br>4. Verify authenticated content is visible and functional | Authenticated content is visible and functional, user session is active | High |
| L003 | Verify user is redirected to the inventory page after login | User is on the login page | 1. Enter standard_user username<br>2. Enter valid password<br>3. Click Login button | User is redirected to the inventory page | High |
| L004 | Verify redirected URL after login | User is on the login page | 1. Enter standard_user username<br>2. Enter valid password<br>3. Click Login button<br>4. Verify URL of redirected page | Displayed URL matches inventory page URL | Medium |
| L005 | Verify inventory page title after login | User is on the login page | 1. Enter standard_user username<br>2. Enter valid password<br>3. Click Login button<br>4. Verify page title | Page title is displayed correctly | Medium |
| L006 | Verify navigation elements are visible and functional after login | User is logged in | 1. Open navigation menu<br>2. Verify navigation menu elements are visible<br>3. Click available navigation menu elements | Navigation menu elements are visible and functioning correctly | Medium |
| L007 | Verify user remains logged in after page refresh | User is logged in | 1. Refresh page<br>2. Verify authenticated content is visible and user is still logged in | User remains logged in and authenticated content is visible | Medium |
| L008 | Verify successful logout | User is logged in | 1. Navigate to Logout button<br>2. Click Logout button | User is redirected to login page, cannot access authenticated content, and is logged out | High |
| L009 | Verify page load time after login | User is on the login page | 1. Enter standard_user username<br>2. Enter valid password<br>3. Click Login button | User is redirected to the inventory page and logged in, page load time is under 3 seconds | Medium |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main positive authentication flow and verify successful access to the application.

Additional negative and edge-case scenarios will be covered in separate documentation files.