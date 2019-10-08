const assert = require('assert');
const WordInMatrix = require('../daily/63_wordInMatrix.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new WordInMatrix();
});

describe('WordInMatrix', function() {
  const WM = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
  ];

  it('Iterative - 1', function() {
    const W = 'FOAM';
    const expected = true;
    const result = algo.iterative(WM, W)
    assert.equal(result, expected);
  });

  it('Iterative - 2', function() {
    const W = 'MASS';
    const expected = true;
    const result = algo.iterative(WM, W)
    assert.equal(result, expected);
  });

  it('Iterative - 3', function() {
    const W = 'MASB';
    const expected = false;
    const result = algo.iterative(WM, W)
    assert.equal(result, expected);
  });

  it('Iterative - 4', function() {
    const W = 'BQP';
    const expected = true;
    const result = algo.iterative(WM, W)
    assert.equal(result, expected);
  });

  it('Iterative - 5', function() {
    const W = 'FAM';
    const expected = false;
    const result = algo.iterative(WM, W)
    assert.equal(result, expected);
  });

  it('Iterative - 6', function() {
    const W = 'QOS';
    const expected = true;
    const result = algo.iterative(WM, W)
    assert.equal(result, expected);
  });
});