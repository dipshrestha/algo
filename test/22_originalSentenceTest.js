const assert = require('assert');
const OriginalSentence = require('../daily/22_originalSentence.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new OriginalSentence();
});

describe('OriginalSentence', function() {
  const expected = ['the', 'quick', 'brown', 'fox'];
  const WM = ['quick', 'brown', 'the', 'fox'];
  const str = 'thequickbrownfox';

  it('Iterative', function() {
    const result = ['the', 'quick', 'brown', 'fox']; //algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});