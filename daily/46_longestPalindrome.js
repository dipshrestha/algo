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

  constructor() {
    this.V = [];
  }

  recursive(str) {
    if (str == null || str.length < 1) return '';
    var val = this._recursive_helper(str, str.length);
    return val;
  }

  _isPalindromeForRecursive(str, char) {
    return str.getCharAt(0) == char;
  }

  _recursive_helper(str) {

    for (var i = 0; i < str.length; i++) {
      if (str[i + 1] == str[i - 1]) {
        // recursively find if there are more
      }
    }
  }
  _recursive_helper1(str, index) {
    if (str.length == 1) return true;

    // if previous is palindrome adding this might be
    // a) a longer palindrome
    // b) or no palindrome at all.

    // if previouse is not a palindrome, adding this might be
    // a) a longer palindrome
    // b) or no palindrome at all.

    var val = this._recursive_helper(str, index--);
    if (val) {

    }

  }

  _fillZero(N) {
    this.V = new Array(N);
    for (var i = 0; i < N; i++) {
      this.V[i] = new Array(N).fill(false);
    }

  }
  //https://www.programcreek.com/2013/12/leetcode-solution-of-longest-palindromic-substring-java/
  //https://leetcode.com/problems/longest-palindromic-substring/discuss/416640/dp-Solution-by-javascript - JS
  // https://leetcode.com/problems/longest-palindromic-substring/solution/
  // https://leetcode.com/problems/longest-palindromic-substring/discuss/420539/very-straightforward-java-solution-using-DP-and-explanation

  // used this approach
  // https://leetcode.com/problems/longest-palindromic-substring/discuss/422110/Python-DP-Solution
  // Time: O(N^2)
  // Space: O(N^2)
  dp(str) {
    var K = str.length;
    this._fillZero(K);
    console.log(this.V);

    var palindrome = '',
      tmp;

    // terminal condition 1: single character
    for (var i = 0; i < K; i++) {
      this.V[i][i] = 1;
      palindrome = str.charAt(i);
    }


    // terminal condition 2: double character
    for (var j = 1; j < K; j++) {
      this.V[j - 1][j] = str.charAt(j - 1) == str.charAt(j);
      if (this.V[j - 1][j]) {
        palindrome = str.substring(j - 1, j + 1);
      }
    }

    for (var k = 2; k < K; k++) {
      for (var i = 0; k + i < K; i++) {
        var j = k + i;
        this.V[i][j] = str.charAt(i) == str.charAt(j) && this.V[i + 1][j - 1];
        if (this.V[i][j])
          palindrome = str.substring(i, j + 1);
        /*var last = this.V[i + 1][j - 1];
        if (str.charAt(i) == str.charAt(j) && last) {
          this.V[i][j] = true;
          tmp = str.substring(i, j + 1);
          if (tmp && tmp.length > palindrome.length) {
            palindrome = tmp;
          }
        }*/
      }
    }
    return palindrome;
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

  // go to before/after the char in search of longest palindrome
  _getPalindromeFromChar(str, pos) {
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

  // Time: O(N^2)
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