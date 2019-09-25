const assert = require('assert');
const SecondLargestNode = require('../daily/36_secondLargestNode.js');
const { Node } = require('../daily/3_serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SecondLargestNode();
});

/*
   3
  / \
 1   9
    /
   7
  /
 6
*/
describe(' SecondLargestNode - 0', function() {
  var node = new Node('3', new Node('1'), new Node('9', new Node('7', new Node('6'))));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 7;
    assert.equal(result, expected);
  });
});


/*
   3
  / \
 1   9
    / \
   7   10
  / \
 6   8
*/
describe(' SecondLargestNode - 1', function() {
  var node = new Node('3', new Node('1'), new Node('9', new Node('7', new Node('6'), new Node('8')), new Node('10')));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 9;
    assert.equal(result, expected);
  });
});


/*
   3
  / \
 1   9
    /
   7
  / \
 6   8
*/
describe(' SecondLargestNode - 2', function() {
  var node = new Node('3', new Node('1'), new Node('9', new Node('7', new Node('6'), new Node('8'))));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 8;
    assert.equal(result, expected);
  });
});


/*
   3
  / \
 1   9
    / \
   7  10
*/
describe(' SecondLargestNode - 3', function() {
  var node = new Node('3', new Node('1'), new Node('9', new Node('7'), new Node('10')));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 9;
    assert.equal(result, expected);
  });
});


/*
   3
  / \
 1   9
*/
describe(' SecondLargestNode - 4', function() {
  var node = new Node('3', new Node('1'), new Node('9'));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 3;
    assert.equal(result, expected);
  });
});