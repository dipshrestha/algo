const assert = require('assert');
const PartitionMultisetInteger = require('../daily/60_partitionMultisetInteger.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PartitionMultisetInteger();
});

describe('PartitionMultisetInteger', function() {

  it('Recursive: [5, 5]', function() {
    const result = algo.recursive([5, 5])
    assert.equal(result, true);
  });

  it('Recursive: [5]', function() {
    const result = algo.recursive([5])
    assert.equal(result, false);
  });

  it('Recursive: [2, 3, 5, 5, 5]', function() {
    const result = algo.recursive([2, 3, 5, 5, 5])
    assert.equal(result, true);
  });

  it('Recursive: [5, 5, 5, 2, 3]', function() {
    const result = algo.recursive([5, 5, 5, 2, 3])
    assert.equal(result, true);
  });
  it('Recursive: [5, 5, 5, 3, 2]', function() {
    const result = algo.recursive([5, 5, 5, 3, 2])
    assert.equal(result, true);
  });

  it('Recursive: [15, 5, 20, 10, 35, 1]', function() {
    const result = algo.recursive([15, 5, 20, 10, 35, 1])
    assert.equal(result, false);
  });

  it('Recursive: [15, 5, 20, 10, 35, 15, 10]', function() {
    const result = algo.recursive([15, 5, 20, 10, 35, 15, 10])
    assert.equal(result, true);
  });
});