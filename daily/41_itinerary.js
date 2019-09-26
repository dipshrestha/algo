/**
 * Created by dipshrestha on 09/26/2019
 */

/*
Daily Coding Problem: Problem #41 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, 
and a starting airport, compute the person's itinerary. If no such itinerary exists, return null.
If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.
For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] 
and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.
Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', 
you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary.
However, the first one is lexicographically smaller.

 */

/*
 Algo: Solve using backtracking
*/
class Itinerary {

  constructor() {
    this.V = [];
  }

  _isValid(visited) {
    var pair = visited.slice(-1);
    for (var i = 0; i < visited.length - 1; i++)
      if (visited[i][0] == pair[0][0] && visited[i][1] == pair[0][1]) return false;
    return true;
  }

  _createPath(arr) {
    var ret = [];
    ret.push(arr[0][0])
    for (var i = 0; i < arr.length - 1; i++) {
      var a = arr[i];
      ret.push(a[1]);
    }
    ret.push(arr[arr.length - 1][1]);
    return ret;
  }

  // maintain only the smallest
  _addPath(ret) {
    if (this.V.length != 0) {
      for (var i = 0; i < this.V[0].length; i++) {
        var char = this.V[0][i];
        if (ret[i] - char > 0) {
          return;
        }
      }
    }
    // remove first
    this.V.pop();
    this.V.push(ret);
  }

  _getSmallestPath(arr) {
    console.log(arr);
    return arr[0] || [];
  }

  // Time: O(2^N)
  // Space: O(N)
  recursive(WM, start) {
    if (WM == null || WM.length == 0) return null;
    this._recursive_helper(WM, start, []);
    return this._getSmallestPath(this.V);
  }

  _recursive_helper(WM, start, visited = []) {
    if (WM.length == visited.length) return true;
    for (var i = 0; i < WM.length; i++) {
      var pair = WM[i];
      if (pair[0] != start) continue;
      visited.push(pair);
      if (this._isValid(visited)) {
        var val = this._recursive_helper(WM, pair[1], visited)
        if (val) {
          var ret = this._createPath(visited);
          this._addPath(ret);
        }
      }
      visited.pop();
    }
  }

}

module.exports = Itinerary;