/// <reference types="cypress" />

describe('Secret santa main page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Page title display', () => {
      cy.contains('тайный санта').should('be.visible')
    })
  })
  