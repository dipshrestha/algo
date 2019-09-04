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
  _fillInfinity(W) {
    for (var i = 1; i <= W; i++) {
      this.V[i] = Infinity;
    }
  }

  recursive(VM, N) {
    this.V[0] = Infinity; // initialize
    this._fillZero(W);
    var result = this._recursive_helper(WM, N);
    return result;
  }

  recursive_helper(WM, N) {
    if (N == 0 || WM == null || WM.length == 0) return Infinity;
    if (WM.length == 1) return WM[0];
    if (WM.length != WM[0].length) return Infinity;

    for (var i = 0; i < WM.length; i++) {
      var val = this.recursive_helper(WM, N - 1) + WM[0][i];
      if (this.V[W] > val) {
        console.log(space, 'this.V[W] > val:', this.V[W], val, N);
        this.V[W] = val;
      }
    }
  }

}

module.exports = MinimumCost;