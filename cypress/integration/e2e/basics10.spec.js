/// <reference types="cypress" />

Cypress.Commands.add('nothing',()=>{
    cy.log('doing nothing');
});
Cypress.Commands.add('returnAelements',()=>{
    cy.get('a');
});
Cypress.Commands.add('closeGooglePrefernces',()=>{
    cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
    cy.get('.dbsFrd').should('not.be.visible');
});
Cypress.Commands.add('searchGoogle',(searchfraze)=>{
    cy.get("input[name='q']").clear().type(searchfraze+'{enter}');
});
Cypress.Commands.overwrite('type',(originalFn,element,text,options)=>{
    const d = new Date();
    let saltedtext = text.replace("[salt]",d.getUTCDate().toString()+"_"+(d.getUTCMonth()+1).toString()+
        "_"+d.getHours().toString()+d.getMinutes().toString()+d.getUTCSeconds().toString());

    return originalFn(element,saltedtext,options);
});

Cypress.Commands.add('checkElementVisibility', { prevSubject: 'element'}, (subject, options) => {     
    return cy.wrap(subject).should('be.visible');
})

let somevalue;

Cypress.Commands.add('memo',()=>{
    if (somevalue) {
        cy.log('I will return stored value')
        return cy.wrap(somevalue);
    }
    cy.log('I will return generated value')
    const random = Cypress._.random(10)
    cy.log(random);
    somevalue = { value: random}
    return cy.wrap(somevalue)
})

describe("Commands",() => {
    beforeEach(function (){
        cy.visit("http://www.google.com");
        cy.closeGooglePrefernces();
    })
    it('Using Command',function (){        
        cy.nothing();
        cy.get('a').should('have.length',20)
        cy.get('body').checkElementVisibility();
        cy.returnAelements().should('have.length',20);
        cy.searchGoogle('Wikipedia[salt]');
        cy.memo().then(($value)=>{
            cy.log($value.value)
        })
        cy.memo().then(($value)=>{
            cy.log($value.value)
        })
        cy.lazy();
    })
})

