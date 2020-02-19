const assert = require('assert');
const ReverseLinkedList = require('../daily/73_reverseLinkedList.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ReverseLinkedList();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});