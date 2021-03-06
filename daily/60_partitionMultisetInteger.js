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
 Algo: NOTE: VVIP problem as it
 shows backtracking and other recursive way
 clarifies loop interchange
 does better DP also
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
  /**
   *
   * Other method of doing the same thing
   *
   */

  /*
  NOTE: Above is better method as it doesn't include splice of array
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

  // Time: O(N*SUM)
  // Space: O(N)
  dp(WM) {
    var sum = WM.reduce((f, s) => f + s);
    if (sum % 2 != 0) return false;
    //var res = this._recursive_helper(WM, sum / 2);
    var N = sum / 2;

    var res = this._dp_helper_better(WM, N)
    return res;

  }

  // Time: O(N*SUM)
  // Space: O(N)
  // https://leetcode.com/problems/partition-equal-subset-sum/discuss/471340/Solution-using-DP-in-C%2B%2B-(single-state-DP)
  _dp_helper_better(WM, N) {
    var mem = new Array(N + 1);
    for (var i = 0; i <= N; i++) {
      mem[i] = false;
    }
    mem[0] = true;

    for (var i = 0; i < WM.length; i++) {
      var elm = WM[i];
      for (var j = N; j >= elm; j--) {
        mem[j] = mem[j] || mem[j - elm];
      }
    }
    return mem[N] || false;
  }

  // Time: O(N*SUM)
  // Space: O(N*SUM)
  // https://www.techiedelight.com/partition-problem/
  // https://www.geeksforgeeks.org/partition-problem-dp-18/
  // https://www.youtube.com/watch?v=s6FhG--P7z0
  _dp_helper(WM, N) {
    var mem = new Array(WM.length + 1);

    for (var i = 0; i <= WM.length; i++) {
      mem[i] = new Array(N + 1);
      mem[i][0] = true;
    }

    // NOTE: BOTH LOOPS ARE INTERCHANGEABLE.
    // RESULT IS CORRECT OR THIS OR THE COMMENTED ONE
    //*
    for (var i = 1; i <= N; i++) {
      for (var j = 1; j <= WM.length; j++) {
        var elm = WM[j - 1];
        if (elm > i) {
          mem[j][i] = mem[j - 1][i];
        } else {
          var res = mem[j - 1][i] || mem[j - 1][i - elm];
          mem[j][i] = res;
        }
      }
    }
    // NOTE: BOTH LOOPS ARE INTERCHANGEABLE
    //*/
    /*
    for (var i = 1; i <= WM.length; i++) {
      for (var j = 1; j <= N; j++) {
        var elm = WM[i - 1];
        if (elm > j) {
          mem[i][j] = mem[i - 1][j];
        } else {
          var res = mem[i - 1][j] || mem[i - 1][j - elm];
          mem[i][j] = res;
        }
        // IMP: short circuit
        if (j == N && mem[i][j]) return true;
      }
    }*/
    //console.log(mem);
    return mem[WM.length][N] || false;

  }

}

module.exports = PartitionMultisetInteger;