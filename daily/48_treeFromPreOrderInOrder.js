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
 Algo: 
 	Find the first node
 		Build left/right tree
*/
class TreeFromPreOrderInOrder {
  recursive(preorder, inorder) {
    this.V = new Array(inorder.length);
    this.V.fill(0);
    var res = this._recursive_helper(preorder, inorder);
    console.log(res);
    return res;
  }

  // the first preorder that is not -1 and is in inorder
  _getRootIndex(preorder, inorder) {
    var idx = -1,
      elm;
      debugger;
    for (var i = 0; i < preorder.length; i++) {
      if (this.V[i] == -1) continue;
      elm = preorder[i];
      idx = inorder.indexOf(elm);
      if (idx < 0) continue;
      break;
    }
    this.V[i] = -1;
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
  /*
    // Time: O(2^N)
    // Space: O(N)
    recursive(preorder, inorder) {
    	this.V = new Array(inorder.length);
      var res = this._recursive_helper(0, preorder, inorder);
      return res;
    }

    _getRoot(preorder) {
      return preorder[0];
    }

    _getRootIndices(index, preorder, inorder) {
      var elm = preorder[index];
      return [preorder[index], inorder.indexOf(elm)];
    }

    _isLeftOfNode(leftElm, elm, arr) {
      return arr.indexOf(leftElm) < arr.indexOf(elm);
    }

    _recursive_helper(index, preorder, inorder) {
      debugger;
      if (index >= inorder.length) return null;
      // find left & right
      var elm = preorder[index];
      if (elm == null || null === this.V[index]) return null;
      //this.V[index] = null;

      var left = this._recursive_helper(index + 1, preorder, inorder);
      var right = null;

      if (!this._isLeftOfNode(left, elm, inorder)) {
        right = left;
        left = null;
      } else {
        var rightElmInInOrder = inorder[inorder.indexOf(elm) + 1];
        if (rightElmInInOrder) {
          console.log(rightElmInInOrder);
          right = this._recursive_helper(preorder.indexOf(rightElmInInOrder), preorder, inorder);
        }
      }

      var node = new Node(elm, left, right);
      //preorder[index] = null;
      this.V[index] = null;
      console.log(node);
      return node;

    }
  */
}

module.exports = TreeFromPreOrderInOrder;