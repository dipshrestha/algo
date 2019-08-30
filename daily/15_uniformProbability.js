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

/*
https://www.geeksforgeeks.org/select-a-random-number-from-stream-with-o1-space/

How does this work
We need to prove that every element is picked with 1/n probability where n is the number of items seen so far. 
For every new stream item x, we pick a random number from 0 to ‘count -1’, if the picked number is ‘count-1’, 
we replace the previous result with x.
*/
class UniformProbability {

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Time: O(N)
  // Space: O(1)
  generate(stream) {
    var rand = stream[0],
      cur = null;

    for (var i = 1; i < stream.length; i++) {
      cur = stream[i]
      // get random from 1 to i
      // a) compare to certain value;
      if (this.random(1, i + 1) == i) rand = cur;
      // b) OR below this
      //if (this.random(1, i + 1) == 1) rand = cur;
    }
    return rand;
  }

}

module.exports = UniformProbability;