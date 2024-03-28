// ./src/calculator-example.ts
//
// Sample calculator class to demonstrate unit testing.

/**
 * A simple calculator that can only add.
 *
 * @property {number} uid - Calculator's owner id.
 * @method addNum - Adds two numbers.
 */
export class Calculator {
  uid: number;

  constructor(uid: number) {
    this.uid = uid;
  }

  /**
   * Adds two numbers.
   *
   * @param {number} a - First number.
   * @param {number} b - Second number.
   * @returns {number} - Sum of a and b.
   *
   */
  addNum(a: number, b: number): number {
    return a + b;
  }
}
