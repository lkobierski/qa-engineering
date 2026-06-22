// @ts-check
const { test, expect } = require('@playwright/test');
const { testData } = require('../data/test-data');

test.describe('SauceDemo Login', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="username"]').fill(testData.users.standardUser.username);
    await page.locator('[data-test="password"]').fill(testData.users.standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('should show error for locked out user', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="username"]').fill(testData.users.lockedOutUser.username);
    await page.locator('[data-test="password"]').fill(testData.users.lockedOutUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText(
      testData.messages.lockedOutUserError
    );
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="username"]').fill(testData.users.invalidUser.username);
    await page.locator('[data-test="password"]').fill(testData.users.invalidUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText(
      testData.messages.invalidCredentialsError
    );
  });

  test('should show error when username is missing', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="password"]').fill(testData.users.standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText(
      testData.messages.missingUsernameError
    );
  });

  test('should show error when password is missing', async ({ page }) => {
    await page.goto('/');

    await page.locator('[data-test="username"]').fill(testData.users.standardUser.username);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText(
      testData.messages.missingPasswordError
    );
  });
});