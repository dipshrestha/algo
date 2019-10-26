const assert = require('assert');
const ShuffleDeck = require('../daily/51_shuffleDeck.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ShuffleDeck();
});

describe('ShuffleDeck', function() {
  const expected = 3;
  const WM = new Array(52);

  it('Iterative', function() {
    algo.iterative(WM);
    //assert.equal(result, expected);
  });
});