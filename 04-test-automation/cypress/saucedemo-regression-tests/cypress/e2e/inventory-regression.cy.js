describe('SauceDemo Inventory Regression', () => {
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

  it('should display products page', () => {
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.get('[data-test="inventory-item"]').should('have.length', 6);
  });

  it('should sort products by name descending', () => {
    cy.get('[data-test="product-sort-container"]').select(
      testData.sortOptions.nameDesc
    );

    cy.get('[data-test="inventory-item"]')
      .first()
      .should('contain.text', 'Test.allTheThings() T-Shirt (Red)');
  });

  it('should sort products by price ascending', () => {
    cy.get('[data-test="product-sort-container"]').select(
      testData.sortOptions.priceAsc
    );

    cy.get('[data-test="inventory-item"]')
      .first()
      .should('contain.text', testData.products.onesie.name)
      .and('contain.text', testData.products.onesie.price);
  });
});
