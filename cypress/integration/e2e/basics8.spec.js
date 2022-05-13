/// <reference types="cypress" />

describe('User can google Wikipedia', function () {
    it('Queary and Url after googling should containt Wikipedia after search (by enter)', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920, 1080);
        cy.get('#L2AGLb > .QS5gu').should("be.visible");
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#L2AGLb > .QS5gu').should("not.be.visible");
        cy.get("input[name='q']").clear().type('Wikipedia{enter}');
        cy.get("div[data-async-context='query:Wikipedia']").should('be.visible');
        cy.url().should('include', "Wikipedia");
    })

    it('Queary and Url after googling should containt Wikipedia after search (by form submit)', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920, 1080);
        cy.get('#L2AGLb > .QS5gu').should("be.visible");
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#L2AGLb > .QS5gu').should("not.be.visible");
        cy.get("form").find("input[type='text']").clear().type('Wikipedia');
        cy.get("form").submit();
        cy.get("div[data-async-context='query:Wikipedia']").should('be.visible');
        cy.url().should('include', "Wikipedia");
    })
    it('Queary and Url after googling should containt Wikipedia after search (by url)', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920, 1080);
        cy.visit("http://www.google.com/search?q=Wikipedia");
        cy.get("div[data-async-context='query:Wikipedia']").should('be.visible');
        cy.url().should('include', "Wikipedia");
    })

    it('Queary and Url after googling should containt Wikipedia after search (by within)', function () {
        cy.visit("http://www.google.com");
        cy.viewport(1920, 1080);
        cy.get('#L2AGLb > .QS5gu').should("be.visible");
        cy.get('#L2AGLb > .QS5gu').click();
        cy.get('#L2AGLb > .QS5gu').should("not.be.visible");
        cy.get("form").within(() => {
            cy.get("input[type='text']").clear().type('Wikipedia');
            cy.root().submit();
        })
        cy.get("div[data-async-context='query:Wikipedia']").should('be.visible');
        cy.url().should('include', "Wikipedia");
    })
    describe("Test on Search Results", () => {
        beforeEach(() => {
            cy.viewport(1920, 1080);
            cy.visit("http://www.google.com/search?q=Wikipedia");
            cy.get('#L2AGLb > .QS5gu').click();
        })
        it('User should be able to scroll to each link', function () {
            cy.viewport(1920, 1080);
            cy.get("div[data-async-context='query:Wikipedia']").find('a').filter('a[href*="wikipedia.org"]').each(($el, $index, $list) => {
                cy.log($index);
                cy.wrap($el).scrollIntoView().focus().wait(1000);
            });
        })

        it('User should be able to go from search to page (by filter)', function () {
            cy.viewport(1920, 1080);
            cy.get("div[data-async-context='query:Wikipedia']").find('a').filter('a[href*="wikipedia.org"]').eq(0).click();
        })

        it('User should be able to go from search to page (by moving thru element DOM)', function () {
            cy.viewport(1920, 1080);
            cy.get("div[data-async-context='query:Wikipedia']").children().first().children().children()
                .first().next().children().first().find('a[href*="wikipedia.org/wiki/Wikipedia"]').eq(0).click();
            cy.url().should('include', "https://pl.wikipedia.org/");
        })
    })
})
