Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');

  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains('[data-test="inventory-item"]', productName)
    .find('button')
    .click();
});