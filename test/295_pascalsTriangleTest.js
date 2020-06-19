const assert = require('assert');
const PascalsTriangle = require('../daily/295_pascalsTriangle.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PascalsTriangle();
});

describe('PascalsTriangle', function() {

  it('dp: 3', function() {
    const expected = [1, 2, 1];
    const result = algo.dp(3)
    assert.deepEqual(result, expected);
  });
  it('dp_better: 3', function() {
    const expected = [1, 2, 1];
    const result = algo.dp_better(3)
    assert.deepEqual(result, expected);
  });
  it('dp: 5', function() {
    const expected = [1, 4, 6, 4, 1];
    const result = algo.dp(5)
    assert.deepEqual(result, expected);
  });
  it('dp_better: 5', function() {
    const expected = [1, 4, 6, 4, 1];
    const result = algo.dp_better(5)
    assert.deepEqual(result, expected);
  });
  it('dp: 8', function() {
    const expected = [1, 7, 21, 35, 35, 21, 7, 1];
    const result = algo.dp(8)
    assert.deepEqual(result, expected);
  });
  it('dp_better: 8', function() {
    const expected = [1, 7, 21, 35, 35, 21, 7, 1];
    const result = algo.dp_better(8)
    assert.deepEqual(result, expected);
  });
});