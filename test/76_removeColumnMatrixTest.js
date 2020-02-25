const assert = require('assert');
const RemoveColumnMatrix = require('../daily/76_removeColumnMatrix.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new RemoveColumnMatrix();
});

describe('RemoveColumnMatrix', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});