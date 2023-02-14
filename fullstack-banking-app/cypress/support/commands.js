Cypress.Commands.add('registerTab', () => {
  cy.get('h1').should('contain', 'Banking Application')
  cy.get('a.btn-secondary').contains('Create account').click()
  cy.get('h2').should('contain', 'Register User')
  cy.url().should('include', 'http://localhost:3030/register')})

Cypress.Commands.add('loginTab', () => {
  cy.get('h2').should('contain', 'Register User')
  cy.get('a.btn-secondary').contains('Login').click()
  cy.get('h1').should('contain', 'Banking Application')
})

