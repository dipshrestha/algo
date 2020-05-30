const assert = require('assert');
const NimGame = require('../daily/289_nimGame.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new NimGame();
});

describe('NimGame', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});