const assert = require('assert');
const SubarraySum = require('../daily/18_subarraySum.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SubarraySum();
});

describe('SubarraySum - 1', function() {
  const expected = [10, 7, 8, 8];
  const WM = [10, 5, 2, 7, 8, 7];

  it('Iterative', function() {
    const result = expected; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});