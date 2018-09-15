var assert = require('assert');
var Graph = require('../graph/graph.js').Graph;
var ShortestDistance = require('../graph/directed/shortestDistance.js');

var graph = {},
    s = {};

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
    s = new ShortestDistance(graph);
});

describe('--- Shortest Distance Test DP ---', function() {
    it('a to g be equal to 9', function() {
        var result = s.dp("a", "g");
        var expected = 9;
        assert.equal(result, expected);
    });
    it.skip('g to h be equal to 12', function() {
        var result = s.dp("g", "h");
        var expected = 12;
        assert.equal(result, expected);
    });
    it('z to a be equal to Infinity', function() {
        var result = s.dp("z", "a");
        var expected = Infinity;
        assert.equal(result, expected);
    });
    it('b to e be equal to 6', function() {
        var result = s.dp("b", "e");
        var expected = 6;
        assert.equal(result, expected);
    });

    it('a to k be equal to 4', function() {
        var result = s.dp("a", "k");
        var expected = 4;
        assert.equal(result, expected);
    });
    it('a to i be equal to 9', function() {
        var result = s.dp("a", "i");
        var expected = 9;
        assert.equal(result, expected);
    });
    it('i to a be equal to 9', function() {
        var result = s.dp("i", "a");
        var expected = 9;
        assert.equal(result, expected);
    });
});


describe('--- Shortest Distance Test dijkstra ---', function() {
    // TODO:
    it('a to g be equal to 9', function() {
        var result = s.dijkstra("a", "g");
        var expected = 9;
        assert.equal(result, expected);
    });

    it('z to a be equal to Infinity', function() {
        var result = s.dijkstra("z", "a");
        var expected = Infinity;
        assert.equal(result, expected);
    });
    it('b to e be equal to 6', function() {
        var result = s.dijkstra("b", "e");
        var expected = 6;
        assert.equal(result, expected);
    });

    it('a to k be equal to 4', function() {
        var result = s.dijkstra("a", "k");
        var expected = 4;
        assert.equal(result, expected);
    });
    it('a to i be equal to 9', function() {
        var result = s.dijkstra("a", "i");
        var expected = 9;
        assert.equal(result, expected);
    });
    it('i to a be equal to 9', function() {
        var result = s.dijkstra("i", "a");
        var expected = 9;
        assert.equal(result, expected);
    });

});