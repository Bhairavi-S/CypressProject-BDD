/// <reference types="cypress"/>


describe('Rahul shetty automation practice applicatrion',() => {
    beforeEach(() => {
        cy.visit('/');
        cy.injectAxe();
    })
    it('sholud log any accessibility failures', () =>{
        cy.checkA11y();
    })
    it('should check the accessibility of specific element', () =>{
        cy.checkA11y('header');
    })
       
    
    
});