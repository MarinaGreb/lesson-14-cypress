before(() => {
  cy.log('"Before" hook out of describe');
});
beforeEach(() => {
  cy.log('"BeforeEach" hook out of describe');
});

describe("Checking links on the user page after login", () => {
  const username = Cypress.env("login");
  const password = Cypress.env("password");
  beforeEach(() => {
    cy.visit("/login");
    cy.get('input[name="email"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.intercept("GET", "/api/session", []).as("authorizationPassed");
    cy.get('[class="btn-main base--clickable"]').click();
    //  cy.wait(4000)
    cy.wait("@authorizationPassed");
  });

  it("new box", () => {
    cy.visit("/box/new");
    cy.urlCheck("/box/new")
    cy.get('[class="frm-wrapper"] div').should("have.length", 2);
  });
  it("view boxes", () => {
    cy.visit("/account/boxes");
    cy.urlCheck("/account/boxes")
   cy.haveTextCheck('[class="base--clickable toggle-menu-item toggle-menu-item--active"]', "Мои Коробки")
  });
  it("randomizer", () => {
    cy.visit("/randomizer");
    cy.urlCheck("/randomizer")
    cy.get('[class="switch__toggle"]').should("be.visible");
  });
  it("account", () => {
    cy.visit("/account");
    cy.urlCheck("/account")
    cy.haveTextCheck('[class="txt--med txt txt--orange"]', " Выйти с сайта");
  });
});
