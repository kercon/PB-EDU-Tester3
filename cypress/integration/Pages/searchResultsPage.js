/// <reference types="cypress" />
class searchResultPage {

    _searchInputSelector = 'input.gLFyf';
    get searchInputSelector() {
        return this._searchInputSelector;
    }
    set searchInputSelector(value) {
        this._searchInputSelector = value;
    }
    _personalizeButtonSelector = '#VnjCcb > .QS5gu';
    get personalizeButtonSelector() {
        return this._personalizeButtonSelector;
    }
    set personalizeButtonSelector(value) {
        this._personalizeButtonSelector = value;
    }
    _confirmCookiesSelector = '#L2AGLb > .QS5gu';
    get confirmCookiesSelector() {
        return this._confirmCookiesSelector;
    }
    set confirmCookiesSelector(value) {
        this._confirmCookiesSelector = value;
    }

    _cookiesPopupSelector = '#CXQnmb';
    get cookiesPopupSelector() {
        return this._cookiesPopupSelector;
    }
    set cookiesPopupSelector(value) {
        this._cookiesPopupSelector = value;
    }

    searchInput() {
        return cy.get(this.searchInputSelector);
    }

    personalizeButton() {
        return cy.get(this.personalizeButtonSelector);
    }

    confirmCookies() {
        return cy.get(this.confirmCookiesSelector);
    }

    cookiesPopup() {
        return cy.get(this.cookiesPopupSelector);
    }

    searchInput2() {
        cy.get(this.searchInputSelector);
        return this;
    }

    inputInSearchInput(text) {
        cy.get(this.searchInputSelector).type(text);
        return this;
    }

    validateSearch(text){
        return cy.get(`div[data-async-context='query:${text}']`).should('be.visible');
    }

}
export default searchResultPage;