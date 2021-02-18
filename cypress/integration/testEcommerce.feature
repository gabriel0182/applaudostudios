Feature: Test ecommerce site

  @focus

  Scenario: test ecommerce

    Given I visit the homepage

    When Add item to shopping cart

    When Remove item inside the shopping cart

    And Search item

    Then Validate store information