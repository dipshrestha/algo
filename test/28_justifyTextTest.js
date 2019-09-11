const assert = require('assert');
const JustifyText = require('../daily/28_justifyText.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new JustifyText();
});

describe.only('JustifyText', function() {

  it('Iterative - ["the"], 3', function() {
    const expected = ["the"];
    const WM = ["the"];
    const result = algo.iterative(WM, 3);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat"], 3', function() {
    const expected = ["the", "cat"];
    const WM = ["the", "cat"];
    const result = algo.iterative(WM, 3);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "ca"], 3', function() {
    const expected = ["the", "ca "];
    const WM = ["the", "ca"];
    const result = algo.iterative(WM, 3);
    assert.deepEqual(result, expected);
  });
  it('Iterative - ["the", "cat", "abcdefg"], 7', function() {
    const expected = ["the cat", "abcdefg"];
    const WM = ["the", "cat", "abcdefg"];
    const result = algo.iterative(WM, 7);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat", "ab", "cd"], 7', function() {
    const expected = ["the cat", "ab   cd"];
    const WM = ["the", "cat", "ab", "cd"];
    const result = algo.iterative(WM, 7);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat", "abcd"], 7', function() {
    const expected = ["the cat", "abcd   "];
    const WM = ["the", "cat", "abcd"];
    const result = algo.iterative(WM, 7);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat", "abcdefgh"], 8', function() {
    const expected = ["the  cat", "abcdefgh"];
    const WM = ["the", "cat", "abcdefgh"];
    const result = algo.iterative(WM, 8);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat", "man", abcdefghijk"], 11', function() {
    const expected = ["the cat man", "abcdefghijk"];
    const WM = ["the", "cat", "man", "abcdefghijk"];
    const result = algo.iterative(WM, 11);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat", "man", abcdefghijkl"], 12', function() {
    const expected = ["the  cat man", "abcdefghijkl"];
    const WM = ["the", "cat", "man", "abcdefghijkl"];
    const result = algo.iterative(WM, 12);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "cat", "man", abcdefghijklm"], 13', function() {
    const expected = ["the  cat  man", "abcdefghijklm"];
    const WM = ["the", "cat", "man", "abcdefghijklm"];
    const result = algo.iterative(WM, 13);
    assert.deepEqual(result, expected);
  });

  it('Iterative - ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16', function() {
    const expected = ["the  quick brown", "fox  jumps  over", "the   lazy   dog"]
    const WM = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
    const result = algo.iterative(WM, 16);
    assert.deepEqual(result, expected);
  });
  // ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
});