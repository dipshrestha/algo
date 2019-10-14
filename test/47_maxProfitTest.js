const assert = require('assert');
const MaxProfit = require('../daily/47_maxProfit.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MaxProfit();
});

describe('MaxProfit', function() {
  const expected = 5;
  const WM = [9, 11, 8, 5, 7, 10];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MaxProfit', function() {
  const expected = 8;
  const WM = [12, 2, 4, 10];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MaxProfit', function() {
  const expected = 0;
  const WM = [12, 10, 9];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});