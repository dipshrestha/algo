/**
 * Created by dipshrestha on 09/18/2019
 */

/*
Daily Coding Problem: Problem #34 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Quora.
Given a string, find the palindrome that can be made by inserting the fewest number of characters 
as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, 
return the lexicographically earliest one (the first one alphabetically).
For example, given the string "race", you should return "ecarace", since we can add three letters to it 
(which is the smallest amount to make a palindrome). There are seven other palindromes that can be made 
from "race" by adding three letters, but "ecarace" comes first alphabetically.
As another example, given the string "google", you should return "elgoogle".

 */

class EditDistancePalindrome {

  _getLeft(str) {
    var left = this.recursive(str.slice(1)); // exclude first
    left = left.map(i => str.slice(0, 1) + i + str.slice(0, 1));
  }
  _getRight(str) {
    var right = this.recursive(str.slice(0, -1)); // exclude last
    right = right.map(i => str.slice(-1) + str.charAt(0) + str.slice(-1));
  }
  recursive(str) {
    if (str.length == 0 || str == "") return [];
    if (str.length == 1) return [str];
    if (str.length == 2) {
      if (str.charAt(0) == str.charAt(1)) return [str];

    }
  }

}

module.exports = EditDistancePalindrome;