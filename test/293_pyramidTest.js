const assert = require('assert');
const Pyramid = require('../daily/293_pyramid.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Pyramid();
});
describe.only('Pyramid', function() {

  it('Iterative', function() {
    const expected = 2;
    const WM = [1, 1, 3, 3, 2, 1];
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  })
  it('Iterative', function() {
    const expected = 6;
    const WM = [1, 3, 4, 3, 2, 2];
    const result = algo.iterative(WM)
    assert.equal(result, expected);
  });

    it('IterativeBetter', function() {
    const expected = 2;
    const WM = [1, 1, 3, 3, 2, 1];
    const result = algo.iterativeBetter(WM)
    assert.equal(result, expected);
  })
  it('IterativeBetter', function() {
    const expected = 6;
    const WM = [1, 3, 4, 3, 2, 2];
    const result = algo.iterativeBetter(WM)
    assert.equal(result, expected);
  });
});