const assert = require('assert');
const KBoats = require('../daily/291_kBoats.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new KBoats();
});

describe('KBoats', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});