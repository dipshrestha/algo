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
    var prev = WM;
    var cur = WM.next;
    var next = null;
    while (cur != null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    WM.next = null;
    return prev;
  }

  recursive(WM) {

    if (WM.next == null) {

    }

  }
}

module.exports = { Node, ReverseLinkedList };