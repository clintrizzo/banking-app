/// <reference types="Cypress" />

describe('Should positive and negative messages for register page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030/')
    cy.registerTab()
  }); 
  it('(TP_0003) Should test to see profile loading message', () => {
    cy.fixture('register').then(function (register) {
      const firstName = register.firstName
      const lastName = register.lastName
      const email = register.email
      const password = register.password
      const cPassword = register.cPassword

      cy.get('[name="first_name"]').type(firstName)
      cy.get('[name="last_name"]').type(lastName)
      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(password)
      cy.get('[name="cpassword"]').type(cPassword)
    });

  //test required fields have been displayed
    cy.get('[name="first_name"]').should('have.css', 'border-color', 'rgb(27, 160, 27)')
    cy.get('[name="last_name"]').should('have.css', 'border-color', 'rgb(27, 160, 27)')
    cy.get('[name="email"]').should('have.css', 'border-color', 'rgb(27, 160, 27)')
    cy.get('[name="password"]').should('have.css', 'border-color', 'rgb(27, 160, 27)')
    cy.get('[name="cpassword"]').should('have.css', 'border-color', 'rgb(27, 160, 27)')

    cy.get('button[type="submit"]').contains('Register').click()
    cy.get('form').within(() => {
      cy.get('p.successMsg').should('contain', 'Registration was successful!')
    });
  });

  it('(TP_0003) Should test that passwords dont match', () => {
    cy.fixture('register').then(function (register) {
      const firstName = register.firstName
      const lastName = register.lastName
      const email = register.email
      const password = register.password
      const cPassword = '123'

      cy.get('[name="first_name"]').type(firstName)
      cy.get('[name="last_name"]').type(lastName)
      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(password)
      cy.get('[name="cpassword"]').type(cPassword)
    });

    cy.get('button[type="submit"]').contains('Register').click()
    cy.get('form').within(() => {
      cy.get('p.errorMsg').should('contain', 'Password and confirm password does not match.')
    });
  });
});