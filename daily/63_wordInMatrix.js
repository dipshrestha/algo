/**
 * Created by dipshrestha on 10/08/2019
 */

/*
Daily Coding Problem: Problem #63 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Given a 2D matrix of characters and a target word, write a function that returns 
whether the word can be found in the matrix by going left-to-right, or up-to-down.
For example, given the following matrix:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
and the target word 'FOAM', you should return true, since it's the leftmost column. 
Similarly, given the target word 'MASS', you should return true, since it's the last row.

 */

/*
 Algo: For each cell position do 2 checks, one for left-to-right and other for up-to-down

 TODO: try difficult problem
 https://leetcode.com/problems/word-search/discuss/407751/simple-dfs-in-C%2B%2B
*/
class WordInMatrix {

  _findLR(WM, W, _i, _j) {
    for (var i = _i, j = _j; j - _j < W.length && j < WM[0].length; j++) {
      if (WM[i][j] != W.charAt(j - _j)) return false;
    }
    return true;
  }
  _findUD(WM, W, _i, _j) {
    for (var i = _i, j = _j; i - _i < W.length && i < WM.length; i++) {
      if (WM[i][j] != W.charAt(i - _i)) return false;
    }
    return true;
  }
  // Time: O(N * K) K is max of R,C
  // Space: O(1)
  iterative(WM, W) {
    var R = WM.length,
      C = WM[0].length,
      L = W.length;
    debugger;
    if ((R < L && C < L) || R < 1 || C < 1) return false;
    for (var i = 0; i < R; i++) {
      for (var j = 0; j < C; j++) {
        if (R - i >= L && this._findUD(WM, W, i, j))
          return true;
        if (C - j >= L && this._findLR(WM, W, i, j))
          return true;
      }
    }
    return false;
  }

}

module.exports = WordInMatrix;