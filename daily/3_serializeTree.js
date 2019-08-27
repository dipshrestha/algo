/**
 * Created by dipshrestha on 08/18/2019.
 */

/*
Daily Coding Problem: Problem #3 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
For example, given the following Node class
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {

  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class SerializeDeseralizeTree {

  // BFS
  // time: O(N)
  // space: O(N)
  iterativeSerializeWithArray(node) {
    let x = []; // array with nodes
    let i = 0;
    let q = [];
    let cur_node = null;
    q.push(node);
    x[0] = node.val;
    while (q.length > 0) {
      cur_node = q.shift();
      if (cur_node != null) {
        x[i * 2 + 1] = cur_node.left && cur_node.left.val || '';
        x[i * 2 + 2] = cur_node.right && cur_node.right.val || '';
        q.push(cur_node.left);
        q.push(cur_node.right);
      }
      i++;
    }
    return x.join('|');
  }

  // time: O(N)
  // space: O(N)
  iterativeDeserializeWithArray(str) {
    let arr = str.split('|')
    let cur_node;
    arr[0] = new Node(arr[0]); // replace the original value with Node
    for (var i = 0; i < arr.length / 2; i++) {
      cur_node = arr[i];
      if (cur_node != '') {
        // create node with just value and assign it as left/right
        arr[i * 2 + 1] = arr[i * 2 + 1] && new Node(arr[i * 2 + 1]);
        arr[i * 2 + 2] = arr[i * 2 + 2] && new Node(arr[i * 2 + 2]);
        cur_node.left = arr[i * 2 + 1];
        cur_node.right = arr[i * 2 + 2];
      }
    }
    return arr[0];
  }

  // DFS with '' for empty nodes and | as separator
  recursiveSerializeWithDFS(node) {
    if (node == null) return [''];
    let stack = [];
    let x = this.recursiveSerializeWithDFS_helper(node);
    return x.join('|');
  }

  // this can be inside recursiveSerializeWithDFS and with a local stack variable
  // like here
  // https://leetcode.com/problems/serialize-and-deserialize-binary-tree/discuss/366872/Javascript-pre-order-traversal-DFS
  recursiveSerializeWithDFS_helper(node) {
    if (node == null) return [''];
    let stack = [];
    stack.push(node.val);
    stack.push(...this.recursiveSerializeWithDFS_helper(node.left));
    stack.push(...this.recursiveSerializeWithDFS_helper(node.right));
    return stack;
  }

  recursiveDeserializeWithDFS(str) {
    var arr = str.split('|');

    function recursiveDeserializeWithDFS_helper() {
      let val = arr.shift(); // element at head, move the pointer each time
      if (val == '') return;
      let cur_node = new Node(val);
      cur_node.left = recursiveDeserializeWithDFS_helper();
      cur_node.right = recursiveDeserializeWithDFS_helper();
      return cur_node;
    }

    return recursiveDeserializeWithDFS_helper();
  }
}

module.exports = { SerializeDeseralizeTree, Node }