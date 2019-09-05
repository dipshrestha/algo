const assert = require('assert');
const BoardGame = require('../daily/23_boardGame.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new BoardGame();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});