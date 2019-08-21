const assert = require('assert');
const Add2ToN = require('../daily/1_add2ToN.js');

let algo = null;

beforeEach('Setting up...', function() {
    algo = new Add2ToN();
});

describe('Add2ToN(17): positive', function() {
    var WM = [10, 15, 3, 7];
    var W = 17;
    const expected = true;

    it('Iterative', function() {
        const result = algo.iterative(WM, W)
        assert.equal(result, expected);
    });
        it('IterativeBest', function() {
        const result = algo.iterativeBest(WM, W)
        assert.equal(result, expected);
    });
});

describe('Add2ToN(17): negative', function() {
    var WM = [10, 15, 3, 7];
    var W = 16;
    const expected = false;

    it('Iterative', function() {
        const result = algo.iterative(WM, W)
        assert.equal(result, expected);
    });

            it('IterativeBest', function() {
        const result = algo.iterativeBest(WM, W)
        assert.equal(result, expected);
    });
});