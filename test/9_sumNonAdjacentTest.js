const assert = require('assert');
const SumNonAdjacent = require('../daily/9_sumNonAdjacent.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SumNonAdjacent();
});


describe('SumNonAdjacent [2, 4]', function() {
  var WM = [2, 4];
  const expected = 4;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('SumNonAdjacent [4, 2]', function() {
  var WM = [4, 2];
  const expected = 4;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('SumNonAdjacent [2, 4, 6, 2, 5]', function() {
  var WM = [2, 4, 6, 2, 5];
  const expected = 13;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('SumNonAdjacent  [-1,-5]', function() {
  var WM = [-1, -5];
  const expected = -1;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('SumNonAdjacent  [-5,-1]', function() {
  var WM = [-5, -1];
  const expected = -1;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('SumNonAdjacent  [5, 4, -1, 3, 6, -4]', function() {
  var WM = [5, 4, -1, 3, 6, -4];
  const expected = 11;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});