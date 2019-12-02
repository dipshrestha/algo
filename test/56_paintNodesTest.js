const assert = require('assert');
const PaintNodes = require('../daily/56_paintNodes.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PaintNodes();
});

describe('PaintNodes - 3', function() {
  var WM = [
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]; // 70 - 90 ms

  it('Recrusive', function() {
    const result = algo.recursive(WM, 3);
    //assert.equal(result, expected);
  });
});

describe('PaintNodes - 2', function() {
  var WM = [
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]; // 70 - 90 ms

  it('Recrusive', function() {
    const result = algo.recursive(WM, 4);
    //assert.equal(result, expected);
  });
});