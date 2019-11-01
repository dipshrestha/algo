const assert = require('assert');
const Sudoku = require('../daily/54_sudoku.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Sudoku();
});

describe.skip('Sudoku', function() {
  var WM = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ];
  it('Iterative', function() {
    const result = algo.recursive(WM);
    //assert.equal(result, expected);
  });
});