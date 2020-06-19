/**
 * Created by dipshrestha on 06/15/2020
 */

/*
Daily Coding Problem: Problem #295 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Stitch Fix.
Pascal's triangle is a triangular array of integers constructed with the following formula:

The first row consists of the number 1.
For each subsequent row, each element is the sum of the numbers directly above it, on either side.
For example, here are the first few rows:

     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
1 5 10 10 5 1
Given an input k, return the kth row of Pascal's triangle.

Bonus: Can you do this using only O(k) space?

 */

/*
 Algo: Store previous values and add 
*/
class PascalsTriangle {

  // Time: O(k^2)
  // Space: O(k)
  dp_better(k) {
    k--;
    var cur = [];
    for (var i = 0; i <= k; i++) {
      for (var j = i; j > 0; j--) {
        cur[j] = (cur[j] || 0) + cur[j - 1];
      }
      cur[i] = 1;
      console.log(cur);
    }
    return cur;
  }


  // Time: O(k^2)
  // Space: O(2*k)
  dp(k) {
    k--;
    var prev = [],
      cur = [];
    for (var j = 0; j <= k; j++) {
      for (var i = 0; i <= j; i++) {
        if (i == 0 || i == j)
          cur[i] = 1;
        else
          cur[i] = prev[i - 1] + prev[i];
      }
      prev = [...cur];
      console.log(cur);
    }
    return cur;
  }

}

module.exports = PascalsTriangle;