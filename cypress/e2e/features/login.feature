Feature: User Login

    Background:
        Given A user is at the sOpenCart login page


    Scenario: Success Login
        When A user enters the email "b1jnv6d54i@mxscout.com", the password "university1234", and clicks on the login button
        Then the url will contains the account directory


    Scenario: Incorrect Email Login
        When A user provides incorrect credentials, and clicks on the login button
            | email    | password       |
            | testName | university1234 |
        Then The error message " Warning: No match for E-Mail Address and/or Password." is displayed

    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | email                  | password     |
            | b1jnv6d54i@mxscout.com | testPassword |
        Then The error message " Warning: No match for E-Mail Address and/or Password." is displayed