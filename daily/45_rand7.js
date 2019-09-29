/**
 * Created by dipshrestha on 09/28/2019
 */

/*
Daily Coding Problem: Problem #45 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Two Sigma.
Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, 
implement a function rand7() that returns an integer from 1 to 7 (inclusive).
 */

/*
 Algo : https://www.geeksforgeeks.org/generate-integer-from-1-to-7-with-equal-probability/
 and why simply we can't use
_last = foo();

rand7()
{
_last = (_last + foo()) % 7 + 1;
return _last;
}
*/
class Rand7 {

  rand5() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }

  rand7() {
    var tmp = 5 * this.rand5() + this.rand5() - 5;
    if (tmp < 22)
      return tmp % 7 + 1;
    return this.rand7();
  }

}

module.exports = Rand7;