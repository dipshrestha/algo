/**
 * Created by dipshrestha on 09/30/2019
 */

/*
Daily Coding Problem: Problem #42 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given a list of integers S and a target number k, write a function that returns a subset of S that 
adds up to k. If such a subset cannot be made, then return null.
Integers can appear more than once in the list. You may assume all numbers in the list are positive.
For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

 */

class ArraySumToK {

  // Time: O(2^N)
  // Space: O(N)
  recursive(WM, K) {
    if (WM == null || WM.length < 1) return null;
    var ret = [];
    var val = this._recursive_helper(WM, K, ret, 0);
    if (!val) return null;
    console.log(ret);
    return ret;
  }

  _isValid(WM, K, arr, S) {
    var num = arr[arr.length - 1];
    return arr.slice(0, -1).indexOf(num) <= -1 && S <= K;
  }

  _recursive_helper(WM, K, arr, S) {
    if (S == K) return true;
    var tmp = 0;
    for (var i = 0; i < WM.length; i++) {
      tmp = WM[i];
      arr.push(tmp);
      S += tmp;
      if (this._isValid(WM, K, arr, S)) {
        var ret = this._recursive_helper(WM, K, arr, S);
        if (ret) {
          return true;
        }
      }
      arr.pop();
      S -= tmp;
    }
    return false;
  }

}

module.exports = ArraySumToK;