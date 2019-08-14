/**
 * Created by dipshrestha on 08/14/2019.
 */
const util = require('util');

/**
F(0) = 0
F(1) = 1 = F(0)
F(2) = 1 = F(1) + F(0)
F(3) = 2 = F(2) + F(1)

F(0) = 0
F(1) = F(0)
F(2) = F(1) + F(0)
    ↘.     ↘
F(3) = F(2) + F(1)
  ↑     ↑      ↑ 
  f  =  p1    p2
*/
class Fibo {

  _init() {

  }

  // time:  O(2^N)
  // space: O(N)
  recursive(W) {
    if (W <= 0) return 0;
    if (W == 1 || W == 2) return 1;
    return this.recursive(W - 1) + this.recursive(W - 2)
  }

  // time:  O(N)
  // space: O(1)
  iterative(W) {
    if (W <= 0) return 0;
    if (W == 1 || W == 2) return 1;
    var p2 = 0,
      p1 = 1,
      f = 1;
    for (var i = 3; i <= W; i++) {
      p2 = p1;
      p1 = f;
      f = p1 + p2;
    }
    return f;
  }

  // time:  O(N)
  // space: O(N)
  dp(W) {
    if (W <= 0) return 0;
    if (W == 1 || W == 2) return 1;
    let x = [];
    x[0] = 0;
    x[1] = x[2] = 1;

    for (let i = 3; i <= W; i++) {
      x[i] = x[i - 1] + x[i - 2];
    }
    return x[W];
  }

}

module.exports = Fibo;