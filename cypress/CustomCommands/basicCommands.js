/// <reference types="cypress" />

Cypress.Commands.add('lazy',()=>{
    cy.log("I'm lazy");
})