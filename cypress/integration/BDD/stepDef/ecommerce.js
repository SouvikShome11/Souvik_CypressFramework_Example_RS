import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../PageObject/homePage';
import shopPage from '../../PageObject/shopPage';
import Util from '../../utill/Util';

let util = new Util();

Given(`I open Ecommerce Page`, () => {
  cy.visit(Cypress.env('url') + '/angularpractice/');
});

When(`I add items to the Cart`, function () {
  homePage.getShopTab().click();
  this.data.products.forEach((product) => {
    cy.selectProduct(product);
  });

  shopPage.getCheckoutLink().click();
});

When(`validate the total Price and continue`, () => {
  shopPage.getCheckoutButton().click();
});
When(`Select Country and Submit`, () => {
  shopPage.getLocationSeachBox().type('Ind');
  cy.selectCountry('India');
  shopPage.getIAgreecheckbox().click({ force: true });
  shopPage.getPurchaseButton().click();
});

Then(`Verify Success Message`, () => {
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

When(`I fill the form details`, function () {
  homePage.getNameField().type(this.data.name);
  homePage.getGender_DD().select(this.data.gender);
});

Then(`validate the forms behaviour`, function () {
  homePage.getTwoWayDataBindingField().should('have.value', this.data.name);
  homePage.getNameField().should('have.attr', 'minlength', '2');
  homePage.getEntrepreneur_RB().should('be.disabled');
});

Then(`select the Shop Page`, function () {
  homePage.getShopTab().click();
});
