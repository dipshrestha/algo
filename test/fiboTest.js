const assert = require('assert');
const Fibo = require('../dynamic/fibo.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Fibo();
});

describe('--- Fibo(5) ---', function() {
  var W = 5;
  const expected = 5;

  it('DP', function() {
    const result = algo.dp(W)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.iterative(W)
    assert.equal(result, expected);
  });
  it('Recursive', function() {
    const result = algo.recursive(W);
    assert.equal(result, expected);
  });
});

describe('--- Fibo(6) ---', function() {
  var W = 6;
  const expected = 8;

  it('DP', function() {
    const result = algo.dp(W)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.dp(W)
    assert.equal(result, expected);
  });
  it('Recursive', function() {
    const result = algo.recursive(W);
    assert.equal(result, expected);
  });
});


describe('--- Fibo(2) ---', function() {
  var W = 2;
  const expected = 1;

  it('DP', function() {
    const result = algo.dp(W)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.dp(W)
    assert.equal(result, expected);
  });
  it('Recursive', function() {
    const result = algo.recursive(W);
    assert.equal(result, expected);
  });
});