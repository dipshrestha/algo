/**
 * Created by dipshrestha on 08/27/2019
 */

/*
Daily Coding Problem: Problem #13 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

 */

class DistinctSubString {
  constructor() {
    this._init();
  }

  _init() {
    this.maxLength = 0;
  }

  recursive(str, N) {
    var ret = this.recursive_helper(str, N);
    return Math.max(this.maxLength, ret.length);
  }
  recursive_helper(str, N) {
    debugger
    if (str == null || str.length == 0) return '';
    //if (N == 0) return '';
    if (str.length == 1 && N >= 1) return str;

    //for (var i = 1; i <= N; i++) {
    var e = str.substr(-1); // get the last element
    //var remaining = 123;
    var ret = this.recursive_helper(str.substr(0, str.length - 1), N - 1)
    if (ret.indexOf(e) != -1 || ret.length < N) {
      return ret + e;
    } else {
      this.maxLength = Math.max(this.maxLength, ret.length);
      return e;
    }
  }

}

module.exports = DistinctSubString;