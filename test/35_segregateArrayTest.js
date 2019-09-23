const assert = require('assert');
const SegregateArray = require('../daily/35_segregateArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SegregateArray();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});