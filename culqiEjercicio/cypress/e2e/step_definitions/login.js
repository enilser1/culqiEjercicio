import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("Ingresamos a la pagina de automationexercise", () => {
  cy.visit("/");
  cy.customCommandTest();
});

When(
  "Colocamos el correo {string}, la contrasenia {string}, and damos clic en Login",
  (username, password) => {
    loginPage.submitLogin(username, password);
  }
);

When(
  "A user provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      loginPage.submitLogin(row.username, row.password);
    });
  }
);
Then("se comprueba que se ingreso con exito", () => {
  loginPage.loginExitoso();
});

Then("se comprueba que se ingreso sin exito", () => {
  loginPage.loginFallido();
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
