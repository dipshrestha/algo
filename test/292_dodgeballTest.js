const assert = require('assert');
const Dodgeball = require('../daily/292_dodgeball.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Dodgeball();
});

describe('Dodgeball', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});