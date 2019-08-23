const assert = require('assert');
const SumNonAdjacent = require('../daily/9_sumNonAdjacent.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SumNonAdjacent();
});


describe('SumNonAdjacent [2, 4]', function() {
  var WM = [2, 4];
  const expected = 4;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });
});

describe('SumNonAdjacent [2, 4, 6, 2, 5]', function() {
  var WM = [2, 4, 6, 2, 5];
  const expected = 13;

  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });
});
describe('SumNonAdjacent  [5, 1, 1, 5]', function() {
  var WM =  [5, 1, 1, 5];
  const expected = 10;
  
  it('Recursive', function() {
    const result = algo.recursive(WM)
    assert.equal(result, expected);
  });
});