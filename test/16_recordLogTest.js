const assert = require('assert');
const { RecordLog, LinkListNode } = require('../daily/16_recordLog.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RecordLog(5);
  algo.record(5);
  algo.record(4);
  algo.record(3);
  algo.record(2);
  algo.record(1);
});

describe('RecordLog 654321', function() {
  it('pointer movement 0', function() {
    const expected = null;
    const result = algo.get_last(0);
    assert.equal(result, expected);
  })
  it('pointer movement 1', function() {
    const expected = 1;
    const result = algo.get_last(1);
    assert.equal(result, expected);
  })

  it('pointer movement 2', function() {
    const expected = 2;
    const result = algo.get_last(2);
    assert.equal(result, expected);
  });
  it('pointer movement 3', function() {
    const expected = 3
    const result = algo.get_last(3);
    assert.equal(result, expected);
  });
  it('pointer movement 4', function() {
    const expected = 4;
    const result = algo.get_last(4);
    assert.equal(result, expected);
  });
  it('pointer movement 5', function() {
    const expected = 5;
    const result = algo.get_last(5);
    assert.equal(result, expected);
  });
  it('pointer movement over size', function() {
    const expected = null;
    const result = algo.get_last(6);
    assert.equal(result, expected);
  });

  it.skip('pointer movement over size', function() {
    const expected = 5;
    algo.record(6);
    const result = algo.get_last(5);
    assert.equal(result, expected);
  });
});