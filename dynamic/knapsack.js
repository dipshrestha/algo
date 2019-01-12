/**
 * Created by dipshrestha on 01/12/2019.
 * This allows repetition
 */
 const util = require('util');

class KnapSack {
    constructor() {
        this._init();
    }

    _init() {
        this.V = [];
    }

    _fillZero(W) {
        for (var i = 1; i <= W; i++) {
            this.V[i] = 0;
        }
    }

    recursive(VM, WM, W) {
        this.V[0] = 0; // initialize
        this._fillZero(W);
        var result = this._recursive_helper(VM, WM, W, W);
        return result;
    }

    _recursive_helper(VM, WM, W) {
        var minW = Math.min(...WM);
        if (W < minW) {
            console.log('WM < minW:', W, minW);
            return 0;
        }

        var space = '';
        // this is inner loop of iterative
        for (var i = 0; i < WM.length; i++) {
            space = '';
            for (var z = 0; z < i; z++) space+= ' ';
            if (WM[i] <= W) {
                console.log(space, 'WM[i] <= W:', i, WM[i], W);
                var val = this._recursive_helper(VM, WM, W - WM[i]) + VM[i];
                if (this.V[W] < val) {
                    console.log(space, 'this.V[W] < val:', this.V[W] , val, W);
                    this.V[W] = val;
                }
            } else {
                console.log(space, 'WM[i] > W:', i, WM[i], W);
            }
        }
        console.log(space, 'exiting loop');

        return this.V[W];
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

module.exports = KnapSack;
