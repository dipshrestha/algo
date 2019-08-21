const assert = require('assert');
const DecodeMessage = require('../daily/7_decodeMessage.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new DecodeMessage();
});

describe('DecodeMessage - 1', function() {
  var WM = [3, 4, -1, 1];
  const expected = 2;

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});