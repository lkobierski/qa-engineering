const assert = require('assert');
const { Builder, until } = require('selenium-webdriver');
require('chromedriver');

const { testData } = require('../data/test-data');
const { LoginPage } = require('../pages/login.page');
const { InventoryPage } = require('../pages/inventory.page');
const { CartPage } = require('../pages/cart.page');

describe('SauceDemo Cart Tests', function () {
  this.timeout(30000);

  let driver;
  let loginPage;
  let inventoryPage;
  let cartPage;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();

    loginPage = new LoginPage(driver);
    inventoryPage = new InventoryPage(driver);
    cartPage = new CartPage(driver);

    await loginPage.open();
    await loginPage.login(
      testData.users.standardUser.username,
      testData.users.standardUser.password
    );

    await driver.wait(until.urlContains('inventory.html'), 5000);
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should add product to cart', async () => {
    await inventoryPage.addProductToCart(testData.products.backpack.name);

    const badgeText = await inventoryPage.getCartBadgeText();

    assert.strictEqual(badgeText, '1');
  });

  it('should add multiple products to cart', async () => {
    await inventoryPage.addProductToCart(testData.products.backpack.name);
    await inventoryPage.addProductToCart(testData.products.bikeLight.name);

    const badgeText = await inventoryPage.getCartBadgeText();

    assert.strictEqual(badgeText, '2');
  });

  it('should display added product in cart', async () => {
    await inventoryPage.addProductToCart(testData.products.backpack.name);
    await inventoryPage.openCart();

    await driver.wait(until.urlContains('cart.html'), 5000);

    const productName = await cartPage.getProductName();
    const productPrice = await cartPage.getProductPrice();

    assert.strictEqual(productName, testData.products.backpack.name);
    assert.strictEqual(productPrice, testData.products.backpack.price);
  });

  it('should remove product from cart', async () => {
    await inventoryPage.addProductToCart(testData.products.backpack.name);
    await inventoryPage.openCart();

    await driver.wait(until.urlContains('cart.html'), 5000);

    await cartPage.removeProduct();

    const cartItemsCount = await cartPage.getCartItemsCount();

    assert.strictEqual(cartItemsCount, 0);
  });

  it('should continue shopping from cart', async () => {
    await inventoryPage.addProductToCart(testData.products.backpack.name);
    await inventoryPage.openCart();

    await driver.wait(until.urlContains('cart.html'), 5000);

    await cartPage.continueShopping();

    await driver.wait(until.urlContains('inventory.html'), 5000);

    const currentUrl = await driver.getCurrentUrl();

    assert.ok(currentUrl.includes('inventory.html'));
  });
});