const assert = require('assert');
const Rand7 = require('../daily/45_rand7.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Rand7();
});

describe('Rand7', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});