const assert = require('assert');
const RunningMedian = require('../daily/33_runningMedian.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RunningMedian();
});

describe('RunningMedian', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});