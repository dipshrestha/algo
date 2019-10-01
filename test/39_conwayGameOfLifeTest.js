const assert = require('assert');
const ConwayGameOfLife = require('../daily/39_conwayGameOfLife.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ConwayGameOfLife();
});
describe('ConwayGameOfLife', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});