# CI/CD

This section contains CI/CD examples.

The purpose of this section is to demonstrate understanding of continuous integration / continuous deployment from a QA perspective, using GitHub Actions to run automated tests.


## Repository Structure

| Section | Workflow | Content |
|---|---|---|
| CI |  [Playwright Test SauceDemo](./github-actions/ci-playwright-saucedemo) | GitHub Actions CI workflow for SauceDemo UI tests |
| CI/CD | [Playwright Test Report ReqRes](./github-actions/ci-cd-reqres-api) | GitHub Actions CI/CD workflow for tests and deploying ReqResAPI HTML test report |

## Status

![Status](https://github.com/lkobierski/qa-engineering/actions/workflows/ci-playwright-sauce-demo-tests.yml/badge.svg)

![Status](https://github.com/lkobierski/qa-engineering/actions/workflows/ci-cd-reqres-api-tests-report-deploy.yml/badge.svg)

## Scope

This section focuses on:

- basic CI/CD concepts
- creating a GitHub Actions workflow
- running automated tests in CI/CD
- installing project dependencies
- reviewing CI/CD results in GitHub
- deploying HTML test report page using GitHub Pages


## Tools

| Area | Tool |
|---|---|
| CI/CD | GitHub Actions, GitHub Pages |
| Test Automation | Playwright, Cypress |
| Runtime | Node.js |
| Version Control | Git, GitHub |