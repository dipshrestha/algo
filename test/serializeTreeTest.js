const assert = require('assert');
const SerializeTree = require('../daily/serializeTree.js');

let algo = null;

beforeEach('Setting up...', function() {
    algo = new SerializeTree();
});

describe(' nStep(4) [1,2]', function() {
    //var VM = [30, 14, 16, 9];
    var WM = [1,2];
    var W = 4;
    const expected = 5;

    it('Iterative', function() {
        const result = algo.iterative(WM, W)
        console.log(algo.V);
        assert.equal(result, expected);
    });
    it('Recursive', function() {
        const result = algo.recursive(WM, W);
        console.log(algo.V);
        assert.equal(result, expected);
    });
    it('DP', function() {
        const result = algo.dp(WM, W);
        console.log(algo.V);
        assert.equal(result, expected);
    });
});
