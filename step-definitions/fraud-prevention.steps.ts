// step-definitions/fraud-prevention.steps.ts
// @ts-check
import { binding, given, then, when } from 'cucumber-tsflow';
import * as assert from 'assert';

// import { }

// @binding()
// export class AlertAbnormalWithdrawalSteps {
//   private 
// }

// // step-definitions/fraud-prevention.steps.ts
// // @ts-check
// import { binding, given, then, when } from 'cucumber-tsflow';
// import * as assert from 'assert';
// import sinon from 'sinon';

// import { User } from '../models/user'; // Assuming you have a User model

// @binding()
// export class AlertAbnormalWithdrawalSteps {
//   private user: sinon.SinonStubbedInstance<User>;

//   constructor() {
//     // Create a mock user
//     this.user = sinon.createStubInstance(User);
//     // Set up the mock user's properties
//     this.user.archived = {
//       transactions: {
//         withdrawal: []
//       }
//     };
//   }

//   @given(/some precondition/)
//   public givenSomePrecondition() {
//     // Use the mock
//     this.user.archived.transactions.withdrawal.push({ amount: 100, date: new Date() });
//   }

//   @when(/some action/)
//   public whenSomeAction() {
//     // Use the mock
//     const withdrawal = this.user.archived.transactions.withdrawal[0];
//     assert.equal(withdrawal.amount, 100);
//   }

//   @then(/some outcome/)
//   public thenSomeOutcome() {
//     // Verify the mock was used
//     assert(this.user.archived.transactions.withdrawal.length > 0);
//   }
// }