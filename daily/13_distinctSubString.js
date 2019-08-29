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

  // Time: O(N^2)
  // Space: O(N) stack
  recursive(str, N) {
    var all = [];
    // do a start from each of the element
    for (var i = 0; i < str.length; i++) {
      var ret = this.recursive_helper(str.substring(i, str.length), N);
      console.log(ret);
      all.push(ret.length);
    }
    return Math.max(this.maxLength, ...all);
  }

  recursive_helper(str, N) {
    if (str == null || str.length == 0) return '';
    if (str.length == 1 && N >= 1) return str;

    var e = str.substr(-1); // get the last element
    var remaining = str.substr(0, str.length - 1);
    var ret = this.recursive_helper(remaining, N);

    // if element is already present or if the length N permits you to add more element
    if (ret.indexOf(e) != -1 || this._distinct(ret) < N) {
      return ret + e;
    } else {
      // character changed.
      this.maxLength = Math.max(this.maxLength, ret.length);
      return e;
    }
  }

  // ====================================================================== //
  //  IT can be done other way, moving the pointer in opposite direction
  // ====================================================================== //
  // Time: O(N^2)
  // Space: O(N) stack
  recursive2(str, N) {
    var all = [];
    // do a start from each of the element
    for (var i = str.length; i >= 0; i--) {
      var ret = this.recursive_helper2(str.substring(0, i), N);
      all.push(ret.length);
    }
    return Math.max(this.maxLength, ...all);
  }
  recursive_helper2(str, N) {
    if (str == null || str.length == 0) return '';
    if (str.length == 1 && N >= 1) return str;

    var e = str.charAt(0); // get the first element
    var remaining = str.substr(1, str.length);
    var ret = this.recursive_helper(remaining, N);

    // if element is already present or if the length N permits you to add more element
    if (ret.indexOf(e) != -1 || this._distinct(ret) < N) {
      return e + ret;
    } else {
      // character changed.
      this.maxLength = Math.max(this.maxLength, ret.length);
      return e;
    }
  }

  //"abcbbbbcccbdddadacb", the longest substring that contains 2 unique character is "bcbbbbcccb".
  iterative(str, N) {
    if (str == null || str.length == 0) return 0;
    if (str.length == 1 && N >= 1) return 1;
    debugger;

    var set = new Set();
    var counter = 0,
      duplicatePointer = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      // if element is already present or if the length N permits you to add more element
      if (set.has(char)) {
        if (i > 0 && char[i - 1] == char[i]) duplicatePointer++
        else duplicatePointer = 0;
        counter++;
      } else if (set.size < N) {
        set.add(char);
        counter++;
      } else {
        set.clear();
        counter = 0;
        set.add(char);
        // move i to the start of the last element;
        i -= duplicatePointer;
      }
    }
    return counter;

  }
  // ====================================================================== //

}

module.exports = DistinctSubString;