const assert = require('assert');
const TreeFromPreOrderInOrder = require('../daily/48_treeFromPreOrderInOrder.js');
const { Node } = require('../daily/3_serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new TreeFromPreOrderInOrder();
});

describe('TreeFromPreOrderInOrder', function() {

  it('Recursive-complete tree, height 3', function() {
    const preT = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
    const inT = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
    const expected = new Node('a', new Node('b', new Node('d'), new Node('e')),
      new Node('c', new Node('f'), new Node('g')));
    const result = algo.recursive(preT, inT)
    assert.deepEqual(result, expected);
  });


  it('Recursive- incomplete tree, height 3', function() {
    const preT = [5, 4, 2, 1, 6, 7, 9, 10]
    const inT = [1, 2, 4, 6, 5, 7, 10, 9];
    const expected = new Node(5, new Node(4, new Node(2, new Node(1)), new Node(6)),
      new Node(7, null, new Node(9, new Node(10))));
    const result = algo.recursive(preT, inT)
    assert.deepEqual(result, expected);
  });
});