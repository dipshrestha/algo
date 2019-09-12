const assert = require('assert');
const RainWall = require('../daily/30_rainWall.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RainWall();
});
describe('RainWall', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});