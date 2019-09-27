/**
 * Created by dipshrestha on 09/26/2019 */

/*
Daily Coding Problem: Problem #43 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Amazon.
Implement a stack that has the following methods:
push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack.
If there are no elements in the stack, then it should throw an error or return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, 
then it should throw an error or return null.
Each method should run in constant time.

 */

class MaxStack {

  constructor() {
    this.stack = [];
    this.max = null;
    this.p = -1;
  }

  isEmpty() {
    if (this.p < 0) return true;
  }
  // add to stack and compute max
  push(e) {
    this.stack[++this.p] = e;
  }

  // add to stack and compute max
  pop() {
    if (this.isEmpty()) return null;
    return this.stack[this.p--];
  }

  // return max
  max() {
    if (this.isEmpty()) return null;
    return this.max;
  }

}

module.exports = MaxStack;