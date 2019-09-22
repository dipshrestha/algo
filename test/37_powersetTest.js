const assert = require('assert');
const Powerset = require('../daily/37_powerset.js');
var expect = require('chai').expect;

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Powerset();
});
describe('Powerset', function() {
  const expected = [
    [],
    [1],
  ];
  const WM = [1];

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.deepEqual(result, expected);
  });
});
describe('Powerset', function() {
  const expected = [
    [],
    [1],
    [2],
    [1, 2],
  ];
  const WM = [1, 2];

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.deepEqual(result, expected);
  });
});

describe('Powerset', function() {
  const expected = [
    [],
    [1],
    [2],
    [1, 2],
    [3],
    [1, 3],
    [2, 3],
    [1, 2, 3]
  ];
  const WM = [1, 2, 3];

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.deepEqual(result, expected);
  });
});