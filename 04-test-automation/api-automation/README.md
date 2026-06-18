# API Automation

This folder contains automated API tests created as part of QA portfolio development.

The purpose of this section is to demonstrate how manual API testing scenarios can be converted into automated tests using code.

---

# Purpose

The goal of API automation is to validate API behavior in a repeatable way, without running requests manually in Postman.

Automated API tests focus on:

- HTTP status code validation
- response body validation
- required JSON field validation
- positive and negative API scenarios
- authentication endpoint validation
- reusable test structure
- test execution from command line

---

# Tools

| Area | Tool |
|---|---|
| API Automation | Playwright API Testing |
| Programming Language | JavaScript |
| Runtime | Node.js |
| Test Runner | Playwright Test |
| Version Control | Git, GitHub |

---

# Planned Project

| Project | API | Description | Status |
|---|---|---|---|
| Reqres API Tests | https://reqres.in | Automated API tests for users and authentication endpoints | Planned |

---

# Test Scope

The first API automation project will cover selected Reqres endpoints:

| Area | Example Tests |
|---|---|
| Users | Get users list, get single user, get non-existing user |
| Authentication | Successful login, login without password |
| User Management | Create user, update user, delete user |

---

# Automation Approach

The tests will be created based on previously prepared API testing documentation and Postman scenarios.

The workflow is:

```text
API analysis
→ test scenarios
→ Postman collection
→ automated API tests
→ test execution results
```

---

# Notes

This section focuses on practical API automation basics.

The goal is not to build a complex framework at the beginning, but to create clear, reliable and maintainable API tests that can be run from the command line.