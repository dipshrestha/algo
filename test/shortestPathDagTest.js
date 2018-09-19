var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var GraphHelper = require('../graph/graph.js').GraphHelper;
var ShortestPathDAG = require('../graph/dag/shortestPathDag.js');

let graph = {},
    algo = null,
    graphHelper = new GraphHelper();

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
    algo = new ShortestPathDAG(graph);
});

describe('--- Shortest Path DAG Test ---', function() {
    it('a to g be equal to 20', function() {
        const res = algo.find('a', 'g');
        var result = res[0];
        var edges = res[1];
        var expected = 20;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "g", edges));
    });
    it('b to e be equal to 8', function() {
        const res = algo.find('b', 'e');
        var result = res[0];
        var edges = res[1];
        var expected = 8;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("b", "e", edges));
    });
    it('b to a be equal to Infinity', function() {
        const res = algo.find('b', 'a');
        var result = res[0];
        var edges = res[1];
        var expected = Infinity;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("b", "a", edges));
    });
});