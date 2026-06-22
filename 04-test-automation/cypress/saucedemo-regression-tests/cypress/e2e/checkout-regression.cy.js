describe('SauceDemo Checkout Regression', () => {
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

    cy.addProductToCart(testData.products.backpack.name);
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('should require first name during checkout', () => {
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should(
      'have.text',
      testData.messages.missingFirstNameError
    );
  });

  it('should require last name during checkout', () => {
    cy.get('[data-test="firstName"]').type(testData.customer.firstName);
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should(
      'have.text',
      testData.messages.missingLastNameError
    );
  });

  it('should require postal code during checkout', () => {
    cy.get('[data-test="firstName"]').type(testData.customer.firstName);
    cy.get('[data-test="lastName"]').type(testData.customer.lastName);
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]').should(
      'have.text',
      testData.messages.missingPostalCodeError
    );
  });

  it('should complete checkout successfully', () => {
    cy.get('[data-test="firstName"]').type(testData.customer.firstName);
    cy.get('[data-test="lastName"]').type(testData.customer.lastName);
    cy.get('[data-test="postalCode"]').type(testData.customer.postalCode);
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="inventory-item-name"]').should(
      'have.text',
      testData.products.backpack.name
    );

    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('[data-test="complete-header"]').should(
      'have.text',
      'Thank you for your order!'
    );
  });
});
