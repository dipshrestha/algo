const assert = require('assert');
const Similarity = require('../daily/287_similarity.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Similarity();
});

describe('Similarity', function() {
  const expected = ['ae'];
  const K = 1;
  const WM = [
    ['a', 1],
    ['a', 3],
    ['a', 5],
    ['b', 2],
    ['b', 6],
    ['c', 1],
    ['c', 2],
    ['c', 3],
    ['c', 4],
    ['c', 5],
    ['d', 4],
    ['d', 5],
    ['d', 6],
    ['d', 7],
    ['e', 1],
    ['e', 3],
    ['e', 5],
    ['e', 6]
  ];
  it('Iterative', function() {
    const result = algo.iterative(WM, K)
    assert.deepEqual(result, expected);
  });
});