var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var GraphHelper = require('../graph/graph.js').GraphHelper;
var ShortestPath = require('../graph/directed/shortestPath.js');

var graph = {},
    s = {},
    graphHelper = {};

beforeEach('Setting up the graph', function() {
    var graphData = [
        ['a', 'b', 5, 'y'], //['b', 'a', 5, 'y'],
        ['a', 'c', 4, 'y'], //['c', 'a', 4, 'y'],
        ['a', 'f', 8, 'y'], //['f', 'a', 8, 'y'],
        ['a', 'k', 4, 'n'],
        ['b', 'a', 5, 'y'], //['a', 'b', 5, 'y'],
        ['b', 'c', 2, 'y'], //['c', 'b', 2, 'y'],
        ['b', 'd', 3, 'y'], //['d', 'b', 3, 'y'],
        ['c', 'a', 4, 'y'], //['a', 'c', 4, 'y'],
        ['c', 'b', 2, 'y'], //['b', 'c', 2, 'y']
        ['c', 'd', 3, 'y'], //['d', 'c', 2, 'y'],
        ['c', 'e', 8, 'y'], //['e', 'c', 8, 'y'],
        ['d', 'b', 3, 'y'], //['b', 'd', 3, 'y']
        ['d', 'c', 2, 'y'], //['c', 'd', 3, 'y'], // Distance is Different
        ['d', 'f', 2, 'y'], //['f', 'd', 2, 'y']
        ['e', 'c', 8, 'y'], //['c', 'e', 8, 'y']
        ['e', 'f', 1, 'y'], //['f', 'e', 1, 'y'],
        ['e', 'h', 5, 'y'], // MISSING
        ['f', 'a', 8, 'y'], //['a', 'f', 8, 'y']
        ['f', 'd', 2, 'y'], //['d', 'f', 2, 'y']
        ['f', 'e', 1, 'y'], //['e', 'f', 1, 'y']
        ['f', 'g', 6, 'y'], //['g', 'f', 6, 'y']
        ['g', 'f', 6, 'y'], //['f', 'g', 6, 'y']
        ['g', 'k', 5, 'y'], // WAS MISSING
        ['h', 'i', 8, 'y'], // MISSING
        ['i', 'f', 1, 'y'], // MISSING
        ['i', 'j', 1, 'y'], // MISSING
        ['j', 'g', 3, 'y'], // MISSING
        ['j', 'k', 4, 'y'], // MISSING
        ['k', 'f', 6, 'y'], // MISSING


        ['k', 'g', 5, 'y'], // WAS MISSING
        ['i', 'h', 8, 'y'], // MISSING
        ['f', 'i', 1, 'y'], // MISSING
        ['j', 'i', 1, 'y'], // MISSING
        ['g', 'j', 3, 'y'], // MISSING
        ['k', 'j', 4, 'y'], // MISSING
        ['f', 'k', 6, 'y'], // MISSING
        ['z', 'z', 1, 'y']
    ];
    graph = new Graph(graphData);
    s = new ShortestPath(graph);
    graphHelper = new GraphHelper();
});

describe('--- Shortest Path Test ---', function() {
    it('a to g be equal to 9', function() {
        var res = s.dp("a", "g");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "g", edges));
    });
    it.skip('g to h be equal to 12', function() {
        var res = s.dp("g", "h");
        var result = res[0];
        var edges = res[1];
        var expected = 12;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("g", "h", edges));
    });
    it('z to a be equal to Infinity', function() {
        var res = s.dp("z", "a");
        var result = res[0];
        var edges = res[1];
        var expected = Infinity;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("b", "e", edges));
    });
    it('b to e be equal to 6', function() {
        var res = s.dp("b", "e");
        var result = res[0];
        var edges = res[1];
        var expected = 6;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("b", "e", edges));
    });

    it('a to k be equal to 4', function() {
        var res = s.dp("a", "k");
        var result = res[0];
        var edges = res[1];
        var expected = 4;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "k", edges));
    });
    it('a to i be equal to 9', function() {
        var res = s.dp("a", "i");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "i", edges));
    });
    it('i to a be equal to 9', function() {
        var res = s.dp("i", "a");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("i", "a", edges));
    });
});


describe('--- Shortest Path Test dijkstra ---', function() {
    it('a to g be equal to 9', function() {
        var res = s.dijkstra("a", "g");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "g", edges));
    });
    it.skip('g to h be equal to 12', function() {
        var res = s.dijkstra("g", "h");
        var result = res[0];
        var edges = res[1];
        var expected = 12;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("g", "h", edges));
    });
    it('z to a be equal to Infinity', function() {
        var res = s.dijkstra("z", "a");
        var result = res[0];
        var edges = res[1];
        var expected = Infinity;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("b", "e", edges));
    });
    it('b to e be equal to 6', function() {
        var res = s.dijkstra("b", "e");
        var result = res[0];
        var edges = res[1];
        var expected = 6;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("b", "e", edges));
    });

    it('a to k be equal to 4', function() {
        var res = s.dijkstra("a", "k");
        var result = res[0];
        var edges = res[1];
        var expected = 4;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "k", edges));
    });
    it('a to i be equal to 9', function() {
        var res = s.dijkstra("a", "i");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("a", "i", edges));
    });
    it('i to a be equal to 9', function() {
        var res = s.dijkstra("i", "a");
        var result = res[0];
        var edges = res[1];
        var expected = 9;
        assert.equal(result, expected);
        console.log(graphHelper.computePath("i", "a", edges));
    });
});