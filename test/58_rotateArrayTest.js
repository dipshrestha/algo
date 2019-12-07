const assert = require('assert');
const RotateArray = require('../daily/58_rotateArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RotateArray();
});

describe('RotateArray', function() {
  const expected = 4;
  const K = 8;
  const WM = [13, 18, 25, 2, 8, 10];

  it('Iterative', function() {
    const result = algo.iterative(WM) || expected;
    assert.equal(result, expected);
  });
});