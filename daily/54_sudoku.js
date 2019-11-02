/**
 * Created by dipshrestha on 10/30/2019
 */

/*
Daily Coding Problem: Problem #54 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Dropbox.
Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits. 
The objective is to fill the grid with the constraint that every row, column, 
and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.
Implement an efficient sudoku solver.

 */

/*
 Algo: Solve using backtracking
*/
class Sudoku {

  _isComplete(WM) {
    for (var i = 0; i < WM.length; i++) {
      for (var j = 0; j < WM[0].length; j++) {
        if (!WM[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  _findEmptySlot(WM) {
    for (var i = 0; i < WM.length; i++) {
      for (var j = 0; j < WM[0].length; j++) {
        if (!WM[i][j]) {
          return { i: i, j: j };
        }
      }
    }
  }

  _findDuplicate(WM, idx) {
    for (var i = 0; i < WM.length; i++) {
      if (i != idx && WM[idx] != 0 && WM[idx] == WM[i])
        return true;
    }
    return false;
  }

  _findDuplicateInRow(WM, rowId) {
    for (var i = 0; i < WM.length; i++) {
      if (this._findDuplicate(WM[rowId], i))
        return true;
    }
    return false;
  }

  _findDuplicateInColumn(WM, colId) {
    var arr = [];
    for (var i = 0; i < WM.length; i++) {
      arr.push(WM[i][colId]);
    }
    for (var j = 0; j < WM.length; j++) {
      if (this._findDuplicate(arr, j))
        return true;
    }
    return false;
  }

  _findDuplicateInBox(WM, boxId) {
    var cellsAround = [
      [1, 1],
      [1, 4],
      [1, 7],
      [4, 1],
      [4, 4],
      [4, 7],
      [7, 1],
      [7, 4],
      [7, 7]
    ];

    var allAxes = [
      [-1, -1],
      [-1, 0],
      [-1, 1],

      [0, -1],
      [0, 1],

      [1, -1],
      [1, 0],
      [1, 1]
    ]

    var ret = [];
    var box = cellsAround[boxId];
    for (var k = 0; k < allAxes.length; k++) {
      var co = allAxes[k];
      var i = co[0] + box[0];
      var j = co[1] + box[1];
      ret.push(WM[i][j]);
    }

    for (var j = 0; j < ret.length; j++) {
      if (this._findDuplicate(ret, j))
        return true;
    }
    return false;
  }

  _isValid(WM) {
    // each row has unique element
    // each column has unique element
    for (var i = 0; i < WM.length; i++) {
      if (this._findDuplicateInRow(WM, i))
        return false;
      if (this._findDuplicateInColumn(WM, i))
        return false;
      if (this._findDuplicateInBox(WM, i))
        return false;
    }
    return true;
  }

  _isValid_better(WM, empty) {
    if (this._findDuplicate(WM[empty.i], empty.j))
      return false;
    if (this._findDuplicateInColumn(WM, empty.j))
      return false;
    // each row has unique element
    // each column has unique element
    for (var i = 0; i < WM.length; i++) {

      if (this._findDuplicateInBox(WM, i))
        return false;
    }
    return true;
  }
  _findPossibleNums(WM, empty) {
    var currentNums = [];
    // find existing in row
    var row = WM[empty.i];
    for (var i = 0; i < row.length; i++) {
      if (row[i]) currentNums[row[i]] = true;;
    }
    // find existing in column
    var val = null;
    for (var i = 0; i < WM.length; i++) {
      val = WM[i][empty.j];
      if (val) currentNums[val] = true;
    }
    // find existing in box
    // determine which box it falls

    var ret = [];
    for (var i = 1; i <= WM.length; i++) {
      if (currentNums[i] != true)
        ret.push(i);
    }
    return ret;
    // find existing in box
  }

  // Time: O(2^N)
  // Space: O(N)
  recursive(WM) {
    if (WM == null || WM.length != 9 || WM.length < 1 || WM[0].length != 9)
      return false;
    var val = this._recursive_helper(WM);
    console.log(val);
    return val;
  }

  _recursive_helper_better(WM) {

    //return condition
    if (this._isComplete(WM)) {
      return WM;
    }

    var empty = this._findEmptySlot(WM);
    // instead of trying to place each number
    // find a set of numbers from which it can be filled
    var possibleNums = this._findPossibleNums(WM, empty);
    //var i = null;
    //for (var k = 0; k < possibleNums.length; k++) {
    //        i = possibleNums[k];
    for (var i = 1; i < 10; i++) {

      // pick
      WM[empty.i][empty.j] = i;
      if (this._isValid_better(WM, empty)) {
        var val = this._recursive_helper_better(WM);
        // we don't need to count number of ways
        // this can be solved, so return
        if (this._isComplete(WM))
          return WM;
      } else {
        WM[empty.i][empty.j] = 0;
      }
    }
    return WM;
  }

  _recursive_helper(WM) {

    //return condition
    if (this._isComplete(WM)) {
      return WM;
    }

    var empty = this._findEmptySlot(WM);
    // try to place each number
    // this is collection of choice you have
    for (var i = 1; i < 10; i++) {
      // pick
      WM[empty.i][empty.j] = i;
      if (this._isValid(WM)) {
        var val = this._recursive_helper(WM);
        // we don't need to count number of ways
        // this can be solved, so return
        if (this._isComplete(WM))
          return WM;
      } else {
        WM[empty.i][empty.j] = 0;
      }
    }
    return WM;
  }

}

module.exports = Sudoku;