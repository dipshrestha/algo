const assert = require('assert');
const NQuxes = require('../daily/290_nQuxes.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new NQuxes();
});

describe("NQuxes: ['R', 'G', 'B', 'G', 'B']", function() {
  const colors = ['R', 'G', 'B'];
  it('Iterative', function() {
    const expected = ['R'];
    const WM = ['R', 'G', 'B', 'G', 'B'];
    const result = algo.iterative(WM, colors)
    assert.deepEqual(result, expected);
  });

  it("Iterative: ['R', 'R', 'R', 'R', 'G']", function() {
    const expected = ['G'];
    const WM = ['R', 'R', 'R', 'R', 'G'];
    const result = algo.iterative(WM, colors)
    assert.deepEqual(result, expected);
  });

  it("Iterative: ['R', 'B', 'G', 'R', 'B', 'G']", function() {
    const expected = ['G', 'G'];
    const WM = ['R', 'B', 'G', 'R', 'B', 'G'];
    const result = algo.iterative(WM, colors)
    assert.deepEqual(result, expected);
  });
});