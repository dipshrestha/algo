/**
 * Created by dipshrestha on 09/12/2019
 */

/*
Daily Coding Problem: Problem #30 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
You are given an array of non-negative integers that represents a two-dimensional elevation map 
where each element is unit-width wall and the integer is the height. Suppose it will rain and all 
spots between two walls get filled up.
Compute how many units of water remain trapped on the map in O(N) time and O(1) space.
For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.
Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

 */

class RainWall {

  //https://leetcode.com/problems/trapping-rain-water/discuss/364650/O(n)-Time-O(1)-space-C%2B%2B-Solution
  // Time: O(N)
  // Space: O(1)
  iterativeBest(WM) {
    var maxL, maxR, rain, i = 0,
      j = WM.length - 1;
    maxR = maxL = rain = i;
    while (i < j) {
      maxL = Math.max(maxL, WM[i]);
      maxR = Math.max(maxR, WM[j]);
      // move the smaller pointer towards greater
      if (WM[i] < WM[j]) {
        rain += Math.min(maxL, maxR) - WM[i++];
      } else {
        rain += Math.min(maxL, maxR) - WM[j--];
      }
    }
    return rain;
  }

  // Time: O(N^2)
  // Space: O(1)
  iterative(WM) {
    var maxL, maxR, rain;
    rain = 0;
    for (var i = 1; i < WM.length; i++) {
      maxL = Math.max(...WM.slice(0, i + 1));
      maxR = Math.max(...WM.slice(i));
      rain += (Math.min(maxL, maxR) - WM[i]);
    }
    return rain;
  }

  // Time: > O(N)
  // Space: O(N)
  iterative1(WM) {
    function calculate(start, end) {
      var sum = 0,
        smallVal = Math.min(WM[start], WM[end]),
        count = 0;
      while (++start < end) {
        if (WM[end] >= WM[start]) {
          sum += WM[start];
          count++;
        }
      }
      var x = (count * smallVal) - sum;
      return x;
    }

    function isTrigger() {
      //return down && up && up < down;
      return down && up && up > down;
    }

    function reset() {
      down = up = start = i;
      upArr.push(up);
    }

    /* 
     * check to see, if we should ignore all previous calculated values
     */
    function override() {
      for (var i = 0; i < upArr.length; i++) {
        if (upArr[i] != 0 && WM[up] <= WM[upArr[i]]) return false;
      }
      return true;
    }

    debugger;
    if (WM == null || WM.length < 3) return 0;
    var down, up, start, res, upArr;
    down = up = start = res = 0, upArr = [0];
    for (var i = 0; i < WM.length; i++) {
      if (WM[i + 1] < WM[i]) down = i + 1;
      if (WM[i + 1] > WM[i]) up = i + 1;
      if (isTrigger()) {
        if (override()) {
          res = calculate(0, i + 1);
        } else {
          res += calculate(down - 1, i + 1);
        }
        console.log('partial: ' + res)
        reset();
      }
    }

    if (isTrigger()) {
      res = calculate(0, WM.length - 1);
    }
    return res;
  }

}

module.exports = RainWall;