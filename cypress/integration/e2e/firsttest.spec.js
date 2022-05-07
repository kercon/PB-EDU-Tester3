
import users from '../../fixtures/users.json'

describe("my first test file",() => {
    beforeEach(()=>{
        cy.visit("http://www.google.com");
        cy.fixture('users.json').as('UserData');
    })
    it('My first test',function (){
        cy.xpath("//button[@id='L2AGLb']").click();
        cy.xpath("//img[@alt='Google']")
        .should('be.visible');
        cy.get("input[name='q']").clear().type('Wikipedia{enter}');
        cy.get("div[data-async-context='query:Wikipedia']").should('be.visible');
        cy.url().should('include',"Wikipedia");
        cy.get("div[data-async-context='query:Wikipedia']").children().first().children().children().first().next().children().first().find('a[href*="wikipedia.org/wiki/Wikipedia"]').eq(0).click();
        //cy.get('[href*="wikipedia.org/wiki/Wikipedia"]')
        cy.url().should('include',"https://pl.wikipedia.org/");
        const d = new Date();
        cy.log(users[0].address.city.replace("[salt]",d.getUTCDate().toString()+" "+(d.getUTCMonth()+1).toString()+" "+d.getHours().toString()+d.getMinutes().toString()+d.getUTCSeconds().toString()));
        cy.log(this.UserData[0].address.city)
        
        //cy.get()
    })
})

