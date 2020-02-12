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
 Frequency Double Linked List
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

  _getAll() {
    var h = this.head;
    var p = '';
    while (h) {
      p += ('(' + h.key + ':' + h.val + ')');
      h = h.next;
    }
    return p;
  }

  remove(node) {
    if (!node) console.warn("Node is empty, can't be deleted")
    // special case
    if (node.key == this.tail.key) {
      this.tail = node.prev;
    }
    if (node.key == this.head.key) {
      this.head = node.next;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    node.next = node.prev = null;
    this.size--;
    return node;
  }

  removeTail() {
    if (!this.tail) console.warn("Tail is empty, can't be removed")
    this.size--;
    return this.remove(this.tail);
  }

  addToHead(node) {
    if (!node) console.warn("Node is empty, can't be added");
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.size++;
  }

  constructor(size = 0, head = null, tail = null) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }
}

class LFU {

  _getAll() {
    var keys = Array.from(this.vMap.keys());
    keys.sort();
    var p = '';

    keys.forEach(key => p += ('(' + key + ':' + this.vMap.get(key).val + ')'));
    return p;
  }

  _remove(freq) {
    // remove the tail
    // get linked list
    var dlink = this.fMap.get(freq);
    var nodeToDelete = null;
    if (!dlink) {
      console.warn("DLink is empty, _remove");
      return;
    } else {
      nodeToDelete = dlink.removeTail();
      // free up hashtable
      if (dlink.size == 0) {
        this.fMap.delete(nodeToDelete.key)
      }
    }
    this.vMap.delete(nodeToDelete.key);
  }

  constructor(n) {
    this.minFreq = 0;
    this.maxSize = n;
    this.vMap = new Map();
    this.fMap = new Map();
  }

  _addFrequency(newNode, freq = 1) {
    newNode.freq = freq;
    // get linked list
    var dlink = this.fMap.get(freq);
    if (!dlink) {
      dlink = new DLinkedList();
      dlink.addToHead(newNode);
      this.fMap.set(freq, dlink);
    } else {
      dlink.addToHead(newNode);
    }
  }

  _updateFrequency(existingNode) {
    // get linked list
    var dlink = this.fMap.get(existingNode.freq);
    // remove first
    if (!dlink) {
      console.warn("DLink is empty, _updateFrequency");
      return;
    } else {
      dlink.remove(existingNode);
    }
    this._addFrequency(existingNode, existingNode.freq + 1);
  }

  _add(key, val) {
    if (this.vMap.size == this.maxSize) {
      this._remove(this.minFreq);
    }
    var newNode = new Node(key, val);
    this.vMap.set(key, newNode);
    this._addFrequency(newNode);
  }

  _update(key, val) {
    var vNode = this.vMap.get(key);
    vNode.val = val;
    this._updateFrequency(vNode);
  }

  // Time: O(1)
  // Space: O(N)
  get(key) {
    var existingNode = this.vMap.get(key);
    // doesn't exist
    if (!ret)
      return null;
    this._updateFrequency(existingNode)
    return ret.val;
  }

  // Time: O(1)
  // Space: O(N)
  set(key, val) {
    var obj = this.vMap.get(key);
    if (!obj) {
      this.minFreq = 1;
      this._add(key, val);
    } else {
      this._update(key, val);
    }
  }
}

module.exports = LFU;