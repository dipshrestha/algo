/**
 * Created by dipshrestha on 12/02/2019
 */

/*
Daily Coding Problem: Problem #57 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less.
You must break it up so that words don't break across lines. Each line has to have the maximum possible amount of words.
If there's no way to break the text up, then return null.
You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.
For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return: 
["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.

 */

/*
 Algo: Solve using DP.
 Compute the cost of each word as being the start word and keep adding next word until length < K.

*/
class WordWrap {

  constructor() {
    this.V = [];
  }

  recursive() {

  }

  // Time: O(2^N)
  // Space: O(N)
  // Good tutorial by MIT professor
  // https://www.youtube.com/watch?v=ENyox7kNKeY
  // https://www.geeksforgeeks.org/word-wrap-problem-space-optimized-solution/
  dp(WM, K) {
    if (WM == null || WM.length < 0) return null;
    var N = WM.length;
    var ans = new Array(N); // store pointer to the last word for index word
    this.V = new Array(N);

    // base case
    // cost of line starting with ... as first element
    this.V[N - 1] = 0; // 0 as space after the last work doesn't cost anything
    ans[N - 1] = N - 1; // the last word contains last word as the last word

    // start in reverse
    for (let i = N - 2; i >= 0; i--) {
      var curLen = -1;
      var cost = 0;
      this.V[i] = Infinity;

      for (let j = i; j < N; j++) {
        curLen += (WM[j].length + 1);

        if (curLen > K) break;
        if (j == N - 1) cost = 0;
        else
          cost = Math.pow(K - curLen, 2) + this.V[j + 1];

        if (cost < this.V[i]) {
          this.V[i] = cost;
          ans[i] = j;
        }

      }
    }
    console.log(this.V);

    var ret = [],
      l = 0;

    while (l < N) {
      ret.push(WM.slice(l, ans[l] + 1).join(" "));
      l = ans[l] + 1;
    }

    return ret;
  }

}

module.exports = WordWrap;