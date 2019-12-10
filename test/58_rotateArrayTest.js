const assert = require('assert');
const RotateArray = require('../daily/58_rotateArray.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RotateArray();
});

describe('RotateArray: decrease from middle', function() {

  const WM = [13, 18, 25, 2, 8, 10];

  it('Recursive ', function() {
    const expected = 0;
    const K = 13;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 1;
    const K = 18;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 2;
    const K = 25;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 3;
    const K = 2;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 4;
    const K = 8;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 5;
    const K = 10;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
});

describe('RotateArray: decrease from start', function() {

  const WM = [25, 2, 8, 10, 13, 18];

  it('Recursive ', function() {
    const expected = 0;
    const K = 25;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 1;
    const K = 2;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 2;
    const K = 8;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 3;
    const K = 10;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 4;
    const K = 13;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 5;
    const K = 18;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
});


describe('RotateArray: increase from start', function() {

  const WM = [2, 8, 10, 13, 18, 25];

  it('Recursive ', function() {
    const expected = 0;
    const K = 2;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 1;
    const K = 8;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 2;
    const K = 10;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 3;
    const K = 13;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
  it('Recursive ', function() {
    const expected = 4;
    const K = 18;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });

  it('Recursive ', function() {
    const expected = 5;
    const K = 25;
    const result = algo.recursive(WM, K);
    assert.equal(result, expected);
  });
});