/**
 * Created by dipshrestha on 11/02/2019
 */

/*
Daily Coding Problem: Problem #56 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Given an undirected graph represented as an adjacency matrix and an integer k, 
write a function to determine whether each vertex in the graph can be colored 
such that no two adjacent vertices share the same color using at most k colors.

 */

/*
 Algo: Solve using backtracking
*/
class PaintNodes {

  // Time: O(2^N)
  // Space: O(N)

  recursive(WM, K) {
    if (WM == null || WM.length < 1) return false;
    var val = this._recursive_helper(WM, K);
    console.log(WM);
    console.log(val);
    return val;
  }

  _pickNonColoredNode(WM) {
    for (var i = 0; i < WM.length; i++) {
      for (var j = i; j < WM.length; j++) {
        if (WM[i][j] === 1) return { i: i, j: j };
      }
    }
  }

  _isAllColored(WM) {
    for (var i = 0; i < WM.length; i++) {
      for (var j = i; j < WM.length; j++) {
        if (WM[i][j] === 1) return false;
      }
    }
    return true;
  }

  _isValid(WM) {
    for (var i = 0; i < WM.length; i++) {
      for (var j = i; j < WM.length; j++) {
        var val = WM[i][j];
        if (val === 0 || val === 1) continue;
        // find if a color is already present
        for (var k = j + 1; k < WM.length; k++) {
          if (val === WM[i][k]) return false;
        }
      }
    }
    return true;
  }

  _recursive_helper(WM, K) {
    debugger;
    //return condition
    if (this._isAllColored(WM)) return true;
    var node = this._pickNonColoredNode(WM);

    for (var i = 0; i < K; i++) {

      // pick
      WM[node.i][node.j] = i + 10; // 0 & 1 are already used, so start with 10
      if (this._isValid(WM)) {
        var res = this._recursive_helper(WM, K);
        if (res) return true;

      } else {
        // unpick
        WM[node.i][node.j] = 1;
      }
    }

    return false;
  }
}

module.exports = PaintNodes;