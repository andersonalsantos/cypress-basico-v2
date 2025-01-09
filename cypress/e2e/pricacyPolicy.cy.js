it.only('verifica o título da aplicação', function () {
  cy.visit('./src/privacy.html')

  cy.contains('h1', 'CAC TAT - Política de privacidade' ).should('be.visible')

})