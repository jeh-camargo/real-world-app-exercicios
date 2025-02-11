describe('Login Real World App', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get("#username").type('Dina20')
    cy.get("#password").type('s3cret')
    cy.get("[data-test='signin-submit']").click()
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get("#username").type('Test')
      cy.get("#password").type('test1')
      cy.get("[data-test='signin-submit']").click()
      cy.get(".MuiAlert-message")
    })
  })

})