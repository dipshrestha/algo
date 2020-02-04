const assert = require('assert');
const KnightTour = require('../daily/64_knightTour.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new KnightTour();
});

describe('KnightTour 1x1', function() {
  const expected = 1;

  it('Recursive', function() {
    const result = algo.recursive(1)
    assert.equal(result, expected);
  });
});

describe('KnightTour 2x2', function() {
  const expected = 0;

  it('Recursive', function() {
    const result = algo.recursive(2)
    assert.equal(result, expected);
  });
});

describe.skip('KnightTour 3x3', function() {
  const expected = 0;

  it('Recursive', function() {
    const result = algo.recursive(3)
    assert.equal(result, expected);
  });
});

describe.skip('KnightTour 4x4', function() {
  const expected = 0;

  it('Recursive', function() {
    const result = algo.recursive(4);
    assert.equal(result, expected);
  });
});

describe('KnightTour 5x5', function() {
  const expected = 1728;

  it('Recursive', function() {
    const result = algo.recursive(5);
    assert.equal(result, expected);
  });
});

describe.skip('KnightTour 6x6', function() {
  const expected = 6637920;

  it('Recursive', function() {
    const result = algo.recursive(6);
    assert.equal(result, expected);
  });
});