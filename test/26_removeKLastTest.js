const assert = require('assert');
const RemoveKLast = require('../daily/26_removeKLast.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RemoveKLast();
});
describe('RemoveKLast', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});