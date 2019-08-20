 /**
  * Created by dipshrestha on 08/20/2019.
  */

 /*
 Daily Coding Problem: Problem #4 [Hard]

 Good morning! Here's your coding interview problem for today.
 This problem was asked by Stripe.
 Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 You can modify the input array in-place.
 */

 class MissingPositive {

   // Time: O(N)
   // Space: O(N)
   iterative(WM) {
     var mem = [];
     for (let i = 0; i < WM.length; i++) {
       let x = WM[i];
       if (x > 0) mem[x] = x;
     }
     //console.log(mem);
     for (let i = 1; i < mem.length; i++) {
       let x = mem[i];
       if (x != i) return i;
     }
     return mem.length;
   }
 }

 module.exports = MissingPositive;