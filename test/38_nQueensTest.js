const assert = require('assert');
const NQueens = require('../daily/38_nQueens.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new NQueens();
});
describe('NQueens: 4', function() {
  const expected = 2;
  const N = 4;

  it('Iterative', function() {
    const result = algo.recursive(N)
    assert.equal(result, expected);
  });
});

describe('NQueens: 5', function() {
  const expected = 10;
  const N = 5;

  it('Iterative', function() {
    const result = algo.recursive(N)
    assert.equal(result, expected);
  });
});

describe('NQueens: 6', function() {
  const expected = 4;
  const N = 6;

  it('Iterative', function() {
    const result = algo.recursive(N)
    assert.equal(result, expected);
  });
});

describe('NQueens: 7', function() {
  const expected = 40;
  const N = 7;

  it('Iterative', function() {
    const result = algo.recursive(N)
    assert.equal(result, expected);
  });
});

describe('NQueens: 8', function() {
  const expected = 92;
  const N = 8;

  it('Iterative', function() {
    const result = algo.recursive(N)
    assert.equal(result, expected);
  });
});