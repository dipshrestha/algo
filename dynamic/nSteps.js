/**
 * Created by dipshrestha on 08/14/2019.
 * This allows repetition
 */

/**
N = 4
S = {1, 2}

F(0) = 0
F(1) = 1
**/

/*
There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.
*/
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
  // time:  O(|WM|^N)
  // space: O(|WM|)
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

  // time:  O(|WM| * N)
  // space: O(|N|)
  dp(WM, W) {
    this._fillZero(W);
    this.V[0] = 1;
    for (let i = 1; i <= W; i++) {
      for (var j = 0; j < WM.length; j++) {
        if (i - WM[j] >= 0)
          this.V[i] += this.V[i - WM[j]];
      }
    }
    return this.V[W];
  }

  iterative(WM, W) {
    if (W < 0) return 0;
    if (W == 0) return 1;
    let p = [0, 1, 1, 1];

    /*
    NOTE: this will work for 2 elements.
    You basically have to generralize it to higher number of elements
    let p = [0, 1, 1];
    for (let i = 1; i <= W; i++) {
      p[1] = p[0];
      p[0] = p[2];
      p[2] = p[0] + p[1];
    }
    return p[2];
    */

    for (let i = 1; i <= W; i++) {
      //for (var j = 0; j < WM.length; j++) {
      //    p[j] = p[j -1]
      //    p[j] += p[] 
      //}
      //p[i]
      /*
      p[1] = p[0];
      p[0] = p[2];
      p[2] = p[0] + p[1];
      */
      p[2] = p[1];
      p[1] = p[0];
      p[0] = p[3];
      p[3] = p[0] + p[1] + p[2]
    }
    return p[3];

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