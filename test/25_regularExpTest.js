const assert = require('assert');
const RegularExp = require('../daily/25_regularExp.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RegularExp();
});
describe('RegularExp', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});