/**
 * Created by dipshrestha on 10/14/2019
 */

/*
Daily Coding Problem: Problem #70 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
A number is considered perfect if its digits sum up to exactly 10.
Given a positive integer n, return the n-th perfect number.
For example, given 1, you should return 19. Given 2, you should return 28.

 */

/*
 Algo: Find the sequence and make into account about 100, 1000
 // 19, 28, 37, 46, 55, 65, 73, 82, 91, 109, 118
*/
class PerfectNumber {

  // Time: O(N)
  // Space: O(1)
  iterative(N) {
    var start = 19;
    var formula = start + 9 * N;
    formula += 9 * (parseInt(Math.log10(N)) - 1);

    return formula;

  }

}

module.exports = PerfectNumber;