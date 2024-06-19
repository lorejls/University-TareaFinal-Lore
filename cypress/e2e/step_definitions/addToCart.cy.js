import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on the homepage and the products are visible and available', () => {
    cy.visit('/')
});

When('I click the "Add to Cart" button', () => {
  cy.get('.button-group button').first().click();
});

Then('the product should be added to my cart', () => {
  cy.get('.alert-success')
    .should('be.visible')
    .and('contain.text', 'Success: You have added');
});

Then('I should see a confirmation message indicating that the product has been added to the cart', () => {
  cy.get('.alert-success')
    .should('be.visible')
    .and('contain.text', 'Success: You have added');
});

Then('the number of items in the cart and the cart total should update automatically', () => {
  cy.get('#cart-total').should('contain.text', '1 item(s)');
});

