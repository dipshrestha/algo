/**
 * Created by dipshrestha on 10/13/2019
 */

/*
Daily Coding Problem: Problem #69 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given a list of integers, return the largest product that can be made by multiplying any three integers.
For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
You can assume the list has at least three integers.

 */

/*
 Algo: inside the loop calculate max1,max2,max3 and min1,min2.
 outside the loop Math.max(max1*max2*max3, min1*min2*max3);
*/
class LargestThreeProduct {

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    if (WM == null || WM.length < 3) return null;
    // find the max 3, min 3
    var max1, max2, max3, min1, min2, tmp;
    max1 = max2 = max3 = min1 = min2 = WM[0];
    for (var i = 1; i < WM.length; i++) {
      tmp = WM[i];
      if (tmp > max3) {
        max1 = max2;
        max2 = max3;
        max3 = tmp;
      } else if (tmp > max2) {
        max1 = max2;
        max2 = tmp;
      } else if (tmp > max1) {
        max1 = tmp;
      }

      if (tmp < min1) {
        min2 = min1
        min1 = tmp;
      } else if (tmp < min2) {
        min2 = tmp;
      }
    }

    var max = max1 * max2 * max3;
    var min = min1 * min2 * max3;
    console.log(min1, min2, ' : ', max1, max2, max3);
    console.log(max, min);
    var ret = Math.max(max, min);
    return ret;
  }

}

module.exports = LargestThreeProduct;