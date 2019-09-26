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
// https://github.com/h4yfans/Daily-Coding-Problem/blob/master/038%20%5BHard%5D/Solution.md

/*
 Algo: Solve using backtracking
*/
class NQueens {

  constructor() {
    this.V = [];
  }

  _print(_sol) {
    for (var z = 0; z < _sol.length; z++) {
      console.log(" --- " + (z + 1) + " --- ");
      var sol = _sol[z];
      sol = sol.split(',');
      for (var i = 0; i < sol.length; i++) {
        var v = sol[i];
        var row = "";
        for (var j = 0; j < sol.length; j++) {
          if (v == j) {
            row += ' X ';
          } else {
            row += ' O ';
          }
        }
        console.log(row);
      }
    }

  }

  _isValid(board) {
    if (board.length == 1) return true;
    var diff = 0,
      last_col = board.slice(-1),
      last_row = board.length - 1;
    for (var i = 0; i < last_row; i++) {
      diff = Math.abs(board[i] - last_col);
      /* same column OR same diagonal */
      if (diff == 0 || diff == last_row - i) return false;
    }
    return true;

  }

  // Time : O(N^N)
  // Space: O(N)
  recursive(N) {
    if (N == 0 || N == 2 || N == 3) return 0;
    var val = this._recursive_helper(N, []);
    this._print(this.V);
    //console.log(this.V);
    return val;
  }

  // TODO: try another method to get a selection from the bishop(ghoda) movement


  /*
   * Index of board represents row and value represent column in that row
   */
  _recursive_helper(N, board = []) {
    if (N == board.length)
      return 1;
    var count = 0;
    // try to place in each column
    for (var i = 0; i < N; i++) {
      // pick
      board.push(i);
      if (this._isValid(board)) {
        count += this._recursive_helper(N, board);
        if (N == board.length) this.V.push(board.join(','));
      }

      // IMP: we CAN NOT prematurely do this to prevent uncecessary calls
      // because we need all the possible paths
      //if (count == N) return N; 
      board.pop();
    }
    return count;
  }
}

module.exports = NQueens;