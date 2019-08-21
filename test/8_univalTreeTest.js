const assert = require('assert');
const UnivalTree = require('../daily/8_univalTree.js');
const { Node } = require('../daily/serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new UnivalTree();
});
/*
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
*/
describe(' UnivalTree - 1', function() {
  var node = new Node('0', new Node('1'), new Node('0', new Node('1', new Node('1'), new Node('1')), new Node('0')));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 5;
    assert.equal(result, expected);
  });
});


/*
   0
  / \
 1   0
    /  \
   1    0
  / \. / \
 1   1 0  0
*/
describe(' UnivalTree - 2', function() {
  var node = new Node('0', 
    new Node('1'), new Node('0', 
                new Node('1', 
            new Node('1'), 
        new Node('1')), 
                            new Node('0', 
                        new Node('0'), new Node('0'))));

  it('Recursive', function() {
    const result = algo.recursive(node);
    const expected = 7;
    assert.equal(result, expected);
  });
});