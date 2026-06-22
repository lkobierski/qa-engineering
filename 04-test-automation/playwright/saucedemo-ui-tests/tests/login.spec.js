// @ts-check
const { test, expect } = require('@playwright/test');
const { testData } = require('../data/test-data');
const { LoginPage } = require('../pages/login.page');

test.describe('SauceDemo Login', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      testData.users.standardUser.username,
      testData.users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);
    await expect(loginPage.pageTitle).toHaveText('Products');
  });

  test('should show error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      testData.users.lockedOutUser.username,
      testData.users.lockedOutUser.password
    );

    await expect(loginPage.errorMessage).toHaveText(
      testData.messages.lockedOutUserError
    );
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      testData.users.invalidUser.username,
      testData.users.invalidUser.password
    );

    await expect(loginPage.errorMessage).toHaveText(
      testData.messages.invalidCredentialsError
    );
  });

  test('should show error when username is missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.fillPassword(testData.users.standardUser.password);
    await loginPage.submit();

    await expect(loginPage.errorMessage).toHaveText(
      testData.messages.missingUsernameError
    );
  });

  test('should show error when password is missing', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.fillUsername(testData.users.standardUser.username);
    await loginPage.submit();

    await expect(loginPage.errorMessage).toHaveText(
      testData.messages.missingPasswordError
    );
  });
});