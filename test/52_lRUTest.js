const assert = require('assert');
const LRU = require('../daily/52_lRU.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LRU(5);
});

describe('LRU', function() {
  const expected = 3;

  it.only('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    algo.set('a',1);
    algo.set('b',2);
    algo.set('c',3);
    algo.set('d',2);
    //algo.set('b',2);
    console.log(algo._getAll())
    //assert.equal(result, expected);
  });
});