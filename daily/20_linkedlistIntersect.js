/**
 * Created by dipshrestha on 09/04/2019
 */

/*
Daily Coding Problem: Problem 20 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
In this example, assume nodes with the same value are the exact same node objects.
Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

 */

class Node {

  constructor(val, next = null) {
    this.val = val;
    this.next = next
  }
}

class LinkedlistIntersect {

  _alignHeaders(header, steps) {
    for (var i = 0; i < steps; i++) header = header.next;
    return header;
  }

  _findLength(header) {
    var i = 0;
    while (header != null) {
      header = header.next;
      i++;
    }
    return i;
  }

  // Time: O(N + M)
  // Space: O(1)
  iterative(M, N) {
    var headM = M,
      headN = N,
      lenM = this._findLength(headM),
      lenN = this._findLength(headN);

    // align the pointers
    if (lenM > lenN) headM = this._alignHeaders(headM, lenM - lenN);
    else if (lenM < lenN) headN = this._alignHeaders(headN, lenN - lenM);
    while (headM && headN && headM.val != headN.val) {
      headM = headM.next;
      headN = headN.next;
    }
    return headM ? headM.val : null;
  }

  iterativeBest(M, N) {
    var headM = M,
      headN = N;
      debugger;

    while (headM.val != headN.val) {
      headM = headM ? (headM.next ? headM.next : N) : N;
      headN = headN ? (headN.next ? headN.next : M) : M;
    }
    return headM ? headM.val : null;
  }

}

module.exports = { Node, LinkedlistIntersect };