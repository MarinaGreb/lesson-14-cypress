const username = Cypress.env("login");
const password = Cypress.env("password");

describe("Authorization in secret santa", () => {
  const emailSelector = 'input[name="email"]';
  const passwordSelector = 'input[name="password"]';
  const mainBtnSelector = ".btn-main";
  const errorSelector = ".hint";
  const headerSelector = ".header-item__text";
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Authorization with valid data", () => {
    cy.get(emailSelector).type(username);
    cy.get(passwordSelector).type(password);
    cy.intercept("GET", "/api/session", []).as("authorizationPassed");
    cy.get(mainBtnSelector).click();
    cy.wait("@authorizationPassed");
    cy.get(headerSelector).should('not.have.text', "Вход и регистрация")
  });
  it("Authorization with invalid username", () => {
    cy.get(emailSelector).type(`${username}+test`);
    cy.get(passwordSelector).type(password);
    cy.get(mainBtnSelector).click();
    cy.haveTextCheck(errorSelector, "В форме допущены ошибки")
  });
  it("Authorization with invalid password", () => {
    cy.get(emailSelector).type(username);
    cy.get(passwordSelector).type(`${password}+test`);
    cy.get(mainBtnSelector).click();
    cy.haveTextCheck(errorSelector, "Неверное имя пользователя или пароль")
  });
});
