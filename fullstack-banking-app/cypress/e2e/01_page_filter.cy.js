/// <reference types="Cypress" />

describe('Should test moving between pages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3030/')
  }); 
  it('(TP_0001) Should test the page filtering functionality', () => {
    cy.registerTab()
    cy.wait(500)
    cy.loginTab()
  });
});