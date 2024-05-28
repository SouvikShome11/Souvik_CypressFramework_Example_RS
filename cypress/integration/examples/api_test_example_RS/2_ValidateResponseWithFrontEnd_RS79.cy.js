/// <reference types="Cypress" />

describe('Test HTTP response Mocking', function () {
  it('My FirstTest Case', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo');

    cy.intercept(
      'GET',
      'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    ).as('interceptBookList');

    cy.get('.btn.btn-primary').click();
    cy.wait('@interceptBookList').then(({ request, response }) => {
      cy.get('.table.table-dark tbody tr').should(
        'have.length',
        response.body.length
      );
    });
  });
});
