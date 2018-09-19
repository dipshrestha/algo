const S = require('../s.js');
const TopSort = require('../topSort.js');
/**
 * Created by dipshrestha on 09/15/2018.
 */
class ShortestPathDAG extends S {
    constructor(graph) {
        super(graph);
    }

    _init() {
        super._init();
        this.path = new Map();
        var dist = new Map();
        for (var i = 0; i < this.g.nodeNames.length; i++) {
            dist.set(this.g.nodeNames[i], Infinity);
        }
        return dist;
    }

    find(s, d) {
        if (this.g == null || this.g.V <= 0 || this.g.E <= 0) return null;
        var dist = this._init();
        dist.set(s, 0); // init src

        const sort = new TopSort(this.g);
        var sortedPath = sort.traverseRec(s, d);

        console.log("sortedPath.length: " + sortedPath.length);

        while (sortedPath.length > 0) {
            var e = sortedPath.shift();
            if (e.s == d) break; // found !

            const adjacentEdges = this.g.adjacencyList.get(e.s) || [];
            adjacentEdges.forEach(e => {
                var newW = dist.get(e.s) + e.w;
                if (newW < dist.get(e.d)) {
                    dist.set(e.d, newW);
                    this.path.set(e.d, e);
                }
            });
        }
        return [dist.get(d), this.path];
    }

}

module.exports = ShortestPathDAG;