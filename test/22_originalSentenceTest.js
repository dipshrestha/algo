const assert = require('assert');
const OriginalSentence = require('../daily/22_originalSentence.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new OriginalSentence();
});

describe.only('OriginalSentence', function() {
  const expected = ['thequick'];
  const WM = ['the', 'thequick'];
  const str = 'thequick';

  it('Recursive', function() {
    const result = algo.recursive(WM, str); // ['the', 'quick', 'brown', 'fox']; //algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});

describe('OriginalSentence', function() {
  const expected = ['the', 'quick', 'brown', 'fox'];
  const WM = ['quick', 'brown', 'the', 'fox'];
  const str = 'thequickbrownfox';

  it('Iterative', function() {
    const result = algo.recursive(WM, str); // ['the', 'quick', 'brown', 'fox']; //algo.iterative(WM)
    assert.deepEqual(result, expected);
  });
});