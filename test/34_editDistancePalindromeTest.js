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