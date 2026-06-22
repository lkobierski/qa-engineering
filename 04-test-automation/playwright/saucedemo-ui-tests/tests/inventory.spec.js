// @ts-check
const { test, expect } = require('@playwright/test');
const { testData } = require('../data/test-data');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');

test.describe('SauceDemo Inventory', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      testData.users.standardUser.username,
      testData.users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory.html/);
  });

  test('should display products page after login', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(inventoryPage.pageTitle).toHaveText('Products');
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test('should display product details', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    const product = inventoryPage.getProductByName(testData.products.backpack.name);

    await expect(product).toBeVisible();
    await expect(product).toContainText(testData.products.backpack.name);
    await expect(product).toContainText(testData.products.backpack.price);
  });

  test('should add product to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart(testData.products.backpack.name);

    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
  });

  test('should add multiple products to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addProductToCart(testData.products.backpack.name);
    await inventoryPage.addProductToCart(testData.products.bikeLight.name);

    await expect(inventoryPage.shoppingCartBadge).toHaveText('2');
  });

  test('should sort products by name descending', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortProducts(testData.sortOptions.nameDesc);

    await expect(inventoryPage.inventoryItems.first()).toContainText('Test.allTheThings() T-Shirt (Red)');
  });

  test('should sort products by price ascending', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.sortProducts(testData.sortOptions.priceAsc);

    await expect(inventoryPage.inventoryItems.first()).toContainText('Sauce Labs Onesie');
  });
});