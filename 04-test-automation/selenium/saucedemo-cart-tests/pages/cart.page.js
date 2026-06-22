const { By } = require('selenium-webdriver');

class CartPage {
  constructor(driver) {
    this.driver = driver;

    this.cartItems = By.css('[data-test="inventory-item"]');
    this.itemName = By.css('[data-test="inventory-item-name"]');
    this.itemPrice = By.css('[data-test="inventory-item-price"]');
    this.removeButton = By.css('[data-test^="remove"]');
    this.continueShoppingButton = By.css('[data-test="continue-shopping"]');
  }

  async getCartItemsCount() {
    const items = await this.driver.findElements(this.cartItems);

    return items.length;
  }

  async getProductName() {
    return await this.driver.findElement(this.itemName).getText();
  }

  async getProductPrice() {
    return await this.driver.findElement(this.itemPrice).getText();
  }

  async removeProduct() {
    await this.driver.findElement(this.removeButton).click();
  }

  async continueShopping() {
    await this.driver.findElement(this.continueShoppingButton).click();
  }
}

module.exports = { CartPage };