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

class SubarrayMax {

  constructor(WM) {
    this.steps = 0;
    this.WM = WM;
  }

  _getMaxWithinWindow(start, end) {
    var x = this.WM[start];
    this.steps++;
    for (var i = start + 1; i < end; i++) {
      if (this.WM[i] > x) x = this.WM[i];
      this.steps++;
    }
    return x;
  }

  // Time:  greather than O(N) but definitely not O(N * K)
  // Space: O(1) // array in-place modification
  iterative(K) {
    if (this.WM == null || this.WM.length == 0) return null;

    for (var i = 0; i <= this.WM.length - K; i++) {
      this.WM[i] = this._getMaxWithinWindow(i, i + K);
    }

    console.log("Steps: " + this.steps);
    return this.WM.slice(0, this.WM.length - K + 1);
  }

  /**
   * Maintain 2 maxes
   **/
  _getMaxWithinWindowBest(start, end) {

    // check if maxes are out of window and update accordingly
    if (start > this.max[0]) {
      this.max[0] = start;
    }
    if (start > this.max[1]) {
      this.max[1] = this.max[0];
    }
    this.steps++;
    this.steps++;

    // VIP: start from the max index
    for (var i = this.max[1] + 1; i < end; i++) {
      // update the maxes
      if (this.WM[i] > this.WM[this.max[1]]) {
        //this.max[0] = this.max[1];
        this.max[0] = this.max[1] = i;
      } else if (this.WM[i] > this.WM[this.max[0]]) {
        this.max[0] = i;
      }
      this.steps++;
    }
    this.WM[start] = this.WM[this.max[1]];
  }

  iterativeBest(K) {
    if (this.WM == null || this.WM.length == 0) return null;
    this.max = [0, 0];
    for (var i = 1; i <= this.WM.length - K; i++) {
      this._getMaxWithinWindowBest(i, i + K);
    }
    console.log("Steps: " + this.steps);
    return this.WM.slice(0, this.WM.length - K + 1);
  }


}

module.exports = SubarrayMax;