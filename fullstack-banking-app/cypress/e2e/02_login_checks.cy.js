/// <reference types="Cypress" />

describe('Should positive and negative messages for login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030/')
  }); 
  it('(TP_0002) Should test to see profile loading message', () => {
    cy.fixture('login').then(function (login) {
      const email = login.email
      const password = login.password

      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(password)
    });

    cy.get('button[type="submit"]').contains('Login').click()
    cy.get('form').within(() => {
      cy.get('p.successMsg').should('contain', 'Loading Profile...')
    });
  });

  it('(TP_0002) Should test to show wrong email', () => {
    cy.fixture('login').then(function (login) {
      const emailFail = login.emailFail
      const password = login.password

      cy.get('[name="email"]').type(emailFail)
      cy.get('[name="password"]').type(password)
    });

    cy.get('button[type="submit"]').contains('Login').click()
    cy.get('form').within(() => {
      cy.get('p.errorMsg').should('contain', 'Email is incorrect')
    });
  });

  it('(TP_0002) Should test to show that password is required', () => {
    cy.fixture('login').then(function (login) {
      const email = login.email

      cy.get('[name="email"]').type(email)
    });

    cy.get('button[type="submit"]').contains('Login').click()
    cy.get('form').within(() => {
      cy.get('p.errorMsg').should('contain', 'Please enter all the fields.')
    });
  });
});