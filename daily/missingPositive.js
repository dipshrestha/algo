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
   // NO NEED TO DO x-1 indexing
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

   // Time: O(N)
   // Space: O(1)
   iterativeBest1(WM) {
     // fill elements <=0 with null
     console.log(WM);
     for (let i = 0; i < WM.length; i++) {
       if (WM[i] <= 0) WM[i] = null;
     }
     console.log(WM);
     for (let i = 0; i < WM.length; i++) {
       let x = WM[i];
       if (x < WM.length) WM[Math.abs(x)] *= -1;
       //if (x < WM.length) WM[x] *= -1;
     }
     console.log(WM);
     for (let i = 1; i < WM.length; i++) {
       let x = WM[i];
       if (x == null) return i;
     }
     return WM.length;
   }
   _swap(nums, i, j) {
     var temp = nums[i];
     nums[i] = nums[j];
     nums[j] = temp;
   }
   // Time: O(N)
   // Space: O(1)
   iterativeBest(nums) {
     let n = nums.length;
     for (let i = 0; i < nums.length; i++) {
       if (nums[i] >= 1 && nums[i] <= n) {
         let pos = nums[i] - 1;
         if (nums[pos] != pos + 1) {
           this._swap(nums, pos, i);
           i--;
         }
       }
     }

     for (let i = 0; i < n; i++) {
       if (nums[i] != i + 1) {
         return i + 1;
       }
     }
     return n + 1;
   }

   //https://leetcode.com/problems/first-missing-positive/discuss/361903/48-ms-faster-than-96.85-of-JavaScript-online-submissions
   iterativeBest_copied(nums) {
     const len = nums.length;
     for (let i = 0; i < len; i++) {
       const value = Number(nums[i]);
       if (value >= 1 && value <= len && typeof nums[value - 1] === 'number') {
         nums[value - 1] = String(nums[value - 1]);
       }
     }
     for (let i = 0; i < len; i++) {
       if (typeof nums[i] === 'number') return i + 1;
     }
     return len + 1;
   }
 }

 module.exports = MissingPositive;