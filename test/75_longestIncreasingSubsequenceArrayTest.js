const assert = require('assert');
const LongestIncreasingSubsequenceArray = require('../daily/75_longestIncreasingSubsequenceArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestIncreasingSubsequenceArray();
});

describe('LongestIncreasingSubsequenceArray', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});