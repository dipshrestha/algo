const assert = require('assert');
const MinClassroomTest = require('../daily/21_minClassroom.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MinClassroomTest();
});

describe('MinClassroomTest - 1', function() {
  const expected = 2;
  const WM = [
    [30, 75],
    [0, 50],
    [60, 150]
  ];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MinClassroomTest - 2', function() {
  const expected = 3;
  const WM = [
    [30, 75],
    [0, 50],
    [31, 55],
    [60, 150]
  ];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MinClassroomTest - 3', function() {
  const expected = 1;
  const WM = [
    [30, 35],
    [0, 15],
    [20, 25],
    [60, 150]
  ];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MinClassroomTest - 4', function() {
  const expected = 3;
  const WM = [
    [200, 300],
    [30, 35],
    [0, 15],
    [20, 25],
    [60, 150],
    [205, 230],
    [210, 215],
  ];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('MinClassroomTest - 5', function() {
  const expected = 2;
  const WM = [
    [20, 30],
    [30, 215],
  ];

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});