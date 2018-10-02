var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var GraphHelper = require('../graph/graph.js').GraphHelper;
var Tarjan = require('../graph/directed/tarjan.js');

var graph = {},
    algo = {},
    graphHelper = {};

beforeEach('Setting up the graph', function() {
    var graphData = [
        ['a', 'd', 1],
        ['d', 'e', 1],
        ['d', 'b', 1],
        ['b', 'a', 1],
        ['b', 'c', 1],
        ['b', 'e', 1],
        ['c', 'e', 1],
        ['e', 'f', 1],
        ['f', 'c', 1]
    ];
    graph = new Graph(graphData);
    algo = new Tarjan(graph);
    graphHelper = new GraphHelper();
});

describe.only('--- Tarjan SCC ---', function() {
    it('a to g be equal to 20', function() {
        var result = algo.traverseRec();
        console.log(result);
        var expected = [ 0, 0, 2, 0, 2, 2 ]; 
        assert.deepEqual(result, expected);
    });
});