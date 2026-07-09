# k6 Summary Report - JSONPlaceholder API Load Test

## Test Objective

The objective of this test was to perform a basic API load test using k6 and verify that selected JSONPlaceholder endpoints respond correctly under light load.

| File | Description |
|---|---|
|[jsonplaceholder-api-load-test.js](./tests/jsonplaceholder-api-load-test.js) | JSONPlaceholder API tests |
|[k6-test-plan.md](./test-plan/k6-test-plan.md) | Test Plan |

Detailed results are available here:
| File | Description |
|---|---|
|[k6-summary.txt](./results/k6-summary.txt) | Text file test repost |
|[k6-html-report.html](./results/k6-html-report.html) | HTML test report |


## Scope

Tested endpoints:

- GET /posts
- GET /posts/1
- POST /posts

## Load Configuration

- Virtual users: 10
- Duration: 30 seconds
- Tool: k6
- Test type: Basic API load test

## Validations

The test validates:

- HTTP status codes
- response body structure
- basic response correctness

## Thresholds

Configured thresholds:

- HTTP request failure rate below 1%
- 95% of requests should complete below 1000 ms

## Result Summary

The test was executed successfully.

## Attachments

![JSONPlaceholder Test Results Screenshot](./attachments/jsonplaceholder-api-test-k6.png)