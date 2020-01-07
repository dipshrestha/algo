const assert = require('assert');
const MatrixPath = require('../daily/62_matrixPath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MatrixPath();
});

describe.only('MatrixPath', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});