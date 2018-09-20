var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var GraphHelper = require('../graph/graph.js').GraphHelper;
var APShortestPath = require('../graph/directed/apShortestPath.js');

var graph = {},
    algo = {},
    graphHelper = {};

beforeEach('Setting up the graph', function() {
    var graphData = [
        ['a', 'b', 5],
        ['b', 'c', 4],
        ['c', 'd', 6],
        ['b', 'e', 8],
        ['b', 'f', 6],
        ['f', 'g', 9]
    ];
    graph = new Graph(graphData);
    algo = new APShortestPath(graph);
    graphHelper = new GraphHelper();
});

describe('--- AP Shortest Path Test ---', function() {
    it.only('a to g be equal to 9', function() {
        var res = algo.find();
        console.log(res)
        /*var res = s.dp("a", "g");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "g", edges));
    */
    });
});