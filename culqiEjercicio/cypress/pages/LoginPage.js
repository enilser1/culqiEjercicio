class homeSaucePage {
  elements = {
    loginBtnIni: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
    usernameInput: () => cy.get("[data-qa='login-email']"),
    passwordInput: () => cy.get("[data-qa='login-password']"),
    loginBtn: () => cy.get(".login-form > form > .btn"),
    loginExitoso: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
    loginFallido: () => cy.get(".login-form > form > p"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.loginBtnIni().click();
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
  loginExitoso(){
    this.elements.loginExitoso().should('exist');
  }

  loginFallido(){
    this.elements.loginFallido().should('exist');
  }
}

module.exports = new homeSaucePage();
