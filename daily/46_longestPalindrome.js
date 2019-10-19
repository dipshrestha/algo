/**
 * Created by dipshrestha on 10/16/2019
 */

/*
Daily Coding Problem: Problem #46 [Hard]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Given a string, find the longest palindromic contiguous substring. 
If there are more than one with the maximum length, return any one.
For example, the longest palindromic substring of "aabcdcb" is "bcdcb". T
he longest palindromic substring of "bananas" is "anana".

 */

/*
 Algo: 
 For each character check if it makes palindrome
*/
class LongestPalindrome {

  recursive(str) {
    if (str == null || str.length < 1) return '';
    var val = this._recursive_helper(str, str.length);
    return val;
  }

  _recursive_helper(str, index) {
    if (str.length == 1) return true;

    var val = this._recursive_helper(str, index--);

  }

  _isPalindrome(str) {
    for (var i = 0; i < Math.floor(str.length / 2); i++) {
      if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
        console.log('_isPalindrome: No, ' + str);
        return false;
      }
    }
    console.log('_isPalindrome: Yes, ' + str);
    return true;
  }

  _getPalindromeFromChar(str, pos) {
    debugger;
    var pre = pos - 1,
      i = pos + 1,
      palindrome = "";
    if (str.charAt(i) == str.charAt(pos)) {
      i = pos + 2;
      palindrome = str.charAt(pos) + str.charAt(pos);
    } else {
      palindrome = str.charAt(pos);
    }
    for (; i < str.length && pre >= 0; i++, pre--) {
      if (str.charAt(i) == str.charAt(pre)) {
        palindrome += str.charAt(i);
        palindrome = str.charAt(i) + palindrome;
      } else {
        break;
      }
    }
    return palindrome;
  }

  // Time: O(2^N)
  // Space: O(N)
  iterativeBetter(str) {
    var palindrome = '',
      tmp;
    for (var i = 1; i < str.length; i++) {
      tmp = this._getPalindromeFromChar(str, i);
      if (tmp && tmp.length > palindrome.length) {
        palindrome = tmp;
      }
    }
    return palindrome;
  }

  // Time: O(2^N)
  // Space: O(N)
  iterative(str) {
    var char1, char2, palindrome = '',
      tmp;
    for (var i = 0; i < str.length; i++) {
      char1 = str.charAt(i);
      for (var j = i + 1; j < str.length; j++) {
        char2 = str.charAt(j);
        if (char1 == char2) {
          tmp = str.substr(i, j);
          if (this._isPalindrome(tmp)) {
            if (palindrome.length < tmp.length) {
              palindrome = tmp;
            }
          }
        }
      }
    }
    return palindrome;
  }

}

module.exports = LongestPalindrome;