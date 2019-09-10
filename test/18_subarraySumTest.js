const assert = require('assert');
const SubarraySum = require('../daily/18_subarraySum.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SubarraySum([10, 5, 2, 7, 8, 7]);
});

describe.only('SubarraySum - 1', function() {
  //  const WM = [10, 5, 2, 7, 8, 7];

  it('Iterative [10, 5, 2, 7, 8, 7], 2', function() {
    const expected = [10, 5, 7, 8, 8];
    const result = algo.iterative(2);
    assert.deepEqual(result, expected);
  });
  it('Iterative [10, 5, 2, 7, 8, 7], 3', function() {
    const expected = [10, 7, 8, 8];
    const result = algo.iterative(3);
    assert.deepEqual(result, expected);
  });
  it('Iterative [10, 5, 2, 7, 8, 7], 4', function() {
    const expected = [10, 8, 8];
    const result = algo.iterative(4);
    assert.deepEqual(result, expected);
  });
  it('Iterative [10, 5, 2, 7, 8, 7], 5', function() {
    const expected = [10, 8];
    const result = algo.iterative(5);
    assert.deepEqual(result, expected);
  });
});