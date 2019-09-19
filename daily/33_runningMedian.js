/**
 * Created by dipshrestha on 09/17/2019 
 */

var Heap = require('heap');
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

  _add(num, smallerHeap, largerHeap) {
    if (smallerHeap.empty() || num < smallerHeap.peek()) {
      smallerHeap.push(num);
    } else {
      largerHeap.push(num);
    }
  }

  _rebalance(smallerHeap, largerHeap) {
    if (smallerHeap.size() - largerHeap.size() >= 2) {
      largerHeap.push(smallerHeap.pop());
    } else if (largerHeap.size() - smallerHeap.size() >= 2) {
      smallerHeap.push(largerHeap.pop());
    }
  }

  _findMedian(smallerHeap, largerHeap) {
    if (smallerHeap.size() == largerHeap.size()) {
      return (smallerHeap.peek() + largerHeap.peek()) / 2.0
    } else if (smallerHeap.size() > largerHeap.size()) {
      return smallerHeap.peek();
    } else {
      return largerHeap.peek();
    }
  }
  // very good video
  // https://www.youtube.com/watch?v=VmogG01IjYc
  // Time: O(n * log(n))
  // Space: O (n)
  iterativeBest(WM) {
    var smallerHeap = new Heap((a, b) => b - a); // max heap
    var largerHeap = new Heap((a, b) => a - b); // min heap
    var num, ret = [];
    for (var i = 0; i < WM.length; i++) {
      num = WM[i];
      this._add(num, smallerHeap, largerHeap);
      this._rebalance(smallerHeap, largerHeap);
      num = this._findMedian(smallerHeap, largerHeap);
      ret.push(num);
    }
    return ret;
  }

  // Time: O(n*n*log(n))
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