/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(function () {
    cy.visit('src/index.html')
  })

  it('verifica o título da aplicação', function () {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  //exercio extra 2
  it('preencher campos obrigatorios', function () {
    const textlong = 'teste cypress digintando devagar para ver a execução'

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('almeida')
    cy.get('#email').type('anderson@anderson.com')
    cy.get('#open-text-area').type(textlong, { delay: 0 })
    cy.get('.button').click()

    cy.get('.success').should('be.visible')
  })


  //exercicio extra 3
  it('exibi msg erro submeter form email invalido', function () {
    const textlong = 'teste cypress digintando devagar para ver a execução'

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('almeida')
    cy.get('#email').type('andersonanderson.com')
    cy.get('#open-text-area')
      .type(textlong, { delay: 0 })
    cy.get('.button').click()

    cy.get('.error').should('be.visible')
  })

  // exercicio extra 4
  it('campo tel vazio com texto', function () {
    const textlong = 'teste cypress digintando devagar para ver a execução'

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('Almeida')
    cy.get('#email').type('anderson@teste.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area')
      .type(textlong, { delay: 0 })
    cy.get('.button').click()

    cy.get('.error').should('be.visible')

  })

  //exercico extra 5
  it('preenche e limpa campos nome email telefone', function () {
    cy.get('#firstName')
      .type('Anderson')
      .should('have.value', 'Anderson')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Almeida')
      .should('have.value', 'Almeida')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('anderson@teste.com')
      .should('have.value', 'anderson@teste.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')
  })

  //exercicio 6
  it('exibi msg de erro ao submeter formulario sem preencher os campos obrigatorios', function() {
    cy.contains('button', 'Enviar')
      .click()

    cy.get('.error')
      .should('be.visible')

  })

  //exercico 7
  it('simpleificando comandos', function(){

    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')

  })

})