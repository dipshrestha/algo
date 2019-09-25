/**
 * Created by dipshrestha on 09/25/2019 
 */

/*
Daily Coding Problem: Problem #38 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
You have an N by N board. Write a function that, given N,
 returns the number of possible arrangements of the board where 
 N queens can be placed on the board without threatening each other,
i.e. no two queens share the same row, column, or diagonal.

 */

// https://developers.google.com/optimization/cp/queens
// https://rosettacode.org/wiki/N-queens_problem
// https://blogs.cs.st-andrews.ac.uk/csblog/2017/08/31/n-queens-completion-is-np-complete/
// https://www.youtube.com/watch?v=wGbuCyNpxIg
//https://github.com/h4yfans/Daily-Coding-Problem/blob/master/038%20%5BHard%5D/Solution.md
class NQueens {

  recursive(N) {
    if (N == 0 || N == 2 || N == 3) return 0;
    var val = this._recursive_helper(N, []);
    return val;
  }

  _recursive_helper(N, board = []) {
    if (N == board.length)
      return 1;
    for (var i = 0; i < N; i++) {
      // pick
    }
  }
}

module.exports = NQueens;