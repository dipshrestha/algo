const assert = require('assert');
const MinimumCost = require('../daily/19_minimumCost.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MinimumCost();
});

describe.only('MinimumCost - 1 row', function() {
  const expected = 1;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    //[6,2,1],
    //[4,4,2]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 1);
    assert.equal(result, expected);
  });
});


describe.skip('MinimumCost - 2 rows', function() {
  const expected = 2;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    [6, 2, 1],
    //[4,4,2]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 2);
    assert.equal(result, expected);
  });
});