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
You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.

 */

class BinaryNode {
  constructor(val, left = null, right = null, parent) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.isLocked = false;
    this.canLock = false;
  }
}

class LockUnlockBinaryTree {

  is_locked(node) {
    return node.isLocked;
  }

  lock(node) {
    if (!node.isLocked && node.canLock) {
      // check if parent can be locked
      var parent = node.parent;
      var can = true;
      while (parent != null) {
        if (!parent.canLock) {
          can = false;
          break;
        }
        parent = parent.parent;
      }

      if (!can) return false;

      // lock the node
      node.isLocked = true;

      // make all the parent as can not be locked
      var parent = node.parent;
      while (parent != null) {
        parent.canLock = false;
        parent = parent.parent;
      }
      return true;
    }
    return false;
  }

  unlock(node) {

  }

}

module.exports = LockUnlockBinaryTree;