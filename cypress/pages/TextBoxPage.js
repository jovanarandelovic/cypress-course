/// <reference types="cypress" />
import TextBoxElements from "../elements/text.box.page.elements"

export default class TextBoxPage {
    textBox() {
        this.pageElements = new TextBoxElements();
    }

    visitTextBox() {
        cy.visit('/elements');
        cy.get('.text').contains('Text Box').click();
    }

    getPageHeather() {
        return cy.get('.main-header');
    }
    
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
        this.getPageHeather().should('contain.text', 'Text Box');

    }
}