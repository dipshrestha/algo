const assert = require('assert');
const TreeFromPreOrderInOrder = require('../daily/48_treeFromPreOrderInOrder.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new TreeFromPreOrderInOrder();
});

describe('TreeFromPreOrderInOrder', function() {
  const expected = 3;
  const preT = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
  const inT = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];

  it('Iterative', function() {
    const result = 3//algo.iterative(WM)
    assert.equal(result, expected);
  });
});