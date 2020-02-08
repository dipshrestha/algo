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
 Algo: Solve using backtracking
*/
class Node {
  constructor(key, val, next = null, prev = null) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class LFU {

  constructor(n) {
    this.head = null;
    this.tail = null;
    this.maxSize = n;
    this.map = new Map();
  }

  updateFrequency() {

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

  }

  // Time: O(1)
  // Space: O(N)
  set(key, val) {
    var ret = this.map.get(key);
  }
}

module.exports = LFU;