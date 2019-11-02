const assert = require('assert');
const Sudoku = require('../daily/54_sudoku.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Sudoku();
});

describe.only('Sudoku', function() {
  var WM = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]; // 70 - 90 ms
  
  var WM2 = [
    [0, 7, 9, 0, 0, 8, 0, 0, 2],
    [0, 6, 3, 0, 0, 1, 0, 0, 0],
    [0, 5, 1, 0, 9, 2, 6, 3, 7],
    [0, 2, 0, 0, 0, 3, 4, 7, 0],
    [9, 0, 0, 7, 8, 0, 5, 2, 0],
    [0, 0, 7, 2, 4, 5, 0, 0, 0],
    [1, 0, 0, 0, 0, 9, 0, 6, 0],
    [0, 0, 5, 6, 0, 0, 0, 0, 0],
    [6, 3, 8, 0, 0, 0, 0, 0, 9],
  ];
  it('Iterative', function() {
    const result = algo.recursive(WM);
    //assert.equal(result, expected);
  });
});