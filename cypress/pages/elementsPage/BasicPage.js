/// <reference types="cypress" />

import BasicElements from "../elements/basic.page.elements";

export default class BasicPage {
    constructor() {
        this.pageElements = new BasicPageElements();
    }
    getPageHeader() {
        return cy.get(this.pageElements.header);
    }
}
    
