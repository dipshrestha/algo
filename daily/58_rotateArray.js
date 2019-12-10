/**
 * Created by dipshrestha on 12/05/2019
 */

/*
Daily Coding Problem: Problem #58 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
An sorted array of integers was rotated an unknown number of times.
Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.
For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).
You can assume all the integers in the array are unique.

 */

/*
  Algo: For binary search, do calculation based on the middle and then high;
*/
class RotateArray {

  // Time: O(log(N))
  // Space: O(1)
  recursive(WM, K) {
    if (WM == null || WM.length == 0)
      return null;
    var ret = this._recursive_helper(WM, 0, WM.length - 1, K);
    return ret;
  }

  _recursive_helper(WM, low, high, K) {
    if (low < 0 || high >= WM.length) return null;
    if (low > high) return null;

    let mid = Math.round((low + high) / 2);
    if (WM[low] == K) return low;
    if (WM[high] == K) return high;
    if (WM[mid] == K) return mid;

    //if (WM[low] < K) {
    if (WM[mid] < K) {
      if (WM[high] > K) {
        // check the second half;
        return this._recursive_helper(WM, mid, high, K);
      } else {
        // check the first half;
        return this._recursive_helper(WM, low, mid, K);
      }
    } else {
      // check the first half;
      return this._recursive_helper(WM, low, mid, K);
    }
    /*} else {
      if (WM[mid] < K) {
        if (WM[high] > K) {
          // check the second half;
          return this._recursive_helper(WM, mid, high, K);
        } else {
          // check the first half;
          return this._recursive_helper(WM, low, mid, K);
        }
      } else {
        // check the first half;
        return this._recursive_helper(WM, low, mid, K);
      }
    }*/
  }

}

module.exports = RotateArray;