const assert = require('assert');
const EditDistance = require('../daily/31_editDistance.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EditDistance();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});