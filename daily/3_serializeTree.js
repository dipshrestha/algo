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
  iterativeDeserializeWithArray(_arr) {
    let arr = _arr.split('|')
    let cur_node;
    arr[0] = new Node(arr[0]);
    for (var i = 0; i < arr.length / 2; i++) {
      cur_node = arr[i];
      if (cur_node != '') {
        arr[i * 2 + 1] = arr[i * 2 + 1] && new Node(arr[i * 2 + 1]);
        arr[i * 2 + 2] = arr[i * 2 + 2] && new Node(arr[i * 2 + 2]);
        cur_node.left = arr[i * 2 + 1];
        cur_node.right = arr[i * 2 + 2];
      }
    }
    return arr[0];
  }
}

module.exports = { SerializeDeseralizeTree, Node }