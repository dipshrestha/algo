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

/**
 This is like Fibonacci
 */
class SumNonAdjacent {
  //  [2, 4, 6, 2, 5]
  //. F(0) = F(0)     = 0
  //. F(1) = F(2)     = 2
  //. F(2) = F(24)    =    Max(F(0) + 2, F(1))
  //. F(3) = F(246)   =    Max(F(1) + 6, F(2)) = 8
  //. F(4) = F(2462)  =    Max(F(2) + 2, F(3)) = 8
  //. F(5) = F(24625) =    Max(F(3) + 5, F(4)) = 13


  // ====================================================== //
  // Previously.....thought this way....
  //. F(0) = F(0)     = 0
  //. F(1) = F(2)     = 2
  //. F(2) = F(24)    =    Max(F(1), 4) ; // NOT -> Max(F(0) + 4, F(1) - 2 + 4) = 4
  //. F(3) = F(246)   =    Max(F(1) + 6, F(2) - 4 + 2) = 8
  //. F(4) = F(2462)  =    Max(F(2) + 2, F(3) - 6 + 2) = 8
  //. F(5) = F(24625) =    Max(F(3) + 5, F(4) - 2 + 5) = 13
  // ====================================================== //


  // Time:  O(2^N)
  // Space: O(N)
  recursive(WM) {
    if (WM.length == 0) return 0;
    if (WM.length == 1) return WM[0];
    // no harm including this line
    //if (WM.length == 2) return Math.max(WM[0], WM[1]);

    var p1 = this.recursive(WM.slice(0, WM.length - 2)) + WM[WM.length - 1];
    var p2 = this.recursive(WM.slice(0, WM.length - 1));

    // Previously.....thought this way....
    //var p1 = this.recursive(WM.slice(0, WM.length - 1)) - WM[WM.length - 2] + WM[WM.length - 1];
    return Math.max(p1, p2);
  }


  // Time:  O(N)
  // Space: O(1)
  // NOTE: loop doesn't run through end of the WM.length like i<=WM.length;
  iterative(WM) {
    if (WM.length == 0) return 0;
    if (WM.length == 1) return WM[0];
    var p1 = WM[0],
      p2 = WM[1],
      f = Math.max(p1, p2);
    for (var i = 2; i < WM.length; i++) {
      p2 = p1 + WM[i];
      p1 = f;
      f = Math.max(p1, p2);
    }
    return f;
  }

  dp() {

  }
}

module.exports = SumNonAdjacent;