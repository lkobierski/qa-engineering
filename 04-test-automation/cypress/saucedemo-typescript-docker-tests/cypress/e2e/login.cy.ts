import type { User, UsersFixture } from '../types/user';



describe('SauceDemo login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const login = (user: User): void => {
        cy.get('[data-test="username"]').type(user.username);
        cy.get('[data-test="password"]').type(user.password);
	cy.get('[data-test="login-button"]').click();
  };

  it('should log in with valid credentials', () => {
    cy.fixture<UsersFixture>('users').then((users) => {

	login(users.standardUser)

      cy.url().should('include', '/inventory.html');
    });
  });

  it('should display an error for invalid credentials', () => {
    cy.fixture<UsersFixture>('users').then((users) => {

	login(users.invalidUser)

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Username and password do not match');
    });
  });
});