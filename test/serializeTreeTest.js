const assert = require('assert');
const { SerializeDeseralizeTree, Node } = require('../daily/serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new SerializeDeseralizeTree();
});

describe('SerializeDeseralizeTree 1', function() {
  var node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

  it('Iterative', function() {
    const result = algo.iterativeSerializeWithArray(node);
    const des = algo.iterativeDeserializeWithArray(result);
    //console.log(result);
    //console.log(des);
    assert.equal(des.left.left.val, 'left.left');
  });

});

describe('SerializeDeseralizeTree 2', function() {
  var node = new Node('root', null, new Node('right', new Node('right.left'), new Node('right.right')));

  it('Iterative', function() {
    const result = algo.iterativeSerializeWithArray(node);
    console.log(result);
    const des = algo.iterativeDeserializeWithArray(result);
    console.log(des);
    assert.equal(des.right.left.val, 'right.left');
  });

});