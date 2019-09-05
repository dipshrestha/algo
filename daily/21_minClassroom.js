/**
 * Created by dipshrestha on 09/04/2019
 */

/*
Daily Coding Problem: Problem #21 [Easy]

Good morning! Here's your coding interview problem for today.
This problem was asked by Snapchat.
Given an array of time intervals (start, end) for classroom lectures 
(possibly overlapping), find the minimum number of rooms required.
For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

 */

class MinClassroom {

  // Time: O(NlogN)
  // Space: O(1)
  iterative(WM) {
    // sort first
    WM.sort((a, b) => a[0] > b[0]);
    console.log(WM);
    var conflict = 1,
      rooms = 1,
      baseLine = WM[0][1];
    // the next start date should not be before the current end date
    for (var i = 0; i < WM.length - 1; i++) {
      if (baseLine >= WM[i + 1][0]) {
        conflict++;
      } else {
        // reset
        baseLine = WM[i + 1][1];
        rooms = Math.max(conflict, rooms);
        conflict = 1;
      }
    }
    return Math.max(conflict, rooms);
  }

}

module.exports = MinClassroom;