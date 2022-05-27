/// <reference types="cypress" />
import users from '../../fixtures/users.json'
import profile from '../../fixtures/profile.json'

describe("Fixtures",() => {
    beforeEach(function (){
        cy.visit("http://www.google.com");
        cy.fixture('users.json').as('UserData');
        cy.fixture('users.json').then((users2)=>{
            this.users2 = users2;
        });
    })
    it('Loading fixtures',function (){        
        cy.log(users[0].address.city);
        cy.log(this.UserData[0].address.city);
        cy.get('@UserData').then(($elements)=>{
            cy.log($elements[0].address.city);
        })
        cy.log(this.users2[0].address.city);
    })

    it('Salting fixture',function (){
        const d = new Date();
        cy.log(profile.name.replace("[salt]",d.getUTCDate().toString()+"_"+(d.getUTCMonth()+1).toString()+
                                    "_"+d.getHours().toString()+d.getMinutes().toString()+d.getUTCSeconds().toString()));
    })
})

