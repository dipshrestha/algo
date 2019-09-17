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

}

module.exports = EditDistance;