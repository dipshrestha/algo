/**
 * Created by dipshrestha on 02/03/2020
 */

/*
Daily Coding Problem: Problem #64 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.
Given N, write a function to return the number of knight's tours on an N by N chessboard.

 */

/*
 Algo: Solve using backtracking
    // if finished return 1
    // set the length of choices you have then pick any one from choice
    // isValid ? then recurse
    //                if recurse retuns true increase counter
    // backtrack and remove
    // return counter
*/
class KnightTour {

  // Time: O(8^(N^2)) according to https://www.dailycodingproblem.com/blog/knights-tour/
  // Space: O(N^2)
  recursive(N) {
    this.V = new Array(N);
    this._resetBoard(N);

    var ret = this._recursive_helper(N);
    return ret;
  }

  _resetBoard(N) {
    for (var i = 0; i < N; i++) {
      this.V[i] = new Array(N);
    }
    this.steps = 0;
  }

  _getNext(N, pos, idx) {
    // all the moves, 0 - 8
    var allMoves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2]
    ]

    for (; idx.i < allMoves.length;) {
      var i = pos.i + allMoves[idx.i][0];
      var j = pos.j + allMoves[idx.i][1];
      idx.i++;
      if (i >= N || j >= N || i < 0 || j < 0) continue;
      var generated = { i: i, j: j }
      var t = 0 + pos.i + pos.j;
      //console.log(idx.i, ' - ', pos, ' - ', generated, ' - ', idx);
      return generated;
    }
    return false;
  }

  _isFinished() {
    for (var i = 0; i < this.V.length; i++) {
      for (var j = 0; j < this.V.length; j++) {
        if (!this.V[i][j]) return false;
      }
    }
    return true;
  }

  _isValid(pos) {
    return !this.V[pos.i][pos.j];
  }

  _updateBoard(pos, isAdd) {
    if (isAdd) {
      this.steps++;
      this.V[pos.i][pos.j] = this.steps;
    } else {
      this.steps--;
      this.V[pos.i][pos.j] = isAdd;
    }
  }

  _logic(N, pos) {

    if (this._isFinished()) {
      return 1;
    }

    var i = { i: 0 },
      count = 0,
      next = false;
    // pick any of the 8 positions and update board if valid
    while (next = this._getNext(N, pos, i)) {
      if (this._isValid(next)) {
        this._updateBoard(next, true);
        var res = this._logic(N, next);
        if (res) {
          count = count + res;
          if (this._isFinished()) {
            console.log(this.V);
          }
        }
        // IMP: we CAN NOT put the else part like this
        // because we need all the possible paths
        //else  {
        //  this._updateBoard(next, false);
        //}

        // backtrack and update board
        this._updateBoard(next, false);
      } // else {
      // undo
      //this._updateBoard(next, false);
    }
    return count;
  }

  _recursive_helper(N, pos) {
    if (this._isFinished()) {
      return 1;
    }
    var count = 0;
    if (!pos) {
      /* Initially the knight can start from any position of NxN board*/
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          // pick any position and update board
          pos = { i: i, j: j }
          this._updateBoard(pos, true);
          var res = this._logic(N, pos);
          if (res) {
            count = count + res;
            if (this._isFinished()) {
              console.log(this.V);
            }
          }
          // backtrack and update board
          this._updateBoard(pos, false);
        }
      }
    }

    return count;
  }

}

module.exports = KnightTour;