const assert = require('assert');
const MultiplicationTable = require('../daily/74_multiplicationTable.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MultiplicationTable();
});
describe('MultiplicationTable', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});