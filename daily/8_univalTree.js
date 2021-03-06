/**
 * Created by dipshrestha on 08/21/2019.
 */

/*
Daily Coding Problem: Problem #8 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
Given the root to a binary tree, count the number of unival subtrees.
For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/

const { Node } = require('../daily/3_serializeTree.js');

/*
 Algo: if one of the child isn't unival, then this node won't be.
*/
class UnivalTree {
  constructor() {
    this._init();
  }

  _init() {
    this.counter = 0;
  }
  // time:  O(N)
  // space: log(N) - height of tree for stack calls
  recursive(node) {
    this._recursive_helper(node);
    return this.counter;
  }

  _recursive_helper(node) {
    if (node == null) return true;
    var left = this._recursive_helper(node.left);
    var right = this._recursive_helper(node.right);
    if (left && right) {
      if (node.left != null && node.val != node.left.val)
        return false;
      if (node.right != null && node.val != node.right.val)
        return false;
      this.counter++;
      return true;
    }
    return false;
  }
}

module.exports = UnivalTree;