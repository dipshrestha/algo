const assert = require('assert');
const KaprekarsConstant = require('../daily/288_kaprekarsConstant.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new KaprekarsConstant();
});

describe('KaprekarsConstant', function() {
  it('Iterative-6174', function() {
    const expected = 0;
    const result = algo.iterative(6174)
    assert.equal(result, expected);
  });
  it('Iterative-1234', function() {
    const expected = 3;
    const result = algo.iterative(1234)
    assert.equal(result, expected);
  });
  it('Iterative-2143', function() {
    const expected = 3;
    const result = algo.iterative(2143)
    assert.equal(result, expected);
  });
  it('Iterative-8124', function() {
    const expected = 5;
    const result = algo.iterative(8124)
    assert.equal(result, expected);
  });
  it('Iterative-9783', function() {
    const expected = 7;
    const result = algo.iterative(9783)
    assert.equal(result, expected);
  });
  it('Iterative-1114', function() {
    const expected = 6;
    const result = algo.iterative(1114)
    assert.equal(result, expected);
  });
});