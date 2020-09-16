const assert = require('assert');
const HeightBalancedBST = require('../daily/296_heightBalancedBST.js');

let algo = null;

beforeEach('Setting up...', function() {
  //algo = new HeightBalancedBST();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});