const assert = require('assert');
const MinimumCost = require('../daily/19_minimumCost.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MinimumCost();
});

describe('MinimumCost - 1 row', function() {
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
    const result = algo.recursive(WM, 1, 3);
    assert.equal(result, expected);
  });
});


describe('MinimumCost - 2 rows', function() {
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
    const result = algo.recursive(WM, 2, 3);
    assert.equal(result, expected);
  });
});

describe('MinimumCost - 3 rows', function() {
  const expected = 5;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    [6, 2, 1],
    [4, 4, 2]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 3, 3);
    assert.equal(result, expected);
  });
});