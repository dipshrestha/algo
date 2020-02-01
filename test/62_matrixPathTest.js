const assert = require('assert');
const MatrixPath = require('../daily/62_matrixPath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MatrixPath();
});

describe('MatrixPath', function() {
  it('Recursive 1x1', function() {
    const expected = 1;
    const result = algo.recursive(1, 1)
    assert.equal(result, expected);
  })
  it('Recursive 2x2', function() {
    const expected = 2;
    const result = algo.recursive(2, 2)
    assert.equal(result, expected);
  })
  it('Recursive 3x3', function() {
    const expected = 6;
    const result = algo.recursive(3, 3)
    assert.equal(result, expected);
  });
  it('Recursive 5x5', function() {
    const expected = 70;
    const result = algo.recursive(5, 5)
    assert.equal(result, expected);
  });

  it('DP 1x1', function() {
    const expected = 1;
    const result = algo.dp(1, 1)
    assert.equal(result, expected);
  })
  it('DP 2x2', function() {
    const expected = 2;
    const result = algo.dp(2, 2)
    assert.equal(result, expected);
  })
  it('DP 3x3', function() {
    const expected = 6;
    const result = algo.dp(3, 3)
    assert.equal(result, expected);
  });
  it('DP 5x5', function() {
    const expected = 70;
    const result = algo.dp(5, 5)
    assert.equal(result, expected);
  });
});