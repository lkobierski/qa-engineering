# Reqres API Analysis

This document contains basic API analysis for the Reqres public REST API.

API under test:

https://reqres.in

## Base URL

```text
https://reqres.in/api
```

## Endpoint Overview

| Area | Method | Endpoint | Description |
|---|---|---|---|
| Users | GET | /users?page=2 | Get list of users |
| Users | GET | /users/{id} | Get single user |
| Users | POST | /users | Create user |
| Users | PUT | /users/{id} | Update user |
| Users | PATCH | /users/{id} | Partially update user |
| Users | DELETE | /users/{id} | Delete user |
| Authentication | POST | /login | User login |
| Authentication | POST | /register | User registration |
| Resources | GET | /unknown | Get resource list |
| Resources | GET | /unknown/{id} | Get single resource |

## Expected Status Codes

| Status Code | Meaning | Example |
|---|---|---|
| 200 | OK | GET user, login, register |
| 201 | Created | POST create user |
| 204 | No Content | DELETE user |
| 400 | Bad Request | Missing password or invalid request |
| 404 | Not Found | Non-existing user or resource |

## Example Request Bodies

## Create User

```json
{
  "name": "John",
  "job": "QA Engineer"
}
```

## Update User

```json
{
  "name": "John",
  "job": "Senior QA Engineer"
}
```

## Login

```json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

## Login Without Password

```json
{
  "email": "eve.holt@reqres.in"
}
```

## Register

```json
{
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}
```

## Response Validation Points

During API testing, the following response elements should be verified:

- HTTP status code
- Response body structure
- Required JSON fields
- Response data types
- Error messages
- Token presence for successful login/register
- Empty response body for DELETE request
- Response time
- Behavior for invalid IDs
- Behavior for missing required fields

## Example JSON Fields to Validate

## User Object

| Field | Expected Type |
|---|---|
| id | number |
| email | string |
| first_name | string |
| last_name | string |
| avatar | string |

## Create / Update User Response

| Field | Expected Type |
|---|---|
| name | string |
| job | string |
| id | string |
| createdAt | string |
| updatedAt | string |

## Authentication Response

| Field | Expected Type |
|---|---|
| token | string |

## Error Response

| Field | Expected Type |
|---|---|
| error | string |

## Negative Scenarios to Cover

- Requesting non-existing user
- Requesting non-existing resource
- Login without password
- Register without password
- Sending empty request body
- Sending invalid field values
- Using unsupported HTTP methods where applicable

---

## Risks / Notes

- Reqres is a public demo API, so created or updated data is not permanently stored.
- Some endpoints simulate successful operations without real database persistence.
- API behavior should be validated based on documented response examples.
- Response times may vary because the API is publicly available.
