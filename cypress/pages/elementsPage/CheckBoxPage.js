/// <reference types="cypress" />
import CheckBoxElements from "../../elements/elementsPage/checkbox.page.elements";

export default class CheckBoxPage {
    constructor() {
        this.pageElements = new CheckBoxElements();
    }
visitCheckBox() {
    cy.visit('/checkbox');
    cy.

}
