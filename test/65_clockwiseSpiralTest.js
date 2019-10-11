const assert = require('assert');
const ClockwiseSpiral = require('../daily/65_clockwiseSpiral.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ClockwiseSpiral();
});

describe.skip('ClockwiseSpiral', function() {
  const expected = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12];
  const WM = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ];

  it('Iterative', function() {
    const result = algo.iterative(WM);
    assert.deepEqual(result, expected);
  });
});