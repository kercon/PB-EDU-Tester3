/// <reference types="cypress" />

import googlePage from '../Pages/googlePage.js';
import searchResultPage from '../Pages/searchResultsPage.js';

const google = new googlePage();
const searchResult = new searchResultPage();

Cypress.Commands.add('closeCookiesGoogle',()=>{
    cy.get('body').then(($body)=>{
        if ($body.find(google._cookiesPopupSelector).length > 0){
            google.confirmCookies().then(($button)=>{
                if($button.is(':visible')){
                    cy.wrap($button).click();
                }
            })
        }
    })
})

Cypress.Commands.add('closeCookiesSearch',()=>{
    cy.get('body').then(($body)=>{
        if ($body.find(searchResult.cookiesPopupSelector).length > 0){
            searchResult.confirmCookies().then(($button)=>{
                if($button.is(':visible')){
                    cy.wrap($button).click();
                }
            })
        }
    })
})

Cypress.Commands.add('closeCookies',($Page)=>{
    cy.get('body').then(($body)=>{
        if ($body.find($Page.cookiesPopupSelector).length > 0){
            $Page.confirmCookies().then(($button)=>{
                if($button.is(':visible')){
                    cy.wrap($button).click();
                }
            })
        }
    })
})

describe("PageObjects",() => {
    beforeEach(function (){
        cy.visit("http://www.google.com");
        cy.closeCookiesGoogle();
    })
    it('Using PageObject',function (){        
        //google.confirmCookies().click();  
        cy.closeCookiesGoogle();      
        google.searchInput().type('Wikipedia');
        google.searchInput().type('{enter}');
        searchResult.searchInput().clear().type('Wiki');
        searchResult.searchInput().clear().type('{enter}');
    })
    it.only('Using PageObject',()=>{    
        cy.closeCookies(google);
        google.searchInput().type('Wikipedia');
        google.searchInput().type('{enter}');
        searchResult.validateSearch('Wikipedia');
        searchResult.searchInput2().inputInSearchInput('text');
        searchResult.validateSearch('Wikipedia');
        //cy.nothing();    
        //searchResult.confirmCookies().click();
    })
})

