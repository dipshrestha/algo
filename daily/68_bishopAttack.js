/**
 * Created by dipshrestha on 02/13/2020
 */

/*
Daily Coding Problem: Problem #68 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
On our special chessboard, two bishops attack each other if they share the same diagonal.
This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.
You are given N bishops, represented as (row, column) tuples on a M by M chessboard.
Write a function to count the number of pairs of bishops that attack each other.
The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

For example, given M = 5 and the list of bishops:

(0, 0)
(1, 2)
(2, 2)
(4, 0)
The board would look like this:

[b 0 0 0 0]
[0 0 b 0 0]
[0 0 b 0 0]
[0 0 0 0 0]
[b 0 0 0 0]
You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4.

 */

/*
 Algo: For each position compute the + and - of their coordinates, this will give their relative posiiton
 Check if that number is already in the map
 Then add those number to map.
*/
class BishopAttack {

  _checkAttacked(N, WM) {
    var pos = null,
      count = 0;
    for (var i = 0; i < WM.length; i++) {
      pos = WM[i];
      count += this._isAttacked(N, WM, pos, i)
    }
    return count;
  }

  _isAttacked(N, WM, pos, start) {
    var x = pos[0];
    var y = pos[1];
    var x1, y1;
    for (var i = start; i < WM.length; i++) {
      if (x == WM[i] && y == WM[j]) continue;
      x1 = WM[i][0] - x;
      y1 = WM[i][1] - y
      if (Math.abs(x1) == Math.abs(y1)) return 1;
    }
    return 0;
  }

  // Time: O(N^2)
  // Space: O(1)
  //  For each position check if any other position is attacked.
  iterative(N, WM) {
    var count = this._checkAttacked(N, WM);
    return count / 2;
  }

  // Time: O(N)
  // Space: O(N)
  iterative_better(N, WM) {
    var map = new Map(),
      pos = null,
      count = 0,
      sum = 0,
      diff = 0;
    debugger
    for (let i = 0; i < WM.length; i++) {
      pos = WM[i];
      sum = pos[0] + pos[1];
      if (map.get(sum))
        count++;
      else
        map.set(sum, true);

      //if (pos[0] < pos[1]) {
      diff = pos[1] - pos[0];
      //} else
      //  diff = pos[0] - pos[1];

      if (sum == diff) continue;

      var myDiff = map.get(diff);
      if (myDiff && ((myDiff < 1 && pos[1] > pos[0]) || (myDiff > 1 && pos[0] > pos[1])))
        count++;
      else
        map.set(diff, true);
    }

    console.log('count: ' + count);
    return count;
  }
}

module.exports = BishopAttack;