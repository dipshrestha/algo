const assert = require('assert');
const LongestAbsolutePath = require('../daily/17_longestAbsolutePath.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new LongestAbsolutePath();
});

describe('LongestAbsolutePath', function() {

  it.skip('Recursive', function() {
    const expected = 7;
    const result = algo.recursive("A\n\tB.ext");
    assert.equal(result, expected);
  });
  it('Iterative AB.ext', function() {
    const expected = 6;
    const result = algo.iterative("AB.ext");
    assert.equal(result, expected);
  });
  it('Iterative C\n\tAB.ext', function() {
    const expected = 8;
    const result = algo.iterative("C\n\tAB.ext");
    assert.equal(result, expected);
  });
  it('Iterative C\n\tB\n\tAB.ext', function() {
    const expected = 8;
    const result = algo.iterative("C\n\tB\n\tAB.ext");
    assert.equal(result, expected);
  });
  it('Iterative C\n\tAB.ext\n\tB', function() {
    const expected = 8;
    const result = algo.iterative("C\n\tAB.ext\n\tB");
    assert.equal(result, expected);
  });
  it('Iterative C\n\tAB.ext\n\tB\n\tfile.txt', function() {
    const expected = 12;
    const result = algo.iterative("C\n\tAB.ext\n\tB\n\t\tfile.txt");
    assert.equal(result, expected);
  });
  //
  it('Iterative dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext', function() {
    const expected = 20;
    const result = algo.iterative("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext");
    assert.equal(result, expected);
  });
});