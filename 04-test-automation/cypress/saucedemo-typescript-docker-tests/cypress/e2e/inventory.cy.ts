import type { User, UsersFixture } from '../types/user';

const login = (user: User): void => {
      cy.get('[data-test="username"]').type(user.username);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('[data-test="login-button"]').click();
};

describe('SauceDemo inventory', () => {
  beforeEach(() => {
    cy.fixture<UsersFixture>('users').then((users) => {
       cy.visit('/');
       login(users.standardUser);
    });
  });



   it('should add the first product to the cart', () => {

    cy.get('.inventory_item')
      .first()
      .then(($product) => {
	const productName: string = $product
	.find('.inventory_item_name')
        .text();
      

    cy.wrap($product)	
      .find('button')
      .click();

    cy.get('[data-test="shopping-cart-link"]').click();


    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', '1');

    cy.get('[data-test="inventory-item-name"]')
      .should('have.text', productName);

      });
   });




   it('should add each product to the cart', () => {

    cy.get('.inventory_item').then(($products) => {

	const productCount: number = $products.length;
	

      cy.wrap($products).each(($product) => {
	cy.wrap($product)
	  .find('button')
	  .click();
      });

    cy.get('[data-test="shopping-cart-badge"]')
      .should('have.text', String(productCount));   
 
    cy.get('[data-test="shopping-cart-link"]').click();

    });
   });
});