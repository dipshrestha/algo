/**
 * Created by dipshrestha on 06/02/2020
 */

/*
Daily Coding Problem: Problem #291 [Medium]

Good morning! Here's your coding interview problem for today.

This problem was asked by Glassdoor.

An imminent hurricane threatens the coastal town of Codeville. 
If at most two people can fit in a rescue boat, and the maximum 
weight limit for a given boat is k, determine how many boats will be needed to save everyone.

For example, given a population with weights [100, 200, 150, 80] 
and a boat limit of 200, the smallest number of boats required will be three.

 */

/*
 Algo:
 1) O(NlogN)
 sort
  with help of 2 pointers, head & tail
  while head <= tail
    move head if head + tail <=k

 2) O(N^2)
 for each i
   find maxV such that wi + wj <=k
*/
class KBoats {

  // Time: O(NlogN)
  // Space: O(1)
  iterative(WM, k) {
    WM.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0, j = WM.length - 1; i <= j;) {
      let head = WM[i];
      let tail = WM[j];
      // find
      if (head + tail <= k) {
        i++;
      }
      count++; // VIP
      j--; // VIP
    }
    return count;
  }

}

module.exports = KBoats;