describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3006/api/testing/reset')
    const user = {
      name: 'leo',
      username: 'leo',
      password: 'messi'
    }
    cy.request('POST', 'http://localhost:3006/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login from is shown', function() {
    cy.contains('Login').click()
    cy.contains('Login Form')
  })

  describe('Login', function() {
    it('succeeds with correct credentials', function() {
      cy.contains('Login').click()
      cy.get('#username').type('leo')
      cy.get('#password').type('messi')
      cy.get('#login-button').click()

      cy.contains('Add New Blog')
    })

    it('fails with wrong credentials', function() {
      cy.contains('Login').click()
      cy.get('#username').type('leonel')
      cy.get('#password').type('messia')
      cy.get('#login-button').click()

      cy.contains('Wrong username or password')
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'leo', password: 'messi' })
    })

    it('A blog can be created', function() {
      // ...
    })
  })
})
