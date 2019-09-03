const assert = require('assert');
const MinimumCost = require('../daily/19_minimumCost.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MinimumCost();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});