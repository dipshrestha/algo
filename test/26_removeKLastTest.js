const assert = require('assert');
const { RemoveKLast, Node } = require('../daily/26_removeKLast.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RemoveKLast();
});

describe('RemoveKLast: 1-3-7-8-10-12-14', function() {
  const M = new Node(1,
    new Node(3,
      new Node(7,
        new Node(8,
          new Node(10,
            new Node(12,
              new Node(14)))))));

  it('Iterative - 1', function() {
    const expected = 14;
    const result = algo.iterative(M, 1);
    assert.equal(result, expected);
  });
  it('Iterative - 2', function() {
    const expected = 12;
    const result = algo.iterative(M, 2);
    assert.equal(result, expected);
  });
  it('Iterative - 7', function() {
    const expected = 1;
    const result = algo.iterative(M, 7);
    assert.equal(result, expected);
  });
});