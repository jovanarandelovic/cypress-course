/// <reference types = "cypress" />

import TextBoxPage from "../pages/TextBoxPage";
const textBox = new TextBoxPage();

describe ('Should test TextBox', () => {
    
    beforeEach('navigates to the Elements page and selects Text Box', () => {
    textBox.visitTextBox();
    })

    it('Should verify that the heather is displayed', () => {
        textBox.verifyThatHeatherIsDisplayed();

    })

    it('Should test that the form was submited', (userName, email, currentAddress, permanebtAddress) => {
       // const faker = require('@faker-js/faker');

        // const userName = faker.faker.name.findName();
        // const email = faker.faker.internet.email();
        // const currentAddress = faker.faker.address.streetAddress();
        // const permanentAddress = faker.faker.address.streetAddress();

         userName = "random";

        textBox.getEmialInput().type(userName);
        textBox.getCurrentAddressInput.type(currentAddress);
        textBox.getPermAddressInput.type(permanentAddress);
        textBox.getSubmitButton().click();

        textBox.verifyThatFormIsSumbmited();

    })
})