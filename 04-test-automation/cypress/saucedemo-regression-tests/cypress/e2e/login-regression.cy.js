describe('SauceDemo Login Regression', () => {
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should login successfully with valid credentials', () => {
    cy.login(
      testData.users.standardUser.username,
      testData.users.standardUser.password
    );

    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });

  it('should show error for locked out user', () => {
    cy.login(
      testData.users.lockedOutUser.username,
      testData.users.lockedOutUser.password
    );

    cy.get('[data-test="error"]').should(
      'have.text',
      testData.messages.lockedOutUserError
    );
  });

  it('should show error for invalid credentials', () => {
    cy.login(
      testData.users.invalidUser.username,
      testData.users.invalidUser.password
    );

    cy.get('[data-test="error"]').should(
      'have.text',
      testData.messages.invalidCredentialsError
    );
  });
});
