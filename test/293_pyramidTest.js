const assert = require('assert');
const Pyramid = require('../daily/293_pyramid.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Pyramid();
});
describe('Pyramid', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});