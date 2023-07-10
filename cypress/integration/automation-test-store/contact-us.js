/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Test Contact Us form via Automation Test Store", () => {    
    var url = 'https://automationteststore.com/'  

    it("Should be able to submit a successful submission via contact us form (normal)", () => {        
        cy.visit(url)
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Stephanye')
        cy.get('#ContactUsFrm_email').type('qastephanyecastellano@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('I am studying Cypress')
        cy.get('.col-md-6 > .btn').click()
        cy.url().should('be.include', url + 'index.php?rt=content/contact/success')
        cy.get('.mb40 > :nth-child(3)').contains('Your enquiry has been successfully sent to the store owner!')
    })

    it.only("Should be able to submit a successful submission via contact us form (xPath)", () => {        
        cy.visit(url)
        cy.xpath('//a[contains(@href,"contact")]').click()
        cy.get('#ContactUsFrm_first_name').type('Stephanye')
        cy.get('#ContactUsFrm_email').type('qastephanyecastellano@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('I am studying Cypress')
        cy.get('.col-md-6 > .btn').click()
        cy.url().should('be.include', url + 'index.php?rt=content/contact/success')
        cy.get('.mb40 > :nth-child(3)').contains('Your enquiry has been successfully sent to the store owner!')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {       
        cy.visit(url + 'index.php?rt=content/contact/')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.element_error').contains('First name: is required field! Name must be between 3 and 32 characters!')
        cy.get('.element_error').contains('Email: is required field! E-Mail Address does not appear to be valid!')
        cy.get('.element_error').contains('Enquiry: is required field! Enquiry must be between 10 and 3000 characters!')
    })
})