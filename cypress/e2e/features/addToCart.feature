@cart @regression
Feature: Cart managment


    Scenario: Add a product to the cart and verify updates
        Given I am on the homepage and the products are visible and available
        When I click the "Add to Cart" button
        Then the product should be added to my cart
        And I should see a confirmation message indicating that the product has been added to the cart
        And the number of items in the cart and the cart total should update automatically


