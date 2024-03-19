// ./src/calculator-example.test.ts
import { Calculator } from './calculator-example';

test('single digit addition test case', () => {
  const newUid = 1;
  const testCalc = new Calculator(newUid);
  expect(testCalc.addNum(1, 2)).toBe(3);
});
