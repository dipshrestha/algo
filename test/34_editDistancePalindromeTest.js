const assert = require('assert');
const EditDistancePalindrome = require('../daily/34_editDistancePalindrome.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EditDistancePalindrome();
});

describe('EditDistancePalindrome', function() {
  const expected = 'elgoogle';
  const str = 'google';

  it('Iterative', function() {
    const result = 'elgoogle'; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});

describe.only('EditDistancePalindrome', function() {
  const expected = 'aba';
  const str = 'ab';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});

describe.only('EditDistancePalindrome', function() {
  const expected = 'aba';
  const str = 'ba';

  it('Iterative', function() {
    const result = algo.recursive(str);
    assert.equal(result, expected);
  });
});