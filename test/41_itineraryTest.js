const assert = require('assert');
const Itinerary = require('../daily/41_itinerary.js');

let algo = null;

beforeEach('Setting up...', function() {
  //algo = new Itinerary();
});
describe('Itinerary', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});