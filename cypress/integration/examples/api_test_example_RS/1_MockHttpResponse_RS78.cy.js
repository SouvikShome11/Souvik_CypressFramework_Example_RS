/// <reference types="Cypress" />

describe('Test HTTP response Mocking', function () {
  it('My FirstTest Case', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo');

    cy.intercept(
      {
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: 'RestAssured with Java',
            isbn: 'BSG',
            aisle: '2302',
          },
        ],
      }
    ).as('bookResponseMock');

    cy.get('.btn.btn-primary').click();
    cy.wait('@bookResponseMock');
    cy.get('p').should('have.text', 'Oops only 1 Book available');
  });
});
