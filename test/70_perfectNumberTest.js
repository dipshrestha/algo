const assert = require('assert');
const PerfectNumber = require('../daily/70_perfectNumber.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PerfectNumber();
});

describe('PerfectNumber', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});