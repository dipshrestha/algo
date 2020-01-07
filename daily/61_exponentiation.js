/**
 * Created by dipshrestha on 01/07/2020
 */

/*
Daily Coding Problem: Problem #61 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.
Do this faster than the naive method of repeated multiplication.
For example, pow(2, 10) should return 1024.

 */

/*
 Algo: Divide into half and store
 optimized to O(logn) by calculating power(x, y/2) only once and storing it. 
*/
class Exponentiation {

  // Time: O(N)
  // Space: O(1)
  recursive(x, y) {
    if (y == 0) return 1;
    if (y == 1) return x;
    return x * this.recursive(x, y - 1);
  }

  // Time: O(logN)
  // Space: O(1)
  recursive_better(x, y) {
    if (y == 0) return 1;
    if (y == 1) return x;
    var tmp = this.recursive_better(x, y / 2);
    if (y % 2 == 0)
      return tmp * tmp;
    return x * tmp * tmp;
  }
}

module.exports = Exponentiation;