/**
 * Created by dipshrestha on 09/30/2019
 */

/*
Daily Coding Problem: Problem #47 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Facebook.
Given a array of numbers representing the stock prices of a company in chronological order, 
write a function that calculates the maximum profit you could have made from buying and 
selling that stock once. You must buy before you can sell it.
For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could 
buy the stock at 5 dollars and sell it at 10 dollars.

 */


/*
 Algo: First pass, start from right and find max at each point and store.
 Second pass, start from left and find max difference between each point and the max.
*/
class MaxProfit {

  // Time: O(N)
  // Space: O(N)
  iterative(WM) {
    if (WM == null || WM.length < 2) return null;

    var mem = [],
      max = WM[WM.length - 1],
      profit = 0;

    for (var i = WM.length - 2; i >= 0; i--) {
      if (WM[i] > max) {
        max = WM[i];
      }
      mem[i + 1] = max;
    }

    console.log(mem);
    for (var i = 0; i < WM.length - 1; i++) {
      if (mem[i + 1] - WM[i] > profit)
        profit = mem[i + 1] - WM[i];
    }
    return profit;
  }

}

module.exports = MaxProfit;