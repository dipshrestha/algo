/**
 * Created by dipshrestha on 02/03/2020
 */

/*
Daily Coding Problem: Problem #67 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size n, 
and contain the following methods:
set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, 
then it should also remove the least frequently used item. If there is a tie, 
then the least recently used key should be removed.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.

 */

/*
 Algo: Use double linked list with 2 HashMap
 User input <K1, V> is changed as below
 Value hashmap <K1, Node(K1, V, next, prev, K2)>
 Frequency hashmap <K2, (Double Linked List)>
*/
class Node {
  constructor(key, val, next = null, prev = null, freq = 0) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.freq = freq;
  }
}

class DLinkedList {
  remove(node) {
    if (!node) console.warn("Node is empty, can't be deleted")
    // special case
    if (node.key == tail.key) {
      this.tail = node.prev;
    }
    if (node.key == head.key) {
      this.head = node.next;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    node.next = node.prev = null;
    return node;
  }

  removeTail() {
    if (!this.tail) console.warn("Tail is empty, can't be removed")
    return this.remove(this.tail);
  }

  addToHead(node) {
    if (!node) console.warn("Node is empty, can't be added");
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
  }

  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
}

class LFU {

  constructor(n) {
    //this.head = null;
    //this.tail = null;
    this.minFreq = 0;
    this.maxSize = n;
    this.vMap = new Map(n);
    this.fMap = new Map(n);
  }

  _addFrequency(newNode, freq = 0) {
    // get linked list
    var dlink = this.fMap.get(freq);
    if (!dlink) {
      dlink = new fNode(newNode, newNode);
      this.fMap.put(freq, dlink);
    } else {
      var head = dlink.head;
      var tail = dlink.tail;

      head.prev = newNode;
      newNode.next = head;
      dlink.head = newNode;
    }
  }

  _updateFrequency(existingNode) {
    // get linked list
    var dlink = this.fMap.get(existingNode.freq);
    if (!dlink) {
      console.warn("DLink is empty, _updateFrequency");
    } else {
      dlink.remove(existingNode);
    }

    this._addFrequency(existingNode, existingNode + 1);
  }

  // Time: O(1)
  // Space: O(N)
  get(key) {
    var ret = this.map.get(key);
    // doesn't exist
    if (!ret)
      return null;

    updateFrequency();

    return ret.val;
  }

  _add(key, val) {
    if (this.vmap.size == this.maxSize) {
      debugger;
      //this._remove(this.tail.key);
    }
    var newNode = new Node(key, val);
    this._addFrequency(newNode);
  }

  _update(key, val) {
    var vNode = this.vmap.get(key);
    this._updateFrequency(vNode);
  }

  // Time: O(1)
  // Space: O(N)
  set(key, val) {
    var obj = this.map.get(key);
    if (!obj) {
      this.minFreq = 1;
      this._add(key, val);
    } else {
      this._update(key, val);
    }
  }
}

module.exports = LFU;