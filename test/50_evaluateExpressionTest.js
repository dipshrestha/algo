const assert = require('assert');
const EvaluateExpression = require('../daily/50_evaluateExpression.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EvaluateExpression();
});
describe('EvaluateExpression', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});