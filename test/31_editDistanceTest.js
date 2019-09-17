const assert = require('assert');
const EditDistance = require('../daily/31_editDistance.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EditDistance();
});
describe('EditDistance abc, ab', function() {

  const expected = 1;
  const str1 = "abc";
  const str2 = "ab";
  it('Recursive', function() {
    const result = algo.recursive(str1, str2);
    assert.equal(result, expected);
  });
  it('DP', function() {
    const result = algo.dp(str1, str2);
    assert.equal(result, expected);
  });
});

describe('EditDistance kitten, sitting', function() {
  const expected = 3;
  const str1 = "kitten";
  const str2 = "sitting";
  it('Recursive ', function() {
    const result = algo.recursive(str1, str2);
    assert.equal(result, expected);
  });
  it('DP ', function() {
    const result = algo.dp(str1, str2);
    assert.equal(result, expected);
  });
});