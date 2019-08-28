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
  _distinct(str) {
    var set = new Set();
    for (var a of str) {
      set.add(a);
    }
    return set.size;
  }

  recursive(str, N) {
    var all = [];
    // do a start from each of the element
    for (var i = 0; i < str.length; i++) {
      var ret = this.recursive_helper(str.substring(i, str.length), N);
      all.push(ret.length);
    }
    return Math.max(this.maxLength, ...all);
  }

  recursive_helper(str, N) {
    if (str == null || str.length == 0) return '';
    if (str.length == 1 && N >= 1) return str;

    var e = str.substr(-1); // get the last element
    var remaining = str.substr(0, str.length - 1);
    var ret = this.recursive_helper(remaining, N)
    if (ret.indexOf(e) != -1 || this._distinct(ret) < N) {
      return ret + e;
    } else {
      // character changed.
      this.maxLength = Math.max(this.maxLength, ret.length);
      return e;
    }
  }

}

module.exports = DistinctSubString;