const assert = require('assert');
const Rand7 = require('../daily/45_rand7.js');
const { expect } = require('chai')

let algo = null;

beforeEach('Setting up...', function() {
  algo = new Rand7();
});

describe('Rand7: only test number between 1-7. doesn not test randomness', function() {
  const expected = 7;

  it('Iterative', function() {
    for (var i = 0; i < 50; i++) {
      var result = algo.rand7();
      console.log(result);
      expect(result).to.be.gt(0); //(result, expected);
      expect(result).to.be.lt(expected + 1); //(result, expected);
    }
  });
});