const assert = require('assert');
const OriginalSentence = require('../daily/22_originalSentence.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new OriginalSentence();
});

describe('OriginalSentence - 1', function() {
  const expected = ['thequick'];
  const WM = ['thequick'];
  const str = 'thequick';

  it('Recursive', function() {
    const result = algo.recursive(WM, str);
    assert.deepEqual(result, expected);
  });
});

describe('OriginalSentence - 2 ', function() {
  const expected = ['thequick'];
  const WM = ['the', 'thequick'];
  const str = 'thequick';

  it('Recursive', function() {
    const result = algo.recursive(WM, str);
    assert.deepEqual(result, expected);
  });
});

describe('OriginalSentence - 3', function() {
  const expected = ['the', 'quick', 'brown', 'fox'];
  const WM = ['quick', 'brown', 'the', 'fox'];
  const str = 'thequickbrownfox';

  it('Iterative', function() {
    const result = algo.recursive(WM, str);
    assert.deepEqual(result, expected);
  });
});

describe('OriginalSentence - 4', function() {
  const expected = ["cats", "and", "dog"];
  const WM = ["cat", "cats", "and", "sand", "dog"];
  const str = 'catsanddog';

  it('Iterative', function() {
    const result = algo.recursive(WM, str);
    assert.deepEqual(result, expected);
  });
});