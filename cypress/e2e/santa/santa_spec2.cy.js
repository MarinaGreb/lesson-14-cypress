describe('Checking links on the user page after login', ()=> {
    
    beforeEach(() => {
        // const username = 'sokovets@outlook.com'
        // const password = '123456'
        cy.visit('/login')
        cy.get('input[name="email"]').type('sokovets@outlook.com'), 
        cy.get('input[name="password"]').type('123456'),
        cy.get('[class="btn-main base--clickable"]').click()
      })

    it('new box', ()=> {
        cy.visit('/box/new');
        cy.url().should('include', '/box/new')
        cy.get('[class="frm-wrapper"] div').should('have.length', 2)
    })
    it('view boxes', ()=> {
        cy.visit('/account/boxes');
        cy.url().should('include', '/account/boxes')
        cy.get('[class="base--clickable toggle-menu-item toggle-menu-item--active"]').should('have.text', 'Мои Коробки')
    })
    it('randomizer', ()=> {
        cy.visit('/randomizer');
        cy.url().should('include', '/randomizer')
        cy.get('[class="switch__toggle"]').should('be.visible')
    })
    it('account', ()=> {
        cy.visit('/account');
        cy.url().should('include', '/account')
        cy.get('[class="txt--med txt txt--orange"]').should('have.text', ' Выйти с сайта')
    })
})