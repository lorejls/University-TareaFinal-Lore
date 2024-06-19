Feature: User Registration

Background: 
   Given I am on the registration page

  Scenario: Successful user registration with all mandatory fields
    When I fill in the registration form with the following details:
      | firstname      | lastname       | email              | telephone  | password | confirm_password |
      | <firstname>    | <lastname>     | <email>            | <telephone>| <password> | <confirm_password> |
    And I submit the registration form
    Then I sould be registered successfully
    And  I should see a success message

      