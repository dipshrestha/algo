const assert = require('assert');
const SubarraySum = require('../daily/18_subarraySum.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SubarraySum();
});

describe.only('SubarraySum - 1', function() {
  const WM = [10, 5, 2, 7, 8, 7];

  it('Iterative', function() {
    const expected = [10, 7, 8, 8];
    const result = algo.iterative(WM, 3);
    assert.deepEqual(result, expected);
  });
  it('Iterative', function() {
    const expected = [10, 8, 8];
    const result = algo.iterative(WM, 4);
    assert.deepEqual(result, expected);
  });
  it('Iterative', function() {
    const expected = [10, 8];
    const result = algo.iterative(WM, 5);
    assert.deepEqual(result, expected);
  });
});