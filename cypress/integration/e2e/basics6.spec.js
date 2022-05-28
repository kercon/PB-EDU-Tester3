/// <reference types="cypress" />

describe('PersonalPage', function () {
    it('Should be able to visit', function () {
        cy.visit("http://127.0.0.1:8080/");
        cy.viewport(1920,1080);
        cy.get(".testinput").type('test');
        cy.get(".testinput").should("have.value",'test').should('contain.value','test');
        cy.get('#demo2').should('have.text','test').should("contain",'test');
    })
})
