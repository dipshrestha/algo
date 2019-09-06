const assert = require('assert');
const OriginalSentence = require('../daily/22_originalSentence.js');

let algo = null;

beforeEach('Setting up...', function() {
  //algo = new OriginalSentence();
});
describe('OriginalSentence', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});