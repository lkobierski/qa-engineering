# Playwright Tests Workflow

This project contains a GitHub Actions workflow for running Playwright UI tests.

The workflow is designed for the existing Playwright project:

```text
04-test-automation/playwright/saucedemo-ui-tests
```

---

## Workflow File

The workflow file is available here:

[playwright.yml](./playwright.yml)

In a real repository, this file should be placed in:

```text
.github/workflows/playwright.yml
```

---

## What the Workflow Does

The workflow performs the following steps:

1. checks out the repository
2. sets up Node.js
3. installs project dependencies
4. installs Playwright browsers
5. runs Playwright tests

---

## Trigger

The workflow runs on:

- push to `main`
- pull request to `main`

---

## Project Path

The workflow uses the following working directory:

```text
04-test-automation/playwright/saucedemo-ui-tests
```

This means all commands are executed inside the Playwright test project.

---

## Main Commands

```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

---

## Example Workflow Location

For GitHub Actions to run this workflow, copy:

```text
06-ci-cd/github-actions/playwright-tests-workflow/playwright.yml
```

to:

```text
.github/workflows/playwright.yml
```

---

## Notes

This is a basic CI example for a QA portfolio.

The goal is to show how automated tests can be connected with GitHub Actions and executed automatically after code changes.
