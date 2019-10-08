/**
 * Created by dipshrestha on 10/07/2019
 */

/*
Daily Coding Problem: Problem #55 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Microsoft.
Implement a URL shortener with the following methods:
shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.
Hint: What if we enter the same URL twice?

 */

/*
 Algo: Solve using backtracking
*/
class ShortenURL {

  constructor(seed) {
    this.allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.V = new Map();
    this.seed = seed;
  }
  // Time: O(2^N)
  // Space: O(N)

  shorten(url) {
    var buff = '';
    var val = ++this.seed;
    while (val > 0) {
      var x = this.allChars.charAt(val % this.allChars.length);
      console.log(val, x, this.allChars.length);
      buff += x;
      val = parseInt(val / this.allChars.length);
    }
    this.V.set(this.seed, url);
    console.log(buff);
    var res = buff.split('').reverse().join('');
    console.log(res);
    return res;
  }

  restore(str) {

  }

}

module.exports = ShortenURL;