/// <reference types="cypress" />

describe('User can close cookie popup', function () {
    it('Close by ok button', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920,1080);
        cy.get('#L2AGLb > .QS5gu').should("be.visible");
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#L2AGLb > .QS5gu').should("not.be.visible");
    })
    it('Personalize should be avaible', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920,1080);
        cy.get('#VnjCcb > .QS5gu').should("be.visible");
        cy.get('#VnjCcb > .QS5gu').click();
        cy.url().should('include',"https://consent.google.com/");
    })
})
