const assert = require('assert');
const ShortenURL = require('../daily/55_shortenURL.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ShortenURL(Math.pow(64, 5) - 1);
});
describe.only('ShortenURL', function() {

  it('Iterative - 1', function() {
    const url = 'http://abc.com';
    var encoded = algo.shorten(url);
    const result = algo.restore(encoded);
    assert.equal(result, url);
  });

  it('Iterative - 2', function() {
    const url1 = 'http://abc.com';
    const url2 = 'http://def.com';
    var encoded1 = algo.shorten(url1);
    var encoded2 = algo.shorten(url2);
    var result = algo.restore(encoded1);
    assert.equal(result, url1);
    var result = algo.restore(encoded2);
    assert.equal(result, url2);
  });
});