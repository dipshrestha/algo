const assert = require('assert');
const JustifyText = require('../daily/28_justifyText.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new JustifyText();
});

describe('JustifyText', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});