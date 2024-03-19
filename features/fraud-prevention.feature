# ./features/fraud-prevention.feature
Feature: Fraud Prevention
  
  Scenario: Alerts abnormal withdrawal
    Given A user's average $20 withdraw amounts in history
    When User tries to withdraw $100, which is more than the set threshold of 3 * average
    Then User's account will be on alert

  Scenario: Sample scenario
    Given The relevant background of the situation
    When Something happens naturally or through some actions
    Then The expected outcome should be achieved
