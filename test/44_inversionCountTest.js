const assert = require('assert');
const InversionCount = require('../daily/44_inversionCount.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new InversionCount();
});

describe.only ('InversionCount', function() {
  const expected = 0;
  const WM = [2, 4];

  it('Iterative', function() {
    const result = algo.recursive(WM);
    assert.equal(result, expected);
  });
});

describe.only ('InversionCount', function() {
  const expected = 1;
  const WM = [4 , 2];

  it('Iterative', function() {
    const result = algo.recursive(WM);
    assert.equal(result, expected);
  });
});

describe.only ('InversionCount', function() {
  const expected = 3;
  const WM = [2, 4, 1, 3, 5];

  it('Iterative', function() {
    const result = algo.recursive(WM);
    assert.equal(result, expected);
  });
});

describe.only ('InversionCount', function() {
  const expected = 3;
  const WM = [2, 4, 1, 3];

  it('Iterative', function() {
    const result = algo.recursive(WM);
    assert.equal(result, expected);
  });
});

describe.only ('InversionCount', function() {
  const expected = 10;
  const WM = [5, 4, 3, 2, 1];

  it('Iterative', function() {
    const result = algo.recursive(WM);
    assert.equal(result, expected);
  });
});