/**
 * Created by dipshrestha on 10/22/2019
 */

/*
Daily Coding Problem: Problem #82 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked Microsoft.
Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.
For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

 */

/*
 Algo: Utilize the read7(), if N < 7, trim the reads from read7() or do more reads
*/
class ReadN {

  constructor(fContent) {
    this.V = fContent || 'averylongfile';
    this.p = 0;
  }

  read7() {
    var ret = this.V.substr(this.p, 7);
    this.p += 7;
    return ret;
  }

  // Time: O(N)
  // Space: O(N)
  readN(n) {
    var buf = this.read7(),
      ret = '',
      len = 0;
    if (n <= 7) {
      return buf.substr(0, n);
    }

    while (buf) {
      if (buf.length + len >= n) {
        ret += buf.substr(0, n - len);
        break;
      }
      ret += buf;
      len += 7;
      buf = this.read7();
    }

    return ret;
  }

}

module.exports = ReadN;