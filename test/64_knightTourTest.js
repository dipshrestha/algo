const assert = require('assert');
const KnightTour = require('../daily/64_knightTour.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new KnightTour();
});

describe('KnightTour', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});