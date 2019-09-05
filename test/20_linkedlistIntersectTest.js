const assert = require('assert');
const { Node, LinkedlistIntersect } = require('../daily/20_linkedlistIntersect.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LinkedlistIntersect();
});

describe('LinkedlistIntersect: 3-7-8-10, 99-1-9-11', function() {
  const expected = null;
  const M = new Node(3, new Node(7, new Node(8, new Node(10))));
  const N = new Node(99, new Node(1, new Node(9, new Node(11))));

  it('Iterative', function() {
    const result = algo.iterative(M, N);
    assert.equal(result, expected);
  });
  it('IterativeBest', function() {
    const result = algo.iterativeBest(M, N);
    assert.equal(result, expected);
  });
});

describe('LinkedlistIntersect: 3-7-8-10, 99-1-8-10', function() {
  const expected = 8;
  const M = new Node(3, new Node(7, new Node(8, new Node(10))));
  const N = new Node(99, new Node(1, new Node(8, new Node(10))));

  it('Iterative', function() {
    const result = algo.iterative(M, N);
    assert.equal(result, expected);
  });
  it('IterativeBest', function() {
    const result = algo.iterativeBest(M, N);
    assert.equal(result, expected);
  });
});

describe('LinkedlistIntersect: 1-3-7-8-10-12-14, 11-2-12-14', function() {
  const expected = 12;
  const M = new Node(1,
    new Node(3,
      new Node(7,
        new Node(8,
          new Node(10,
            new Node(12,
              new Node(14)))))));
  const N = new Node(11, new Node(2, new Node(12, new Node(14))));

  it('Iterative', function() {
    const result = algo.iterative(M, N);
    assert.equal(result, expected);
  });
  it('IterativeBest', function() {
    const result = algo.iterativeBest(M, N);
    assert.equal(result, expected);
  });
});