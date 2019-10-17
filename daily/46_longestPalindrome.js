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