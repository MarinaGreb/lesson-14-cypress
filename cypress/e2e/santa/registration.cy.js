const testData = require("../../fixtures/testEmail.json");


const name = "Test";
let key = Math.floor(Math.random() * 10000);
let email = `test+${key}@outlook.com`;
const nameSelector = ":nth-child(3) > .frm";
const emailSelector = 'input[name="email"]';
const mainBtnSelector = ".btn-main";
const noticeSelector = ".picture-notice__title";
const invalidFieldSelector = ".form-auth__error > .hint";
const invalidEmailSelector = ".frm-wrapper__top__error";
const layoutSelector = ".layout-1__main";

beforeEach(() => {
  cy.visit("/register");
});

describe("Negative registration in secret santa", () => {
  it("Registration with empty fields", () => {
    cy.get(mainBtnSelector).click();
    cy.haveTextCheck(invalidFieldSelector, "Некорректное поле");
  });
  it("Error checking when clearing fields", () => {
    cy.get(nameSelector).type(name).clear();
    cy.get(emailSelector).type(email).clear();
    cy.get(layoutSelector).click("left"); //клик вне формы
    cy.get(invalidEmailSelector).should("have.length", 2); //две ошибки - для каждого поля
  })
  it("Registration with long name", () => {
    let testName = "12345678901234567890123456789012345678901234567890123456789012345"
    cy.dataInputForRegistration(testName, email, nameSelector, emailSelector, mainBtnSelector)
    cy.haveTextCheck(invalidEmailSelector,"Имя должно быть не более 64 символов");
  });
  
  //Тесты регистрации с некорректным email
  testData.forEach((testEmail) => {
    it(`Registration with incorrect email: ${testEmail}`, () => {
    cy.dataInputForRegistration(name, testEmail, nameSelector, emailSelector, mainBtnSelector);
    cy.haveTextCheck(invalidEmailSelector, "Некорректный email");
  })
  });
  });

describe("Positive registration in secret santa", () => {

  it("Registration with valid data", () => {
    cy.dataInputForRegistration(name, email, nameSelector, emailSelector, mainBtnSelector)
    cy.haveTextCheck(noticeSelector, "Письмо отправлено!");
  });
  it("Registration with charactersin the name", () => {
    let testName = `!@#$%^&*()_+${key}`;
    let testEmail = `test+${email}`;
    cy.dataInputForRegistration(testName, testEmail, nameSelector, emailSelector, mainBtnSelector)
    cy.haveTextCheck(noticeSelector, "Письмо отправлено!");
  });
});