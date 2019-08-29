/**
 * Created by dipshrestha on 08/29/2019
 */

/*
Daily Coding Problem: Problem #16 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Twitter.
You run an e-commerce website and want to record the last N order ids in a log. 
Implement a data structure to accomplish this, with the following API:
record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.

 */

class LinkListNode {
  constructor(val, before = null) {
    this.before = before;
    this.val = val;
  }
}

class RecordLog {

  constructor() {
    this.head = null;
  }

  record(order_id) {
    var x = null;
    if (this.head == null) {
      x = new LinkListNode(order_id, null);
    } else {
      x = new LinkListNode(order_id, this.head);
    }
    this.head = x;
  }


  // time: O(k)
  // space: O(N)
  get_last(i) {
    if (i <= 0) return null;
    var tmp = this.head;
    while (i - 1 > 0 && tmp != null) {
      tmp = tmp.before;
      i--;
    }
    return tmp ? tmp.val : null;
  }
}

module.exports = { RecordLog, LinkListNode }