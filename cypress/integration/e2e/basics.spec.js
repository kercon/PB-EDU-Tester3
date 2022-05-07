/// <reference types="cypress" />

context('Sample test Context', function () {
    describe('Sample test Description', function () {
        it('This is true body of Sample test', function () {
            expect(true).to.equal(true);
            cy.visit("http://www.google.com");
        })
    })
})
describe('Sample test2 description', () => {
    context('Sample test2 context', () => {
        it('This is true body of Sample test2', () => {
            expect(true).to.equal(true);
            cy.visit("http://www.google.com");
        })
    })
})

describe('Sample test3 description', () => {
    describe('Sample test3 description2', () => {
        it('This is true body of Sample test3', () => {
            expect(true).to.equal(true);
            cy.visit("http://www.google.com");
        })
    })
})