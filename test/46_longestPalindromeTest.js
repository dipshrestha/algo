const assert = require('assert');
const LongestPalindrome = require('../daily/46_longestPalindrome.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestPalindrome();
});

describe('LongestPalindrome: aabcdcb', function() {
  const expected = 'bcdcb';
  const str = 'aabcdcb';

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});

describe('LongestPalindrome: bananas', function() {
  const expected = 'anana';
  const str = 'bananas';

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});
describe('LongestPalindrome: cbbd', function() {
  const expected = 'bb';
  const str = 'cbbd';

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});