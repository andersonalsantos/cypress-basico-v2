/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('verifica o título da aplicação', function () {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

  })

  //exercio extra 1
  it('preencher campos obrigatorios', function () {
    const textlong = Cypress._.repeat('Teste cypress digintando devagar para ver a execução. ', 10)

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('almeida')
    cy.get('#email').type('anderson@anderson.com')
    cy.get('#open-text-area').type(textlong, { delay: 0 })
    cy.contains('button', 'Enviar')
    .click()

    cy.get('.success').should('be.visible')
  })


  //exercicio extra 2
  it('exibi msg erro submeter form email invalido', function () {
    const textlong = Cypress._.repeat('Teste cypress digintando devagar para ver a execução. ', 4)

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('almeida')
    cy.get('#email').type('andersonanderson.com')
    cy.get('#open-text-area')
      .type(textlong, { delay: 0 })
    cy.contains('button', 'Enviar')
      .click()

    cy.get('.error').should('be.visible')
  })

  // exercicio extra 3
  it('campo tel vazio com texto', function () {
    const textlong = 'teste cypress digintando devagar para ver a execução'

    cy.get('#firstName').type('anderson')
    cy.get('#lastName').type('Almeida')
    cy.get('#email').type('anderson@teste.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area')
      .type(textlong, { delay: 0 })
    cy.contains('button', 'Enviar')
      .click()

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
  it('simplificando comandos', function(){

    const perfil = {
      firstName: 'Anderson',
      lastName: 'Almeida',
      email: 'amderson@teste.com',
      text: 'loucura loucura loucura'
    }

    cy.fillMandatoryFieldsAndSubmit(perfil)

    cy.get('.success').should('be.visible')

  })

  //exercio s4 - 1
  it('seleciona um produto (YouTube) por seu texto', function(){
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  //execicio s4 - 2
  it('seleciona um produto (Mentoria) por seu valor (value)', function(){
    cy.get('#product')
      .select('mentoria')
      .should ('have.value', 'mentoria')
  })

  //exercico s4 - 3
  it('Seleciona um produto (Blog) por seu índice', function(){
    cy.get('#product')
      .select(1)
      .should ('have.value', 'blog')
  })

//exercico s5 - 1
it('Marca o tipo de atendimento "Feedback"', function(){
  cy.get('input[type="radio"][value="feedback"]')
  .check()
  .should('be.checked')
    
})

//exercico s5 - extra verificando todos os radios butons
it('marca cada tipo de atendimento', function(){
  cy.get('input[type="radio"]')
    .each(typeofService => {
      cy.wrap(typeofService)
      .check()
      .should('be.checked')
    })
    
})

//exercico s6 - marcando checkbox
it('marca ambos checkboxes, depois desmarca o último', function(){
  cy.get('#email-checkbox')
    .check()
    .should('be.checked')
    cy.get('#phone-checkbox')
    .check()
    .should('be.checked')
    
    
})

//exercico s7 - fazendo upload de um arquivo
it('seleciona um arquivo da pasta fixtures', function(){
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.json')
  .should (input =>{
   // console.log(input[0].files[0].name)
    expect(input[0].files[0].name).to.equal('example.json')

  })    
})

//exercico s7-1 - fazendo upload de um arquivo
it('seleciona um arquivo simulando um drag-an-drop', function(){
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
  .should (input =>{
   // console.log(input[0].files[0].name)
    expect(input[0].files[0].name).to.equal('example.json')

  })    
})

//exercico s7-2 - fazendo upload de um arquivo utilizando alias
it('seleciona um arquivo utilizando alias', function(){
  cy.fixture ('example.json').as('arquivo')
  cy.get('#file-upload')
  .selectFile('@arquivo', { action: 'drag-drop' })
  .should (input =>{
   // console.log(input[0].files[0].name)
    expect(input[0].files[0].name).to.equal('example.json')

  })    
 })


//exercico s8- validando aba politica de privaciadade
it('validando policita de privaciadade', function(){
  cy.get('a').should ('have.attr', 'target', '_blank')
  
 })

//exercico s8-extra1 validando aba politica de privaciadade
it('validando policita de privaciadade valiando outra aba', function(){
  cy.get('a').should ('have.attr', 'target', '_blank')
  
 })

 //exercico s8-extra2 validando aba politica de privaciadade
it('validando policita de privaciadade valiando outra aba segunda forma', function(){
  cy.contains('a', 'Política de Privacidade')
    .invoke('removeAttr', 'target') //removendo o atributo 
    .click()

  cy.contains('h1', 'CAC TAT - Política de privacidade' ).should('be.visible')
    
 })


})