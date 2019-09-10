/**
 * Created by dipshrestha on 09/09/2019
 */

/*
Daily Coding Problem: Problem #18 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results.
You can simply print them out as you compute them.

 */

class SubarraySum {

  constructor() {
    this.steps = 0;
  }
  _getMaxWithinIndices(WM, start, end) {

    var x = WM[start]
    for (var i = start + 1; i < end; i++) {
      if (WM[i] > x) x = WM[i];
      this.steps++;
    }
    return x;
  }

  iterative(WM, K) {
    if (WM == null || WM.length == 0) return null;

    var max = null;

    for (var i = 0; i <= WM.length - K; i++) {
      WM[i] = this._getMaxWithinIndices(WM, i, i + K);
    }

    console.log("Steps: " + this.steps);
    return WM.slice(0, WM.length - K + 1);
  }


}

module.exports = SubarraySum;