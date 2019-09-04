const assert = require('assert');
const PaintHouse = require('../daily/19_paintHouse.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PaintHouse();
});

describe('PaintHouse - 1 row', function() {
  const expected = 1;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    //[6,2,1],
    //[4,4,2]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 1, 3);
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(WM, 1, 3);
    assert.equal(result, expected);
  });
});


describe('PaintHouse - 2 rows', function() {
  const expected = 2;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    [6, 2, 1],
    //[4,4,2]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 2, 3);
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(WM, 2, 3);
    assert.equal(result, expected);
  });
});

describe('PaintHouse - 3 rows', function() {
  const expected = 5;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    [6, 2, 1],
    [4, 4, 2]
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 3, 3);
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(WM, 3, 3);
    assert.equal(result, expected);
  });
});

describe('PaintHouse - 4 rows', function() {
  const expected = 7;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5],
    [6, 2, 1],
    [4, 4, 2],
    [2, 3, 6],
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 4, 3);
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(WM, 4, 3);
    assert.equal(result, expected);
  });
});

describe('PaintHouse - 4x4 rows', function() {
  const expected = 5;
  const WM = [
    // color ->
    // House
    //
    [1, 3, 5, 4],
    [6, 2, 1, 1],
    [4, 4, 2, 3],
    [2, 3, 6, 1],
  ];
  it('Recursive', function() {
    const result = algo.recursive(WM, 4, 4);
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(WM, 4, 4);
    assert.equal(result, expected);
  });
});