/// <reference types="cypress" />
import TextBoxElements from "../../elements/elementsPage/textbox.page.elements"
const faker = require('@faker-js/faker');

const userName = faker.faker.name.findName();
const email = faker.faker.internet.email();
const currentAddress = faker.faker.address.streetAddress();
const permanentAddress = faker.faker.address.streetAddress();

export default class TextBoxPage {
    constructor() {
        this.pageElements = new TextBoxElements();
    }
    visitTextBox() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
          });

        cy.get('.text').contains('Text Box').click();

    }
    
    visitElements() {
        cy.visit('');
        cy.get('div[class="card-body"]').contains("Elements").click();
        
    }

    getPageHeader() {
        return cy.get(this.pageElements.headerTitle);
    }

    getFullNameInput() {
        return cy.get(this.pageElements.inputUserName);
    }

    getEmailInput() {
        return cy.get(this.pageElements.inputEmail);
    }

    getCurrentAddressInput() {
        return cy.get(this.pageElements.currentAddressInput)
    }

    getPermAddressInput() {
        return cy.get(this.pageElements.permAddressInput);
    }

    getSubmitButton() {
        return cy.get(this.pageElements.submitButton)
    }

    getResults() {
        return cy.get(this.pageElements.results);
    }

    verifyThatHeaderIsDisplayed() {
        this.getPageHeader().should('contain.text', 'Text Box');
    }

    fillInForm() {
        this.getFullNameInput().type(userName);
        this.getEmailInput().type(email);
        this.getCurrentAddressInput().type(currentAddress);
        this.getPermAddressInput().type(permanentAddress);
        this.getSubmitButton().click();
    }
    
    verifyThatFormIsSumbmited() {
        this.getResults().should('contain', `${userName}`);
        this.getResults().should('contain', `${email}`);
        this.getResults().should('contain', `${currentAddress}`);
        this.getResults().should('contain', `${permanentAddress}`);
    }

}