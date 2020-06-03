const assert = require('assert');
const KBoats = require('../daily/291_kBoats.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new KBoats();
});

describe('KBoats', function() {

  it('Iterative: [100, 200, 150, 80]', function() {
    const expected = 3;
    const WM = [100, 200, 150, 80];
    const result = algo.iterative(WM, 200)
    assert.equal(result, expected);
  });
  it('Iterative: [1,2]', function() {
    const expected = 1;
    const WM = [1, 2];
    const result = algo.iterative(WM, 3);
    assert.equal(result, expected);
  });
  it('Iterative: [3,2,2,1]', function() {
    const expected = 3;
    const WM = [3, 2, 2, 1];
    const result = algo.iterative(WM, 3)
    assert.equal(result, expected);
  });
  it('Iterative: [3,5,3,4]', function() {
    const expected = 4;
    const WM = [3, 5, 3, 4];
    const result = algo.iterative(WM, 5)
    assert.equal(result, expected);
  });

  it('Iterative:  30, 40, 70, 100, 200, 150, 80', function() {
    const expected = 4;
    const WM = [30, 40, 70, 100, 200, 150, 80];
    const result = algo.iterative(WM, 200)
    assert.equal(result, expected);
  });
  it('Iterative:  200, 10, 200, 200', function() {
    const expected = 4;
    const WM = [200, 10, 200, 200];
    const result = algo.iterative(WM, 200)
    assert.equal(result, expected);
  });
  it('Iterative:  200, 200, 10, 200, 200', function() {
    const expected = 5;
    const WM = [200, 200, 10, 200, 200];
    const result = algo.iterative(WM, 200)
    assert.equal(result, expected);
  });
  it('Iterative:  170, 160, 30, 90', function() {
    const expected = 3;
    const WM = [170, 160, 30, 90];
    const result = algo.iterative(WM, 200)
    assert.equal(result, expected);
  });
  it('Iterative:  150, 150, 150, 30', function() {
    const expected = 3;
    const WM = [150, 150, 150, 30];
    const result = algo.iterative(WM, 200)
    assert.equal(result, expected);
  });
});