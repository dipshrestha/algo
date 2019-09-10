const assert = require('assert');
const { BinaryTreeNode, LockUnlockBinaryTree } = require('../daily/24_lockUnlockBinaryTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LockUnlockBinaryTree([1, 2, 3, 4, 5, 6]);
});

describe('LockUnlockBinaryTree', function() {
  const expected = 3;

  it('Lock node, test node, test parent, test child, lock node again, lock parent, lock child', function() {
    const node = algo.WM[1];
    assert.equal(algo.is_locked(node), false, "node locked ?");
    assert.equal(algo.lock(node), true, "Lock node");
    assert.equal(algo.is_locked(node), true, "node locked ?");
    assert.equal(algo.is_locked(node.parent), false, "parent locked ?");
    assert.equal(algo.is_locked(algo.WM[3]), false, "child locked ?");
    assert.equal(algo.lock(node), false, "Lock node");
    assert.equal(algo.lock(node.parent), false, "Lock parent");
    assert.equal(algo.lock(algo.WM[3]), false, "Lock child");
  });


  it('Lock root, test root, test child, lock root again, lock child', function() {
    const node = algo.WM[0];
    assert.equal(algo.is_locked(node), false, "node locked ?");
    assert.equal(algo.lock(node), true, "Lock node");
    assert.equal(algo.is_locked(node), true, "node locked ?");
    assert.equal(algo.is_locked(algo.WM[1]), false, "child locked ?");
    assert.equal(algo.lock(node), false, "Lock node");
    assert.equal(algo.lock(algo.WM[1]), false, "Lock child");
  });

  it('Lock leaf, test leaf, test parent, test sibling, lock leaf again, lock parent, lock sibling', function() {
    const node = algo.WM[3];
    assert.equal(algo.is_locked(node), false, "node locked ?");
    assert.equal(algo.lock(node), true, "Lock node");
    assert.equal(algo.is_locked(node), true, "node locked ?");
    assert.equal(algo.is_locked(node.parent), false, "parent locked ?");
    assert.equal(algo.is_locked(algo.WM[4]), false, "sibling locked ?");
    assert.equal(algo.lock(node), false, "Lock node");
    assert.equal(algo.lock(node.parent), false, "Lock parent");
    assert.equal(algo.lock(algo.WM[4]), false, "Lock sibling");
  });

});