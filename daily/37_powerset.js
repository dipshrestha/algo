/**
 * Created by dipshrestha on 09/20/2019
 */

/*
Daily Coding Problem: Problem #37 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.
For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
You may also use a list or array to represent a set.

 */

class Powerset {

  _merge(char, arr) {
    var ret = arr.map(function(i) {
      return i.concat(char);
    });
    ret = arr.concat(ret);
    return ret;
  }

  // Time: (2^N)
  // Space: (2^N)
  recursive(WM) {
    if (WM == null || WM.length == 0)
      return [
        []
      ];
    // get left and concat to right
    var ret = this.recursive(WM.slice(0, -1))
    ret = this._merge(WM.slice(-1), ret);
    return ret;
  }
}

module.exports = Powerset;