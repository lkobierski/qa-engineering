# Performance Testing

This section contains performance testing examples created as part of a QA engineering portfolio.

The purpose of this section is to demonstrate basic performance testing skills using Apache JMeter, including load test planning, API performance checks, and result documentation.

---

## Repository Structure

| Section | Content |
|---|---|
| [reqres-load-test with JMeter](./jmeter/reqres-load-test/) | Basic API load test for the Reqres API |

---

## Scope

This section focuses on:

- creating a basic JMeter test plan
- testing API response times under load
- validating response status codes
- measuring average response time
- reviewing throughput and error rate
- documenting performance test results

---

## Tools

| Area | Tool |
|---|---|
| Performance Testing | Apache JMeter |
| Test Target | Reqres API |
| Documentation | Markdown |
| Version Control | Git, GitHub |

---

## Test Target

The examples are based on the public Reqres API.

Covered endpoints:

- `GET /api/users?page=2`
- `GET /api/users/2`
- `POST /api/users`

