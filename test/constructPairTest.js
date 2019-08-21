const assert = require('assert');
const ConstructPair = require('../daily/constructPair.js');

let algo = null;

beforeEach('Setting up...', function() {
    algo = new ConstructPair();
});

describe.skip('ConstructPair - 1', function() {
    var WM = [3, 4, -1, 1];
    const expected = 2;

    it('Iterative', function() {
        const result = algo.iterative(WM)
        assert.equal(result, expected);
    });
    it('iterativeBest', function() {
        const result = algo.iterativeBest(WM)
        assert.equal(result, expected);
    });
});