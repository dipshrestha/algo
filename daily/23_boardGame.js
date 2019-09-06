/**
 * Created by dipshrestha on 09/05/2019 
 */

/*
Daily Coding Problem: Problem #23 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
You are given an M by N matrix consisting of booleans that represents a board. 
Each True boolean represents a wall. Each False boolean represents a tile you can walk on.
Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps
required to reach the end coordinate from the start. If there is no possible path, then return null.
You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.
For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), 
the minimum number of steps required to reach the end is 7, since we would need to go through 
(1, 2) because there is a wall everywhere else on the second row.

 */

class BoardGame {

  constructor() {
    this._init();
  }

  _init() {
    this.V = []; // visited
  }

  _fillZero(arr) {
    for (var i = 0; i < WM.length; i++) {
      arr[i] = [];
      for (var j = 0; j < WM[0].length; j++)
        arr[i][j] = 0;
    }
  }

  _getAdjacentNodes(WM, node) {
    var ret = [];
    for (var i = Math.max(node[0] - 1, 0); i <= Math.min(node[0] + 1, WM.length - 1); i++) {
      for (var j = Math.max(node[1] - 1, 0); j <= Math.min(node[1] + 1, WM[0].length - 1); j++) {
        // not wall, not same element, not elements in diagonal
        if (!WM[i][j] && !this._isEqual(node, [i, j]) && (Math.abs(node[0] - i) + Math.abs(node[1] - j) != 2))
          ret.push([i, j]);
      }
    }
    return ret;
  }

  _isEqual(node1, node2) {
    return node1[0] == node2[0] && node1[1] == node2[1];
  }

  // Time: O(NM)
  // Space: O(NM) // for visited array
  recursive(WM, start, end) {
    // initialize visited matrix
    this._fillZero(this.V);

    var result = this._recursive_helper(WM, start, end);
    return result;
  }

  // DFS
  _recursive_helper(WM, start, end) {
    if (this._isEqual(start, end)) return 0;
    if (start == null || end == null) return 1;

    // add to visited node if not
    if (this.V[start[0]][start[1]] == 1) return Infinity;
    this.V[start[0]][start[1]] = 1;

    // get weight of all child the return the min + 1
    var nodes = this._getAdjacentNodes(WM, start);
    var weightArr = [];
    for (var i = 0; i < nodes.length; i++) {
      var val = this._recursive_helper(WM, nodes[i], end);
      weightArr.push(val);
    }
    return Math.min(...weightArr) + 1;
  }

}

module.exports = BoardGame;