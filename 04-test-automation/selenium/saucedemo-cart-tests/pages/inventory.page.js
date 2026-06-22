const { By } = require('selenium-webdriver');

class InventoryPage {
  constructor(driver) {
    this.driver = driver;

    this.pageTitle = By.css('[data-test="title"]');
    this.inventoryItems = By.css('[data-test="inventory-item"]');
    this.shoppingCartBadge = By.css('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = By.css('[data-test="shopping-cart-link"]');
  }

  async addProductToCart(productName) {
    const productXpath = `//div[@data-test="inventory-item"][.//div[text()="${productName}"]]`;
    const product = await this.driver.findElement(By.xpath(productXpath));
    const addButton = await product.findElement(By.css('button'));

    await addButton.click();
  }

  async openCart() {
    await this.driver.findElement(this.shoppingCartLink).click();
  }

  async getCartBadgeText() {
    return await this.driver.findElement(this.shoppingCartBadge).getText();
  }
}

module.exports = { InventoryPage };