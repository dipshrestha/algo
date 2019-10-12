/**
 * Created by dipshrestha on 10/11/2019
 */

/*
Daily Coding Problem: Problem #65 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
For example, given the following matrix:

[[1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]]
You should print out the following:

1
2
3
4
5
10
15
20
19
18
17
16
11
6
7
8
9
14
13
12


 */

/*
 Algo: Move clocksiwse
*/
class ClockwiseSpiral {

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    var lowRow = 0,
      highRow = WM.length,
      lowCol = 0,
      highCol = WM[0].length,
      curR = 0,
      curC = 0,
      ret = [];

    function moveR() {
      while (curC < highCol) {
        ret.push(WM[curR][curC++]);
      }
      curC--;
      highCol--;
    }

    function moveD() {
      curR++;
      while (curR < highRow) {
        ret.push(WM[curR++][curC]);
      }
      curR--;
      highRow--;
    }

    function moveL() {
      curC--;
      while (curC >= lowCol) {
        ret.push(WM[curR][curC--]);
      }
      curC++;
      lowCol++;
    }

    function moveU() {
      curR--;
      while (curR > lowRow) {
        ret.push(WM[curR--][curC]);
      }
      curR++;
      lowRow++;
    }

    while (lowRow <= curR && curR < highRow && lowCol <= curC && curC < highCol) {
      moveR();
      moveD();
      moveL();
      moveU();
      curC++;
    }
    console.log(ret);
    return ret;
  }

}

module.exports = ClockwiseSpiral;