const assert = require('assert');
const EvaluateExpression = require('../daily/50_evaluateExpression.js');
const { Node } = require('../daily/3_serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new EvaluateExpression();
});

/*
    *
   / \
  +    +
 / \  / \
3  2  4  5
*/
describe(' EvaluateExpression - 1', function() {
  var node = new Node('*', new Node('+', new Node('3'), new Node('2')), new Node('+', new Node('4'), new Node('5')));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 45;
    assert.equal(result, expected);
  });
});


/*
    *
   / \
  6   +
     / \
     4  5
*/
describe(' EvaluateExpression - 2', function() {
  var node = new Node('*', new Node('6'), new Node('+', new Node('4'), new Node('5')));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 54;
    assert.equal(result, expected);
  });
});

/*
    8
*/
describe(' EvaluateExpression - 3', function() {
  var node = new Node('8');

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 8;
    assert.equal(result, expected);
  });
});