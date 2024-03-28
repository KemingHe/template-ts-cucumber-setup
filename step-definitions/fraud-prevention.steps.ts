// step-definitions/fraud-prevention.steps.ts
// @ts-check
import { binding, given, then, when } from 'cucumber-tsflow';
import * as assert from 'assert';
import { User } from '../src/user';

// Scenario 1: Alerts abnormal withdrawal
@binding()
export class FraudPreventionSteps {
  private user = new User('Test Dummy');

  @given("A user's average ${float} withdraw amounts in history")
  public givenUserHistory(average: number): void {
    this.user.simpleMeanWithDrawal = average;
  }

  @when(
    'User tries to withdraw ${float}, which is more than the set threshold of {float} * average'
  )
  public whenUserTriesToWithdrawOverThreshold(
    current: number,
    multiplier: number
  ): void {
    this.user.simpleThreshold = this.user.simpleMeanWithDrawal * multiplier;
    this.user.simpleWithdrawalAmount = current;
  }

  @then("User's account will be on alert")
  public thenUserAccountOnAlert(): void {
    assert.ok(this.user.hasAlerts());
  }
}

// Scenario 2: Sample scenario
@binding()
export class SampleScenarioSteps {
  @given('The relevant background of the situation')
  public givenBackground(): void {
    // Setup goes here.
  }

  @when('Something happens naturally or through some actions')
  public whenSomethingHappens(): void {
    // Action goes here.
  }

  @then('The expected outcome should be achieved')
  public thenExpectedOutcome(): void {
    // Assertion goes here.
    assert.ok(true);
  }
}
