/**
 * Created by dipshrestha on 09/16/2019 
 */

/*
Daily Coding Problem: Problem #31 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
The edit distance between two strings refers to the minimum number of character insertions, 
deletions, and substitutions required to change one string to the other. For example, 
the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.
Given two strings, compute the edit distance between them.

 */

class EditDistance {

  constructor() {
    this._init();
  }

  _init() {
    this.V = []; // visited
  }

  // can we only fill the first row/column - yes
  _fill(s1, s2) {
    for (var i = 0; i <= s1.length; i++) {
      this.V[i] = [];
      for (var j = 0; j <= s2.length; j++)
        this.V[i][j] = Math.max(i, j);
    }
  }

  //https://www.techiedelight.com/levenshtein-distance-edit-distance-problem/
  //https://www.geeksforgeeks.org/edit-distance-dp-5/

  // Time: O(3^n)
  // Space: O(n) stack
  recursive(s1, s2) {
    if (s1 == null && s2 == null) return 0;
    if (Math.max(s1.length, s2.length) == 0) return 0;
    if (Math.min(s1.length, s2.length) == 0)
      return Math.max(s1.length, s2.length);
    if (s1.charAt(s1.length - 1) == s2.charAt(s2.length - 1))
      return this.recursive(s1.slice(0, s1.length - 1), s2.slice(0, s2.length - 1));

    return 1 + Math.min(
      this.recursive(s1.slice(0, s1.length), s2.slice(0, s2.length - 1)),
      this.recursive(s1.slice(0, s1.length - 1), s2.slice(0, s2.length)),
      this.recursive(s1.slice(0, s1.length - 1), s2.slice(0, s2.length - 1))
    )
  }

  // Time: O(n * m)
  // Space: O(n * m)
  dp(s1, s2) {
    if (s1 == null && s2 == null) return 0;
    if (Math.max(s1.length, s2.length) == 0) return 0;
    if (Math.min(s1.length, s2.length) == 0)
      return Math.max(s1.length, s2.length);

    this._fill(s1, s2);

    for (var i = 1; i <= s1.length; i++) {
      for (var j = 1; j <= s2.length; j++) {
        if (s1[i - 1] == s2[j - 1]) {
          this.V[i][j] = this.V[i - 1][j - 1];
        } else {
          this.V[i][j] = 1 + Math.min(
            this.V[i][j - 1],
            this.V[i - 1][j],
            this.V[i - 1][j - 1]);
        }
      }
    }
    return this.V[s1.length][s2.length];
  }


  recursive_old(str1, str2) {
    debugger;
    var ret = this._recursive_helper(str1, str2, 0);
    ret = str1.length + str2.length - 2 * ret;
    return ret;
  }

  _recursive_helper(str1, str2) {
    if (str1 == null && str2 == null) return 0;
    if (str1.length == 0 && str2.length == 0) return 0;
    if (str1.length == 1 && str2.length == 0) return 1;
    if (str1.length == 0 && str2.length == 1) return 1;
    if (str1.length == 1 && str2.length == 1) return 1;
    if (str1.length == 1 && str2.length > 1) return 1;
    if (str1.length > 1 && str2.length == 1) return 1;
    var s1, s2, max = [];
    if (str1.length < str2.length) {
      s1 = str1;
      s2 = str2;
    } else {
      s1 = str2;
      s2 = str1;
    }
    // for each char in s1;
    for (var i = 0; i < s1.length; i++) {
      var x = s1[i];
      for (var j = 0; j < s2.length; j++) {
        var y = s2[j];
        if (x == y) {
          var val = 0;
          if (i == s1.length - 1 || j == s2.length - 1)
            val = 0;
          else
            val = this._recursive_helper(str1.slice(i + 1), str2.slice(j + 1));
          max.push(val + 1);
          break;
        }
      }
    }
    return Math.max(...max);
  }

}

module.exports = EditDistance;