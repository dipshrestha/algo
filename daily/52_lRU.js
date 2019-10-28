/**
 * Created by dipshrestha on 10/27/2019
 */

/*
Daily Coding Problem: Problem #52 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:
set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the
least recently used item.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.

 */

/*
 Algo: Use double linked list with hash table
 // reference https://medium.com/dsinjs/implementing-lru-cache-in-javascript-94ba6755cda9
*/
class Node {
  constructor(key, val, next = null, prev = null) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {

  constructor(n) {
    this.head = null;
    this.tail = null;
    this.maxSize = n;
    this.map = new Map();
  }

  _remove(key) {
    var nodeToRemove = this.map.get(key);
    // update pointers
    if (nodeToRemove.prev) {
      nodeToRemove.prev.next = nodeToRemove.next;
    }
    this.tail = nodeToRemove.prev;
    // delete
    nodeToRemove = null;
    this.map.delete(key);
  }

  _getAll() {
    var h = this.head;
    var p = '';
    while (h) {
      p += ('(' + h.key + ':' + h.val + ')');
      h = h.next;
    }
    return p;
  }

  _add(key, val) {
    if (this.map.size == this.maxSize) {
      debugger;
      this._remove(this.tail.key);
    }
    var newNode = new Node(key, val);
    this.map.set(key, newNode);
    if (this.map.size != 1) {
      newNode.next = this.head;
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  _moveToHead(key) {
    var nodeToMove = this.map.get(key);
    // update pointers for before/after node
    if (nodeToMove.next) {
      nodeToMove.next.prev = nodeToMove.prev;
    }
    if (nodeToMove.prev) {
      nodeToMove.prev.next = nodeToMove.next;
    }

    if (this.tail.key == nodeToMove.key) {
      this.tail = nodeToMove.prev;
    }
    // update pointers for this node and head node
    this.head.prev = nodeToMove;
    nodeToMove.next = this.head;

    // set this node as head
    this.head = nodeToMove;
    this.head.prev = null;

    if (this.map.size == 1)
      this.tail = this.head;
  }

  // Time: O(1)
  // Space: O(N)
  get(key) {
    var ret = this.map.get(key);
    // doesn't exist
    if (!ret)
      return null;

    // exist and is not header
    if (this.head.key != key)
      this._moveToHead(key);
    return ret.val;
  }

  // Time: O(1)
  // Space: O(N)
  set(key, val) {
    var ret = this.map.get(key);
    // doesn't exist
    if (!ret) {
      this._add(key, val);
      return;
    }
    ret.val = val;
    this.map.set(key, ret);
    // exist and is not header
    if (this.head.key != key)
      this._moveToHead(key);
    else {
      // exist so update header
      this.header.val = val;
    }
  }


}

module.exports = LRU;