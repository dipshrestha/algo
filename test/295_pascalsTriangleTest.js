const assert = require('assert');
const PascalsTriangle = require('../daily/295_pascalsTriangle.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PascalsTriangle();
});

describe('PascalsTriangle', function() {

  it('Iterative: 3', function() {
    const expected = [1, 2, 1];
    const result = algo.iterative(3)
    assert.deepEqual(result, expected);
  });
  it('Iterative: 5', function() {
    const expected = [1, 4, 6, 4, 1];
    const result = algo.iterative(5)
    assert.deepEqual(result, expected);
  });
  it('Iterative: 8', function() {
    const expected = [1, 7, 21, 35, 35, 21, 7, 1];
    const result = algo.iterative(8)
    assert.deepEqual(result, expected);
  });
});