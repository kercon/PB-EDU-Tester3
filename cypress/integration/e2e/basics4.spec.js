/// <reference types="cypress" />

describe('User can google Wikipedia', function () {
    it('Queary and Url after googling should containt Wikipedia', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920,1080);
        cy.get('#L2AGLb > .QS5gu').should("be.visible");
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#L2AGLb > .QS5gu').should("not.be.visible");
        cy.get("input[name='q']").clear().type('Wikipedia{enter}');
        cy.get("div[data-async-context='query:Wikipedia']").should('be.visible');
        cy.url().should('include',"Wikipedia");
    })
    it('User should be able to go from search to page', function () {
        cy.viewport(1920,1080);
        cy.get("div[data-async-context='query:Wikipedia']").children().first().children().children()
          .first().next().children().first().find('a[href*="wikipedia.org/wiki/Wikipedia"]').eq(0).click();
          cy.url().should('include',"https://pl.wikipedia.org/");
    })
})
