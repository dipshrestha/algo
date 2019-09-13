const assert = require('assert');
const RunlengthEncodingDecoding = require('../daily/29_runlengthEncodingDecoding.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RunlengthEncodingDecoding();
});

describe('RunlengthEncodingDecoding - AAAABBBCCDAA', function() {
  const expected = '4A3B2C1D2A';
  const str = 'AAAABBBCCDAA';

  it('Iterative', function() {
    const result = algo.encode(str);
    assert.equal(result, expected);
    assert.equal(str, algo.decode(result));
  });
});

describe('RunlengthEncodingDecoding - ABCD', function() {
  const expected = '1A1B1C1D';
  const str = 'ABCD';

  it('Iterative', function() {
    const result = algo.encode(str);
    assert.equal(result, expected);
    assert.equal(str, algo.decode(result));
  });
});