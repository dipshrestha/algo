/**
 * Created by dipshrestha on 05/27/2020 
 */

/*
Daily Coding Problem: Problem #288 [Medium]

Good morning! Here's your coding interview problem for today.

This problem was asked by Salesforce.

The number 6174 is known as Kaprekar's contant, after the mathematician 
who discovered an associated property: for all four-digit numbers with 
at least two distinct digits, repeatedly applying a simple procedure 
eventually results in this value. The procedure is as follows:

For a given input x, create two new numbers that consist of the digits 
in x in ascending and descending order.
Subtract the smaller number from the larger number.
For example, this algorithm terminates in three steps when starting from 1234:

4321 - 1234 = 3087
8730 - 0378 = 8352
8532 - 2358 = 6174
Write a function that returns how many steps this will take for a given input N.

 */

/*
 Algo: 
    // find all digits
    // create 2 numbers
    // find difference
    // repeat if not 6174
*/
class KaprekarsConstant {

  _isValid(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && ++count == 2) return true;
    }
  }
  _findAllDigits(N) {
    const ret = [];
    while (N != 0) {
      ret[N % 10] = ret[N % 10] ? ret[N % 10] + 1 : 1;
      N = Math.floor(N / 10);
    }
    return ret;
  }

  _create2Nums(arr) {
    let max = null,
      min = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        for (let j = 0; j < arr[i]; j++)
          max = max == null ? i : max * 10 + i;
      }
      if (arr[arr.length - i - 1]) {
        for (let j = 0; j < arr[arr.length - i - 1]; j++)
          min = min == null ? arr.length - i - 1 : min * 10 + arr.length - i - 1;
      }
    }
    return [min, max];
  }

  // Time: O(N)
  // Space: O(1)
  iterative(N) {
    let steps = 0;
    while (N != 6174) {
      console.log('N: ' + N);
      let x = this._findAllDigits(N);
      console.log('x: ' + x);
      if (!this._isValid(x)) return -1;
      let arr = this._create2Nums(x);
      console.log('arr: ' + arr);
      N = arr[0] - arr[1];
      console.log('diff: ' + N);
      steps++;
    }
    return steps;
  }

}

module.exports = KaprekarsConstant;