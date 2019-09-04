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
  /** 
   * WM: matrix
   * N - number of house
   * K - number of colors 
   **/
  recursive(WM, N, K) {
    this._fillZero(WM, N, K);
    // initialize
    for (var i = 0; i < K; i++) {
      this.V[0][i] = WM[0][i];
    }
    var result = this._recursive_helper(WM, N, K, -1); // set skip index to -1 as you'll want all K to be processed initially
    return result;
  }

  // Time: O(K^N)
  // Space: O(K) // stack calls
  _recursive_helper(WM, N, K, skipIndex) {
    if (K == 0 || WM == null || N == 0) return 0;
    /*
    // THIS is just repetition, we don't need this if block
    if (N == 1) {
      // find the min from all but the skipIndex
      return Math.min(...WM[0].filter((x, i) => i != skipIndex));
    }*/

    //is this the inner loop of DP again like knap-sack? -> Yes, use j for counter
    for (var j = 0; j < K; j++) { // doesn't matter if you go from K-1 to 0 like in _recursive_helper1
      if (j == skipIndex) continue;

      var val = this._recursive_helper(WM, N - 1, K, j);
      this.V[N - 1][j] = val + WM[N - 1][j];
    }
    // find the min from all but the skipIndex
    return Math.min(...this.V[N - 1].filter((x, i) => i != skipIndex));
  }

  // Time: O(NK)
  // Space: O(NK)
  dp(WM, N, K) {
    this._fillZero(WM, N, K);
    // initialize
    for (var i = 0; i < K; i++) {
      this.V[0][i] = WM[0][i];
    }
    if (K == 0 || WM == null || N == 0) return 0;
    for (var i = 1; i < N; i++) {
      for (var j = 0; j < K; j++) {
        var val = Math.min(...this.V[i - 1].filter((x, i) => i != j));
        this.V[i][j] = val + WM[i][j]
      }
    }
    //console.log(this.V);
    return Math.min(...this.V[N - 1]);
  }

  // Time: O(K^N)
  // Space: O(K) // stack calls
  _recursive_helper1(WM, N, K, skipIndex) {
    if (K == 0 || WM == null || N == 0) return 0;
    /*
    // THIS is just repetition, we don't need this if block
    if (N == 1) {
      // find the min from all but the skipIndex
      return Math.min(...WM[0].filter((x, i) => i != skipIndex));
    }*/

    //is this the inner loop of DP again like knap-sack?
    for (var j = K - 1; j >= 0; j--) {
      if (j == skipIndex) continue;

      var val = this._recursive_helper(WM, N - 1, K, j);
      this.V[N - 1][j] = val + WM[N - 1][j];
    }
    // find the min from all but the skipIndex
    return Math.min(...this.V[N - 1].filter((x, i) => i != skipIndex));
  }
}

module.exports = MinimumCost;