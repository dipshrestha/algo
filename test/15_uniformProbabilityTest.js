const assert = require('assert');
const UniformProbability = require('../daily/15_uniformProbability.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new UniformProbability();
});

describe('UniformProbability', function() {
  const result = 3;
  const expected = 3;

  it('No tests', function() {
    var generated = algo.generate('123456789');
    console.log(generated);
    assert.equal(result, expected);
  });
});