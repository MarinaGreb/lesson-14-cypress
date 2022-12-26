// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("urlCheck", (assert) => {
  // cy.get(selector).type(`${text}{enter}`);
  cy.url().should("include", assert);
});

Cypress.Commands.add("haveTextCheck", (selector, text) => {
  cy.get(selector).should("have.text", text);
});


Cypress.Commands.add("dataInputForRegistration", (name, email, nameSelector, emailSelector, mainBtnSelector) => {
  cy.get(nameSelector).type(name);
  cy.get(emailSelector).type(email);
  cy.get(mainBtnSelector).click();
});