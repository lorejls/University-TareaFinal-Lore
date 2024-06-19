class LoginPage {
    elements = {
        emailInput: () => cy.get('#input-email'),
        passwordInput: () => cy.get('#input-password'),
        loginButton: () => cy.get('[type="submit"]'),
        errorMessage: () => cy.get('.alert')
    }
  
    typeEmail(email) {
        email && this.elements.emailInput().type(email);
        return this;
    }
  
    typePassword(password) {
        password && this.elements.passwordInput().type(password);
        return this;
    }
  
    clickLogin() {
        this.elements.loginButton().click();
    }
  
    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLogin();
    }
  
    getErrorMessage(){
        return this.elements.errorMessage()
    }
  }
  
  module.exports = new LoginPage();
  