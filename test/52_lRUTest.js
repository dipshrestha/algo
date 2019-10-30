const assert = require('assert');
const LRU = require('../daily/52_lRU.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LRU(3);
});

describe('LRU', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;
    algo.set('a', 1);
    algo.set('b', 2);
    algo.set('c', 3);
    assert.equal('(c:3)(b:2)(a:1)', algo._getAll());

    algo.set('d', 4);
    assert.equal('(d:4)(c:3)(b:2)', algo._getAll());

    algo.set('b', 12);
    assert.equal('(b:12)(d:4)(c:3)', algo._getAll());

    algo.set('e', 5);
    assert.equal('(e:5)(b:12)(d:4)', algo._getAll());

    algo.set('b', 22);
    assert.equal('(b:22)(e:5)(d:4)', algo._getAll());

    algo.set('f', 6);
    assert.equal('(f:6)(b:22)(e:5)', algo._getAll());
  });
});