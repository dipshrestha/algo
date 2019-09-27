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

/*
 Algo: Maintain a maxes stack
*/
class MaxStack {

  constructor() {
    this.stack = [];
    this.maxes = [];
  }

  _isEmpty() {
    return this.stack.length == 0;
  }

  // add to stack and compute max
  push(e) {
    this.stack.push(e);
    if (e > this.max()) this.maxes.push(e);
    else this.maxes.push(this.maxes.slice(-1));
  }

  // add to stack and compute max
  pop() {
    if (this._isEmpty()) return null;
    this.maxes.pop();
    return this.stack.pop();
  }

  // return max
  max() {
    if (this._isEmpty()) return null;
    return this.maxes.slice(-1);
  }

}

module.exports = MaxStack;