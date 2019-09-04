/**
 * Created by dipshrestha on 09/02/2019 
 */

/*
Daily Coding Problem: Problem #19 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
A builder is looking to build a row of N houses that can be of K different colors. 
He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, 
return the minimum cost which achieves this goal.

 */

class MinimumCost {

  constructor() {
    this._init();
  }

  _init() {
    this.V = [];
  }

  _fillZero(WM, N, K) {
    for (var i = 0; i < N; i++) {
      this.V[i] = [];
      for (var j = 0; j < K; j++)
        this.V[i][j] = 0;
    }
  }

  recursive(WM, N, K = 3) {
    this._fillZero(WM, N, K);
    // initialize
    this.V[0] = [];
    for (var i = 0; i < K; i++) {
      this.V[0][i] = WM[0][i];
    }
    var result = this._recursive_helper(WM, N, K, -1);
    return result;
  }

  _recursive_helper(WM, N, K, skipIndex) {
    debugger
    if (K == 0 || WM == null || N == 0) return 0;
    if (N == 1) {
      // find the min from all but the skipIndex
      return Math.min(...WM[0].filter((x, i) => i != skipIndex));
    }

    for (var i = K - 1; i >= 0; i--) {
      if (i == skipIndex) continue;

      var val = this._recursive_helper(WM, N - 1, K, i);
      this.V[N - 1][i] = val + WM[N - 1][i];
    }
    // find the min from all but the skipIndex
    return Math.min(...this.V[N - 1].filter((x, i) => i != skipIndex));
  }

  /*
  // before individual inner loop
    _recursive_helper(WM, N, lastIndex) {
      debugger
      if (N == 0 || WM == null || WM.length == 0) return 0;
      if (N == 1) return Math.min(...WM[0]);

      var space = '';
      for (var i = 1; i <= WM.length; i++) {
        space = '';
        for (var z = 0; z < i; z++) space += ' ';
        if (i == lastIndex) continue;

        var val = this._recursive_helper(WM, N - 1, i);
        if (this.V[i][N] > val) {
          console.log(space, 'this.V[i][N] > val:', this.V[i][N], "val = " + val, "i= " + i, "N= " + N);
          this.V[i][N] = val;
        }
      }
      //this.V[i][N] += this.WM[i][]
      //console.log(this.V);
      return Math.min(...this.V[WM.length]);
    }
  */
}

module.exports = MinimumCost;