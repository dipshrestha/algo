const assert = require('assert');
const UniformProbability = require('../daily/15_uniformProbability.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new UniformProbability();
});

describe('Template', function() {
  const result = 3;
  const expected = 3;

  it('Iterative', function() {
    assert.equal(result, expected);
  });
});