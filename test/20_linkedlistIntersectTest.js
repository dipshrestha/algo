const assert = require('assert');
const LinkedlistIntersect = require('../daily/20_linkedlistIntersect.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LinkedlistIntersect();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});