/**
 * Created by dipshrestha on 09/23/2020
 */

/*
Daily Coding Problem: Problem #298 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
A girl is walking along an apple orchard with a bag in each hand. 
She likes to pick apples from each tree as she goes along, 
but is meticulous about not putting different kinds of apples in the same bag.
Given an input describing the types of apples she will pass on her path, in order, 
determine the length of the longest portion of her path that consists of just two types of apple trees.
For example, given the input [2, 1, 2, 3, 3, 1, 3, 5], 
the longest portion will involve types 1 and 3, with a length of four.

 */

/*
 Algo:
  * pick a pair, count number of time they appear
  * if new is found start forming new pair, check if that pair has maximum time appearance
*/
class ApplePicking {

  // Time: O(N)
  // Space: O(1)
  iterative(WM) {
    let p2count = 0,
      count = 0,
      max = 0,
      elm = null,
      p1 = null,
      p2 = null;
    for (let i = 0; i < WM.length; i++) {
      elm = WM[i];
      if (p1 == null) {
        p1 = elm;
        count++;
      } else if (p2 == null) {
        if (elm != p1) {
          p2 = elm;
          p2count++;
        }
        count++;
      } else if (elm == p2) {
        p2count++;
        count++;
      } else {
        if (elm == p1) { // existing 
          count++;
        } else { // new element
          if (count > max) max = count;
          count = p2count + 1;
        }
        p1 = p2;
        p2 = elm;
        p2count = 1;
      }
    }
    if (count > max) max = count;
    return max;
  }

}

module.exports = ApplePicking;