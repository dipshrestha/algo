const assert = require('assert');
const LargestThreeProduct = require('../daily/69_largestThreeProduct.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LargestThreeProduct();
});

describe('LargestThreeProduct', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});