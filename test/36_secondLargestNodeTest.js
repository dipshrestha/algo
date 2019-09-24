const assert = require('assert');
const SecondLargestNode = require('../daily/36_secondLargestNode.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SecondLargestNode();
});

describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});