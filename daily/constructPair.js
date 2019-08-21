/**
 * Created by dipshrestha on 08/21/2019.
 */

/*
Daily Coding Problem: Problem #5 [Medium]

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
Given this implementation of cons:
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

class ConstructPair {

  // Time: O(N^2)
  // Space: O(1)
  iterative(WM, W) {
    for (let i = 0; i < WM.length; i++) {
      for (let j = i + 1; j < WM.length; j++) {
        if (WM[i] + WM[j] == W) return true;
      }
    }
    return false;
  }

  // https://leetcode.com/problems/two-sum/solution/
  // Use a hashmap
  // Time: O(N)
  // Space: O(N)
  iterativeBest(WM, W) {
    let m = new Set();
    //WM.foreach(e => m.add(e)); --> no need to do this initially
    for (let i = 0; i < WM.length; i++) {
      if (m.has(W - WM[i])) return true;
      m.add(WM[i]);
    }
    return false;
  }
}

module.exports = ConstructPair;