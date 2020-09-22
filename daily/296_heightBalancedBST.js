/**
 * Created by dipshrestha on 09/16/2020
 */

/*
Daily Coding Problem: Problem #296 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Etsy.
Given a sorted array, convert it into a height-balanced binary search tree.

 */

const { Node } = require('../daily/3_serializeTree.js');

/*
 This is very similar to 48_treeFromPreOrderInOrder
 Algo: 
 Find the center
  For each half (right/left) of center create BST
*/
class HeightBalancedBST {

  // Time: O(N)
  // Space: O(N)
  recursive(N) {
    var res = this._recursive_helper(N);
    return res;
  }

  _getRootIndex(N) {
    return Math.ceil((N.length + 1) / 2) - 1;
  }

  _recursive_helper(N) {
    if (N == null || N.length < 1) return null;
    //const h = this._getHeight(N);
    //const r = this._getRootIndex(N, h);
    const r = this._getRootIndex(N);
    const left = this._recursive_helper(N.slice(0, r));
    const right = this._recursive_helper(N.slice(r + 1, N.length));
    const node = new Node(N[r], left, right);
    return node;
  }

  //_getHeight(N) {
  //  return Math.ceil(Math.log2(N.length + 1));
  //}

  _getHeight(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;
    const lHeight = this._getHeight(root.left);
    const rHeight = this._getHeight(root.right);
    return Math.max(lHeight, rHeight) + 1;
  }

  isBalanced(root) {
    const lHeight = this._getHeight(root.left);
    const rHeight = this._getHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) return false;
    return true;
  }
}

module.exports = HeightBalancedBST;