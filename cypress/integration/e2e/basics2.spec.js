/// <reference types="cypress" />

describe('Sample test using expect', function () {
    it('Test', function () {
        expect(true).to.equal(true);
    })
})

describe('Sample test using should', () => {
    it('Test', () => {
        cy.visit("https://pl.wikipedia.org/");
        cy.url().should('include',"https://pl.wikipedia.org/");
           
    })
})


describe('Sample test using assert', () => {
    it('Test', () => {
        assert.equal(true, true, 'true is true');
        cy.visit("https://www.google.com/");     
    })
})
