# new feature
# Author: Bhairavi Deshmukh


Feature: Shopping Cart Feature

  Scenario: Add and remove products from the cart
    Given I am on the homepage
    When I add 3 units of "Brocolli - 1 Kg" to the cart
    And I add 2 units of "Beetroot - 1 Kg" to the cart
    And I add 3 units of "Cucumber - 1 Kg" to the cart
    And I navigate to the cart preview
    And I remove "Cucumber - 1 Kg" from the cart
    And I proceed to checkout
    And I should be redirected to the checkout page
    And I apply a promocode
    Then I place the order
    

  Scenario: Search for a product using the search bar
    Given I am on the homepage
    When I search for "Onion - 1 Kg" using the search bar
    Then I should see the product "Onion - 1 Kg" in the search results



