describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.get('a[href="cadastrar.html"]').click()

    cy.get('input[placeholder="Nome Completo"]').type('Jane Doe')

    cy.get('input[placeholder="Email"]').type('janedoe@teste.com')

    cy.get('input[placeholder="senha"]').type('teste123')

    cy.get('input[placeholder="Confirme a senha"]').type('teste123')
    
    cy.get('button[onclick="handleRegister()"]').click()

    cy.contains('Você está logado!').should('be.visible')

  })

  
  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')

    cy.get('input[placeholder="Email"]').type('cypress@teste.com')

    cy.get('input[placeholder="senha"]').type('cypress')

    cy.get('button[onclick="handleLogin()"]').click()

    cy.contains('Você está logado!').should('be.visible')

  })

})