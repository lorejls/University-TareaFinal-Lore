import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the OpenCart website', ()=> {
    cy.visit('/')
})

When("I navigate to the homepage", ()=> {
})

Then('the URL should be {string}', ()=> {
  cy.url().should("eq", "http://opencart.abstracta.us/");
})

Then('the page title should be {string}', ()=> {
  cy.title().should("eq", "Your Store");
})