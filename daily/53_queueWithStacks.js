/**
 * Created by dipshrestha on 10/29/2019
 */

/*
Daily Coding Problem: Problem #53 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Apple.
Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) 
data structure with the following methods: enqueue, which inserts an element 
into the queue, and dequeue, which removes it.

 */

/*
 Algo: either enqueue or dequeue would run in O(N).
 for enqueue just keep adding to stack,
 for dequeue, pour from one stack onto another.
*/

var Stack = require('stackjs');

class QueueWithStacks {

  constructor() {
    this.S1 = new Stack();
    this.S2 = new Stack();
  }

  // Time: O(1)
  // Space: O(N)
  enqueue(val) {

    this.S1.push(val);
  }

  // Time: O(N)
  // Space: O(N)
  dequeue() {
    while (!this.S1.isEmpty()) {
      this.S2.push(this.S1.pop());
    }
    var ret = this.S2.pop();
    while (!this.S2.isEmpty()) {
      this.S1.push(this.S2.pop());
    }
    return ret;
  }

}

module.exports = QueueWithStacks;