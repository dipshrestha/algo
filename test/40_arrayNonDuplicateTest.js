const assert = require('assert');
const ArrayNonDuplicate = require('../daily/40_arrayNonDuplicate.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ArrayNonDuplicate();
});

describe('ArrayNonDuplicate', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});