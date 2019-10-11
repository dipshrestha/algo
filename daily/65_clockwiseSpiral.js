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
 Algo: Solve using backtracking
*/
class ClockwiseSpiral {

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    var lowRow = 0,
      highRow = WM[0].length,
      lowCol = 0,
      highCol = WM.length,
      curR = 0,
      curC = 0,
      ret = [];

    function moveR() {
      while (curR < highRow - 1) {
        ret.push(WM[curC][curR++]);
      }
      curR--;
      highRow--;
    }

    function moveD() {
      while (curC < highCol - 1) {
        ret.push(WM[curC++][curR]);
      }
      curC--;
      highCol--;
    }

    function moveL() {
      while (curR > lowRow) {
        ret.push(WM[curC][--curR]);
      }
      curR++;
      lowRow++;
    }

    function moveU() {
      //curC--;
      curR--;
      while (curC > lowCol) {
        ret.push(WM[--curC][curR]);
      }
      curC++;
      lowCol++;
    }

    debugger;
    while (lowRow <= curR && curR < highRow && lowCol <= curC && curC < highCol) {
      moveR();
      moveD();
      moveL();
      moveU();
    }
    console.log(ret);
    return ret;
  }

}

module.exports = ClockwiseSpiral;