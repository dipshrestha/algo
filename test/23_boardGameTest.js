const assert = require('assert');
const BoardGame = require('../daily/23_boardGame.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new BoardGame();
});

describe('BoardGame 2x2 , 10 - 02 (No Path)', function() {
  const expected = Infinity;
  const WM = [
    [true, true, false],
    [false, true, false],
  ];

  const start = [1, 0],
    end = [0, 2];
  it('Iterative', function() {
    const result = algo.recursive(WM, start, end);
    assert.equal(result, expected);
  });
});

describe('BoardGame 2x2 , 10 - 00', function() {
  const expected = 1;
  const WM = [
    [false, false, false],
    [false, false, false],
  ];

  const start = [1, 0],
    end = [0, 0];
  it('Iterative', function() {
    const result = algo.recursive(WM, start, end);
    assert.equal(result, expected);
  });
});

describe('BoardGame 2x3 , 10 - 02', function() {
  const expected = 3;
  const WM = [
    [false, false, false],
    [false, false, false],
  ];

  const start = [1, 0],
    end = [0, 2];
  it('Iterative', function() {
    const result = algo.recursive(WM, start, end);
    assert.equal(result, expected);
  });
});


describe('BoardGame 2x3 , 02 - 10', function() {
  const expected = 3;
  const WM = [
    [false, false, false],
    [false, false, false],
  ];

  const start = [0, 2],
    end = [1, 0];
  it('Iterative', function() {
    const result = algo.recursive(WM, start, end);
    assert.equal(result, expected);
  });
});

describe('BoardGame 3x3', function() {
  const expected = 6;
  const WM = [
    [false, false, false],
    [true, true, false],
    [false, false, false]
  ];

  const start = [2, 0],
    end = [0, 0];
  it('Iterative', function() {
    const result = algo.recursive(WM, start, end);
    assert.equal(result, expected);
  });
});


describe('BoardGame 4x4, 30 - 00', function() {
  const expected = 7;
  const WM = [
    [false, false, false, false],
    [true, true, false, true],
    [false, false, false, false],
    [false, false, false, false]
  ];

  const start = [3, 0],
    end = [0, 0];
  it('Iterative', function() {
    const result = algo.recursive(WM, start, end);
    assert.equal(result, expected);
  });
});