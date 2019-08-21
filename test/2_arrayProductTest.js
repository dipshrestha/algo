const assert = require('assert');
const ArrayProduct = require('../daily/2_arrayProduct.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ArrayProduct();
});

describe('ArrayProduct', function() {
  const WM = [1, 2, 3, 4, 5];
  const expected = [120, 60, 40, 30, 24];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
  it('iterativeWithDivision', function() {
    const result = algo.iterativeWithDivision(WM)
    assert.deepEqual(result, expected);
  });
  it('iterativeWithoutDivision', function() {
    const result = algo.iterativeWithoutDivision(WM)
    assert.deepEqual(result, expected);
  });
});

describe('ArrayProduct', function() {
  const WM = [3, 2, 1]
  const expected = [2, 3, 6];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
  it('iterativeWithDivision', function() {
    const result = algo.iterativeWithDivision(WM)
    assert.deepEqual(result, expected);
  });
  it('iterativeWithoutDivision', function() {
    const result = algo.iterativeWithoutDivision(WM)
    assert.deepEqual(result, expected);
  });
});