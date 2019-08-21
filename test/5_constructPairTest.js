const assert = require('assert');
const { cons, car, cdr } = require('../daily/5_constructPair.js');

describe('ConstructPair - cons(3, 4)', function() {
  var pair = cons(3, 4);
  const expected1 = 3;
  const expected2 = 4;

  it('Iterative', function() {
    const result1 = car(pair);
    assert.equal(result1, expected1);
    const result2 = cdr(pair);
    assert.equal(result2, expected2);
  });
});


describe('ConstructPair - cons(3)', function() {
  var pair = cons(3);
  const expected1 = 3;
  const expected2 = undefined;

  it('Iterative', function() {
    const result1 = car(pair);
    assert.equal(result1, expected1);
    const result2 = cdr(pair);
    assert.equal(result2, expected2);
  });
});