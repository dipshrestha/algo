/**
 * Created by dipshrestha on 12/10/2019
 */

/*
Daily Coding Problem: Problem #60 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, 
since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.
Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.

 */

/*
 Algo: Solve using backtracking
*/
class PartitionMultisetInteger {


  recursive(WM) {
    var sum = WM.reduce((f, s) => f + s);
    if (sum % 2 != 0) return false;
    //var res = this._recursive_helper(WM, sum / 2);
    var res = this._recursive_helper_better(WM, sum / 2, WM.length);
    return res;
  }


  // Time: O(N^N) Exponential
  // Space: O(1)
  /**
   * check if it's possible to add elements to N
   * Similar to backtracking
   **/
  _recursive_helper(WM, N, index = 0) {
    if (N == 0) return true;
    for (; index < WM.length; index++) {
      var elm = WM[index];
      if (elm == N) return true;
      var ret = false;
      if (elm < N)
        ret = this._recursive_helper(WM, N - elm, index + 1);
      if (ret)
        return true;
    }

    return false;
  }


  // Time: O(2^N) Exponential
  // Space: O(1)
  // Derived from https://www.geeksforgeeks.org/partition-problem-dp-18/
  //check if sum can be obtained by any of  
  //      the following  
  //      (a) including the last element  
  //      (b) excluding the last element  
  _recursive_helper_better(WM, N, index) {
    if (N == 0) return true;
    if (N != 0 && index == 0) return false;

    if (WM[index - 1] > N) {
      return this._recursive_helper_better(WM, N, index - 1);
    }

    var res =
      // exclude
      this._recursive_helper_better(WM, N, index - 1) ||
      // include
      this._recursive_helper_better(WM, N - WM[index], index - 1);

    return res;
  }


  dp(WM, N) {

    var mem = new Array(WM.length);

    for (var i = 0; i < WM.length; i++) {
      mem[i] = new Array(N);
      mem[i][0] = true;
    }

    for (var i = 0; i < N; i++) {
      var elm = WM[i];
      for (var j = 0; j < WM.length; j++) {
      	var res = mem[i][j] || mem[i][j - elm];

      }


    }

  }
  /**
   *
   * Other method of doing the same thing
   *
   */

  /*
  Above is better method
    _recursive_helper(WM, N) {
      if (N == 0) return true;
      //if (N < 0) return false;
      for (var i = 0; i < WM.length; i++) {
        var elm = WM[i];
        if (elm == N) return true;
        var Y = [...WM];
        Y.splice(i, 1);
        var ret = false;
        if (elm < N)
          ret = this._recursive_helper(Y, N - elm);
        if (ret)
          return true;
      }

      return false;
    }
  */
}

module.exports = PartitionMultisetInteger;