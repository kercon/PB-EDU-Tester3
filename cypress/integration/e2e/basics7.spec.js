/// <reference types="cypress" />

describe('Loading enviorments', function () {
    it('We should see values of env', function () {
        cy.log('Base cypress.json should be PL');
        cy.log(Cypress.env('Lang'));
        cy.log('Extended by cypress.env.json should be somefile.txt')
        cy.log(Cypress.env('File'));
        cy.task('log','Base cypress.json should be PL');
        cy.task('log',Cypress.env('Lang'));
        cy.task('log','Extended by cypress.env.json should be somefile.txt');
        cy.task('log',Cypress.env('File'));
    })
})
