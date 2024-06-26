import homePage from '../integration/PageObject/HomePage';
import shopPage from '../integration/PageObject/ShopPage';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', ($productName) => {
  shopPage.getMobileNameList().each(($el, index, $list) => {
    if ($el.text().includes($productName))
      shopPage.getAddMobileButtonList().eq(index).click();
  });
});

Cypress.Commands.add('selectCountry', ($countryName) => {
  shopPage.getLocationSuggestions().each(($el, index, $list) => {
    if ($el.text().includes($countryName))
      shopPage.getLocationSuggestions().eq(index).click();
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
