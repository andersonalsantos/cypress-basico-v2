Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

    const textlong = 'teste cypress digintando devagar para ver a execução'

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('almeida')
    cy.get('#email').type('anderson@anderson.com')
    cy.get('#open-text-area').type(textlong, { delay: 0 })
    cy.get('.button').click()

})