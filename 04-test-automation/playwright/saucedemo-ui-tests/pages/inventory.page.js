class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  async addProductToCart(productName) {
    const product = this.inventoryItems.filter({
      hasText: productName
    });

    await product.locator('button').click();
  }

  async sortProducts(option) {
    await this.sortDropdown.selectOption(option);
  }

  getProductByName(productName) {
    return this.inventoryItems.filter({
      hasText: productName
    });
  }
}

module.exports = { InventoryPage };