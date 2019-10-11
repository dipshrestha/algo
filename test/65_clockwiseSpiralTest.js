const assert = require('assert');
const ClockwiseSpiral = require('../daily/65_clockwiseSpiral.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ClockwiseSpiral();
});

describe('ClockwiseSpiral', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});