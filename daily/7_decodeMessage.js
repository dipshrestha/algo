/**
 * Created by dipshrestha on 08/21/2019.
 */

/*
Daily Coding Problem: Problem #7 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
You can assume that the messages are decodable. For example, '001' is not allowed.

 */

class DecodeMessage {


  // can recursive be top->down ?

  /*
  1 =   {1}
  12 =  {12},  {1,2}
  123 = {123} ,{1,23}, {12,3}
  1234 = 1234/1,234/12,34

  1 = 1
  12 = 12/1,2
  121 =  121 /1,21  /12,1
  1214 = 1214/1,21,4/12,14/12,1,4/1,2,14
  */

  // Time:  O(2^N)
  // Space: O(N)
  recursive(str) {
    if (str.length == 0 || str == '') return 1;
    if (str.length < 2) return 1;
    var obj = str.substr(-2); // last 2 digits
    if (obj < 27) {
      // add the last 2
      return this.recursive(str.slice(0, -1)) + this.recursive(str.slice(0, -2));
    } else {
      // same as the last one
      return this.recursive(str.slice(0, -1));
    }
  }

  // Time:  O(N)
  // Space: O(1)
  iterative(str) {
    if (str.length == 0 || str == '') return 1;
    if (str.length < 2) return 1;
    var p1 = 1, // F(0) = 1
      p2 = 1, // F(1) = 1
      f = 1; // F(2) = 1 , can be 2 but for worst case 1
    for (var i = 2; i <= str.length; i++) {
      p2 = p1;
      p1 = f;
      var obj = str.substr(-2); // last 2 digits
      if (obj < 27)
        f = p1 + p2;
      else
        f = p1;
    }
    return f;
  }

  // Time:  O(N)
  // Space: O(N)
  dp(str) {
    if (str.length == 0 || str == '') return 1;
    if (str.length < 2) return 1;
    let x = [];
    x[0] = x[1] = 1;
    x[2] = 1;
    for (var i = 2; i <= str.length; i++) {
      var obj = str.substr(-2); // last 2 digits
      if (obj < 27)
        x[i] = x[i - 1] + x[i - 2];
      else
        x[i] = x[i - 1];
    }
    return x[str.length];
  }
}

module.exports = DecodeMessage;