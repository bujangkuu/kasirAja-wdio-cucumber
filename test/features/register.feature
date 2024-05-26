@register
Feature: kasirAja Register New User
 
    @register @positive
    Scenario: Successfully register with valid credentials
        Given I Am open Register page
        When I Am input valid data
        Then I Am should be on the Login page

    @register @negative
    Scenario: Failed register with invalid email
        Given I Am open Register page
        When I Am input valid nama toko, invalid email, and valid password
        Then I Am should see register error message

    