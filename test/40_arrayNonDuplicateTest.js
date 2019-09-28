const assert = require('assert');
const ArrayNonDuplicate = require('../daily/40_arrayNonDuplicate.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ArrayNonDuplicate();
});

describe('ArrayNonDuplicate: 2,2,2,4', function() {
  const expected = 4;
  const WM = [2,2,2,4]

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('ArrayNonDuplicate: 2,4,2,2', function() {
  const expected = 4;
  const WM = [2,4,2,2]

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('ArrayNonDuplicate: [13, 19, 13, 13]', function() {
  const expected = 19;
  const WM = [13, 19, 13, 13]

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe('ArrayNonDuplicate: [6, 1, 3, 3, 3, 6, 6]', function() {
  const expected = 1;
  const WM = [6, 1, 3, 3, 3, 6, 6]

  it('Iterative', function() {
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});