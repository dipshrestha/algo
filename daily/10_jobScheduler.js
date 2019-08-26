/**
 * Created by dipshrestha on 08/24/2019
 */

/*
Daily Coding Problem: Problem #10 [Medium]

Good morning! Here's your coding interview problem for today.
This problem was asked by Apple.
Implement a job scheduler which takes in a function 
f and an integer n, and calls f after n milliseconds.

 */

class JobScheduler {

  constructor() {
    this.jobs = [];
  }

  schedule(f, ms) {
    debugger;
    //this.jobs.push(f, ms);

    var start = new Date().getTime()
    var end = 0;
    while (true) {
      end = new Date().getTime()
      if (ms < end - start) {
        break;
      }
    }
    f();
  }

}

module.exports = JobScheduler;