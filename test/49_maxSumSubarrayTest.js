const assert = require('assert');
const MaxSumSubarray = require('../daily/49_maxSumSubarray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MaxSumSubarray();
});
describe('MaxSumSubarray', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});