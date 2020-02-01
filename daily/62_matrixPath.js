/**
 * Created by dipshrestha on 01/07/2020
 */

/*
Daily Coding Problem: Problem #62 [Medium]


Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
There is an N by M matrix of zeroes. Given N and M, write a function to count 
the number of ways of starting at the top-left corner and getting to the bottom-right corner. 
You can only move right or down.
For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:
Right, then down
Down, then right
Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

 */

/*
 Algo: Solve using DFS without visited nodes list.
 NOTE: this is similar to Problem-23 Board Game.
*/
class MatrixPath {
//https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/
  dp(N, M) {
    if (N == M && N == 1) return 1;
    this.V = new Array(N);
    for (var i = 0; i < N; i++) {
      this.V[i] = new Array(M);
    }
    // ways to reach element if they are in first column
    for (var i = 0; i < N; i++) {
      this.V[i][0] = 1;
    }
    // ways to reach element if they are in first row
    for (var i = 0; i < M; i++) {
      this.V[0][i] = 1;
    }

    for (var i = 1; i < N; i++) {
      for (var j = 1; j < M; j++) {
        this.V[i][j] = this.V[i - 1][j] + this.V[i][j - 1];
      }
    }
    return this.V[i - 1][j - 1];

  }
  // Time: O(N * M)
  // Space: O(N * M)

  recursive(N, M) {
    //this._visited = {};
    //this.totalPaths = 0;
    if (N == M && N == 1) return 1;
    var WM = this._createAdjacencyMatrix(N, M);
    var res = this._recursive_helper(WM, '00', N - 1 + '' + M - 1);
    return res;
    //return this.totalPaths;
  }

  _getAdjacentNodes(i, j, N, M) {
    var ret = [];
    if (i != N - 1) {
      ret.push(i + 1 + '' + j);
    }
    if (j != M - 1) {
      ret.push(i + '' + (j + 1));
    }
    return ret;
  }

  _createAdjacencyMatrix(N, M) {
    var map = {},
      elm = null,
      arr = null;
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < M; j++) {
        map[i + '' + j] = (this._getAdjacentNodes(i, j, N, M));
      }
    }
    console.log(map);
    return map;
  }

  _recursive_helper(map, start, end) {
    //this._visited[start] = true;
    var foundPath = 0;
    //pick one from set
    var adjacentNodes = map[start];
    for (var i = 0; i < adjacentNodes.length; i++) {
      var x = adjacentNodes[i];
      if (x == end) {
        //this.totalPaths++;
        foundPath++;
      }
      //if (!this._visited[x]) {
      //  this._visited[x] = true;
      foundPath = foundPath + this._recursive_helper(map, x, end);
      //}
    }
    return foundPath;
  }

}

module.exports = MatrixPath;