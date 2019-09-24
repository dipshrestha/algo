/**
 * Created by dipshrestha on 09/23/2019
 */

/*
Daily Coding Problem: Problem #35 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that 
all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become 
['R', 'R', 'R', 'G', 'G', 'B', 'B'].

 */

class SegregateArray {
  constructor(orderArr) {
    this.V = orderArr;
  }

  _swap(WM, i, j) {
    var tmp = WM[i];
    WM[i] = WM[j];
    WM[j] = tmp;
  }

  // https://github.com/h4yfans/Daily-Coding-Problem/blob/master/035%20%5BHard%5D/Solution.md
  // place pointer in both ends and middle, left for smallest, right for largest, middle to start as left
  // move pointer inward only if
  // - left is
  // - right is
  // - middle

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    /* L: low, M: middle, H: high */
    var L = 0,
      M = 0,
      R = WM.length - 1;

    while (M <= R) {
      if (WM[M] == this.V[0]) {
        this._swap(WM, L, M);
        L++;
        M++;
      } else if (WM[M] == this.V[2]) {
        this._swap(WM, M, R);
        R--;
      } else {
        M++;
      }
    }
    return WM;
  }
}

module.exports = SegregateArray;