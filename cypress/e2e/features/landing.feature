@landing @regression
Feature: Landing Test

    Scenario: Verify landing URL and title
        Given I visit the OpenCart website
        When I navigate to the homepage
        Then the URL should be "http://opencart.abstracta.us/"
        And the page title should be "Your Store"