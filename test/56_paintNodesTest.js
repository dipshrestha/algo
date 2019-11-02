const assert = require('assert');
const PaintNodes = require('../daily/56_paintNodes.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new PaintNodes();
});

describe('PaintNodes', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3;//algo.iterative(WM)
    assert.equal(result, expected);
  });
});