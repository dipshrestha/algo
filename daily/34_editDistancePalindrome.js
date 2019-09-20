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
    var left = this._recursive_helper(str.slice(1)); // exclude first
    left = left.map(i => str.slice(0, 1) + i + str.slice(0, 1));
    return left;
  }

  // find smallest length, then sort , return first element
  _findMin(arr) {
    if (arr == null || arr.length < 1) return '';
    var max = Infinity;
    arr.forEach(a => a.length <= max ? max = a.length : max);
    arr = arr.filter(a => a.length == max);
    arr.sort();
    //console.log(arr);
    return arr[0];
  };

  _getRight(str) {
    var right = this._recursive_helper(str.slice(0, -1)); // exclude last
    right = right.map(i => str.slice(-1) + i + str.slice(-1));
    return right;
  }

  _recursive_helper(str) {
    debugger;
    if (str.length == 0 || str == "") return [];
    if (str.length == 1) return [str];
    if (str[0] == str[str.length -1])
      return [str];
    //if (str.charAt(0) == str.slice(-1))
   //   return this._recursive_helper(str.slice(1, -1));
    var arr = [];
    arr = arr.concat(this._getLeft(str));
    arr = arr.concat(this._getRight(str));
    //var res = this._findMin(arr);
    return arr;
  }

  recursive(str) {
    var res = this._recursive_helper(str);
    return this._findMin(res);
  }

}

module.exports = EditDistancePalindrome;