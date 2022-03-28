/// <reference types="cypress" />
import TextBoxElements from "../elements/textbox.page.elements"
const faker = require('@faker-js/faker');

const userName = faker.faker.name.findName();
const email = faker.faker.internet.email();
const currentAddress = faker.faker.address.streetAddress();
const permanentAddress = faker.faker.address.streetAddress();

export default class TextBoxPage {
    textBox() {
        this.pageElements = new TextBoxElements();
    }

    visitTextBox() {
        cy.visit('/elements');
        cy.get('.text').contains('Text Box').click();
    }

    // getPageHeader() {
    //     return cy.get(this.pageElements.header);
    // }

    getPageHeader() {
        return cy.get('.main-header');
    }
    
    // getFullNameInput() {
    //     return cy.get(this.pageElements.inputUserName);
    // }

    getFullNameInput() {
        return cy.get('input[id="userName"]');
    }


    getEmialInput() {
        return cy.get('input[id="userEmail"]');
    }

    getCurrentAddressInput() {
        return cy.get('textarea[id="currentAddress"]')
    }

    getPermAddressInput() {
        return cy.get('textarea[id="permanentAddress"]');
    }

    getSubmitButton() {
        return cy.get('button[id="submit"]')
    }

    getResults() {
        return cy.get('div[class="border col-md-12 col-sm-12"]');
    }

    verifyThatHeatherIsDisplayed() {
        this.getPageHeader().should('contain.text', 'Text Box');
    }

    fillInForm() {
        this.getFullNameInput().type(userName);
        this.getEmialInput().type(email);
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