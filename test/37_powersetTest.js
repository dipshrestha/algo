const assert = require('assert');
const Powerset = require('../daily/37_powerset.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Powerset();
});
describe.skip('Powerset', function() {
  const expected = [
    [],
    [1],
  ];
  const WM = [1];

  it('Iterative', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });
});
describe.skip('Powerset', function() {
  const expected = [
    [],
    [1],
    [2],
    [1, 2],
  ];
  const WM = [1, 2];

  it('Iterative', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });
});

describe.skip('Powerset', function() {
  const expected = [
    [],
    [1],
    [2],
    [3],
    [1, 2],
    [1, 3],
    [2, 3],
    [1, 2, 3]
  ];
  const WM = [1, 2, 3];

  it('Iterative', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });
});