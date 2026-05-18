
# Authentication Test Cases — Negative Scenarios

This document contains negative test scenarios for the SauceDemo authentication functionality.

Application under test:

https://www.saucedemo.com

---

# Test Cases

| TC ID | Test Scenario | Preconditions | Test Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| L001 | Verify user cannot log in with an empty username | User is on the login page | 1. Leave username field empty<br>2. Enter valid password<br>3. Click Login button | User is not logged in and validation message for missing username is displayed | High |
| L002 | Verify user cannot log in with an empty password | User is on the login page | 1. Enter valid username<br>2. Leave password field empty<br>3. Click Login button | User is not logged in and validation message for missing password is displayed  | High |
| L003 | Verify user cannot log in with both empty username and password | User is on the login page | 1. Leave username and password fields empty<br>2. Click Login button | User is not logged in and validation message for missing credentials is displayed | High |
| L004 | Verify user cannot log in with a single whitespace character | User is on the login page | 1. Enter a single whitespace character in both username and password fields<br>2. Click Login button | User is not logged in and validation message is displayed | High |
| L005 | Verify user cannot log in with multiple whitespace characters | User is on the login page | 1. Enter multiple whitespace characters in both username and password fields<br>2. Click Login button | User is not logged in and validation message is displayed | High |
| L006 | Verify user cannot log in with invalid username | User is on the login page | 1. Enter invalid username<br>2. Enter valid password<br>3. Click Login button | User is not logged in and validation message is displayed | High |
| L007 | Verify user cannot log in with invalid password | User is on the login page | 1. Enter valid username<br>2. Enter invalid password<br>3. Click Login button | User is not logged in and validation message is displayed | High |
| L008 | Verify user cannot log in with invalid username and invalid password | User is on the login page | 1. Enter invalid username<br>2. Enter invalid password<br>3. Click Login button | User is not logged in and validation message is displayed | High |
| L009 | Verify user cannot log in with whitespace characters in the username  | User is on the login page | 1. Enter valid username with whitespace characters between username characters<br>2. Enter valid password<br>3. Click Login button | User is not logged in and validation message is displayed | High |
| L010 | Verify user cannot log in with whitespace characters in the password  | User is on the login page | 1. Enter valid username<br>2. Enter valid password with whitespace characters between password characters<br>3. Click Login button | User is not logged in and validation message is displayed | High |
 | L011 | Verify user cannot log in with SQL injection input | User is on the login page | 1. Enter SQL injection string in the username and password fields <br> 2. Click Login button | User is not logged in, validation message is displayed, SQL input is not executed and application handles it securely | High |
| L012 | Verify user cannot log in with uppercase username | User is on the login page | 1. Enter valid username using uppercase characters <br>2. Enter valid password<br>3. Click Login button | User is not logged in and validation message is displayed | High |
| L013 | Verify user cannot log in with uppercase password | User is on the login page | 1. Enter valid username<br>2. Enter valid password using uppercase characters<br>3. Click Login button | User is not logged in and validation message is displayed | High |
| L014 | Verify user cannot log in with special characters only | User is on the login page | 1. Enter special characters in username and password fields <br>2. Click Login button | User is not logged in and validation message is displayed | High |
| L015 | Verify locked out user cannot log in | User is on the login page | 1. Enter locked out username and password <br>2. Click Login button | User is not logged in and validation message is displayed | High |

---

# Test Data

| Username | Password |
|---|---|
| standard_user | secret_sauce |

---

# Notes

The purpose of these test cases is to validate the main negative authentication flow and verify successful access to the application.
