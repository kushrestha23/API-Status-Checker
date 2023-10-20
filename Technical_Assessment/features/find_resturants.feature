Feature: Use the website to find restaurants
  So that I can order food
  As a hungry customer
  I want to be able to find restaurants in my area

  Scenario: Search for restaurants in an area
    Given I want food in "136 Market Avenue, Winnipeg, MB, Canada"
    When I search for restaurants
    Then I should see some restaurants in "136 Market Avenue, Winnipeg, MB, Canada"

