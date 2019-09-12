const assert = require('assert');
const RunlengthEncodingDecoding = require('../daily/29_runlengthEncodingDecoding.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RunlengthEncodingDecoding();
});

describe('RunlengthEncodingDecoding', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});