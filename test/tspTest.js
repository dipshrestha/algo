var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var GraphHelper = require('../graph/graph.js').GraphHelper;
var TSP = require('../graph/directed/tsp.js');

var graph = {},
    algo = {},
    graphHelper = {};

beforeEach('Setting up the graph', function() {

    //
    //   a-->b
    //   |\ /|
    //   | / |
    //   |/ \|
    //   d<->c
    //
    var graphData = [
        ['a', 'b', 2],
        ['b', 'c', 2],
        ['c', 'd', 2],
        ['d', 'a', 2],
        ['d', 'c', 2],
        ['b', 'd', 1],
        ['c', 'a', 1],
    ];
    graph = new Graph(graphData);
    algo = new TSP(graph);
    graphHelper = new GraphHelper();
});

describe('--- TSP ---', function() {
    it('TSP, start at a should be equal to 6', function() {
        var res = algo.traverseIter('a');
        var result = res[0];
        var tour = res[1];
        var expected = 6;
        var expectedTour = [ 0, 1, 3, 2, 0 ];
        assert.equal(result, expected);
        assert.deepEqual(tour, expectedTour);
    });
    it('TSP, start at a should be equal to 6', function() {
        var res = algo.traverseIter('b');
        var result = res[0];
        var tour = res[1];
        var expected = 6;
        var expectedTour = [ 1, 3, 2, 0, 1 ];
        assert.equal(result, expected);
        assert.deepEqual(tour, expectedTour);
    });    
});