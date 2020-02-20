/**
 * Created by dipshrestha on 02/29/2020
 */

/*
Daily Coding Problem: Problem #73 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given the head of a singly linked list, reverse it in-place.

 */


class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next
  }
}

/*
 Algo: Use 3 pointer
*/
class ReverseLinkedList {

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    var prev = null;
    var cur = WM;
    var next = null;
    while (cur != null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }

  // Time: O(N)
  // Space: O(1)
  recursive(WM) {
    var ret = this._recursive_helper(WM);
    return ret;
  }

  _recursive_helper(WM) {
    var prev = null;
    var cur = WM;
    var next = WM && WM.next;
    debugger;
    if (cur == null || next == null) {
      return WM;
    } else {
      //var prev = WM;
      //var cur = WM.next;
      //var next = cur.next;
      //cur.next = prev;
      //cur = next;
      var x = this._recursive_helper(next);
      x.next = cur;
      cur.next = null;
      return cur;
    }
  }
}

module.exports = { Node, ReverseLinkedList };