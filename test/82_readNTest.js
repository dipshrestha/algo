const assert = require('assert');
const ReadN = require('../daily/82_readN.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ReadN();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});