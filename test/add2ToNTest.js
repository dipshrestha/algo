const assert = require('assert');
const Add2ToN = require('../daily/add2ToN.js');

let algo = null;

beforeEach('Setting up...', function() {
    algo = new Add2ToN();
});

describe.only('Add2ToN(17)', function() {
    var WM = [10, 15, 3, 7];
    var W = 17;
    const expected = true;

    it('Iterative', function() {
        const result = algo.iterative(WM, W)
        assert.equal(result, expected);
    });
});
