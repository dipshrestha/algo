const assert = require('assert');
const DecodeMessage = require('../daily/7_decodeMessage.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new DecodeMessage();
});

describe('DecodeMessage(111)', function() {
  var str = '111';
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});

describe('DecodeMessage(1)', function() {
  var str = '1';
  const expected = 1;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});

describe('DecodeMessage(12)', function() {
  var str = '12';
  const expected = 2;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});

describe('DecodeMessage(123)', function() {
  var str = '123';
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });

  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});

describe('DecodeMessage(121)', function() {
  var str = '121';
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});

describe('DecodeMessage(1212)', function() {
  var str = '1212';
  const expected = 5;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});
describe('DecodeMessage(12121)', function() {
  var str = '12121';
  const expected = 8;

  it('Recursive', function() {
    const result = algo.recursive(str)
    assert.equal(result, expected);
  });
  it('Iterative', function() {
    const result = algo.iterative(str)
    assert.equal(result, expected);
  });
});