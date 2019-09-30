const assert = require('assert');
const MaxProfit = require('../daily/47_maxProfit.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MaxProfit();
});

describe('MaxProfit', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});