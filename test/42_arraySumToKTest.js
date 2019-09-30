const assert = require('assert');
const ArraySumToK = require('../daily/42_arraySumToK.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ArraySumToK();
});

describe('ArraySumToK: [12, 1, 4, 2], 3', function() {
  const expected = [1, 2];
  const WM = [12, 1, 4, 2];
  const K = 3;

  it('Recursive', function() {
    const result = algo.recursive(WM, K)
    assert.deepEqual(result.sort(), expected.sort());
  });

  it('RecursiveBacktracking', function() {
    const result = algo.recursive(WM, K)
    assert.deepEqual(result.sort(), expected.sort());
  });
});

describe('ArraySumToK: [12, 1, 61, 5, 9, 2], 24', function() {
  const expected = [12, 9, 2, 1];
  const WM = [12, 1, 61, 5, 9, 2];
  const K = 24;

  it('Recursive', function() {
    const result = algo.recursive(WM, K)
    assert.deepEqual(result.sort(), expected.sort());
  });

  it('RecursiveBacktracking', function() {
    const result = algo.recursiveBackTrack(WM, K)
    assert.deepEqual(result.sort(), expected.sort());
  });
});

describe('ArraySumToK: [12, 1, 61, 5, 9, 2], 10', function() {
  const expected = [9, 1];
  const WM = [12, 1, 61, 5, 9, 2];
  const K = 10;

  it('Recursive', function() {
    const result = algo.recursive(WM, K)
    assert.deepEqual(result.sort(), expected.sort());
  });

  it('RecursiveBacktracking', function() {
    const result = algo.recursiveBackTrack(WM, K)
    assert.deepEqual(result.sort(), expected.sort());
  });
});

describe('ArraySumToK: [12, 1, 61, 5, 9, 2], 4', function() {
  const expected = null;
  const WM = [12, 1, 61, 5, 9, 2];
  const K = 4;

  it('Recursive', function() {
    const result = algo.recursive(WM, K)
    assert.deepEqual(result, expected);
  });

  it('RecursiveBacktracking', function() {
    const result = algo.recursiveBackTrack(WM, K)
    assert.deepEqual(result, expected);
  });
});