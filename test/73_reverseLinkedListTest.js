const assert = require('assert');
const { Node, ReverseLinkedList } = require('../daily/73_reverseLinkedList.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ReverseLinkedList();
});
describe('ReverseLinkedList: 1-2', function() {
  const expected = new Node(2, new Node(1));

  it('Iterative', function() {
    const WM = new Node(1, new Node(2));
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive', function() {
    const WM = new Node(1, new Node(2));
    const result = algo.recursive(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive_better', function() {
    const WM = new Node(1, new Node(2));
    const result = algo.recursive_better(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe('ReverseLinkedList: 1-2-3', function() {
  const expected = new Node(3, new Node(2, new Node(1)));

  it('Iterative', function() {
    const WM = new Node(1, new Node(2, new Node(3)));
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive', function() {
    const WM = new Node(1, new Node(2, new Node(3)));
    const result = algo.recursive(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive_better', function() {
    const WM = new Node(1, new Node(2, new Node(3)));
    const result = algo.recursive_better(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe('ReverseLinkedList: 1-2-3-4', function() {
  const expected = new Node(4, new Node(3, new Node(2, new Node(1))));

  it('Iterative', function() {
    const WM = new Node(1, new Node(2, new Node(3, new Node(4))));
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive', function() {
    const WM = new Node(1, new Node(2, new Node(3, new Node(4))));
    const result = algo.recursive(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive_better', function() {
    const WM = new Node(1, new Node(2, new Node(3, new Node(4))));
    const result = algo.recursive_better(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe('ReverseLinkedList: 1-2-3-4-5', function() {
  const expected = new Node(5, new Node(4, new Node(3, new Node(2, new Node(1)))));

  it('Iterative', function() {
    const WM = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive', function() {
    const WM = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });

  it('Recursive_better', function() {
    const WM = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
    const result = algo.recursive_better(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});