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
      return this.recursive(str.slice(0, -1)) + this.recursive(str.slice(0, -2));
    } else {
      return this.recursive(str.slice(0, -1));
    }
  }
}

module.exports = DecodeMessage;