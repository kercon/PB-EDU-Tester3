/// <reference types="cypress" />

describe('User can navigate Youtube', function () {
    it('User can enter first video', function () {
        cy.viewport(1920, 1080);
        cy.visit("https://www.youtube.pl");
        cy.get(':nth-child(1) > :nth-child(2) > .yt-simple-endpoint > #button > #text').click().wait(5000);
        cy.get('ytd-rich-grid-row:first-child ytd-rich-item-renderer:nth-child(1) #video-title-link', { timeout: 30000 })
            .should('be.visible').invoke('text').as('label');
        cy.get('@label').then(($label) => {
            cy.log($label);
            cy.get('ytd-rich-grid-row:first-child ytd-rich-item-renderer:nth-child(1) #video-title-link').click().wait(3000);
            cy.get('.ytd-watch-flexy > :nth-child(1) > .title > .style-scope', { timeout: 30000 })
                .invoke('text').then(($title) => {
                    expect($title).to.equal($label);
                })
            cy.get('.ytd-watch-flexy > :nth-child(1) > .title > .style-scope', { timeout: 30000 })
                .invoke('text').should('contain', $label);
        })
        cy.log('sup')
    })
})
