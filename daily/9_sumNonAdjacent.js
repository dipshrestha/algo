/**
 * Created by dipshrestha on 08/22/2019
 */

/*
Daily Coding Problem: Problem #9 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Airbnb.
Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
Follow-up: Can you do this in O(N) time and constant space?

 */

class SumNonAdjacent {
  //  [2, 4, 6, 2, 5]

  //. F(0) = F(0)     = 0
  //. F(1) = F(2)     = 2
  //. F(2) = F(24)    =    Max(F(0) + 4, F(1)) = 4
  //. F(3) = F(246)   =    Max(F(1) + 6, F(2) - 2 + 2) = 8
  //. F(4) = F(2462)  =    Max(F(2) + 2, F(3) - 6 + 2) = 8
  //. F(5) = F(24625) =    Max(F(3) + 5, F(4) - 2 + 5) = 13

  recursive(WM) {
    if (WM.length == 0) return 0;
    if (WM.length == 1) return WM[0];

    var p0 = this.recursive(WM.slice(0, WM.length - 2)) + WM[WM.length - 1];
    var p1 = this.recursive(WM.slice(0, WM.length - 1)) - WM[WM.length - 2] + WM[WM.length - 1];
    return Math.max(p0, p1);
  }

  iterative() {

  }

  dp() {

  }
}

module.exports = SumNonAdjacent;