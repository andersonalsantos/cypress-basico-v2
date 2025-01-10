Cypress._.times(3,() => { //comando para repetição de teste
it('verifica o título da aplicação', function () {
  // cy.visit('./src/privacy.html')
  cy.visit('/privacy.html')

  cy.contains('h1', 'CAC TAT - Política de privacidade' ).should('be.visible')

})

})