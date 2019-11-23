const assert = require('assert');
const ReadN = require('../daily/82_readN.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new ReadN('averylongfile');
});

describe('Template', function() {

  it.only('Iterative', function() {
    const expected = 'ave';
    const result = algo.readN(3)
    assert.equal(result, expected);
  });
  it.only('Iterative', function() {
    const expected = 'averylongfile';
    const result = algo.readN(15)
    assert.equal(result, expected);
  });
  it.only('Iterative', function() {
    const expected = 'averylon';
    const result = algo.readN(8)
    assert.equal(result, expected);
  });
});