# Authentication Test Cases — Positive Scenarios

This document contains positive test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify user cannot log in with an empty username | User is on the login page | 1. Leave username field empty 2. Enter valid password 3. Click Login button | User is not logged in and validation message for missing username is displayed | High |
| L002 | Verify user cannot log in with an empty password | User is on the login page | 1. Enter valid username 2. Leave password field empty 3. Click Login button | User is not logged in and validation message for missing password is displayed  | High |
| L003 | Verify user cannot log in with both empty username and password | User is on the login page | 1. Leave username field empty 2. Leave password field empty 3. Click Login button | User is not logged in and validation message for missing credentials is displayed | High |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main positive authentication flow and verify successful access to the application.

Additional negative and edge-case scenarios will be covered in separate documentation files.
