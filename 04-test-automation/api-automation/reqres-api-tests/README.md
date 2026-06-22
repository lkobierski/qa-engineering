# Reqres API Automated Tests

Automated API tests for the Reqres public REST API created with Playwright API Testing and JavaScript.

This project is a code-based continuation of the Reqres API testing work prepared in Postman.

---

## Application Under Test

```text
https://reqres.in
```

---

## Test Coverage

| Test File | Covered Area |
|---|---|
| tests/users.spec.js | Users list, single user, non-existing user, create, update and delete user |
| tests/auth.spec.js | Successful login and login without password |

---

## Installation

```bash
npm install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run selected test file:

```bash
npx playwright test tests/users.spec.js
```

Open HTML report:

```bash
npx playwright show-report
```

---

## Configuration

The project uses Reqres API base URL and API key configuration.

Private API keys are not hardcoded in the repository.

---

## Related Documentation

Manual API testing documentation and Postman collection are available in:

```text
02-api-testing/reqres/
```

## Attachments

![ReqRes API Automated Tests Result](./attachments/reqres-tests-result.png) 