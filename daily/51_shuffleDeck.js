/**
 * Created by dipshrestha on 10/25/2019
 */

/*
Daily Coding Problem: Problem #51 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given a function that generates perfectly random numbers between 1 and k (inclusive), 
where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.
It should run in O(N) time.
Hint: Make sure each one of the 52! permutations of the deck is equally likely.

 */

/*
 Algo: Swap current card with the random number generated.
 // Fisher-Yates Shuffle Modern Algorithm
*/
class ShuffleDeck {

  // random numbers between 1 and k (inclusive)
  random(k) {
    var min = 1;
    var max = k;
    var rand = Math.floor(Math.random() * (+max - +min)) + +min;
    return rand;
  }

  swap(WM, i, j) {
    var tmp = WM[i];
    WM[i] = WM[j];
    WM[j] = tmp;
  }

  _fill(WM) {
    for (var i = 0; i < WM.length; i++) {
      WM[i] = i + 1;
    }
  }

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    this._fill(WM);

    var rand;
    for (var i = 0; i < WM.length - 1; i++) {
      rand = this.random(i, WM.length);
      this.swap(WM, rand, i);
    }

    var print = '';
    WM.forEach((x, i) => print += ((i % 13 == 0 ? '\r\n' : '') + '-' + x));
    console.log(print);
    return WM;
  }
}

module.exports = ShuffleDeck;