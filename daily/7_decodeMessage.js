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

  // Time: O(N)
  // Space: O(N)
  // NO NEED TO DO x-1 indexing
  iterative(WM) {
    var mem = [];
    for (let i = 0; i < WM.length; i++) {
      let x = WM[i];
      if (x > 0) mem[x] = x;
    }
    //console.log(mem);
    for (let i = 1; i < mem.length; i++) {
      let x = mem[i];
      if (x != i) return i;
    }
    return mem.length;
  }

  // Time: O(N)
  // Space: O(1)
  iterativeBest(WM) {
    // move negative numbers to the end and find the end index of +ve numbers
    var good = -1;
    for (let i = 0; i < WM.length; i++) {
      if (WM[i] > 0) {
        if (good != i - 1) {
          this._swap(WM, good + 1, i)
          good += 1;
        } else {
          good = i;
        }
      }
    }
  }
}

module.exports = DecodeMessage;