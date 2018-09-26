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
    it('a to g be equal to 20', function() {
        var res = algo.find();
        var indexS = algo.g.nodeNames.indexOf('a');
        var indexE = algo.g.nodeNames.indexOf('g');
        var result = res[0][indexS][indexE];
        var path = res[1];
        var expected = 20; 
        assert.equal(result, expected);
        console.log(graphHelper.reconstructPath("a", "g", path, algo.g.nodeNames));
    });
});