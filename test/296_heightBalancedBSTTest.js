const assert = require('assert');
const HeightBalancedBST = require('../daily/296_heightBalancedBST.js');
const { Node } = require('../daily/3_serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
  algo = new HeightBalancedBST();
});

describe.only('HeightBalancedBST - 5 nodes', function() {
  it('Recursive', function() {
    const WM = ['1', '2', '3', '4', '5'];
    const result = algo.recursive(WM);
    assert.equal(algo.isBalanced(WM), true);
    console.log(result);
  });
});

describe.only('HeightBalancedBST - 7 nodes', function() {
  it('Recursive', function() {
    const WM = ['1', '2', '3', '4', '5', '6', '7'];
    const result = algo.recursive(WM);
    assert.equal(algo.isBalanced(WM), true);
    console.log(result);
  });
});

describe.only('HeightBalancedBST - 12 nodes', function() {
  it('Recursive', function() {
    const WM = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const result = algo.recursive(WM);
    assert.equal(algo.isBalanced(WM), true);
    console.log(result);
  });
});