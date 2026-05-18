
# Authentication Test Cases — Negative Scenarios

This document contains negative test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify user cannot log in with an empty username | User is on the login page | 1. Leave username field empty 2. Enter valid password 3. Click Login button | User is not logged in and validation message for missing username is displayed | High |
| L002 | Verify user cannot log in with an empty password | User is on the login page | 1. Enter valid username 2. Leave password field empty 3. Click Login button | User is not logged in and validation message for missing password is displayed  | High |
| L003 | Verify user cannot log in with both empty username and password | User is on the login page | 1. Leave username and password fields empty 3. Click Login button | User is not logged in and validation message for missing credentials is displayed | High |
| L004 | Verify user cannot log in with a single whitespace character | User is on the login page | 1. Enter single whitespace characters in both username and password fields 2. Click Login button | User is not logged in and validation message for missing user is displayed | High |
| L005 | Verify user cannot log in with multiple whitespace characters | User is on the login page | 1. Enter multiple whitespace characters in both username and password fields 2. Click Login button | User is not logged in and validation message for missing user is displayed | High |
---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main negative authentication flow and verify successful access to the application.
