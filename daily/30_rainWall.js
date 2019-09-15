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

  iterative(WM) {
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
      return down && up && up > down;
    }

    function reset() {
      down = up = start = i;
    }

    debugger;
    if (WM == null || WM.length < 2) return 0;
    var down, up, start, res;
    down = up = start = res = 0;
    for (var i = 0; i < WM.length; i++) {
      if (WM[i + 1] < WM[i]) down = i + 1;
      if (WM[i + 1] > WM[i]) up = i + 1;
      if (isTrigger()) {
        res = calculate(0, i + 1);
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