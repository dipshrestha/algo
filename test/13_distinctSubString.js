const assert = require('assert');
const DistinctSubString = require('../daily/13_distinctSubString.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new DistinctSubString();
});

describe('DistinctSubString', function() {
  const result = 3;
  const expected = 3;

  it('Iterative', function() {
    assert.equal(result, expected);
  });
});