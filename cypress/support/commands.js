Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (perfil = {
    //essa forma é para a listar ter valores padroẽs caso não receba nada;
    firstName: 'Itanna',
    lastName: 'Almeida',
    email: 'email@teste.com',
    text: 'texto simples'
}) => {

    const textlong = 'teste cypress digintando devagar para ver a execução'

    cy.get('#firstName').type(perfil.firstName)
    cy.get('#lastName').type(perfil.lastName)
    cy.get('#email').type(perfil.email)
    cy.get('#open-text-area').type(perfil.text, { delay: 0 })
    cy.get('.button').click()

})