@login
Feature: kasirAja Login Tests

    @login @negative
    Scenario: Failed login with invalid email
        Given I Am open kasirAja page
        When I Am input invalid email and valid password
        Then I Am should see an error message

    @login @positive
    Scenario: Successfully login with valid credentials
        Given I Am open kasirAja page
        When I Am input valid credentials
        Then I Am should be on the Dashboard page