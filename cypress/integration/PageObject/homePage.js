class HomePage {
  getNameField() {
    return cy.get(':nth-child(1) > .form-control');
  }

  getGender_DD() {
    return cy.get('select');
  }

  getTwoWayDataBindingField() {
    return cy.get(':nth-child(4) > .ng-untouched');
  }

  getEntrepreneur_RB() {
    return cy.get('#inlineRadio3');
  }

  getShopTab() {
    return cy.get(`a:contains('Shop')`);
  }
}

export default new HomePage();
