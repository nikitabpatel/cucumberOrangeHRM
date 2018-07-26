Feature: OrangeHRM log in

  @login
  Scenario: As a User, I should able to log in

    Given user is on log in page
    When he enters username and password
    And he clicks on log in button
    Then he should able to log in successfully

  @nologin
  Scenario Outline: Invalid credentials
    Given user is on log in page
    When he enters invalid "<username>" and "<password>"
    And he clicks on log in button
    Then he should not able to log in with "<error message>"
    Examples:
      | username | password | error message             |
      | Admin    | Abcxyz89 | Invalid credentials       |
      | Test123  | admin123 | Invalid credentials       |
      | Test123  | Abcxyz89 | Invalid credentials       |
      |          | admin123 | Username cannot be empty  |
      |          | Abcxyz89 | Username cannot be empty  |
      | Test123  |          | Password cannot be empty  |
      | Admin    |          | Password cannot be empty  |