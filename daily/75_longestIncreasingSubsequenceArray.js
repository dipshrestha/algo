/**
 * Created by dipshrestha on 02/20/2020
 */

/*
Daily Coding Problem: Problem #75 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Given an array of numbers, find the length of the longest increasing subsequence in the array.
The subsequence does not necessarily have to be contiguous.
For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 
the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

 */

/*
 Algo: Solve using backtracking
 NOTE: there are 4 ways to get longest increasing subsequence (length 6)
[ 0, 4, 6, 9, 13, 15 ]
[ 0, 4, 6, 9, 11, 15 ]
[ 0, 2, 6, 9, 13, 15 ]
[ 0, 2, 6, 9, 11, 15 ]
*/
class LongestIncreasingSubsequenceArray {

  // Time: O(2^N)
  // Space: O(N)
  backtracking(WM) {
    this.V = [];
    this._backtracking_helper(WM, 0, []);
    return this.V.length;
  }

  _isValid(list) {
    for (var i = list.length - 1; i > 0; i--) {
      if (list[i] <= list[i - 1]) return false;
    }
    return true;
  }

  _isFinished(WM, pos) {
    return pos == WM.length - 1;
  }

  _backtracking_helper(WM, pos, list) {
    if (this._isFinished(WM, pos)) return list;

    for (var i = pos; i < WM.length; i++) {
      var o = WM[i];
      list.push(o);
      if (this._isValid(list)) {
        this._backtracking_helper(WM, i, list);
        // No need to send copy of array as below
        //var updateList = this._backtracking_helper(WM, pos + i, [...list]);
        if (this._isFinished(WM, i)) {
          if (list.length >= this.V.length) {
            this.V = [...list]; // IMP: this should be a copy
            console.log(this.V);
          }
          //console.log(list);
        }
      }
      list.pop();
    }
    return list;
  }

  /*
  * What happens if I add myself to all other previous indices considering them as the last indices?
  * SubProblem:
  * F(5) = Max(F(4), F(3), F(2), F(1)) + 1 or 0
  * F(4) = Max(F(3), F(2), F(1)) + 1 or 0
  * F(3) = Max(F(2), F(1)) + 1 or 0
  * 
  * SubStucture:  F(N) = Max(F(N - 1)) + 1 if arr[N] > arr[N-1]
                       = Max(F(N - 1)) + 0
  */
  dp(WM) {
    if (WM == null || WM.length == 1) return 1;
    this.V = new Array(WM.length).fill(1);

    for (var i = 1; i < WM.length; i++) {
      for (var j = 0; j < i; j++) {
        if (WM[j] < WM[i] && this.V[i] < this.V[j] + 1)
          this.V[i] = this.V[j] + 1;
      }
    }
    return Math.max(...this.V);
  }
  /*
  _backtracking_helper1(WM, pos, list) {
    if (pos == WM.length - 1) return list;

    for (var i = pos; i < WM.length; i++) {
      var o = WM[i];
      list.push(o);
      if (this._isValid(list)) {
        this._backtracking_helper(WM, i, list);
        // No need to send cloned array as below
        //var updateList = this._backtracking_helper(WM, pos + i, [...list]);
        if (i == WM.length - 1)
          console.log(list, updateList);
      }
      list.pop();
    }
    return list;
  }
  */
}

module.exports = LongestIncreasingSubsequenceArray;