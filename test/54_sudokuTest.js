const assert = require('assert');
const Sudoku = require('../daily/54_sudoku.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Sudoku();
});

describe('Sudoku', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});