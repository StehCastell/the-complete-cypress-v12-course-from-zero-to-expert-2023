/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        var url = 'https://webdriveruniversity.com/'

        // cy.visit(url)     
        // cy.get('#contact-us > .thumbnail').click()   
        // cy.get('#contact-us').click({force: true})        
        
        cy.visit(url + 'Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Stephanye')
        cy.get('[name="last_name"]').type('Castellano')
        cy.get('[name="email"]').type('qastephanyecastellano@gmail.com')
        cy.get('textarea.feedback-input').type('I am studying Cypress')
        cy.get('[type="submit"]').click()
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        var url = 'https://webdriveruniversity.com/'

        cy.visit(url + 'Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Lucas')
        cy.get('[name="last_name"]').type('Santos Faria')
        cy.get('textarea.feedback-input').type('I am studying Cypress')
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required')
        cy.contains('Error: Invalid email address')
    })
})
