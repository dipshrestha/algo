/**
 * Created by dipshrestha on 09/12/2019 
 */

/*
Daily Coding Problem: Problem #26 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given a singly linked list and an integer k, remove the kth last element from the list.
 k is guaranteed to be smaller than the length of the list.
The list is very long, so making more than one pass is prohibitively expensive.
Do this in constant space and in one pass.

 */

class Node {

  constructor(val, next = null) {
    this.val = val;
    this.next = next
  }
}

class RemoveKLast {
  iterative(WM, K) {

    var ptr1 = WM,
      ptr2 = WM,
      i = 1;
    while (ptr1) {
      ptr1 = ptr1.next;
      if (i > K) {
        ptr2 = ptr2.next;
      }
      i++;
    }
    return ptr2.val;
  }
}

module.exports = { RemoveKLast, Node };