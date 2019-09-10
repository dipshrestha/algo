/**
 * Created by dipshrestha on 09/10/2019 
 */

/*
Daily Coding Problem: Problem #27 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
For example, given the string "([])[]({})", you should return true.
Given the string "([)]" or "((()", you should return false.

 */

class BalancedBracket {

  // Time: O(N)
  // Space: O(N) // worst case
  iterative(str) {
    var x = { ")": "(", "}": "{", "]": "[" };
    var isOpen = function(char) {
        return ['(', '{', '['].indexOf(char) > -1;
      },
      isClosed = function(char) {
        return [')', '}', ']'].indexOf(char) > -1;
      },
      stack = [],
      char = '',
      top;
    for (var i = 0; i < str.length; i++) {
      char = str[i];
      if (isOpen(char)) {
        stack.push(char);
      } else if (isClosed(char)) {
        top = stack.pop();
        if (top != x[char]) {
          return false;
        }
      }
    }

    return stack.length == 0;
  }

}

module.exports = BalancedBracket;