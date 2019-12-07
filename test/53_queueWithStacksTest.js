const assert = require('assert');
const QueueWithStacks = require('../daily/53_queueWithStacks.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new QueueWithStacks();
});

describe('QueueWithStacks', function() {
  const expected = 3;

  it('Iterative', function() {
    algo.enqueue(1);
    algo.enqueue(2);
    assert.equal(algo.dequeue(), 1);
    algo.enqueue(3);
    algo.enqueue(4);
    algo.enqueue(5);
    assert.equal(algo.dequeue(), 2);
    assert.equal(algo.dequeue(), 3);
    assert.equal(algo.dequeue(), 4);
    assert.equal(algo.dequeue(), 5);
  });
});