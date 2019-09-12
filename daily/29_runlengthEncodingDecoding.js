/**
 * Created by dipshrestha on 09/12/2019
 */

/*
Daily Coding Problem: Problem #29 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
Implement run-length encoding and decoding. You can assume the string to be encoded have no digits 
and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

 */

class RunlengthEncodingDecoding {

  // Time: O(N)
  // Space: O(1)
  decode(str) {
    var s = '';
    for (var i = 0; i < str.length; i += 2) {
      for (var j = 0; j < str[i]; j++) {
        s += (str[i + 1]);
      }
    }
    return s;
  }

  // Time: O(N)
  // Space: O(1)
  encode(str) {

    function reset() {
      count = 1;
      cur = str[i];
    }

    function set() {
      result += (count + cur);
    }

    // if transition, update count
    var result = "",
      count = 1,
      cur = str[0];
    for (var i = 1; i < str.length; i++) {
      if (cur != str[i]) {
        set();
        reset();
      } else {
        count++;
      }
    }
    set();
    return result;
  }
}

module.exports = RunlengthEncodingDecoding;