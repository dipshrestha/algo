/**
 * Created by dipshrestha on 09/09/2019
 */

/*
Daily Coding Problem: Problem #24 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.
Design a binary tree node class with the following methods:
is_locked, which returns whether the node is locked
lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other property you would like.
You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes.
Each method should run in O(h), where h is the height of the tree.

 */

/**
 * Construct the nodes based on the array input.
 * do not need the left/right for this algorithm.
 *
 * Test only the parent of nodes.
 */
class BinaryTreeNode {
  constructor(val, left = null, right = null, parent = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.isLocked = false;
    this.canLock = 0; // number of child locked
  }
}

class LockUnlockBinaryTree {

  constructor(WM) {
    this._init(WM);
  }

  _init(arr) {
    var nodeArr = [];
    var cur_node = null;
    nodeArr[0] = new BinaryTreeNode(arr[0]);
    for (var i = 0; i < arr.length / 2; i++) {
      cur_node = nodeArr[i];
      if (cur_node) {
        // create node with just value and assign it as left/right
        if (arr[i * 2 + 1])
          cur_node.left = nodeArr[i * 2 + 1] = new BinaryTreeNode(arr[i * 2 + 1], null, null, nodeArr[i]);
        if (arr[i * 2 + 2])
          cur_node.right = nodeArr[i * 2 + 2] = new BinaryTreeNode(arr[i * 2 + 2], null, null, nodeArr[i]);
      }
    }
    //console.log(nodeArr);
    this.WM = nodeArr;
  }

  // Time: O(1)
  // Space: O(1)
  is_locked(node) {
    return node.isLocked;
  }

  // Time: O(h)
  // Space: O(1)
  lock(node) {
    if (!node.isLocked && !node.canLock) {
      // check if parent can be locked
      var parent = node.parent;
      while (parent != null) {
        if (parent.isLocked) {
          return false;
        }
        parent = parent.parent;
      }

      // lock the node
      node.isLocked = true;

      // mark all the parent as can not be locked
      var parent = node.parent;
      while (parent != null) {
        parent.canLock++;
        parent = parent.parent;
      }
      return true;
    }
    return false;
  }

  // Time: O(h)
  // Space: O(1)
  unlock(node) {
    if (node.isLocked) {
      node.isLocked = false;

      // mark all the parent as can be locked
      var parent = node.parent;
      while (parent != null) {
        parent.canLock--;
        parent = parent.parent;
      }
      return true;
    }
    return false;
  }

}

module.exports = { BinaryTreeNode, LockUnlockBinaryTree };