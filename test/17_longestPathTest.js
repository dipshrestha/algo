const assert = require('assert');
const LongestPath = require('../daily/17_longestPath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestPath();
});

describe('LongestPath', function() {
  const expected = null;

  it('Iterative', function() {
    const result = algo.recursive("A\n\tB\n\t\C\n\t\tD.ext");
    assert.equal(result, expected);
  });
});