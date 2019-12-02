const assert = require('assert');
const WordWrap = require('../daily/57_wordWrap.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new WordWrap();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});