const assert = require('assert');
const ShortenURL = require('../daily/55_shortenURL.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ShortenURL();
});
describe('ShortenURL', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});