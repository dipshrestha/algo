const assert = require('assert');
const EditDistancePalindrome = require('../daily/34_editDistancePalindrome.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EditDistancePalindrome();
});

describe('EditDistancePalindrome: rxor', function() {
  const expected = 'roxor';
  const str = 'rxor';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: race', function() {
  const expected = 'ecarace';
  const str = 'race';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: google', function() {
  const expected = 'elgoogle';
  const str = 'google';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: abc', function() {
  const expected = 'abcba';
  const str = 'abc';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: ab', function() {
  const expected = 'aba';
  const str = 'ab';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: aa', function() {
  const expected = 'aa';
  const str = 'aa';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: ba', function() {
  const expected = 'aba';
  const str = 'ba';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe('EditDistancePalindrome: b', function() {
  const expected = 'b';
  const str = 'b';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});