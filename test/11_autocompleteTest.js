const assert = require('assert');
const Autocomplete = require('../daily/11_autocomplete.js');

let algo = null;

beforeEach('Setting up...', function() {
  const WM = ['dog', 'deer', 'deal', 'acid', 'acids', 'bags', 'bag'];
  algo = new Autocomplete(WM);
});

describe('Autocomplete - 1', function() {
  const searchString = 'de';
  const expected = ['deer', 'deal'];

  it('Recursive', function() {
    var result = algo.recursive(searchString);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe('Autocomplete - single letter', function() {
  const searchString = 'd';
  const expected = ['dog', 'deer', 'deal'];

  it('Recursive', function() {
    var result = algo.recursive(searchString);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe('Autocomplete - single letter ', function() {
  const searchString = 'a';
  const expected = ['acid', 'acids'];

  it('Recursive', function() {
    var result = algo.recursive(searchString);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});

describe('Autocomplete - single letter ', function() {
  const searchString = 'b';
  const expected = ['bags', 'bag'];

  it('Recursive', function() {
    var result = algo.recursive(searchString);
    console.log(result);
    assert.deepEqual(result, expected);
  });
});