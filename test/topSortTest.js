const assert = require('assert');
const { Graph, Edge, GraphHelper } = require('../graph/graph.js');
const TopSort = require('../graph/topSort.js');

let graph = {},
    algo = null;

beforeEach('Setting up the graph', function() {
    const graphData = [
            ['a', 'b', 5],
            ['b', 'c', 4],
            ['c', 'd', 6],
            ['b', 'e', 8],
            ['b', 'f', 6],
            ['f', 'g', 9]
        ],
        graph = new Graph(graphData);
    algo = new TopSort(graph);
});

describe('--- Topological Sort ---', function() {
    it('Recursive', function() {
        const result = algo.traverseRec();
        const expected = []
        expected.push(new Edge('c', 'd', 6));
        expected.push(new Edge('b', 'c', 4));
        expected.push(new Edge('b', 'e', 8));
        expected.push(new Edge('f', 'g', 9));
        expected.push(new Edge('b', 'f', 6));
        expected.push(new Edge('a', 'b', 5));
        console.log(result);
        assert.deepEqual(result, expected);
    });
    it('Recursive Sort: a -> d', function() {
        const result = algo.traverseRec('a', 'd');
        const expected = []
        expected.push(new Edge('a', 'b', 5));
        expected.push(new Edge('b', 'c', 4));
        expected.push(new Edge('c', 'd', 6));
        console.log(result);
        assert.deepEqual(result, expected);
    });
    it.only('Recursive Sort: a -> e', function() {
        const result = algo.traverseRec('a', 'e');
        const expected = []
        expected.push(new Edge('a', 'b', 5));
        //expected.push(new Edge('b', 'c', 4));
        //expected.push(new Edge('c', 'd', 6));
        expected.push(new Edge('b', 'e', 8));
        assert.deepEqual(result, expected);
    });
});