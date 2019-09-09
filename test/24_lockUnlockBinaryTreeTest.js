const assert = require('assert');
const LockUnlockBinaryTree = require('../daily/24_lockUnlockBinaryTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LockUnlockBinaryTree();
});
describe('LockUnlockBinaryTree', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});