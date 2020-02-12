const assert = require('assert');
const LFU = require('../daily/67_lFU.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LFU(3);
});

describe.skip('LFU', function() {

  it('Iterative', function() {
    const result = 3;
    algo.set('a', 1);
    algo.set('b', 2);
    algo.set('c', 3);

    assert.equal('(a:1)(b:2)(c:3)', algo._getAll());

    algo.set('d', 4);
    assert.equal('(b:2)(c:3)(d:4)', algo._getAll());

    algo.set('b', 12);
    assert.equal('(b:12)(c:3)(d:4)', algo._getAll());

    debugger;
    algo.set('e', 5);
    assert.equal('(b:12)(d:4)(e:5)', algo._getAll());
    console.log(algo.fMap.get(1));

    algo.set('b', 22);
    assert.equal('(b:22)(d:4)(e:5)', algo._getAll());

    algo.set('f', 6);
    assert.equal('(b:22)(e:5)(f:6)', algo._getAll());

    algo.set('e', 6);
    assert.equal('(b:22)(e:6)(f:6)', algo._getAll());

    algo.set('f', 16);
    assert.equal('(b:22)(e:6)(f:16)', algo._getAll());

    algo.set('g', 7);
    assert.equal('(b:22)(e:6)(g:7)', algo._getAll());
  });
});