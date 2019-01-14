const assert = require('assert');
const KnapSack = require('../dynamic/knapsack.js');

let algo = null;

beforeEach('Setting up...', function() {
    algo = new KnapSack();
});

describe('--- Test 1---', function() {
    var VM = [30, 14, 16, 9];
    var WM = [6, 3, 4, 2];
    var W = 10;
    const expected = 48;

    it('Iterative', function() {
        const result = algo.iterative(VM, WM, W)
        console.log(algo.V);
        assert.equal(result, expected);
    });

    it('Recursive', function() {
        const result = algo.recursive(VM, WM, W);
        console.log(algo.V);
        assert.equal(result, expected);
    });
});

//describe.only('--- Test 2---', function() {
describe('--- Test 2---', function() {
    var VM = [14, 16, 9];
    var WM = [3, 4, 2];
    var W = 6;
    const expected = 28;

    it('Iterative', function() {
        const result = algo.iterative(VM, WM, W)
        console.log(algo.V);
        assert.equal(result, expected);
    });

    it('Recursive', function() {
        const result = algo.recursive(VM, WM, W)
        console.log(algo.V);
        assert.equal(result, expected);
    });
});


describe('--- Test 3 on 07/22/2019---', function() {
    var VM = [4,6,3,2,5]
    var WM = [2,3,5,4,6];
    var W = 10;
    const expected = 17;

    it('Iterative', function() {
        const result = algo.iterative(VM, WM, W)
        console.log(algo.V);
        assert.equal(result, expected);
    });

    it('Recursive', function() {
        const result = algo.recursive(VM, WM, W)
        console.log(algo.V);
        assert.equal(result, expected);
    });
});