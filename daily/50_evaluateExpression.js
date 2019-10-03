/**
 * Created by dipshrestha on 10/02/2019
 */

/*
Daily Coding Problem: Problem #50 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Suppose an arithmetic expression is given as a binary tree. 
Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.
Given the root to such a tree, write a function to evaluate it.
For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5
You should return 45, as it is (3 + 2) * (4 + 5).

 */

const { Node } = require('../daily/3_serializeTree.js');
/*
 Algo: traverse node in post order
*/
class EvaluateExpression {

  _isLeaf(node) {
    return node.left == null && node.right == null;
  }
  // Time: O(N)
  // Space: O(N)
  recursive(node) {
    if (node == null) return 0;
    var val = this._recursive_helper(node);
    return val;
  }

  _recursive_helper(node) {
    if (this._isLeaf(node)) return +node.val;
    var left = this._recursive_helper(node.left);
    var right = this._recursive_helper(node.right);
    switch (node.val) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
    }
    return node.val;
  }

}

module.exports = EvaluateExpression;