const assert = require('assert');
const MaxStack = require('../daily/43_maxStack.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MaxStack();
});
describe('MaxStack', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});