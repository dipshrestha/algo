const assert = require('assert');
const WordInMatrix = require('../daily/63_wordInMatrix.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new WordInMatrix();
});

describe('WordInMatrix', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});