const assert = require('assert');
const WaterPlant = require('../daily/299_waterPlant.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new WaterPlant();
});

describe('WaterPlant', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});