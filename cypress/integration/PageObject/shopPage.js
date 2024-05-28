class ShopPage {
  getMobileNameList() {
    return cy.get(`h4.card-title a`);
  }

  getAddMobileButtonList() {
    return cy.get('.btn.btn-info');
  }

  getCheckoutLink() {
    return cy.get(`a:contains('Checkout')`);
  }

  getCheckoutButton() {
    return cy.get(`button:contains('Checkout')`);
  }

  getLocationSeachBox() {
    return cy.get('#country');
  }

  getLocationSuggestions() {
    return cy.get('.suggestions a');
  }

  getIAgreecheckbox() {
    return cy.get('#checkbox2');
  }

  getPurchaseButton() {
    return cy.get(`input[type='Submit']`);
  }

  getSuccessMessage() {
    return cy.get(`*[class*='alert']`);
  }

  getEachCartItemPrice() {
    return cy.get(`.table.table-hover tbody tr td:nth-child(4) strong`);
  }

  getCartTotalPrice() {
    return cy.get('.table.table-hover .text-right strong');
  }
}

export default new ShopPage();
