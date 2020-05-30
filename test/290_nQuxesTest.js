const assert = require('assert');
const NQuxes = require('../daily/290_nQuxes.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new NQuxes();
});

describe('NQuxes', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});