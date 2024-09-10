/// <reference types="cypress" />

import selectors from '../fixtures/Selectors.json';

describe('Calculator Tests', () => {

    before(() => {
        cy.log('Tests are starting...');
    });

    beforeEach(() => {
        cy.visit('https://www.calculator.net');
    });

    afterEach(() => {
        cy.get(selectors.cancelButton).click();
    });

    after(() => {
        cy.log('All tests are finished.');
    });

    it('Verify user able to do addition', () => {
        cy.get(selectors.twoNumberButton).click();
        cy.get(selectors.plusOperatorButton).click();
        cy.get(selectors.oneNumberButton).click();
        cy.get(selectors.equalsOperatorButton).click();
        cy.get(selectors.result).should('contain.text', '3');
    });

    it('Verify user able to do Subtraction', () => {
        cy.get(selectors.threeNumberButton).click();
        cy.get(selectors.minusOperatorButton).click();
        cy.get(selectors.oneNumberButton).click();
        cy.get(selectors.equalsOperatorButton).click();
        cy.get(selectors.result).should('contain.text', '2');
    });

    it('Verify user able to do Multiplication', () => {
        cy.get(selectors.twoNumberButton).click();
        cy.get(selectors.multiplyOperatorButton).click();
        cy.get(selectors.fiveNumberButton).click();
        cy.get(selectors.equalsOperatorButton).click();
        cy.get(selectors.result).should('contain.text', '10');
    });

    it('Verify user able to do Division', () => {
        cy.get(selectors.eightNumberButton).click();
        cy.get(selectors.divideOperatorButton).click();
        cy.get(selectors.twoNumberButton).click();
        cy.get(selectors.equalsOperatorButton).click();
        cy.get(selectors.result).should('contain.text', '4');
    });
});
