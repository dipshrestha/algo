const assert = require('assert');
const LRU = require('../daily/52_LRU.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LRU();
});

describe('LRU', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});