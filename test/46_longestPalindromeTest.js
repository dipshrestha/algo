const assert = require('assert');
const LongestPalindrome = require('../daily/46_longestPalindrome.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestPalindrome();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});