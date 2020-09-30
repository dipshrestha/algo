const assert = require('assert');
const ApplePicking = require('../daily/298_applePicking.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ApplePicking();
});

describe('ApplePicking', function() {

  it('Iterative - default', function() {
    const expected = 4;
    const WM = [2, 1, 2, 3, 3, 1, 3, 5];
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });

  it('Iterative - [2, 1, 1, 1, 3, 3]', function() {
    const expected = 5;
    const WM = [2, 1, 1, 1, 3, 3];
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });

  it('Iterative - [2, 1, 1, 1, 3]', function() {
    const expected = 4;
    const WM = [2, 1, 1, 1, 3];
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });

  it('Iterative - [2, 1, 1, 1, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5]', function() {
    const expected = 7;
    const WM = [2, 1, 1, 1, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5];
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });
});