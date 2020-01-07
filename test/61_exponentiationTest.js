const assert = require('assert');
const Exponentiation = require('../daily/61_exponentiation.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Exponentiation();
});

describe('Exponentiation', function() {

  it('Recursive: 2^3', function() {
    const expected = 8;
    const result = algo.recursive(2, 3)
    assert.equal(result, expected);
  });
  it('Recursive: 2^4', function() {
    const expected = 16;
    const result = algo.recursive(2, 4)
    assert.equal(result, expected);
  });
  it('Recursive: 2^1', function() {
    const expected = 2;
    const result = algo.recursive(2, 1)
    assert.equal(result, expected);
  });
  it('Recursive: 2^0', function() {
    const expected = 1;
    const result = algo.recursive(2, 0)
    assert.equal(result, expected);
  });
});