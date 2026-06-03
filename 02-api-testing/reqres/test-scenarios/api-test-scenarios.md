# Reqres API Test Scenarios

This document contains API test scenarios for the Reqres public REST API.

API under test:

https://reqres.in

---

# Test Scope

The following API areas are covered:

- Users
- User details
- User creation
- User update
- User deletion
- Login
- Register
- Negative scenarios

---

# Test Data

| Data Type | Value |
|---|---|
| Base URL | https://reqres.in/api |
| Existing User ID | 2 |
| Non-existing User ID | 999 |
| Valid Email | eve.holt@reqres.in |
| Valid Password | cityslicka |
| Invalid Email | invalid@example.com |

---

# API Test Scenarios

| TC ID | Method | Endpoint | Test Scenario | Preconditions | Request Data | Expected Result | Priority |
|---|---|---|---|---|---|---|---|
| API-001 | GET | /users?page=2 | Verify user list can be retrieved | API is available | None | Response status is 200 and user list is returned | High |
| API-002 | GET | /users/2 | Verify single existing user can be retrieved | Existing user ID is available | None | Response status is 200 and user details are returned | High |
| API-003 | GET | /users/999 | Verify response for non-existing user | Non-existing user ID is used | None | Response status is 404 and no user data is returned | High |
| API-004 | POST | /users | Verify user can be created with valid payload | API is available | name, job | Response status is 201 and created user data is returned | High |
| API-005 | PUT | /users/2 | Verify user can be fully updated | Existing user ID is available | name, job | Response status is 200 and updated user data is returned | Medium |
| API-006 | PATCH | /users/2 | Verify user can be partially updated | Existing user ID is available | job | Response status is 200 and updated field is returned | Medium |
| API-007 | DELETE | /users/2 | Verify existing user can be deleted | Existing user ID is available | None | Response status is 204 and response body is empty | High |
| API-008 | POST | /login | Verify successful login with valid credentials | Valid credentials are available | email, password | Response status is 200 and token is returned | High |
| API-009 | POST | /login | Verify login fails without password | Valid email is available | email only | Response status is 400 and error message is returned | High |
| API-010 | POST | /register | Verify successful registration with valid data | Valid registration data is available | email, password | Response status is 200 and token is returned | High |
| API-011 | POST | /register | Verify registration fails without password | Valid email is available | email only | Response status is 400 and error message is returned | High |
| API-012 | GET | /unknown | Verify resource list can be retrieved | API is available | None | Response status is 200 and resource list is returned | Medium |
| API-013 | GET | /unknown/2 | Verify single resource can be retrieved | Existing resource ID is available | None | Response status is 200 and resource details are returned | Medium |
| API-014 | GET | /unknown/999 | Verify response for non-existing resource | Non-existing resource ID is used | None | Response status is 404 and no resource data is returned | Medium |

---

# Validation Points

During API testing, the following elements should be verified:

- Status code
- Response time
- Response body structure
- Required JSON fields
- Error messages
- Empty response body for DELETE request
- Token presence for successful login/register
- Correct behavior for negative scenarios

---

# Notes

These scenarios are designed for manual API testing using Postman. They will be later covered by a Postman collection with request-level assertions.