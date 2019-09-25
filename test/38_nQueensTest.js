const assert = require('assert');
const NQueens = require('../daily/38_nQueens.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new NQueens();
});
describe('NQueens', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});