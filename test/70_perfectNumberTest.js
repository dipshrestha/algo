const assert = require('assert');
const PerfectNumber = require('../daily/70_perfectNumber.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PerfectNumber();
});

describe('PerfectNumber 1', function() {
  const expected = 19;
  const N = 1;

  it('Iterative', function() {
    const result = algo.iterative(N);
    assert.equal(result, expected);
  });
});

describe('PerfectNumber 9', function() {
  const expected = 91;
  const N = 9;

  it('Iterative', function() {
    const result = algo.iterative(N);
    assert.equal(result, expected);
  });
});

describe('PerfectNumber 10', function() {
  const expected = 109;
  const N = 10;

  it('Iterative', function() {
    const result = algo.iterative(N);
    assert.equal(result, expected);
  });
});

describe('PerfectNumber 11', function() {
  const expected = 118;
  const N = 11;

  it('Iterative', function() {
    const result = algo.iterative(N);
    assert.equal(result, expected);
  });
});