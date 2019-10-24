const assert = require('assert');
const MaxSumSubarray = require('../daily/49_maxSumSubarray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MaxSumSubarray();
});
describe('MaxSumSubarray', function() {
  const expected = 137;
  const WM = [34, -50, 42, 14, -5, 86];
  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MaxSumSubarray - all negative', function() {
  const expected = 0;
  const WM = [-5, -1, -8, -9];
  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MaxSumSubarray - last greatest', function() {
  const expected = 100;
  const WM = [5, -1, 15, -30, 100];
  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MaxSumSubarray - first greatest', function() {
  const expected = 100;
  const WM = [100, -1, -15, 15];
  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MaxSumSubarray - [100, -1 , 15, -30]', function() {
  const expected = 114;
  const WM = [100, -1, 15, -30];
  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});