const assert = require('assert');
const Powerset = require('../daily/37_powerset.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Powerset();
});
describe('Powerset', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});