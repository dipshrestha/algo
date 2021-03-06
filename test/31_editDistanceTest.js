const assert = require('assert');
const EditDistance = require('../daily/31_editDistance.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EditDistance();
});

describe('EditDistance: ab,b', function() {
  const expected = 1;
  const str1 = "ab";
  const str2 = "b";

  it('Recursive', function() {
    const result = algo.recursive(str1, str2)
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(str1, str2);
    assert.equal(result, expected);
  });
});

describe('EditDistance: b, ab', function() {
  const expected = 1;
  const str1 = "ab",
    str2 = "b";
  it('Recursive', function() {
    const result = algo.recursive(str2, str1);
    assert.equal(result, expected);
  });

  it('DP', function() {
    const result = algo.dp(str1, str2);
    assert.equal(result, expected);
  });
});

describe('EditDistance: ab,bc', function() {
  const expected = 2;
  const str1 = "ab",
    str2 = "bc";
  it('Recursive', function() {

    const result = algo.recursive(str1, str2)
    assert.equal(result, expected);
  })
  it('DP', function() {
    const result = algo.dp(str1, str2);
    assert.equal(result, expected);
  });;
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