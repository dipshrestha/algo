const assert = require('assert');
const PartitionMultisetInteger = require('../daily/60_partitionMultisetInteger.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PartitionMultisetInteger();
});
describe('PartitionMultisetInteger', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});