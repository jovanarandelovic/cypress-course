/// <reference types="cypress" />


describe('', ()=> {
before('navigates to the Elements page and selects Text Box', ()=> {
    cy.visit('')
    cy.get('h5').contains('Elements').click();
    cy.url().should('contain', 'elements');
    cy.get('.text').contains('Text Box').click();
    cy.get('.main-header').should('contain.text', 'Text Box');
})

it('should check if all the lables in from are displayed', ()=> {
cy.get('.form-label').contains('Full Name').should('be.visible');
cy.get('.form-label').contains('Email').should('be.visible');
cy.get('.form-label').contains('Current Address').should('be.visible');
cy.get('.form-label').contains('Permanent Address').should('be.visible');
})

it('should check that the user is able to fill and submit the form', ()=> {

const faker = require('@faker-js/faker');
const userName = faker.faker.name.findName();
const email = faker.faker.internet.email();
const currentAddress = faker.faker.address.streetAddress();
const permanentAddress = faker.faker.address.streetAddress();

cy.get('input[id="userName"]').type(userName);
cy.get('input[id="userEmail"]').type(email);
cy.get('textarea[id="currentAddress"]').type(currentAddress);
cy.get('textarea[id="permanentAddress"]').type(permanentAddress);
cy.get('button[id="submit"]').should('be.visible').should('be.enabled')
cy.get('button[id="submit"]').click();

cy.get('div[class="border col-md-12 col-sm-12"]').should('contain', `${userName}`);
cy.get('div[class="border col-md-12 col-sm-12"]').should('contain', `${email}`);
cy.get('div[class="border col-md-12 col-sm-12"]').should('contain', `${currentAddress}`);
cy.get('div[class="border col-md-12 col-sm-12"]').should('contain', `${permanentAddress}`);

})


})