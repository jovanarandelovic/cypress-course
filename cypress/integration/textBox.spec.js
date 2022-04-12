/// <reference types = "cypress" />

import TextBoxPage from "../pages/elementsPage/TextBoxPage";

const textBox = new TextBoxPage();

describe ('Should test TextBox', () => {
    
    beforeEach('navigates to the Elements page and selects Text Box', () => {
    textBox.visitElements();
    
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      textBox.visitTextBox();
    })

    it('Should verify that the header is displayed', () => {
       textBox.verifyThatHeaderIsDisplayed();

    })

    it('Should test that the form was submited', () => {
        textBox.fillInForm();
        textBox.verifyThatFormIsSumbmited();
    })
})