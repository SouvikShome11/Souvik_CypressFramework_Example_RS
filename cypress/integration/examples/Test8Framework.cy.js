/// <reference types="cypress" />

import homePage from '../PageObject/homePage';
import shopPage from '../PageObject/shopPage';
import Util from '../utill/Util';

describe('My Second Test Suit', function () {
  let util = new Util();

  beforeEach('Load Data', function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('My First Test Case', function () {
    cy.wait(5000);
    cy.visit(Cypress.env('url') + '/angularpractice/');

    /* homePage.getNameField().type(this.data.name);
    homePage.getGender_DD().select(this.data.gender);

    homePage.getTwoWayDataBindingField().should('have.value', this.data.name);
    homePage.getNameField().should('have.attr', 'minlength', '2');

    homePage.getEntrepreneur_RB().should('be.disabled'); */

    homePage.getShopTab().click();

    // POINT: 47
    this.data.products.forEach((product) => {
      cy.selectProduct(product);
    });

    shopPage.getCheckoutLink().click();

    //!  Validating cart total ->>>> Have to ask question to lalit
    shopPage.getCartTotalPrice().then(function ($el) {
      cy.log($el.text());
      const cartTotalPrice = util.getPriceInInteger(
        cy.wrap($el).invoke('text')
      );
      const calculatedCartTotal = util.getCartTotal();
      expect(cartTotalPrice).to.equal(calculatedCartTotal);
    });

    shopPage.getCheckoutButton().click();
    shopPage.getLocationSeachBox().type('Ind');
    cy.selectCountry('India');
    shopPage.getIAgreecheckbox().click({ force: true });
    shopPage.getPurchaseButton().click();
    /* 
    shopPage
      .getSuccessMessage()
      .should(
        'have.text',
        'Thank you! Your order will be delivered in next few weeks :-)'
      ); */

    shopPage
      .getSuccessMessage()
      .invoke('text')
      .should(
        'include',
        'Thank you! Your order will be delivered in next few weeks :-)'
      );

    shopPage.getSuccessMessage().then(function ($element) {
      const actualText = $element.text();
      expect(actualText.includes('Success')).to.be.true;
    });
  });
});
