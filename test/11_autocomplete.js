const assert = require('assert');
const Autocomplete = require('../daily/11_autocomplete.js');

let algo = null;

beforeEach('Setting up...', function() {
  const WM = ['dog', 'deer', 'deal'];
  algo = new Autocomplete(WM);
});

describe('Template', function() {
  const searchString = 'de';
  const expected = ['deer', 'deal'];

  it('Recursive', function() {
    const result = algo.recursive(searchString)
    assert.deepEqual(result, expected);
  });
});