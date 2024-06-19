Feature: View and Edit Cart

  Scenario: View products in the cart
    Given the customer has added products to the cart
    When the customer navigates to the cart page
    Then they should see a list of added products with their names, images, prices, quantities, and subtotal
    And they should see the updated total of the cart

  Scenario: Remove a product from the cart
    Given the customer is on the cart page
    And there are products in the cart
    When the customer removes a product from the cart
    Then the product should disappear from the list of products in the cart
    And the updated total should reflect the removal of the product

  Scenario: Update the quantity of a product in the cart
    Given the customer is on the cart page
    And there are products in the cart
    When the customer updates the quantity of a product
    Then the quantity of the product should be updated in the cart list
    And the subtotal of the product should be updated according to the new quantity
    And the total of the cart should be updated reflecting the new quantity of the product