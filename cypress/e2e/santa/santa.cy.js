/// <reference types="cypress" />

describe('Secret santa main page', () => {
    beforeEach(() => {
      cy.visit('https://staging.lpitko.ru/')
    })
  
    it('Page title display', () => {
      cy.contains('тайный санта').should('be.visible')
    })
  })
  