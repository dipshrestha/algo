const assert = require('assert');
const MissingPositive = require('/../daily/MissingPositive.js');

let algo = null;

beforeEach('Setting up...', function() {
    algo = new MissingPositive();
});

describe('MissingPositive - 1', function() {
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
//[ should give 3.

describe('MissingPositive - 2', function() {
    var WM = [1, 2, 0];
    const expected = 3;

    it('Iterative', function() {
        const result = algo.iterative(WM)
        assert.equal(result, expected);
    });
    it('iterativeBest', function() {
        const result = algo.iterativeBest(WM)
        assert.equal(result, expected);
    });
});

describe('MissingPositive - 3: duplicate', function() {
    var WM = [1, 2, 2, 1, 1];
    const expected = 3;

    it('Iterative', function() {
        const result = algo.iterative(WM)
        assert.equal(result, expected);
    });
    it('iterativeBest', function() {
        const result = algo.iterativeBest(WM)
        assert.equal(result, expected);
    });
});