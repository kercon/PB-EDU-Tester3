/// <reference types="cypress" />

describe('PersonalPage', function () {
    it('Should be able to visit', function () {
        cy.visit("http://127.0.0.1:8080/");
        cy.viewport(1920,1080);
    })
})
