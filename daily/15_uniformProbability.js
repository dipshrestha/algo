/**
 * Created by dipshrestha on 08/29/2019
 */

/*
Daily Coding Problem: Problem #15 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

 */

// https://www.youtube.com/watch?v=Ybra0uGEkpM - very good explanation
// https://www.youtube.com/watch?v=8-YLI2hRfpo
class UniformProbability {

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generate(stream) {
    var rand = stream[0],
      cur = null;

    for (var i = 1; i < stream.length; i++) {
      if (this.random(0, i) == i) rand = cur;
    }
    return rand;
  }

}

module.exports = UniformProbability;