const assert = require('assert');
const MaxStack = require('../daily/43_maxStack.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new MaxStack();
});
describe('MaxStack', function() {

  it('Iterative', function() {
    algo.push(3);
    assert.equal(algo.max(), 3);
    assert.equal(algo.pop(), 3);
    assert.equal(algo.max(), null);
    assert.equal(algo.pop(), null);

    algo.push(10);
    algo.push(10);
    algo.push(5);
    assert.equal(algo.max(), 10);
    algo.push(20);
    algo.push(5);
    assert.equal(algo.max(), 20);
    algo.pop();
    algo.pop();
    assert.equal(algo.max(), 10);
  });
});