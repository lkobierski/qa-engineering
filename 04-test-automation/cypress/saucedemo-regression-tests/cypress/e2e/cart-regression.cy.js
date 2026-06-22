describe('SauceDemo Cart Regression', () => {
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.login(
      testData.users.standardUser.username,
      testData.users.standardUser.password
    );
  });

  it('should add product to cart and update cart badge', () => {
    cy.addProductToCart(testData.products.backpack.name);

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
  });

  it('should display added product in cart', () => {
    cy.addProductToCart(testData.products.backpack.name);

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]').should(
      'have.text',
      testData.products.backpack.name
    );
    cy.get('[data-test="inventory-item-price"]').should(
      'have.text',
      testData.products.backpack.price
    );
  });

  it('should add multiple products to cart', () => {
    cy.addProductToCart(testData.products.backpack.name);
    cy.addProductToCart(testData.products.bikeLight.name);

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
  });
});
