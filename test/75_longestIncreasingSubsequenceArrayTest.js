const assert = require('assert');
const LongestIncreasingSubsequenceArray = require('../daily/75_longestIncreasingSubsequenceArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestIncreasingSubsequenceArray();
});

describe('LongestIncreasingSubsequenceArray: [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]', function() {
  const expected = 6;
  const WM = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
  it('Backtracking', function() {
    const result = algo.backtracking(WM)
    assert.equal(result, expected);
  });

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(WM)
    assert.equal(result, expected);
  });
});

describe('LongestIncreasingSubsequenceArray: [0, 4, 2, 2, 10]', function() {
  const expected = 3;
  const WM = [0, 4, 2, 2, 10];
  it('Backtracking', function() {
    const result = algo.backtracking(WM)
    assert.equal(result, expected);
  });

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(WM)
    assert.equal(result, expected);
  });
});

describe('LongestIncreasingSubsequenceArray: [0, 4, 2]', function() {
  const expected = 2;
  const WM = [0, 4, 2];
  it('Backtracking', function() {
    const result = algo.backtracking(WM)
    assert.equal(result, expected);
  });

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(WM)
    assert.equal(result, expected);
  });
});