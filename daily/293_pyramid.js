/**
 * Created by dipshrestha on 06/03/2020
 */

/*
Daily Coding Problem: Problem #293 [Hard]

Good morning! Here's your coding interview problem for today.

This problem was asked by Uber.

You have N stones in a row, and would like to create from them a pyramid. 
This pyramid should be constructed such that the height of each stone 
increases by one until reaching the tallest stone, after which the 
heights decrease by one. In addition, the start and end stones of the 
pyramid should each be one stone high.

You can change the height of any stone by paying a cost of 1 unit to 
lower its height by 1, as many times as necessary. Given this information, 
determine the lowest cost method to produce this pyramid.

For example, given the stones [1, 1, 3, 3, 2, 1], the optimal solution 
is to pay 2 to create [0, 1, 2, 3, 2, 1].

 */

/*
 Algo: 
 // find median
 // find sum of the pyramid with median at middle
 // cost = sum of input - sum of pyramid
*/
class Pyramid {
  _createPyramidSum(median) {
    if (median == 1) return 1;
    let ret = 0;
    for (var i = 1; i < median; i++) {
      ret += (i * 2);
    }
    ret += median;
    return ret;
  }

  // Time: O(N)
  // Space: O(1)
  iterativeBetter(WM) {
    const median = Math.ceil(WM.length / 2);
    const psum = this._createPyramidSum(median);
    const wsum = WM.reduce((a, b) => a + b);
    return wsum - psum;
  }


  // Time: O(NlogN)
  // Space: O(1)
  iterative(WM) {
    // sort
    // find median (ceil)
    // create pyramid with median at center
    // --------------------if median > length pay
    // getMax() and first put median at middle
    // then for each getMax() add on both side of the median
    WM.sort();
    const len = WM.length;
    const median = Math.ceil(WM.length / 2);

    let cost = 0;
    for (let i = 0, j = WM.length - 1; i < median; i++) {
      cost += _getCostForPosition(WM, i, j, median);
      j--;

      if (i > 0) {
        cost += _getCostForPosition(WM, i, j, median);
        j--;
      }
    }

    if (len % 2 == 0)
      cost += WM[0]; // add the first as well
    return cost;


    function _getCostForPosition(WM, i, j, median) {
      let myPrice = WM[j];
      let actualCost = (median - i);
      let myCost = myPrice - actualCost;
      return myCost;
    }
  }

}

module.exports = Pyramid;