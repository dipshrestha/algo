const assert = require('assert');
const DistinctSubString = require('../daily/13_distinctSubString.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new DistinctSubString();
});

describe('DistinctSubString(a,1)', function() {
  const str = 'a';
  const N = 1;
  const expected = 1;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});
describe('DistinctSubString(ab,1)', function() {
  const str = 'ab';
  const N = 1;
  const expected = 1;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});
describe('DistinctSubString(aa,1)', function() {
  const str = 'ab';
  const N = 1;
  const expected = 1;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(ab,2)', function() {
  const str = 'ab';
  const N = 2;
  const expected = 2;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(abc,2)', function() {
  const str = 'abc';
  const N = 2;
  const expected = 2;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(bba,2)', function() {
  const str = 'bba';
  const N = 2;
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(aba,2)', function() {
  const str = 'aba';
  const N = 2;
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(bcba,2)', function() {
  const str = 'bcba';
  const N = 2;
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(abcb,2)', function() {
  const str = 'abcb';
  const N = 2;
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(abcba,2)', function() {
  const str = 'abcba';
  const N = 2;
  const expected = 3;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});

describe('DistinctSubString(contains,5)', function() {
  const str = 'contains';
  const N = 5;
  const expected = 6;

  it('Recursive', function() {
    const result = algo.recursive(str, N);
    assert.equal(result, expected);
  });
});