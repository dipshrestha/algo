const assert = require('assert');
const WordWrap = require('../daily/57_wordWrap.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new WordWrap();
});

describe('WordWrap - 6', function() {
  const WM = 'she is in water';
  const K = 6;
  const expected = ['she', 'is in', 'water'];
  it('DP', function() {
    const result = algo.dp(WM.split(' '), K)
    assert.deepEqual(result, expected);
  });
});

describe('WordWrap - 10', function() {
  const WM = "the quick brown fox jumps over the lazy dog";
  const K = 10;
  const expected = ["the quick", "brown fox", "jumps over", "the lazy", "dog"]
  it('DP', function() {
    const result = algo.dp(WM.split(' '), K)
    assert.deepEqual(result, expected);
  });
});