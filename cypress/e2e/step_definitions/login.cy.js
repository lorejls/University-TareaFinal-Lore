import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login";

Given("A user is at the OpenCart login page", () => {
  cy.visit(`/index.php?route=account/login`);
  cy.fixture("userCredentials").then((credentials) => {
    this.credentials = credentials;
  });
  cy.fixture("errorMessages").as("errorMessages");
});

When("A user enters the email {string}, the password {string}, and clicks on the login button",
  (email, password) => {
    LoginPage.login(email, password);
  }
);

When("A user provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.email);
      cy.log(row.password);
      LoginPage.login(row.email, row.password);
    });
  }
);

Then("The url will contains the account directory", () => {
  cy.url().should("contains", "account/account");
});

Then("The error message {string} is displayed", (errorMessage) => {
  LoginPage.elements.errorMessage().should("have.text", errorMessage);
});
