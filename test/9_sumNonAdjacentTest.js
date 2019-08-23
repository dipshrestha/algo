const assert = require('assert');
const SumNonAdjacent = require('../daily/9_sumNonAdjacent.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SumNonAdjacent();
});

describe('SumNonAdjacent -1', function() {
  var WM = [2, 4, 6, 2, 5];
  const expected = 13;

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });

  it('Recursive', function() {
    const result = algo.iterativeBest(WM)
    assert.equal(result, expected);
  });
});