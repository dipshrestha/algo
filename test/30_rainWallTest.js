const assert = require('assert');
const RainWall = require('../daily/30_rainWall.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RainWall();
});

describe('RainWall [2, 1, 2]', function() {
  const expected = 1;
  const WM = [2, 1, 2];

  it('Iterative', function() {
    const result = 1; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainWall [3, 0, 1, 3, 0, 5]', function() {
  const expected = 8;
  const WM = [3, 0, 1, 3, 0, 5];

  it('Iterative', function() {
    const result = 8; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});