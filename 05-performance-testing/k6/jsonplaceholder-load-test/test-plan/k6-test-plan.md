# k6 Test Plan - JSONPlaceholder API Load Test

## Objective

The objective of this test is to perform a basic API load test using k6 and verify that selected JSONPlaceholder endpoints respond correctly under light load.

This is a portfolio-level performance testing example focused on:

- API availability
- response correctness
- HTTP status validation
- basic response time thresholds
- error rate monitoring

## Tested API

Base URL:

```text
https://jsonplaceholder.typicode.com
```

## Scope

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/posts` | Retrieve a list of posts |
| GET | `/posts/1` | Retrieve a single post |
| POST | `/posts` | Create a new post |

## Load Configuration

| Parameter | Value |
|---|---|
| Tool | k6 |
| Virtual users | 10 |
| Duration | 30 seconds |
| Think time | 1 second |
| Script | `tests/jsonplaceholder-api-load-test.js` |

## Test Scenario

Each virtual user executes:

1. `GET /posts`
2. `GET /posts/1`
3. `POST /posts`
4. validation checks for status codes and response body
5. 1 second pause before the next iteration

## Checks

| Request | Expected Result |
|---|---|
| GET `/posts` | Status code `200` and response contains data |
| GET `/posts/1` | Status code `200` and response contains ID `1` |
| POST `/posts` | Status code `201` and response contains ID |

## Thresholds

| Metric | Threshold |
|---|---|
| `http_req_failed` | `rate<0.01` |
| `http_req_duration` | `p(95)<1000` |

## Expected Result

The test is considered successful when:

- all checks pass
- request failure rate is below 1%
- 95% of requests complete below 1000 ms
- the test finishes without critical errors

## Notes

JSONPlaceholder is a public fake REST API, so this test is intended for learning and portfolio purposes.
