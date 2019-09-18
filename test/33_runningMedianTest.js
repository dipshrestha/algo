const assert = require('assert');
const RunningMedian = require('../daily/33_runningMedian.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RunningMedian();
});

describe('RunningMedian', function() {
  const expected = [2, 1.5, 2, 3.5, 2, 2, 2];
  const WM = [2, 1, 5, 7, 2, 0, 5];

  it('Iterative', function() {
    const result = algo.iterative(WM);
    assert.deepEqual(result, expected);
  });
});