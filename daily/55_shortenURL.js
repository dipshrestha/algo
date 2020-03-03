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
 Algo:
 1) set new number for each entry -> same URL twice -> different result
 2) to get same result -> hash it first instead of setting number.

 https://github.com/ashwanikumar04/daily-coding-problems/blob/master/src/main/java/in/ashwanik/dcp/problems/p31_60/p55/Solution.java
 http://blog.gainlo.co/index.php/2016/03/08/system-design-interview-question-create-tinyurl-system/
 https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR
 https://gist.github.com/bhelx/778542
 https://www.interviewcake.com/question/java/url-shortener
 https://medium.com/@vaibhav0109/how-to-build-a-tiny-url-service-that-scales-to-billions-f6fb5ea22e8c
*/
class ShortenURL {

  constructor(seed) {
    this.allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.V = new Map();
    this.seed = seed;
  }

  // Time: O(N)
  // Space: O(N)
  shorten(url) {
    var buff = '';
    var val = ++this.seed;
    while (val > 0) {
      var x = this.allChars.charAt(val % this.allChars.length);
      buff += x;
      val = parseInt(val / this.allChars.length);
    }
    this.V.set(this.seed, url);
    var res = buff.split('').reverse().join('');
    console.log(url, res);
    return res;
  }

  restore(str) {
    var num = 0;
    str.split('').forEach(c => {
      num = num * this.allChars.length + this.allChars.indexOf(c);
    })
    return this.V.get(num);
  }

}

module.exports = ShortenURL;