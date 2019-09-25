/**
 * Created by dipshrestha on 09/24/2019
 */

/*
Daily Coding Problem: Problem #36 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Dropbox.
Given the root to a binary search tree, find the second largest node in the tree.

 */

class SecondLargestNode {

  _isLeaf(node) {
    return node.left == null && node.right == null;
  }

  _findLargest(node) {
    if (this._isLeaf(node)) return node.val;
    if (node.right == null) return node.val;
    return this._findLargest(node.right);
  }

  // Time: O(log (N))
  // Space: O(1)
  recursive(node) {
    var val = this._recursive_helper(node);
    return val;
  }

  _recursive_helper(node) {
    if (!node) return node;
    if (this._isLeaf(node)) return node.val;
    if (node.right != null) {
      if (this._isLeaf(node.right)) {
        // this is it
        return node.val;
      } else {
        return this._recursive_helper(node.right)
      }
    } else {
      return this._findLargest(node.left);
    }
  }

}

module.exports = SecondLargestNode;