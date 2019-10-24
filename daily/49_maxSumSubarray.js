/**
 * Created by dipshrestha on 10/24/2019
 */

/*
Daily Coding Problem: Problem #49 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Given an array of numbers, find the maximum sum of any contiguous subarray of the array.
For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, 
since we would take elements 42, 14, -5, and 86.
Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.

 */

/*
 Algo: At each point decide what happens if you add the next element
  a) if it decreases, earlier is the max
  b) if it makes sum negative, reset to 0
*/
class MaxSumSubarray {

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {

    if (WM == null || WM.length < 1) return 0;
    var max = Math.max(WM[0], 0);
    var tmp = max;

    for (var i = 1; i < WM.length; i++) {
      tmp += WM[i];
      if (tmp < 0) {
        tmp = 0; // reset
      } else if (tmp >= max) {
        max = tmp;
      }
    }
    return max;
  }

}

module.exports = MaxSumSubarray;