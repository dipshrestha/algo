const assert = require('assert');
const RotateArray = require('../daily/58_rotateArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RotateArray();
});

describe('RotateArray', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});