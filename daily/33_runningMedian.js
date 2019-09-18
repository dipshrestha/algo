/**
 * Created by dipshrestha on 09/17/2019 
 */

/*
Daily Coding Problem: Problem #33 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Compute the running median of a sequence of numbers. That is, given a stream of numbers, 
print out the median of the list so far on each new element.
Recall that the median of an even-numbered list is the average of the two middle numbers.
For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2

 */

class RunningMedian {

  // Time: O(n*log(n))
  // Space: O(n)
  iterative(WM) {
    var ret = [];
    var tmp = [];
    for (var i = 0; i < WM.length; i++) {
      tmp.push(WM[i]);
      tmp.sort(function(a, b) { return a - b });
      console.log(tmp);
      // find middle
      if (i % 2 == 0) {
        var x = tmp[i / 2];
        ret.push(x);
      } else {
        var x = tmp[(i + 1) / 2] + tmp[(i - 1) / 2];
        ret.push(x / 2);
      }
    }
    return ret;
  }

}

module.exports = RunningMedian;