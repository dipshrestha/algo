const assert = require('assert');
const LongestIncreasingSubsequenceArray = require('../daily/75_longestIncreasingSubsequenceArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestIncreasingSubsequenceArray();
});

describe('LongestIncreasingSubsequenceArray', function() {
  const expected = 6;
  const WM = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
  it('Iterative', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(WM)
    assert.equal(result, expected);
  });
});