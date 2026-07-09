# Performance Testing

This section contains performance testing examples.

The purpose of this section is to demonstrate basic performance testing skills, including load test planning, API performance checks, and result documentation.


## Repository Structure

| Tool | Section | Content |
|---|---|---|
| Apache JMeter | [reqres-load-test](./jmeter/reqres-load-test/) | Basic API load test for the Reqres API |
| Grafana k6 | [jsonplaceholder-load-test](./k6/jsonplaceholder-load-test) | Basic API load test for the JSONPlaceholder API |

## Tools

| Area | Tool |
|---|---|
| Performance Testing | Apache JMeter, Grafana k6 |
| Test Target | Reqres API, JSONPlaceholder |
| Documentation | Markdown |
| Version Control | Git, GitHub |

## Scope

This section focuses on:

- creating a basic test plan
- testing API response times under load
- validating response status codes
- measuring average response time
- reviewing throughput and error rate
- documenting performance test results

## Test Target

The examples are based on the public API.

### ReqRes API
- `GET /api/users?page=2`
- `GET /api/users/2`
- `POST /api/users`

### JSONPlaceholder API
- `GET /posts`
- `GET /posts/1`
- `POST /posts`



