/**
 * Created by dipshrestha on 08/14/2019.
 * This allows repetition
 */
const util = require('util');


/**
N = 4
S = {1, 2}

F(0) = 0
F(1) = 1
**/
class NSteps {
  constructor() {
    this._init();
  }

  _init() {
    this.V = [];
    this.V[0] = 0; // initialize
  }

  _fillZero(W) {
    for (var i = 1; i <= W; i++) {
      this.V[i] = 0;
    }
  }

  recursive(WM, W) {
    this._fillZero(W);
    var result = this._recursive_helper(WM, W);
    return result;
  }

  _recursive_helper(WM, W) {
    if (W < 0) return 0;
    if (W == 0) return 1;
    let ways = 0;
    // ? is this inner loop of iterative
    for (let i = 0; i < WM.length; i++) {
      ways += this._recursive_helper(WM, W - WM[i])
    }
    this.V[W] = ways;
    return this.V[W];
  }

  dp(WM, W) {
    this._fillZero(W);
    this.V[0] = 0;
    this.V[1] = 1;
    for (var i = 0; i < WM.length; i++) {
      for (let j = 2; j < W; j++) {
        this.V[j] += this.V[j - WM[i]];
      }
    }
    return this.V[W];
  }

  iterative(VM, WM, W) {
    /*
    this._fillZero(W);
    let ways = 0;
    for (let i = 0; i < WM.length; i++) {
      let tmp_ways = 0,
        sum = 0;
      for (let j = 0; j < ) {
        if (sum == N) {
          tmp_ways++;
        }
      }
    }

    // TODO: find if the interchange of loop works
    var minW = Math.min(...WM);
    for (var w = minW; w <= W; w++) {
      // Max value
      for (var i = 0; i < WM.length; i++) {
        if (WM[i] < W) {
          var val = this.V[w - WM[i]] + VM[i];
          if (this.V[w] < val) {
            this.V[w] = val;
          }
        }
      }
    }
    return this.V[W];
    */
  }
}

module.exports = NSteps;