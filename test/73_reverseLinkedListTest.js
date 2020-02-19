const assert = require('assert');
const { Node, ReverseLinkedList } = require('../daily/73_reverseLinkedList.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ReverseLinkedList();
});

describe.only('ReverseLinkedList: 1-2-3-4', function() {
  const expected = new Node(4, new Node(3, new Node(2, new Node(1))));
  const WM = new Node(1, new Node(2, new Node(3, new Node(4))));

  it('Iterative', function() {
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe.only('ReverseLinkedList: 1-2-3-4-5', function() {
  const expected = new Node(5, new Node(4, new Node(3, new Node(2, new Node(1)))));
  const WM = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

  it('Iterative', function() {
    const result = algo.iterative(WM);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});