const assert = require('assert');
const MultiplicationTable = require('../daily/74_multiplicationTable.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MultiplicationTable();
});

describe('MultiplicationTable - 6,12', function() {
  const expected = 4;

  it('Iterative', function() {
    const N = 6,
      X = 12;
    const result = algo.iterative(N, X)
    assert.equal(result, expected);
  });
});

describe('MultiplicationTable - 6, 15', function() {
  const expected = 2;

  it('Iterative', function() {
    const N = 6,
      X = 15;
    const result = algo.iterative(N, X)
    assert.equal(result, expected);
  });
});

describe('MultiplicationTable - 6, 35', function() {
  const expected = 0;

  it('Iterative', function() {
    const N = 6,
      X = 35;
    const result = algo.iterative(N, X)
    assert.equal(result, expected);
  });
});