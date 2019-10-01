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

/*
 Alog: Backtracking for botton up recursive (recursiveBackTrack), Top down method also (recursive)
 for DP it's like Knapsack
*/
class ArraySumToK {


  recursive(WM, K) {
    if (WM == null || WM.length < 1) return null;
    var val = this._recursive_helper1(WM, K);
    if (!val) return null;
    console.log(this.V);
    return this.V;
  }

  _recursive_helper1(WM, K) {
    if (K == 0) return true;
    if (WM.length == 0 && K != 0) return false;

    var num = WM[WM.length - 1];
    if (num > K)
      return this._recursive_helper1(WM.slice(0, -1), K);
    // exclude num
    var val1 = this._recursive_helper1(WM.slice(0, -1), K);
    // include num
    var val2 = this._recursive_helper1(WM.slice(0, -1), K - num);
    if (val2) {
      this.V.push(num);
    }
    return val1 || val2;
  }

  // TODO: https://github.com/h4yfans/Daily-Coding-Problem/blob/master/042%20%5BHard%5D/Solution.md
  _recursive_helper2(WM, K) {
    if (K == 0) return true;
    if (WM.length == 0 && K != 0) return false;

    var num = WM.pop();
    //if (num > K)
    //  return this._recursive_helper2(WM.slice(0, -1), K);
    // exclude num
    var without_last = this._recursive_helper2(WM, K);
    // include num
    var with_last = this._recursive_helper2(WM.slice(0, -1), K - num);
    if (with_last) {
      this.V.push(with_last);
    }
    return without_last || with_last;
  }

  // Time: O(2^N)
  // Space: O(N)
  recursiveBackTrack(WM, K) {
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

  constructor() {
    this.V = [];
  }

  _fillZero(K, N) {
    for (var i = 0; i <= K; i++) {
      this.V[i] = [];
      for (var j = 0; j <= N; j++)
        this.V[i][j] = false;
    }

    for (var j = 0; j <= N; j++) {
      this.V[0][j] = true;
    }
  }
  // https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
  //https://github.com/h4yfans/Daily-Coding-Problem/blob/master/042%20%5BHard%5D/Solution.md
  dp(WM, K) {
    this._fillZero(K, WM.length);

    for (var i = 1; i <= K; i++) {
      for (var j = 1; j <= WM.length; j++) {

        var tmp = this.V[i][j] = this.V[i][j - 1];
        if (i >= WM[j - 1]) { // number is less than or equal to K
          var with_last = this.V[i - WM[j - 1]][j - 1];
          var without_last = this.V[i][j];
          //var val = this.V[w - WM[i]] + VM[i];
          this.V[i][j] = with_last || without_last;
        } else {
          this.V[i][j] = tmp;
        }
      }
    }
    console.log(this.V)
    var val = this.V[K][WM.length];
    return val;
  }

}

module.exports = ArraySumToK;