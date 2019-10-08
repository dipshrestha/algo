const assert = require('assert');
const ShortenURL = require('../daily/55_shortenURL.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ShortenURL(Math.pow(64,5) - 1);
});
describe.only('ShortenURL', function() {
  const expected = 3;
  const url = 'http://abc.com';

  it('Iterative', function() {
    const result = algo.shorten(url)
    //assert.equal(result, expected);
  });
});