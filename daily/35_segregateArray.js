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

  _isGreater(WM, i, j) {
    return this.V.indexOf(WM[i]) > this.V.indexOf(WM[j])
  }

  // place pointer in both end, left for smallest, right for largest
  // move pointer inward only if 
  // - left is
  // - right is
  iterative(WM) {
    var L = 0,
      R = WM.length - 1;

    while (L < R) {
      //if (WM[L] > WM[R]) {
      if (this._isGreater(WM, L, R)) {
        this._swap(WM, R, L);
        //if (WM[L] == this.V[0])
        //  L++;
        //} else if (WM[L] < WM[R]) {
      } else {
        this._swap(WM, L, R);
        //if (WM[R] == this.V[this.V.length - 1])
        //  R--;
      }
      if (WM[L] == this.V[0])
        L++;
      if (WM[R] == this.V[this.V.length - 1])
        R--;
      if (WM[L] == WM[R] && WM[L] == this.V[1]) {
        L++;
        //R--;
      }
    }
    return WM;
  }

}

module.exports = SegregateArray;