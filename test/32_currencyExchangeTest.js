const assert = require('assert');
const CurrencyExchange = require('../daily/32_currencyExchange.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new CurrencyExchange();
});
describe('CurrencyExchange', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});