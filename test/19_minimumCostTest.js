const assert = require('assert');
const MinimumCost = require('../daily/19_minimumCost.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MinimumCost();
});

describe('Template', function() {
  const expected = 3;
  const WM = [
    // color ->
    // House
    //
    [2, 3, 6, 1],
    [4, 2, 1, 3],
    [3, 4, 2, 4]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM) || 3;
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});