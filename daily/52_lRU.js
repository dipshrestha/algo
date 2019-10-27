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
 Algo: Solve using backtracking
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
    this.size = 0;
    this.maxSize = n;
    this.map = new Map();
  }

  _remove(key) {
    var nodeToRemove = this.get(key);
    if (this.size < 1) return;
    // update pointers
    if (nodeToRemove.prev)
      nodeToRemove.prev.next = nodeToRemove.next;
    // delete
    nodeToRemove = null;
    this.map.delete(key);
  }

  _getAll() {
    var h = this.head;
    var p = '';
    while (h) {
      p += (' - ' + h.key);
      h = h.next;
    }
    return p;
  }

  _add(key, val) {
    if (this.size == this.maxSize) {
      this._remove(key);
    }
    var newNode = new Node(key, val);
    this.map.set(key, newNode);
    this._moveToHead(key);
  }

  _moveToHead(key) {
    var nodeToMove = this.map.get(key);
    // update pointers for before/after node
    if (nodeToMove.next != null) {
      nodeToMove.prev.next = nodeToMove.next;
      nodeToMove.next.prev = nodeToMove.prev;
    }

    // update pointers for this node and head node
    nodeToMove.next = this.head;
    if (this.head)
      this.head.prev = nodeToMove.prev;

    // set this node as head
    this.head = nodeToMove;
  }

  get(key) {
    var ret = this.map.get(key);
    // doesn't exist
    if (!ret) {
      return null;
    }
    // exist and is not header
    if (this.head.key != key)
      this._moveToHead(key);
    return ret.val;
  }

  set(key, val) {
    var ret = this.map.get(key);
    // doesn't exist
    if (!ret) {
      this._add(key, val);
      return;
    }
    // exist and is not header
    if (this.head.key != key) {
      this._moveToHead(key);
    } else {
      // exist so update header
      this.header.val = val;
    }
  }
  // Time: O(2^N)
  // Space: O(N)

}

module.exports = LRU;