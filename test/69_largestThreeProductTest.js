const assert = require('assert');
const LargestThreeProduct = require('../daily/69_largestThreeProduct.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LargestThreeProduct();
});

describe('LargestThreeProduct [-10, -10, 5, 2]', function() {
  const expected = 500;
  const WM = [-10, -10, 5, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM);
    assert.equal(result, expected);
  });
});

describe('LargestThreeProduct [1, 12, 5, 2, 6]', function() {
  const expected = 360;
  const WM = [1, 12, 5, 2, 6];

  it('Iterative', function() {
    const result = algo.iterative(WM);
    assert.equal(result, expected);
  });
});

describe('LargestThreeProduct [-5, -3, -10, -9, -5, -2]', function() {
  const expected = -30;
  const WM = [-5, -3, -10, -9, -5, -2];

  it('Iterative', function() {
    const result = algo.iterative(WM);
    assert.equal(result, expected);
  });
});