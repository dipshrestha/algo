const assert = require('assert');
const BalancedBracket = require('../daily/27_balancedBracket.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new BalancedBracket();
});

describe('BalancedBracket ', function() {
  const expected = true;
  const str = "";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});

describe('BalancedBracket )(', function() {
  const expected = false;
  const str = ")(";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});

describe('BalancedBracket (()sdf', function() {
  const expected = false;
  const str = "(()sdf";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});

describe('BalancedBracket (asdf[])[]asdf({asdf}fasd)fda', function() {
  const expected = true;
  const str = "(asdf[])[]asdf({asdf}fasd)fda";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});

describe('BalancedBracket ([asdf])[]({})', function() {
  const expected = true;
  const str = "([])[]({})";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});

describe('BalancedBracket ([)]', function() {
  const expected = false;
  const str = "([)]";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});
describe('BalancedBracket (sdf[sb)asdf]', function() {
  const expected = false;
  const str = "(sdf[sb)asdf]";

  it('Iterative', function() {
    const result = algo.iterative(str);
    assert.equal(result, expected);
  });
});