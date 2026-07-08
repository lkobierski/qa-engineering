# CI/CD

This section contains CI/CD examples created as part of a QA engineering portfolio.

The purpose of this section is to demonstrate basic understanding of continuous integration from a QA perspective, using GitHub Actions to run automated tests.

---

## Repository Structure

| Section | Content |
|---|---|
| [github-actions](./github-actions/) | GitHub Actions workflow examples |
| [playwright-tests-workflow](./github-actions/playwright-tests-workflow/) | Workflow for running Playwright UI tests |

---

## Scope

This section focuses on:

- understanding basic CI/CD concepts
- creating a GitHub Actions workflow
- running automated tests in CI
- installing project dependencies
- executing Playwright tests automatically
- reviewing CI results in GitHub

---

## Tools

| Area | Tool |
|---|---|
| CI/CD | GitHub Actions |
| Test Automation | Playwright |
| Runtime | Node.js |
| Version Control | Git, GitHub |

---

## Workflow Example

The included workflow runs Playwright tests from the existing automation project:

```text
04-test-automation/playwright/saucedemo-ui-tests
```

The workflow can be used as an example of how automated tests can be executed after code changes.

---

## Notes

This section is focused on basic CI/CD usage from a QA perspective.

The goal is not to demonstrate advanced deployment pipelines, but to show how automated tests can be integrated into a GitHub Actions workflow.
