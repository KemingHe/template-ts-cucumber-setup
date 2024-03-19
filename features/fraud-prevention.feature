# ./features/fraud-prevention.feature
Feature: Fraud Prevention Feature for My Banking System
  
  Scenario: Alerts user when withdrawing abnormally large amount
    Given A user's average and peak withdraw amount in history
    When User tries to withdraw amount considerably larger than average or peak
    Then Pause the transaction, log and alert the bank and the user for confirmation

  Scenario: Summary of one user story under this feature
    Given The relevant background of the situation
    When Something happens naturally or through some actions
    Then Some results are expected from the system through this feature
