const assert = require('assert');
const { Graph, Edge, GraphHelper } = require('../graph/graph.js');
const DFS = require('../graph/dfs.js');

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
    algo = new DFS(graph);
});

describe('--- DFS Test ---', function() {
    it('Recursive', function() {
        const result = algo.traverseRec();
        const expected = []
        expected.push(new Edge('a', 'b', 5));
        expected.push(new Edge('b', 'c', 4));
        expected.push(new Edge('c', 'd', 6));
        expected.push(new Edge('b', 'e', 8));
        expected.push(new Edge('b', 'f', 6));
        expected.push(new Edge('f', 'g', 9));
        assert.deepEqual(result, expected);
    });

    it('Iterative', function() {
        const result = algo.traverseIter();
        const expected = []
        expected.push(new Edge('a', 'b', 5));
        expected.push(new Edge('b', 'f', 6));
        expected.push(new Edge('f', 'g', 9));
        expected.push(new Edge('b', 'e', 8));
        expected.push(new Edge('b', 'c', 4));
        expected.push(new Edge('c', 'd', 6));
        assert.deepEqual(result, expected);
    });

    it('Recursive Search', function() {
        const result = algo.traverseRec('a', 'e');
        const expected = []
        expected.push(new Edge('a', 'b', 5));
        expected.push(new Edge('b', 'c', 4));
        expected.push(new Edge('c', 'd', 6));
        expected.push(new Edge('b', 'e', 8));
        assert.deepEqual(result, expected);
    });

    it('Iterative Search', function() {
        const result = algo.traverseIter('a', 'e');
        const expected = []
        expected.push(new Edge('a', 'b', 5));
        expected.push(new Edge('b', 'f', 6));
        expected.push(new Edge('f', 'g', 9));
        expected.push(new Edge('b', 'e', 8));
        console.log('result: ' + result)
        assert.deepEqual(result, expected);
    });
});