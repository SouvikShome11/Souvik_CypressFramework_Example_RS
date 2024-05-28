Feature: End to End Ecommerce validation

  @Regression
  Scenario: Ecommerce Place Order
    Given I open Ecommerce Page
    When I add items to the Cart
    And validate the total Price and continue
    And Select Country and Submit
    Then Verify Success Message

  @Smoke
  Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
      | name | gender |
      | bobz | Male   |
    Then validate the forms behaviour
    And select the Shop Page


