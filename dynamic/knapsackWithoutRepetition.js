/**
 * Created by dipshrestha on 09/03/2019.
 * This doesn't allows repetition
 */

class KnapsackWithoutRepetition {
  constructor() {
    this._init();
  }

  _init() {
    this.V = [];
  }

  _fillZero(N, W) {
    for (var j = 0; j <= N; j++) {
      this.V[j] = [];
      for (var i = 0; i <= W; i++)
        this.V[j][i] = 0;
    }
  }

  recursive(VM, WM, W) {
    this._fillZero(WM.length, W);
    //this.V[0][0] = 0; // initialize
    var result = this._recursive_helper(VM, WM, W);
    return result;
  }


  _recursive_helper(VM, WM, W) {
    var minW = Math.min(...WM);
    if (W < minW) {
      console.log('WM < minW:', W, minW);
      return 0;
    }

    // K[i][w] = max(val[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]); 
    var space = '';
    // this is inner loop of iterative
    for (var i = 0; i < WM.length; i++) {
      space = '';
      for (var z = 0; z < i; z++) space += ' ';
      if (WM[i] <= W) {
        console.log(space, 'WM[i] <= W:', i, WM[i], W);
        var val = this._recursive_helper(VM, WM, W - WM[i]) + VM[i];
        if (this.V[i][W] < val) {
          console.log(space, 'this.V[i][W] < val:', this.V[i][W], val, W);
          this.V[i][W] = val;
        }
      } else {
        console.log(space, 'WM[i] > W:', i, WM[i], W);
      }
    }
    console.log(space, 'exiting loop');

    return this.V[WM.length][W];
  }

  iterative(VM, WM, W) {
    this.V[0] = 0; // initialize
    this._fillZero(W);

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
  }
}

module.exports = KnapsackWithoutRepetition;