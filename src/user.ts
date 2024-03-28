// ./src/user.ts
//
// Sample user class to demonstrate behavior testing

/**
 * A simple user class storing name and withdrawal data.
 *
 * @property {string} name - User's name.
 * @property {number} simpleMeanWithDrawal - User's mean withdrawal amount.
 * @property {number} simpleThreshold - User's withdrawal threshold.
 * @property {number} simpleWithdrawalAmount - User's withdrawal amount.
 * @property {boolean} accountAlert - True if withdrawal amount is over threshold.
 */
export class User {
  name: string;
  simpleMeanWithDrawal: number;
  simpleThreshold: number;
  simpleWithdrawalAmount: number;
  accountAlert: boolean;

  /**
   * @param {string} name - User's name.
   */
  constructor(name: string) {
    this.name = name;
    this.simpleMeanWithDrawal = 0;
    this.simpleThreshold = 0;
    this.simpleWithdrawalAmount = 0;
    this.accountAlert = false;
  }

  /**
   * @returns {boolean} - True if withdrawal amount is over threshold.
   */
  hasAlerts(): boolean {
    this.accountAlert = this.simpleWithdrawalAmount > this.simpleThreshold;
    return this.accountAlert;
  }
}
