/**
 * Created by dipshrestha on 09/29/2019
 */

/*
Daily Coding Problem: Problem #44 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
We can determine how "out of order" an array A is by counting the number of inversions it has. 
Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.
Given an array, count the number of inversions it has. Do this faster than O(N^2) time.
You may assume each element in the array is distinct.
For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). 
The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.

 */

/**
 Algo: merge sort
 Rationale: https://medium.com/@ssbothwell/counting-inversions-with-merge-sort-4d9910dc95f0
*/
class InversionCount {

  constructor() {
    this.V = 0;
  }

  recursive(WM) {
    debugger
    if (WM == null || WM.length < 1) return 0;
    var x = this._recursive_helper(WM);
    console.log(x, this.V);
    return this.V;
  }

  _recursive_helper(WM) {
    if (WM.length == 1) return WM;
    var left = this._recursive_helper(WM.slice(0, WM.length / 2));
    var right = this._recursive_helper(WM.slice(WM.length / 2, WM.length));
    var current = [];

    var pL = 0,
      pR = 0;

    while (pL < left.length && pR < right.length) {
      if (left[pL] <= right[pR]) {
        current.push(left[pL++]);
      } else {
        current.push(right[pR++]);
        this.V += (left.length - pL);
      }
    }
    current = current.concat(left.slice(pL, left.length));
    current = current.concat(right.slice(pR, right.length));
    //while (pL < left.length) current.push(left[pL++]);
    //while (pR < right.length) current.push(right[pR++]);
    return current;
  }

}

module.exports = InversionCount;