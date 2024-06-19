import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the customer has added products to the cart', () => {
    cy.visit('/')
    cy.get('.product-layout').first().within(() => {
      cy.get('.button-group button').first().click();
    });
    cy.get('.product-layout').eq(1).within(() => {
      cy.get('.button-group button').first().click();
    });
  });


  When('the customer navigates to the cart page', () => {
    cy.get('#cart-total').click();
    cy.get('#cart > ul > li > p > a').click();
  });
  
  Then('they should see a list of added products with their names, images, prices, quantities, and subtotal', () => {
    cy.get('.table-bordered tbody tr').should('have.length', 2);
  
    cy.get('.table-bordered tbody tr').eq(0).within(() => {
      cy.get('.text-left').eq(1).should('contain', 'MacBook'); 
      cy.get('img').should('be.visible');
      cy.get('.text-right').eq(0).should('contain', '$602.00'); 
      cy.get('input').should('have.value', '1');
      cy.get('.text-right').eq(1).should('contain', '$602.00'); 
    });
  
    cy.get('.table-bordered tbody tr').eq(1).within(() => {
      cy.get('.text-left').eq(1).should('contain', 'iPhone'); 
      cy.get('img').should('be.visible');
      cy.get('.text-right').eq(0).should('contain', '$123.20');
      cy.get('input').should('have.value', '1');
      cy.get('.text-right').eq(1).should('contain', '$123.20');
    });
  
    cy.get('.table-bordered tfoot .text-right').last().should('contain', '$725.20'); 
  });
  
  Given('the customer is on the cart page', () => {
    cy.get('#cart-total').click();
    cy.get('#cart > ul > li > p > a').click();
  });
  
  When('the customer removes a product from the cart', () => {
    cy.get('.table-bordered tbody tr').first().within(() => {
      cy.get('.btn-danger').click();
    });
  });
  
  Then('the product should disappear from the list of products in the cart', () => {
    cy.get('.table-bordered tbody tr').should('have.length', 1);
  });
  
  Then('the updated total should reflect the removal of the product', () => {
    cy.get('.table-bordered tfoot .text-right').last().should('contain', '$123.20'); 
  });
  
  When('the customer updates the quantity of a product', () => {
    cy.get('.table-bordered tbody tr').first().within(() => {
      cy.get('input').clear().type('3'); 
      cy.get('.btn-primary').click(); 
    });
  });
  
  Then('the quantity of the product should be updated in the cart list', () => {
    cy.get('.table-bordered tbody tr').first().within(() => {
      cy.get('input').should('have.value', '3');
    });
  });
  
  Then('the subtotal of the product should be updated according to the new quantity', () => {
    cy.get('.table-bordered tbody tr').first().within(() => {
      cy.get('.text-right').eq(1).should('contain', '$1806.00'); 
    });
  });
  
  Then('the total of the cart should be updated reflecting the new quantity of the product', () => {
    cy.get('.table-bordered tfoot .text-right').last().should('contain', '$1929.20'); 
  });