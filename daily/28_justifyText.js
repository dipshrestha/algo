/**
 * Created by dipshrestha on 09/10/2019 
 */

/*
Daily Coding Problem: Problem #28 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Palantir.

Write an algorithm to justify text. Given a sequence of words and an integer line length k,
return a list of strings which represents each line, fully justified.
More specifically, you should have as many words as possible in each line. 

There should be at least one space between each word. Pad extra spaces when necessary so that
each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, 
if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.
Each word is guaranteed not to be longer than k.
For example, given the list of words 
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:
["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly

 */

class JustifyText {

	// https://www.geeksforgeeks.org/word-wrap-problem-dp-19/
	// TODO:
	dp(WM, K) {

	}
  iterative(WM, K) {

    function appendCurrentWord() {
      S += ((S.length > 0 ? SPACE : '') + curWord);
    }

    function reset() {
      result.push(S);
      S = "";
    }

    function distributeSpace() {
      var words = S.split(SPACE);
      var diff = K - words.map(w => w.length).reduce((i = 0, j) => i + j);
      // evenly distrubute
      for (let i = 0; i < Math.floor(diff / (words.length - 1)); i++) {
        words = words.map((w, i) => (i != words.length - 1) ? w + SPACE : w);
      }
      // handle overflow
      for (let i = 0; i < diff % (words.length - 1); i++) {
        words[i] = words[i] + SPACE;
      }
      S = words.join('');
    }

    function padSpace() {
      var diff = K - S.length;
      for (var i = 0; i < diff; i++) S += SPACE;
    }

    var S = "",
      result = [],
      curWord = "",
      len = 0;
    const SPACE = ' ';

    for (var i = 0; i < WM.length; i++) {
      curWord = WM[i];
      len = S.length + curWord.length;
      if (len == K) {
        appendCurrentWord();
        reset();
      } else if (len < K) {
        appendCurrentWord();
      } else { // word won't fit
        distributeSpace(); // -1 for extra space added at the end
        reset();
        i--;
      }
    }

    if (S.length != 0) {
      if (S.split(SPACE).length > 1) {
        distributeSpace();
      } else { // only 1 word, so pad space
        padSpace();
      }
      reset();
    }

    return result;
  }

}

module.exports = JustifyText;