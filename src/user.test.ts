// ./src/user.test.ts
import { User } from './user';

test('user creation test case', () => {
  const newUser = new User('Alice Bobson');
  expect(newUser.name).toBe('Alice Bobson');
  expect(newUser.simpleMeanWithDrawal).toBe(0);
  expect(newUser.simpleThreshold).toBe(0);
  expect(newUser.simpleWithdrawalAmount).toBe(0);
  expect(newUser.accountAlert).toBe(false);
});

test('user alert test case', () => {
  const newUser = new User('Alice Bobson');
  newUser.simpleMeanWithDrawal = 100;
  newUser.simpleThreshold = 200;
  newUser.simpleWithdrawalAmount = 300;
  expect(newUser.hasAlerts()).toBe(true);
});
