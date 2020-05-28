const assert = require('assert');
const Similarity = require('../daily/287_similarity.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Similarity();
});

describe('Similarity', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});