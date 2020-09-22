/**
 * Created by dipshrestha on 10/01/2019
 */

/*
Daily Coding Problem: Problem #48 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.
For example, given the following preorder traversal:
[a, b, d, e, c, f, g]
And the following inorder traversal:
[d, b, e, a, f, c, g]

You should return the following tree:

    a
   / \
  b   c
 / \ / \
d  e f  g

 */


const { Node } = require('../daily/3_serializeTree.js');

/*
 This is very similar to 269_heightBlanacedBST
 Algo: 
 	Find the first node
 		Build left/right tree
*/
class TreeFromPreOrderInOrder {
  // Time: O(N)
  // Space: O(N)
  recursive(preorder, inorder) {
    this.V = 0;
    var res = this._recursive_helper(preorder, inorder);
    console.log(res);
    return res;
  }

  // the first preorder that is in inorder
  _getRootIndex(preorder, inorder) {
    var elm = preorder[this.V++],
      idx = inorder.indexOf(elm);
    return idx;
  }

  _recursive_helper(preorder, inorder) {
    if (!inorder || inorder.length < 1) return null;
    const r = this._getRootIndex(preorder, inorder);

    const left = this._recursive_helper(preorder, inorder.slice(0, r));
    const right = this._recursive_helper(preorder, inorder.slice(r + 1, inorder.length));
    const node = new Node(inorder[r], left, right);
    return node;
  }

}

module.exports = TreeFromPreOrderInOrder;