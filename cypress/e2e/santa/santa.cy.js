/// <reference types="cypress" />

describe('Secret santa main page', () => {
    beforeEach(() => {
      cy.visit('https://staging.lpitko.ru/')
    })
  
    it('Page title display', () => {
     // cy.get('.body mobile grid-md').should('have.text', 'Вход и регистрация')
      cy.contains('тайный санта').should('be.visible')
    })
  })
  