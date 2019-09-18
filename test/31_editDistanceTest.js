const assert = require('assert');
const EditDistance = require('../daily/31_editDistance.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EditDistance();
});
describe('EditDistance: ab,b', function() {
  const expected = 1;

  it('Recursive', function() {
    const str1 = "ab",
      str2 = "b";
    const result = algo.recursive(str1, str2)
    assert.equal(result, expected);
  });
});

describe('EditDistance: b, ab', function() {
  const expected = 1;

  it('Recursive', function() {
    const str1 = "ab",
      str2 = "b";
    const result = algo.recursive(str2, str1);
    assert.equal(result, expected);
  });
});

describe('EditDistance: ab,bc', function() {
  const expected = 2;

  it('Recursive', function() {
    const str1 = "ab",
      str2 = "bc";
    const result = algo.recursive(str1, str2)
    assert.equal(result, expected);
  });
});


describe.only('EditDistance: kitten, sitting', function() {
  const expected = 3;

  it('Recursive', function() {
    const str1 = "kitten",
      str2 = "sitting";
    const result = algo.recursive(str1, str2)
    assert.equal(result, expected);
  });
});