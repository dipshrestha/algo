const assert = require('assert');
const LFU = require('../daily/67_lFU.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LFU(3);
});

describe('LFU', function() {

  it('Iterative', function() {
    const result = 3;
    algo.set('a', 1);
    algo.set('b', 2);
    algo.set('c', 3);

    assert.equal('(a:1:1)(b:2:1)(c:3:1)', algo._getAll());

    // Check if a is deleted
    algo.set('d', 4);
    assert.equal('(b:2:1)(c:3:1)(d:4:1)', algo._getAll());

    // B has new frequency
    algo.set('b', 12);
    assert.equal('(b:12:2)(c:3:1)(d:4:1)', algo._getAll());

    // Check if c is deleted
    algo.set('e', 5);
    assert.equal('(b:12:2)(d:4:1)(e:5:1)', algo._getAll());

    // B has new frequency
    algo.set('b', 22);
    assert.equal('(b:22:3)(d:4:1)(e:5:1)', algo._getAll());

    // Check if d is deleted
    algo.set('f', 6);
    assert.equal('(b:22:3)(e:5:1)(f:6:1)', algo._getAll());

    algo.set('e', 6);
    assert.equal('(b:22:3)(e:6:2)(f:6:1)', algo._getAll());

    algo.set('f', 16);
    assert.equal('(b:22:3)(e:6:2)(f:16:2)', algo._getAll());

    // Check if e is deleted
    algo.set('g', 7);
    assert.equal('(b:22:3)(f:16:2)(g:7:1)', algo._getAll());
  });
});