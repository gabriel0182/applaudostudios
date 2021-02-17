Feature: Test the search in Bitfitnex page

  @focus

  Scenario: user can search by

    Given I visit the homepage

    When Then I click on the ticker table Search icon

    And Search for: Unus Sed Leo
    And Click on the search result

    Then Assert that the page URL