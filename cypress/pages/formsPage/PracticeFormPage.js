/// <reference types="cypress" />
import PracticeFormElements from '../../elements/formsPage/practiceForm.page.elements';

const faker = require('@faker-js/faker');

const firstName = faker.faker.name.firstName();
const lastName = faker.faker.name.lastName();
const email = faker.faker.internet.email();
const genderMale = "Male";
const genderFamale = "Female";
const genderOther = "Other";
const mobile = faker.faker.phone.phoneNumber();
const subjects = faker.faker.lorem.sentence();
const hobbieSport = "Sports";
const hobbieReading = "Reading";
const hobbieMusic = "Music";
const currentAddress = faker.faker.address.streetAddress();

export default class PracticeFormPage {
   constructor() {
       this.pageElements = new PracticeFormElements();
   }

    visitForms() {
        cy.visit('');
        cy.get('div[class="card-body"]').contains("Forms").click();
    }

    visitPracticeForm() {
        cy.get('.text').contains('Text Box').click();
    }

    getPageHeader() {
        return cy.get(this.pageElements.headerTitle);
    }

    getFirstName() {
        return cy.get(this.pageElements.inputFirstName);
    }

    getLastName() {
        return cy.get(this.pageElements.inputLastName);
    }

    getEmail() {
        return cy.get(this.pageElements.inputEmail);
    }

    getGender() {
        return cy.get(this.pageElements.inputGender);
    }

    getMobile() {
        return cy.get(this.pageElements.inputMobile);
    }

    getBirthDay() {
        return cy.get(this.pageElements.inputBirthday);
    }

    getSubjects() {
        return cy.get(this.pageElements.inputSubjects)
    }
}