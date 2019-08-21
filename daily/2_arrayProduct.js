/**
 * Created by dipshrestha on 08/16/2019.
 */

/*
Daily Coding Problem: Problem #2 [Hard]

This problem was asked by Uber.
Given an array of integers, return a new array such that each element at index i of 
the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

class ArrayProduct {

  constructor() {
    this._init();
  }

  _init() {
    this.V = [];
    this.V[0] = 0; // initialize
  }

  // time: O(N^2)
  // space: O(N)
  iterative(WM) {
    let mem = []
    for (let i = 0; i < WM.length; i++) {
      let tmp = 1;
      mem[i] = tmp;
      for (let j = 0; j < WM.length; j++) {
        if (i != j)
          mem[i] *= WM[j]
      }
    }
    return mem;
  }

  // time: O(N)
  // space: O(N)
  iterativeWithDivision(WM) {
    let mem = [],
      tmp = 1;
    for (let i = 0; i < WM.length; i++) {
      tmp *= WM[i];
    }
    for (let i = 0; i < WM.length; i++) {
      mem[i] = tmp / WM[i];
    }
    return mem;
  }

  // time: O(N)
  // space: O(N)
  iterativeWithoutDivision(WM) {
    let mem = [],
      PR = [],
      PL = [];
    PR[WM.length - 1] = 1;
    PR[WM.length - 2] = WM[WM.length - 1];
    for (var i = WM.length - 3; i >= 0; i--)
      PR[i] = PR[i + 1] * WM[i + 1];

    PL[0] = 1;
    PL[1] = PL[0] * WM[0];
    for (var i = 2; i < WM.length; i++)
      PL[i] = PL[i - 1] * WM[i - 1];

    for (var i = 0; i < WM.length; i++) {
      var r = PL[i] * PR[i];
      mem[i] = r;
    }
    return mem;
  }

  // not needed
  PL(WM, k) {
    this.PL[0] = 1;
    for (var i = 1; i < WM.length; i++)
      this.PL[i] = this.PL[i - 1] * WM[i];
  }

  // not needed
  PR(WM, k) {
    this.PR[WM.length - 1] = 1;
    for (var i = WM.length - 1; i > 0; i++)
      this.PR[i] = this.PR[i + 1] * WM[i];
  }
}

module.exports = ArrayProduct;