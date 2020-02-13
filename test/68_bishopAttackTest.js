const assert = require('assert');
const BishopAttack = require('../daily/68_bishopAttack.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new BishopAttack();
});
describe('Template', function() {
  const expected = 3;

  it('Iterative', function() {
    const result = 3; //algo.iterative(WM)
    assert.equal(result, expected);
  });
});