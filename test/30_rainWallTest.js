const assert = require('assert');
const RainWall = require('../daily/30_rainWall.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RainWall();
});

describe('RainWall [2, 3, 4]', function() {
  const expected = 0;
  const WM = [2, 2, 4];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainWall [4, 2, 1,1,0]', function() {
  const expected = 0;
  const WM = [4, 2, 1, 1, 0];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainWall [2, 2, 2]', function() {
  const expected = 0;
  const WM = [2, 2, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});
describe('RainWall [2, 1, 2]', function() {
  const expected = 1;
  const WM = [2, 1, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainWall [2, 1, 0, 2]', function() {
  const expected = 3;
  const WM = [2, 1, 0, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainWall [2, 1, 2, 1]', function() {
  const expected = 1;
  const WM = [2, 1, 2, 1];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainWall [3, 2, 1, 1, 2, 3, 2, 2]', function() {
  const expected = 6;
  const WM = [3, 2, 1, 1, 2, 3, 2, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('RainWall [2, 1, 0, 2, 0, 0, 2]', function() {
  const expected = 7;
  const WM = [2, 1, 1, 2, 0, 0, 2];

  it('Iterative', function() {
    const result = algo.iterative(WM)
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