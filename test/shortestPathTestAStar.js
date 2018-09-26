var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var GraphHelper = require('../graph/graph.js').GraphHelper;
var ShortestPathAStar = require('../graph/directed/shortestPathAStar.js');

var graph = {},
    s = {},
    graphHelper = {},
    distance = {};

beforeEach('Setting up the graph', function() {
    var graphData = [
            ['a', 'b', 5],
            ['a', 'e', 10],
            ['b', 'c', 4],
            ['c', 'd', 4],
            ['e', 'd', 2],
    ];
    graph = new Graph(graphData);
    s = new ShortestPathAStar(graph);
    graphHelper = new GraphHelper();
    distance = {
        a:6,b:4,c:2,d:0,e:3
    }
});

describe('--- Shortest Path A* Test dijkstra ---', function() {
    it('a to d be equal to 12', function() {
        var res = s.dijkstra("a", "d", distance);
        var result = res[0];
        var edges = res[1];
        var expected = 12;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "d", edges));
    });
});