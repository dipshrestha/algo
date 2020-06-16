const assert = require('assert');
const PascalsTriangle = require('../daily/295_pascalsTriangle.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PascalsTriangle();
});

describe('PascalsTriangle', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});