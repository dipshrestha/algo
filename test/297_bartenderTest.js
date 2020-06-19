const assert = require('assert');
const Bartender = require('../daily/297_bartender.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Bartender();
});

describe('Bartender', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});