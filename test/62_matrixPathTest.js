const assert = require('assert');
const MatrixPath = require('../daily/62_matrixPath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MatrixPath();
});

describe('MatrixPath 1x1', function() {
  const expected = 1;
  it('Recursive', function() {
    const result = algo.recursive(1, 1)
    assert.equal(result, expected);
  })

  it('DP', function() {
    const result = algo.dp(1, 1)
    assert.equal(result, expected);
  })

  it('DP_better', function() {
    const result = algo.dp_better(1, 1)
    assert.equal(result, expected);
  })
});

describe('MatrixPath 2x2', function() {
  const expected = 2;
  it('Recursive', function() {
    const result = algo.recursive(2, 2)
    assert.equal(result, expected);
  })
  it('DP', function() {
    const result = algo.dp(2, 2)
    assert.equal(result, expected);
  })

  it('DP_better', function() {
    const result = algo.dp_better(2, 2)
    assert.equal(result, expected);
  })
});

describe('MatrixPath 3x3', function() {

  const expected = 6;
  it('Recursive', function() {
    const result = algo.recursive(3, 3)
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(3, 3)
    assert.equal(result, expected);
  });

  it('DP_better', function() {
    const result = algo.dp_better(3, 3)
    assert.equal(result, expected);
  })
});

describe('MatrixPath 5x5', function() {
  const expected = 70;
  it('Recursive', function() {
    const result = algo.recursive(5, 5)
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(5, 5)
    assert.equal(result, expected);
  });

  it('DP_better', function() {
    const result = algo.dp_better(5, 5)
    assert.equal(result, expected);
  })
});